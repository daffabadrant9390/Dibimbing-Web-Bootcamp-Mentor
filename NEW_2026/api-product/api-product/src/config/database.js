// src/config/database.js
// PostgreSQL connection pool menggunakan `pg`.

import pg from 'pg';
import { env } from './env.js';

const { Pool } = pg;

let pool;
let currentUrl;

/**
 * Mengembalikan shared pool instance.
 * @param {string} [overrideUrl] - URL database alternatif (untuk test).
 */
export function getPool(overrideUrl) {
  const connectionString = overrideUrl ?? env.databaseUrl;

  // Jika URL berubah (mis. dari dev ke test), reset pool
  if (!pool || currentUrl !== connectionString) {
    if (pool) {
      pool.end().catch(() => {});
    }
    currentUrl = connectionString;
    pool = new Pool({
      connectionString,
      ssl: env.databaseSsl ? { rejectUnauthorized: false } : false,
      max: 10,
      idleTimeoutMillis: 30_000,
      connectionTimeoutMillis: 5_000,
    });

    pool.on('error', (err) => {
      console.error('[db] Unexpected pool error:', err.message);
    });
  }
  return pool;
}

/**
 * Menutup pool (dipakai saat test selesai).
 */
export async function closePool() {
  if (pool) {
    await pool.end();
    pool = null;
    currentUrl = null;
  }
}

