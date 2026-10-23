// tests/unit/error-handler.test.js
// Unit test untuk error handler middleware.

import { describe, it, expect, vi, beforeEach } from 'vitest';

// Mock env untuk test
vi.mock('../../src/config/env.js', () => ({
  env: { nodeEnv: 'test', port: 3000, databaseUrl: 'postgresql://test' },
}));

import { AppError } from '../../src/errors/app-error.js';
import { errorHandler } from '../../src/middlewares/error-handler.js';

function makeRes() {
  const res = {
    _status: null,
    _headers: {},
    _body: null,
    status(code) { this._status = code; return this; },
    setHeader(key, val) { this._headers[key] = val; return this; },
    json(body) { this._body = body; return this; },
  };
  return res;
}

describe('errorHandler middleware', () => {
  const req = { requestId: 'test-id', path: '/api/products/1' };
  const next = vi.fn();

  it('should handle AppError with correct status and problem+json', () => {
    const err = new AppError({
      status: 404,
      type: 'https://api.example.com/problems/product-not-found',
      title: 'Product not found',
      detail: 'No product exists with ID 1',
      instance: '/api/products/1',
    });

    const res = makeRes();
    errorHandler(err, req, res, next);

    expect(res._status).toBe(404);
    expect(res._headers['Content-Type']).toContain('application/problem+json');
    expect(res._body.type).toContain('product-not-found');
    expect(res._body.status).toBe(404);
  });

  it('should not leak internal details on 500', () => {
    const err = new Error('DB password=secret123 connection failed');
    const res = makeRes();
    errorHandler(err, req, res, next);

    expect(res._status).toBe(500);
    expect(res._body.detail).not.toContain('secret123');
    expect(res._body.detail).toBe('An unexpected error occurred');
  });

  it('should handle JSON parse error', () => {
    const err = new SyntaxError('Unexpected token');
    err.type = 'entity.parse.failed';
    const res = makeRes();
    errorHandler(err, req, res, next);

    expect(res._status).toBe(400);
    expect(res._headers['Content-Type']).toContain('application/problem+json');
  });

  it('should include errors array for validation AppError', () => {
    const err = new AppError({
      status: 400,
      type: 'https://api.example.com/problems/validation-error',
      title: 'Validation failed',
      detail: 'Fields invalid',
      errors: [{ field: 'price', message: 'must be >= 0' }],
    });

    const res = makeRes();
    errorHandler(err, req, res, next);

    expect(res._body.errors).toHaveLength(1);
    expect(res._body.errors[0].field).toBe('price');
  });
});
