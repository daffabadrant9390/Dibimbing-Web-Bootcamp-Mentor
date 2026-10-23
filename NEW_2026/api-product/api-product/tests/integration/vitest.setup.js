// tests/integration/vitest.setup.js
// Dipanggil sebelum test dijalankan — override DATABASE_URL ke test DB.
// File ini di-register di vitest.config.js sebagai globalSetup.

import 'dotenv/config';

export async function setup() {
  if (process.env.DATABASE_TEST_URL) {
    process.env.DATABASE_URL = process.env.DATABASE_TEST_URL;
  }
}
