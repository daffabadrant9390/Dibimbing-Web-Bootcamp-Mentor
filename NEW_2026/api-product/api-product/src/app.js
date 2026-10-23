// src/app.js
// Konfigurasi Express: middleware global, route registry, 404, error handler.

import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import { productRouter } from './routes/product.routes.js';
import { docsRouter } from './routes/docs.routes.js';
import { notFoundHandler } from './middlewares/not-found.js';
import { errorHandler } from './middlewares/error-handler.js';
import { env } from './config/env.js';
import { cors } from './middlewares/cors.js';

export function createApp() {
  const app = express();

  // ── Middleware global ──────────────────────────────────────────────────────

  app.use(cors);

  // Request ID untuk structured logging
  app.use((req, _res, next) => {
    req.requestId = uuidv4();
    next();
  });

  // Structured logging
  if (env.nodeEnv !== 'test') {
    app.use((req, res, next) => {
      const start = Date.now();
      res.on('finish', () => {
        console.log(
          JSON.stringify({
            requestId: req.requestId,
            method: req.method,
            path: req.path,
            status: res.statusCode,
            durationMs: Date.now() - start,
          }),
        );
      });
      next();
    });
  }

  // JSON body parser — Express akan melempar entity.parse.failed jika malformed
  app.use(express.json());

  // ── Health check ───────────────────────────────────────────────────────────
  app.get('/health', (_req, res) => {
    res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
  });

  // ── Routes ─────────────────────────────────────────────────────────────────
  app.use('/api/products', productRouter);
  app.use('/', docsRouter);

  // ── 404 handler ────────────────────────────────────────────────────────────
  app.use(notFoundHandler);

  // ── Error handler pusat ────────────────────────────────────────────────────
  app.use(errorHandler);

  return app;
}
