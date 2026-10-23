import { describe, expect, it } from 'vitest';
import { unwrapProduct, unwrapProductList, ApiError } from '../src/api/products.js';
import { errorMessage, fieldErrors, formatPrice, validateProductInput } from '../src/lib/product.js';

describe('product helpers', () => {
  it('formats prices as Indonesian Rupiah', () => {
    expect(formatPrice(150000)).toMatch(/^Rp\s?150\.000$/u);
  });

  it('reads only data from API envelopes', () => {
    expect(unwrapProduct({ data: { id: 1 }, meta: {} })).toEqual({ id: 1 });
    expect(unwrapProductList({ data: [{ id: 1 }], meta: { total: 1 } })).toEqual({ products: [{ id: 1 }], total: 1 });
    expect(() => unwrapProduct({ data: [] })).toThrow(ApiError);
  });

  it('maps Problem Details to safe UI messages and field errors', () => {
    const problem = { status: 500, detail: 'secret implementation detail', errors: [{ field: 'price', message: 'Harga salah' }] };
    expect(errorMessage(new ApiError(problem))).toBe('Server sedang mengalami gangguan. Silakan coba lagi nanti.');
    expect(fieldErrors(problem)).toEqual({ price: 'Harga salah' });
  });

  it('keeps form values separate and creates integer API values', () => {
    const result = validateProductInput({ name: ' Kaos ', price: '150000', image: 'https://example.test/image.jpg', variants: 'S, M', quantity: '2', description: ' Nyaman ' });
    expect(result.errors).toEqual({});
    expect(result.input).toEqual({ name: 'Kaos', price: 150000, image: 'https://example.test/image.jpg', images: [], variants: { colorOrSize: ['S', 'M'], quantity: 2 }, description: 'Nyaman' });
  });

  it('validates extra photo links and the 3-photo limit', () => {
    const base = { name: 'Kaos', price: '1', image: 'https://example.test/1.jpg', variants: 'S', quantity: '1', description: 'x' };
    const ok = validateProductInput({ ...base, images: [' https://example.test/2.jpg ', '', 'https://example.test/3.jpg'] });
    expect(ok.errors).toEqual({});
    expect(ok.input.images).toEqual(['https://example.test/2.jpg', 'https://example.test/3.jpg']);
    expect(validateProductInput({ ...base, images: ['bukan-url'] }).errors.images).toBeTruthy();
    expect(validateProductInput({ ...base, images: ['https://e.test/2.jpg', 'https://e.test/3.jpg', 'https://e.test/4.jpg'] }).errors.images).toBeTruthy();
  });
});
