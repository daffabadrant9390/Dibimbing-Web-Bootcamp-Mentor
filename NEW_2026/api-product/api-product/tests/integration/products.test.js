// tests/integration/products.test.js
// Integration test untuk semua 5 endpoint CRUD.
// Membutuhkan Docker PostgreSQL yang berjalan dan DATABASE_TEST_URL di .env

import { describe, it, expect, beforeAll, afterAll, beforeEach } from 'vitest';
import request from 'supertest';
import pg from 'pg';
import { createApp } from '../../src/app.js';
import { setupTestDatabase, cleanDatabase, TEST_DB_URL } from './setup.js';
import { closePool } from '../../src/config/database.js';

// Override DATABASE_URL ke test database sebelum pool dibuat
process.env.DATABASE_URL = TEST_DB_URL;

let app;
let pool;

const validProduct = {
  name: 'Kaos Test',
  price: 100000,
  image: 'https://example.com/test.png',
  variants: {
    colorOrSize: ['S', 'M'],
    quantity: 10,
  },
  description: 'Deskripsi test produk.',
};

beforeAll(async () => {
  // Reset pool dulu agar URL baru digunakan
  await closePool();
  await setupTestDatabase();
  app = createApp();
  pool = new pg.Pool({ connectionString: TEST_DB_URL, ssl: false });
});

afterAll(async () => {
  await pool.end();
  await closePool();
});

beforeEach(async () => {
  await cleanDatabase(pool);
});

// ── Helper ────────────────────────────────────────────────────────────────────

async function createProduct(body = validProduct) {
  return request(app).post('/api/products').send(body);
}

// ─────────────────────────────────────────────────────────────────────────────
// GET /api/products
// ─────────────────────────────────────────────────────────────────────────────

