// src/server.js
// Entry point — membuka HTTP server.

import 'dotenv/config';
import { createApp } from './app.js';
import { env } from './config/env.js';
import { getPool } from './config/database.js';

const app = createApp();

const server = app.listen(env.port, () => {
  console.log(
    JSON.stringify({
      event: 'server_started',
      port: env.port,
      nodeEnv: env.nodeEnv,
      swagger: `http://localhost:${env.port}/api-docs`,
      health: `http://localhost:${env.port}/health`,
    }),
  );
});

// Pastikan pool terhubung saat startup
getPool().query('SELECT 1').catch((err) => {
  console.error('[server] Database connection failed:', err.message);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  server.close(() => {
    console.log('[server] Server closed');
    process.exit(0);
  });
});
