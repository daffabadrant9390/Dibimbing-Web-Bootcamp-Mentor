// src/middlewares/validate-id.js
// Memvalidasi parameter :id sesuai aturan PRD:
// hanya digit, integer positif, dalam safe integer JavaScript.

import { invalidIdError } from '../errors/app-error.js';

export function validateId(req, res, next) {
  const raw = req.params.id;
  const instance = req.path;

  // Hanya boleh berisi digit (tidak boleh ada spasi, huruf, titik, tanda minus)
  if (!/^\d+$/.test(raw)) {
    return next(invalidIdError(instance));
  }

  const num = Number(raw);

  if (
    !Number.isInteger(num) ||
    num < 1 ||
    !Number.isSafeInteger(num)
  ) {
    return next(invalidIdError(instance));
  }

  req.productId = num;
  next();
}
