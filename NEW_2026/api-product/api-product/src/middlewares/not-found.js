// src/middlewares/not-found.js
// Middleware untuk endpoint yang tidak ditemukan (404).

import { AppError } from '../errors/app-error.js';

export function notFoundHandler(req, res, next) {
  next(
    new AppError({
      status: 404,
      type: 'about:blank',
      title: 'Not Found',
      detail: `Route ${req.method} ${req.path} not found`,
      instance: req.path,
    }),
  );
}
