// src/config/env.js
// Membaca dan memvalidasi environment variable saat startup.
// Aplikasi gagal langsung jika variabel penting tidak ada atau tidak valid.

const required = ['DATABASE_URL'];

for (const key of required) {
  if (!process.env[key]) {
    throw new Error(`Environment variable ${key} is required but not set.`);
  }
}

export const env = {
  port: parseInt(process.env.PORT ?? '3000', 10),
  nodeEnv: process.env.NODE_ENV ?? 'development',
  databaseUrl: process.env.DATABASE_URL,
  databaseSsl: process.env.DATABASE_SSL === 'true',
  databaseTestUrl: process.env.DATABASE_TEST_URL ?? process.env.DATABASE_URL,
  corsOrigins: (process.env.CORS_ORIGINS ?? 'http://localhost:5500,http://127.0.0.1:5500')
    .split(',')
    .map((origin) => origin.trim())
    .filter(Boolean),
};

if (!Number.isInteger(env.port) || env.port < 1 || env.port > 65535) {
  throw new Error(`PORT must be a valid port number, got: ${process.env.PORT}`);
}
