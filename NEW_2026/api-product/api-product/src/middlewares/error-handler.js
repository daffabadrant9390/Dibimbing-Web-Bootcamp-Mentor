// src/middlewares/error-handler.js
// Error handler pusat sesuai RFC 9457 Problem Details.
// Content-Type: application/problem+json; charset=utf-8

import { AppError } from '../errors/app-error.js';
import { env } from '../config/env.js';

/**
 * Menangkap semua error dari next(err).
 * Tidak mengirim stack trace / detail internal ke client.
 */
// eslint-disable-next-line no-unused-vars
export function errorHandler(err, req, res, next) {
  // Log error internal (request id dari middleware logger)
  const reqId = req.requestId ?? '-';

  if (err instanceof AppError) {
    if (env.nodeEnv !== 'test') {
      console.error(`[error][${reqId}] ${err.status} ${err.title}: ${err.detail}`);
    }

    const body = {
      type: err.type,
      title: err.title,
      status: err.status,
      detail: err.detail,
    };
    if (err.instance) body.instance = err.instance;
    if (err.errors) body.errors = err.errors;

    return res
      .status(err.status)
      .setHeader('Content-Type', 'application/problem+json; charset=utf-8')
      .json(body);
  }

  // Error JSON malformed dari Express body parser
  if (err.type === 'entity.parse.failed') {
    if (env.nodeEnv !== 'test') {
      console.error(`[error][${reqId}] 400 Malformed JSON`);
    }
    return res
      .status(400)
      .setHeader('Content-Type', 'application/problem+json; charset=utf-8')
      .json({
        type: 'https://api.example.com/problems/malformed-body',
        title: 'Malformed request body',
        status: 400,
        detail: 'Request body must be valid JSON',
        instance: req.path,
      });
  }

  // Error tak terduga — tidak bocorkan detail ke client
  console.error(`[error][${reqId}] Unexpected error:`, err);

  return res
    .status(500)
    .setHeader('Content-Type', 'application/problem+json; charset=utf-8')
    .json({
      type: 'about:blank',
      title: 'Internal Server Error',
      status: 500,
      detail: 'An unexpected error occurred',
    });
}
