// CORS untuk UI lokal. Origin yang tidak ada dalam allowlist tidak mendapat
// header CORS, sehingga browser akan tetap melindungi API dari origin asing.

import { env } from '../config/env.js';

export function cors(req, res, next) {
  const origin = req.headers.origin;

  if (!origin || !env.corsOrigins.includes(origin)) {
    return next();
  }

  res.setHeader('Access-Control-Allow-Origin', origin);
  res.setHeader('Vary', 'Origin');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept');

  if (req.method === 'OPTIONS') return res.sendStatus(204);
  next();
}
