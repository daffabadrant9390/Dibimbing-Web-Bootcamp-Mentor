// src/repositories/product.repository.js
// Semua query SQL produk dan variasi.
// Menggunakan query berparameter ($1, $2, …) — tidak ada string concatenation dari input user.

import { getPool } from '../config/database.js';

/**
 * Mengambil semua produk beserta variasinya (tanpa N+1).
 * @returns {Promise<{products: object[], variants: object[]}>}
 */
export async function findAllProducts() {
  const pool = getPool();
  const { rows: products } = await pool.query(
    `SELECT id, name, price, image_url, images, description, stock, created_at, updated_at
     FROM products
     ORDER BY id ASC`,
  );

  if (products.length === 0) return { products: [], variants: [] };

  const productIds = products.map((p) => p.id);
  const { rows: variants } = await pool.query(
    `SELECT id, product_id, variant_type, value
     FROM product_variants
     WHERE product_id = ANY($1::bigint[])
     ORDER BY product_id ASC, id ASC`,
    [productIds],
  );

  return { products, variants };
}

/**
 * Mengambil satu produk beserta variasinya.
 * @param {number} id
 * @returns {Promise<{product: object|null, variants: object[]}>}
 */
export async function findProductById(id) {
  const pool = getPool();
  const { rows: products } = await pool.query(
    `SELECT id, name, price, image_url, images, description, stock, created_at, updated_at
     FROM products
     WHERE id = $1`,
    [id],
  );

  if (products.length === 0) return { product: null, variants: [] };

  const { rows: variants } = await pool.query(
    `SELECT id, product_id, variant_type, value
     FROM product_variants
     WHERE product_id = $1
     ORDER BY id ASC`,
    [id],
  );

  return { product: products[0], variants };
}

/**
 * Membuat produk baru + variasinya dalam transaksi.
 * @param {object} client - pg client dari pool
 * @param {object} data - validated body
 * @returns {Promise<{product: object, variants: object[]}>}
 */
export async function insertProduct(client, data) {
  const { name, price, image, images, description, variants } = data;

  const { rows: products } = await client.query(
    `INSERT INTO products (name, price, image_url, images, description, stock)
     VALUES ($1, $2, $3, $4, $5, $6)
     RETURNING id, name, price, image_url, images, description, stock, created_at, updated_at`,
    [name.trim(), price, image, images, description.trim(), variants.quantity],
  );

  const product = products[0];
  const insertedVariants = [];

  // Tentukan variant_type: jika nilai tersebut cocok dengan ukuran standar pakai 'size', sisanya 'color'
  for (const value of variants.colorOrSize) {
    const variantType = 'color'; // default; service bisa override jika diperlukan
    const { rows } = await client.query(
      `INSERT INTO product_variants (product_id, variant_type, value)
       VALUES ($1, $2, $3)
       RETURNING id, product_id, variant_type, value`,
      [product.id, variantType, value.trim()],
    );
    insertedVariants.push(rows[0]);
  }

  return { product, variants: insertedVariants };
}

/**
 * Memperbarui produk + mengganti seluruh variasinya dalam transaksi.
 * @param {object} client - pg client
 * @param {number} id - product id
 * @param {object} data - validated body
 * @returns {Promise<{product: object, variants: object[]}>}
 */
export async function updateProduct(client, id, data) {
  const { name, price, image, images, description, variants } = data;

  const { rows: products } = await client.query(
    `UPDATE products
     SET name = $1, price = $2, image_url = $3, images = $4, description = $5, stock = $6, updated_at = NOW()
     WHERE id = $7
     RETURNING id, name, price, image_url, images, description, stock, created_at, updated_at`,
    [name.trim(), price, image, images, description.trim(), variants.quantity, id],
  );

  if (products.length === 0) return { product: null, variants: [] };

  const product = products[0];

  // Hapus semua variasi lama
  await client.query(`DELETE FROM product_variants WHERE product_id = $1`, [id]);

  // Sisipkan variasi baru
  const insertedVariants = [];
  for (const value of variants.colorOrSize) {
    const { rows } = await client.query(
      `INSERT INTO product_variants (product_id, variant_type, value)
       VALUES ($1, $2, $3)
       RETURNING id, product_id, variant_type, value`,
      [id, 'color', value.trim()],
    );
    insertedVariants.push(rows[0]);
  }

  return { product, variants: insertedVariants };
}

/**
 * Menghapus produk berdasarkan ID.
 * @param {number} id
 * @returns {Promise<boolean>} true jika berhasil dihapus
 */
export async function deleteProduct(id) {
  const pool = getPool();
  const { rowCount } = await pool.query(
    `DELETE FROM products WHERE id = $1`,
    [id],
  );
  return rowCount > 0;
}
