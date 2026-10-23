// tests/unit/validate-id.test.js
// Unit test untuk middleware validateId — tanpa HTTP server.

import { describe, it, expect, vi } from 'vitest';

// Buat mock req/res/next sederhana
function makeReq(id, path) {
  return { params: { id }, path: path ?? `/api/products/${id}` };
}

// Import middleware setelah mock env
import { validateId } from '../../src/middlewares/validate-id.js';

describe('validateId middleware', () => {
  const next = vi.fn();

  function runMiddleware(id) {
    next.mockClear();
    const req = makeReq(id);
    validateId(req, {}, next);
    return { req, nextArg: next.mock.calls[0]?.[0] };
  }

  // ── Valid IDs ─────────────────────────────────────────────────────────────
  it('should pass valid ID "1"', () => {
    const { req, nextArg } = runMiddleware('1');
    expect(nextArg).toBeUndefined();
    expect(req.productId).toBe(1);
  });

  it('should pass valid ID "999"', () => {
    const { req, nextArg } = runMiddleware('999');
    expect(nextArg).toBeUndefined();
    expect(req.productId).toBe(999);
  });

  it('should pass max safe integer', () => {
    const { req, nextArg } = runMiddleware(String(Number.MAX_SAFE_INTEGER));
    expect(nextArg).toBeUndefined();
    expect(req.productId).toBe(Number.MAX_SAFE_INTEGER);
  });

  // ── Invalid IDs ───────────────────────────────────────────────────────────
  it.each([
    '0',
    '-1',
    '1.5',
    'abc',
    '1abc',
    '1e3',
    ' 1',
    '1 ',
    '',
    String(Number.MAX_SAFE_INTEGER + 1),
    String(Number.MAX_SAFE_INTEGER + 2),
  ])('should reject invalid ID "%s"', (id) => {
    const { nextArg } = runMiddleware(id);
    expect(nextArg).toBeDefined();
    expect(nextArg.status).toBe(400);
    expect(nextArg.type).toContain('invalid-product-id');
  });
});
