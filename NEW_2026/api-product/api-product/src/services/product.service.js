// src/services/product.service.js
// Logika bisnis: transaksi, not-found, constraint mapping.
// Tidak boleh ada HTTP status di sini — hanya AppError.

import { getPool } from '../config/database.js';
import {
  findAllProducts,
  findProductById,
  insertProduct,
  updateProduct,
  deleteProduct,
} from '../repositories/product.repository.js';
import { mapProductToResponse } from '../utils/product-response.js';
import {
  productNotFoundError,
  validationError,
  AppError,
} from '../errors/app-error.js';

/** Mengambil semua produk */
export async function getAllProducts() {
  const { products, variants } = await findAllProducts();

  const mapped = products.map((p) => {
    const pVariants = variants.filter(
      (v) => String(v.product_id) === String(p.id),
    );
    return mapProductToResponse(p, pVariants);
  });

  return { data: mapped, total: mapped.length };
}

/** Mengambil satu produk berdasarkan ID */
export async function getProductById(id) {
  const { product, variants } = await findProductById(id);

  if (!product) {
    throw productNotFoundError(id, `/api/products/${id}`);
  }

  return mapProductToResponse(product, variants);
}

/** Membuat produk baru — transaksi atomik */
export async function createProduct(data) {
  const pool = getPool();
  const client = await pool.connect();

  try {
    await client.query('BEGIN');
    const { product, variants } = await insertProduct(client, data);
    await client.query('COMMIT');
    return mapProductToResponse(product, variants);
  } catch (err) {
    await client.query('ROLLBACK');
    throw mapDbError(err, data, `/api/products`);
  } finally {
    client.release();
  }
}

/** Memperbarui produk secara penuh — transaksi atomik */
export async function replaceProduct(id, data) {
  const pool = getPool();
  const client = await pool.connect();

  try {
    await client.query('BEGIN');

    // Pastikan produk ada
    const { product: existing } = await findProductById(id);
    if (!existing) {
      await client.query('ROLLBACK');
      throw productNotFoundError(id, `/api/products/${id}`);
    }

    const { product, variants } = await updateProduct(client, id, data);
    await client.query('COMMIT');
    return mapProductToResponse(product, variants);
  } catch (err) {
    if (err instanceof AppError) {
      await client.query('ROLLBACK').catch(() => {});
      throw err;
    }
    await client.query('ROLLBACK');
    throw mapDbError(err, data, `/api/products/${id}`);
  } finally {
    client.release();
  }
}

/** Menghapus produk */
export async function removeProduct(id) {
  const deleted = await deleteProduct(id);
  if (!deleted) {
    throw productNotFoundError(id, `/api/products/${id}`);
  }
}

/**
 * Memetakan error PostgreSQL ke AppError yang aman.
 * Tidak meneruskan pesan DB mentah ke client.
 */
function mapDbError(err, data, instance) {
  // Unique constraint violation
  if (err.code === '23505') {
    return validationError(instance, [
      {
        field: 'variants.colorOrSize',
        message: 'Duplicate variant value already exists for this product',
      },
    ]);
  }

  // Check constraint violation (mis. quantity negatif, value kosong)
  if (err.code === '23514') {
    return validationError(instance, [
      {
        field: 'variants',
        message: 'Variant data violates database constraints',
      },
    ]);
  }

  // Error tidak terduga — log asli, kirim generic ke client
  console.error('[service] DB error:', err.message);
  return new AppError({
    status: 500,
    type: 'about:blank',
    title: 'Internal Server Error',
    detail: 'An unexpected error occurred',
  });
}
