// scripts/migrate.js
// Menjalankan semua file SQL migrasi secara berurutan.
// Dapat dijalankan berulang dari database kosong (idempotent via IF NOT EXISTS).

import 'dotenv/config';
import pg from 'pg';
import { readFileSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const migrationsDir = join(__dirname, '../migrations');

const { Pool } = pg;

async function migrate() {
  if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL environment variable is required');
  }

  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.DATABASE_SSL === 'true' ? { rejectUnauthorized: false } : false,
  });

  const client = await pool.connect();

  try {
    // Buat tabel migrations tracker jika belum ada
    await client.query(`
      CREATE TABLE IF NOT EXISTS schema_migrations (
        filename TEXT PRIMARY KEY,
        applied_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      )
    `);

    // Ambil daftar migrasi yang sudah dijalankan
    const { rows: applied } = await client.query(
      'SELECT filename FROM schema_migrations',
    );
    const appliedSet = new Set(applied.map((r) => r.filename));

    // Ambil file SQL terurut
    const files = readdirSync(migrationsDir)
      .filter((f) => f.endsWith('.sql'))
      .sort();

    for (const file of files) {
      if (appliedSet.has(file)) {
        console.log(`[migrate] Skipping (already applied): ${file}`);
        continue;
      }

      const sql = readFileSync(join(migrationsDir, file), 'utf8');
      console.log(`[migrate] Applying: ${file}`);

      await client.query('BEGIN');
      try {
        await client.query(sql);
        await client.query(
          'INSERT INTO schema_migrations (filename) VALUES ($1)',
          [file],
        );
        await client.query('COMMIT');
        console.log(`[migrate] Applied: ${file}`);
      } catch (err) {
        await client.query('ROLLBACK');
        console.error(`[migrate] Failed: ${file}`, err.message);
        throw err;
      }
    }

    console.log('[migrate] All migrations applied successfully.');
  } finally {
    client.release();
    await pool.end();
  }
}

migrate().catch((err) => {
  console.error('[migrate] Fatal error:', err.message);
  process.exit(1);
});
