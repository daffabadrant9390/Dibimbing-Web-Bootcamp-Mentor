// tests/integration/setup.js
// Setup dan teardown untuk integration test.
// Menjalankan migrasi ke database test sebelum semua test.

import 'dotenv/config';
import pg from 'pg';
import { readFileSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { closePool } from '../../src/config/database.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const migrationsDir = join(__dirname, '../../migrations');

const TEST_DB_URL =
  process.env.DATABASE_TEST_URL ||
  process.env.DATABASE_URL ||
  'postgresql://app_user:change-me@localhost:5432/product_api_test';

/**
 * Mendapatkan koneksi ke DB test.
 */
export async function getTestPool() {
  const pool = new pg.Pool({
    connectionString: TEST_DB_URL,
    ssl: false,
    max: 5,
  });
  return pool;
}

/**
 * Reset database test dan jalankan migrasi.
 * Dipanggil di beforeAll setiap suite integration.
 */
export async function setupTestDatabase() {
  const pool = await getTestPool();
  const client = await pool.connect();

  try {
    // Drop semua tabel untuk fresh start
    await client.query(`
      DROP TABLE IF EXISTS product_variants CASCADE;
      DROP TABLE IF EXISTS products CASCADE;
      DROP TABLE IF EXISTS schema_migrations CASCADE;
    `);

    // Jalankan migrasi
    const files = readdirSync(migrationsDir)
      .filter((f) => f.endsWith('.sql'))
      .sort();

    for (const file of files) {
      const sql = readFileSync(join(migrationsDir, file), 'utf8');
      await client.query(sql);
    }
  } finally {
    client.release();
    await pool.end();
  }
}

/**
 * Bersihkan data antar test (truncate, bukan drop).
 */
export async function cleanDatabase(pool) {
  await pool.query('TRUNCATE TABLE product_variants, products RESTART IDENTITY CASCADE');
}

export { TEST_DB_URL };
