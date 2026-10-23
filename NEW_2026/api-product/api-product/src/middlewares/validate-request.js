// src/middlewares/validate-request.js
// Middleware validasi body POST/PUT menggunakan Zod schema.
// Menolak: id dalam body, field tidak dikenal, JSON malformed,
// serta duplikasi colorOrSize tanpa case-sensitivity.

import { parseProductInput } from '../schemas/product.schema.js';
import { validationError, malformedBodyError } from '../errors/app-error.js';

export function validateProductBody(req, res, next) {
  const instance = req.path;

  // Body harus ada dan merupakan plain object (bukan array/null)
  if (
    req.body === undefined ||
    req.body === null ||
    Array.isArray(req.body) ||
    typeof req.body !== 'object'
  ) {
    return next(malformedBodyError(instance));
  }

  // Tolak field 'id' di body
  if ('id' in req.body) {
    return next(
      validationError(instance, [
        { field: 'id', message: 'Field id must not be included in the request body' },
      ]),
    );
  }

  const result = parseProductInput(req.body, instance);

  if (!result.success) {
    const errors = result.error.errors.map((e) => ({
      field: e.path.join('.') || 'body',
      message: e.message,
    }));
    return next(validationError(instance, errors));
  }

  // Validasi duplikasi colorOrSize (case-insensitive)
  const colorOrSize = result.data.variants?.colorOrSize ?? [];
  const seen = new Set();
  const duplicates = [];
  for (const val of colorOrSize) {
    const lower = val.trim().toLowerCase();
    if (seen.has(lower)) {
      duplicates.push(val);
    }
    seen.add(lower);
  }
  if (duplicates.length > 0) {
    return next(
      validationError(instance, [
        {
          field: 'variants.colorOrSize',
          message: `Duplicate variant values are not allowed (case-insensitive): ${duplicates.join(', ')}`,
        },
      ]),
    );
  }

  req.validatedBody = result.data;
  next();
}
