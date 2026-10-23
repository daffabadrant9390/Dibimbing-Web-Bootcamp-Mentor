// tests/unit/product-response.test.js
import { describe, it, expect } from 'vitest';
import { mapProductToResponse, successResponse } from '../../src/utils/product-response.js';

describe('mapProductToResponse', () => {
  const productRow = {
    id: 1n,
    name: 'Kaos Katun Polos',
    price: 150000n,
    image_url: 'https://example.com/kaos.png',
    description: 'Deskripsi produk.',
    stock: 30n,
  };

  const variantRows = [
    { value: 'S' },
    { value: 'M' },
    { value: 'L' },
  ];

  it('should map image_url to image', () => {
    const result = mapProductToResponse(productRow, variantRows);
    expect(result.image).toBe('https://example.com/kaos.png');
    expect(result.image_url).toBeUndefined();
  });

  it('should aggregate variant values into colorOrSize array', () => {
    const result = mapProductToResponse(productRow, variantRows);
    expect(result.variants.colorOrSize).toEqual(['S', 'M', 'L']);
  });

  it('should return products.stock once as variants.quantity (not multiplied per variant)', () => {
    const result = mapProductToResponse({ ...productRow, stock: 10n }, variantRows);
    expect(result.variants.quantity).toBe(10);
  });

  it('should convert BigInt id and price to number', () => {
    const result = mapProductToResponse(productRow, variantRows);
    expect(typeof result.id).toBe('number');
    expect(typeof result.price).toBe('number');
    expect(result.id).toBe(1);
    expect(result.price).toBe(150000);
  });

  it('should handle empty variants array', () => {
    const result = mapProductToResponse(productRow, []);
    expect(result.variants.colorOrSize).toEqual([]);
    expect(result.variants.quantity).toBe(30);
  });

  it('should return images gallery from the images column', () => {
    const images = ['https://example.com/kaos.png', 'https://example.com/kaos-2.png'];
    const result = mapProductToResponse({ ...productRow, images }, variantRows);
    expect(result.images).toEqual(images);
  });

  it('should fall back to [image] when images is empty', () => {
    const result = mapProductToResponse({ ...productRow, images: [] }, variantRows);
    expect(result.images).toEqual(['https://example.com/kaos.png']);
  });
});

describe('successResponse', () => {
  it('should wrap data in envelope with empty meta by default', () => {
    const result = successResponse({ id: 1 });
    expect(result).toEqual({ data: { id: 1 }, meta: {} });
  });

  it('should include custom meta', () => {
    const result = successResponse([], { total: 5 });
    expect(result.meta.total).toBe(5);
  });
});