describe('GET /api/products', () => {
  it('AC-09: returns 200 with empty data array when no products', async () => {
    const res = await request(app).get('/api/products');
    expect(res.status).toBe(200);
    expect(res.headers['content-type']).toContain('application/json');
    expect(res.body.data).toEqual([]);
    expect(res.body.meta.total).toBe(0);
  });

  it('AC-09: returns all products with meta.total', async () => {
    await createProduct();
    await createProduct({ ...validProduct, name: 'Produk Kedua' });

    const res = await request(app).get('/api/products');
    expect(res.status).toBe(200);
    expect(res.body.data).toHaveLength(2);
    expect(res.body.meta.total).toBe(2);
  });

  it('returns products with correct schema', async () => {
    await createProduct();
    const res = await request(app).get('/api/products');

    const product = res.body.data[0];
    expect(product).toHaveProperty('id');
    expect(product).toHaveProperty('name');
    expect(product).toHaveProperty('price');
    expect(product).toHaveProperty('image');
    expect(product).toHaveProperty('variants');
    expect(product).toHaveProperty('description');
    expect(product.variants).toHaveProperty('colorOrSize');
    expect(product.variants).toHaveProperty('quantity');
    expect(product.image_url).toBeUndefined(); // harus dipetakan ke 'image'
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// GET /api/products/:id
// ─────────────────────────────────────────────────────────────────────────────

describe('GET /api/products/:id', () => {
  it('AC-01 AC-02 AC-03: returns 200 with product on valid existing ID', async () => {
    const created = await createProduct();
    const id = created.body.data.id;

    const res = await request(app).get(`/api/products/${id}`);
    expect(res.status).toBe(200);
    expect(res.headers['content-type']).toContain('application/json');
    expect(res.body.data.id).toBe(id);
    expect(res.body.data.variants.colorOrSize).toContain('S');
    expect(typeof res.body.data.variants.quantity).toBe('number');
    expect(res.body.meta).toBeDefined();
  });

  it('returns the same stock that was created, not multiplied by variant count', async () => {
    const created = await createProduct({
      ...validProduct,
      variants: { colorOrSize: ['S', 'M', 'L'], quantity: 10 },
    });
    expect(created.body.data.variants.quantity).toBe(10);

    const res = await request(app).get(`/api/products/${created.body.data.id}`);
    expect(res.body.data.variants.colorOrSize).toEqual(['S', 'M', 'L']);
    expect(res.body.data.variants.quantity).toBe(10);
  });

  it('keeps stock 0 as 0 (out of stock)', async () => {
    const created = await createProduct({
      ...validProduct,
      variants: { colorOrSize: ['S', 'M'], quantity: 0 },
    });
    const res = await request(app).get(`/api/products/${created.body.data.id}`);
    expect(res.body.data.variants.quantity).toBe(0);
  });

  it('AC-04: returns 404 problem+json for valid ID not found', async () => {
    const res = await request(app).get('/api/products/999999');
    expect(res.status).toBe(404);
    expect(res.headers['content-type']).toContain('application/problem+json');
    expect(res.body.type).toContain('product-not-found');
    expect(res.body.instance).toBe('/api/products/999999');
  });

  it.each(['0', '-1', '1.5', 'abc', '1abc', '1e3'])(
    'AC-05: returns 400 for invalid ID "%s"',
    async (id) => {
      const res = await request(app).get(`/api/products/${id}`);
      expect(res.status).toBe(400);
      expect(res.headers['content-type']).toContain('application/problem+json');
      expect(res.body.type).toContain('invalid-product-id');
    },
  );

  it('AC-06: invalid ID does not trigger DB search (no 404)', async () => {
    const res = await request(app).get('/api/products/0');
    expect(res.status).toBe(400);
    // Tidak boleh 404
    expect(res.status).not.toBe(404);
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// POST /api/products
// ─────────────────────────────────────────────────────────────────────────────

describe('POST /api/products', () => {
  it('AC-10: returns 201 with product data, unique positive id, and Location header', async () => {
    const res = await createProduct();
    expect(res.status).toBe(201);
    expect(res.headers['content-type']).toContain('application/json');
    expect(res.headers['location']).toBe(`/api/products/${res.body.data.id}`);
    expect(res.body.data.id).toBeGreaterThan(0);
    expect(res.body.data.name).toBe(validProduct.name);
  });

  it('AC-10: created product can be retrieved via GET', async () => {
    const created = await createProduct();
    const id = created.body.data.id;

    const res = await request(app).get(`/api/products/${id}`);
    expect(res.status).toBe(200);
    expect(res.body.data.id).toBe(id);
  });

  it('AC-11: returns 400 for malformed JSON', async () => {
    const res = await request(app)
      .post('/api/products')
      .set('Content-Type', 'application/json')
      .send('{ invalid json }');
    expect(res.status).toBe(400);
    expect(res.headers['content-type']).toContain('application/problem+json');
  });

  it('AC-11: returns 400 for empty body', async () => {
    const res = await request(app)
      .post('/api/products')
      .set('Content-Type', 'application/json')
      .send('');
    expect(res.status).toBe(400);
  });

  it('AC-11: returns 400 with field id in body', async () => {
    const res = await createProduct({ ...validProduct, id: 999 });
    expect(res.status).toBe(400);
    expect(res.body.errors[0].field).toBe('id');
  });

  it('AC-11 AC-12: returns 400 for unknown fields', async () => {
    const res = await createProduct({ ...validProduct, prices: 100 });
    expect(res.status).toBe(400);
    expect(res.headers['content-type']).toContain('application/problem+json');
  });

  it('AC-12: returns all field errors at once', async () => {
    const res = await createProduct({
      name: '',
      price: -1,
      image: 'not-a-url',
      variants: { colorOrSize: [], quantity: -1 },
      description: '',
    });
    expect(res.status).toBe(400);
    expect(res.body.errors.length).toBeGreaterThan(1);
  });

  it('should reject duplicate colorOrSize (case-insensitive)', async () => {
    const res = await createProduct({
      ...validProduct,
      variants: { colorOrSize: ['Merah', 'merah'], quantity: 10 },
    });
    expect(res.status).toBe(400);
    expect(res.body.errors[0].field).toBe('variants.colorOrSize');
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// Galeri gambar (images)
// ─────────────────────────────────────────────────────────────────────────────

describe('Product images gallery', () => {
  it('stores multiple images with image first and returns them via GET', async () => {
    const res = await request(app).post('/api/products').send({
      ...validProduct,
      images: ['https://example.com/test-2.png', 'https://example.com/test-3.png'],
    });
    expect(res.status).toBe(201);
    expect(res.body.data.images).toEqual([
      'https://example.com/test.png',
      'https://example.com/test-2.png',
      'https://example.com/test-3.png',
    ]);

    const get = await request(app).get(`/api/products/${res.body.data.id}`);
    expect(get.body.data.images).toHaveLength(3);
  });

  it('defaults images to [image] when images is omitted', async () => {
    const res = await request(app).post('/api/products').send(validProduct);
    expect(res.status).toBe(201);
    expect(res.body.data.images).toEqual(['https://example.com/test.png']);
  });

  it('rejects an invalid URL inside images with 400', async () => {
    const res = await request(app).post('/api/products').send({ ...validProduct, images: ['bukan-url'] });
    expect(res.status).toBe(400);
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// PUT /api/products/:id
// ─────────────────────────────────────────────────────────────────────────────

describe('PUT /api/products/:id', () => {
  it('AC-13: replaces product data completely and returns 200', async () => {
    const created = await createProduct();
    const id = created.body.data.id;

    const updated = {
      name: 'Produk Baru',
      price: 999000,
      image: 'https://example.com/new.png',
      variants: { colorOrSize: ['XL'], quantity: 5 },
      description: 'Deskripsi baru.',
    };

    const res = await request(app).put(`/api/products/${id}`).send(updated);
    expect(res.status).toBe(200);
    expect(res.body.data.name).toBe('Produk Baru');
    expect(res.body.data.price).toBe(999000);
    expect(res.body.data.variants.colorOrSize).toEqual(['XL']);
    expect(res.body.data.variants.quantity).toBe(5);
  });

  it('AC-13: updated product readable via GET', async () => {
    const created = await createProduct();
    const id = created.body.data.id;

    await request(app).put(`/api/products/${id}`).send({
      ...validProduct,
      name: 'Updated Name',
    });

    const get = await request(app).get(`/api/products/${id}`);
    expect(get.body.data.name).toBe('Updated Name');
  });

  it('AC-14: returns 404 for valid ID not existing', async () => {
    const res = await request(app)
      .put('/api/products/999999')
      .send(validProduct);
    expect(res.status).toBe(404);
    expect(res.headers['content-type']).toContain('application/problem+json');
  });

  it('AC-14: returns 400 for invalid ID', async () => {
    const res = await request(app)
      .put('/api/products/abc')
      .send(validProduct);
    expect(res.status).toBe(400);
  });

  it('AC-14: returns 400 for partial body (missing fields)', async () => {
    const created = await createProduct();
    const id = created.body.data.id;

    const res = await request(app)
      .put(`/api/products/${id}`)
      .send({ price: 200000 });
    expect(res.status).toBe(400);
  });

  it('AC-14: data unchanged after failed PUT', async () => {
    const created = await createProduct();
    const id = created.body.data.id;

    await request(app).put(`/api/products/${id}`).send({ price: -1 });

    const get = await request(app).get(`/api/products/${id}`);
    expect(get.body.data.price).toBe(validProduct.price);
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// DELETE /api/products/:id
// ─────────────────────────────────────────────────────────────────────────────

describe('DELETE /api/products/:id', () => {
  it('AC-15: returns 204 with no body on valid delete', async () => {
    const created = await createProduct();
    const id = created.body.data.id;

    const res = await request(app).delete(`/api/products/${id}`);
    expect(res.status).toBe(204);
    expect(res.text).toBe('');
  });

  it('AC-15: GET returns 404 after delete', async () => {
    const created = await createProduct();
    const id = created.body.data.id;

    await request(app).delete(`/api/products/${id}`);

    const get = await request(app).get(`/api/products/${id}`);
    expect(get.status).toBe(404);
  });

  it('AC-15: cascade delete removes variants', async () => {
    const created = await createProduct();
    const id = created.body.data.id;

    await request(app).delete(`/api/products/${id}`);

    const { rows } = await pool.query(
      'SELECT * FROM product_variants WHERE product_id = $1',
      [id],
    );
    expect(rows).toHaveLength(0);
  });

  it('AC-16: returns 404 for valid ID not existing', async () => {
    const res = await request(app).delete('/api/products/999999');
    expect(res.status).toBe(404);
    expect(res.headers['content-type']).toContain('application/problem+json');
  });

  it('AC-16: returns 400 for invalid ID', async () => {
    const res = await request(app).delete('/api/products/abc');
    expect(res.status).toBe(400);
    expect(res.headers['content-type']).toContain('application/problem+json');
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// Transaction rollback tests
// ─────────────────────────────────────────────────────────────────────────────

describe('Transaction rollback', () => {
  it('should rollback POST transaction when variant insert fails (duplicate)', async () => {
    // Produk tidak tersimpan jika ada duplikasi variasi
    const countBefore = (await pool.query('SELECT COUNT(*) FROM products')).rows[0].count;

    await createProduct({
      ...validProduct,
      variants: { colorOrSize: ['S', 's'], quantity: 10 },
    });

    const countAfter = (await pool.query('SELECT COUNT(*) FROM products')).rows[0].count;
    // Tidak boleh ada produk baru yang tersimpan
    expect(countAfter).toBe(countBefore);
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// Health check
// ─────────────────────────────────────────────────────────────────────────────

describe('GET /health', () => {
  it('returns 200 with status ok', async () => {
    const res = await request(app).get('/health');
    expect(res.status).toBe(200);
    expect(res.body.status).toBe('ok');
  });
});
