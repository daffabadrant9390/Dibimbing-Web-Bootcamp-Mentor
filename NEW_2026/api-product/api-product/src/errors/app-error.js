// src/errors/app-error.js
// Error terstruktur berisi status, type, title, detail sesuai RFC 9457.

export class AppError extends Error {
  /**
   * @param {object} opts
   * @param {number} opts.status
   * @param {string} opts.type
   * @param {string} opts.title
   * @param {string} opts.detail
   * @param {string} [opts.instance]
   * @param {Array<{field: string, message: string}>} [opts.errors]
   */
  constructor({ status, type, title, detail, instance, errors }) {
    super(title);
    this.status = status;
    this.type = type;
    this.title = title;
    this.detail = detail;
    this.instance = instance;
    this.errors = errors;
  }
}

/** Factory: 400 ID tidak valid */
export function invalidIdError(instance) {
  return new AppError({
    status: 400,
    type: 'https://api.example.com/problems/invalid-product-id',
    title: 'Invalid product ID',
    detail: 'Product ID must be a positive integer',
    instance,
  });
}

/** Factory: 404 produk tidak ditemukan */
export function productNotFoundError(id, instance) {
  return new AppError({
    status: 404,
    type: 'https://api.example.com/problems/product-not-found',
    title: 'Product not found',
    detail: `No product exists with ID ${id}`,
    instance,
  });
}

/** Factory: 400 validasi body */
export function validationError(instance, errors) {
  return new AppError({
    status: 400,
    type: 'https://api.example.com/problems/validation-error',
    title: 'Request validation failed',
    detail: 'One or more request fields are invalid',
    instance,
    errors,
  });
}

/** Factory: 400 body tidak dapat dibaca */
export function malformedBodyError(instance) {
  return new AppError({
    status: 400,
    type: 'https://api.example.com/problems/malformed-body',
    title: 'Malformed request body',
    detail: 'Request body must be a valid JSON object',
    instance,
  });
}
