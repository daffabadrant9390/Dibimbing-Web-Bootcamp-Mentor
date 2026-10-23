// tests/unit/product.schema.test.js
// Unit test Zod schema validasi body produk.

import { describe, it, expect } from 'vitest';
import { parseProductInput } from '../../src/schemas/product.schema.js';

const validBody = {
  name: 'Kaos Katun Polos',
  price: 150000,
  image: 'https://example.com/kaos.png',
  variants: {
    colorOrSize: ['S', 'M', 'L'],
    quantity: 10,
  },
  description: 'Deskripsi produk.',
};

describe('ProductInputSchema', () => {
  it('should accept valid body', () => {
    const result = parseProductInput(validBody);
    expect(result.success).toBe(true);
  });

  it('should reject empty name', () => {
    const result = parseProductInput({ ...validBody, name: '' });
    expect(result.success).toBe(false);
  });

  it('should reject name exceeding 120 chars', () => {
    const result = parseProductInput({ ...validBody, name: 'a'.repeat(121) });
    expect(result.success).toBe(false);
  });

  it('should reject negative price', () => {
    const result = parseProductInput({ ...validBody, price: -1 });
    expect(result.success).toBe(false);
  });

  it('should reject non-integer price', () => {
    const result = parseProductInput({ ...validBody, price: 1.5 });
    expect(result.success).toBe(false);
  });

  it('should reject price as string', () => {
    const result = parseProductInput({ ...validBody, price: '150000' });
    expect(result.success).toBe(false);
  });

  it('should accept price 0', () => {
    const result = parseProductInput({ ...validBody, price: 0 });
    expect(result.success).toBe(true);
  });

  it('should reject invalid image URL', () => {
    const result = parseProductInput({ ...validBody, image: 'not-a-url' });
    expect(result.success).toBe(false);
  });

  it('should reject ftp:// image URL', () => {
    const result = parseProductInput({ ...validBody, image: 'ftp://example.com/img.png' });
    expect(result.success).toBe(false);
  });

  it('should accept https:// image URL', () => {
    const result = parseProductInput({ ...validBody, image: 'https://cdn.example.com/img.png' });
    expect(result.success).toBe(true);
  });

  it('should reject empty colorOrSize array', () => {
    const result = parseProductInput({
      ...validBody,
      variants: { colorOrSize: [], quantity: 10 },
    });
    expect(result.success).toBe(false);
  });

  it('should reject negative quantity', () => {
    const result = parseProductInput({
      ...validBody,
      variants: { colorOrSize: ['S'], quantity: -1 },
    });
    expect(result.success).toBe(false);
  });

  it('should accept quantity 0', () => {
    const result = parseProductInput({
      ...validBody,
      variants: { colorOrSize: ['S'], quantity: 0 },
    });
    expect(result.success).toBe(true);
  });

  it('should reject empty description', () => {
    const result = parseProductInput({ ...validBody, description: '' });
    expect(result.success).toBe(false);
  });

  it('should reject unknown fields (strict mode)', () => {
    const result = parseProductInput({ ...validBody, prices: 100 });
    expect(result.success).toBe(false);
  });

  it('should reject missing required fields', () => {
    const { name: _, ...withoutName } = validBody;
    const result = parseProductInput(withoutName);
    expect(result.success).toBe(false);
  });

  it('should default images to [image] when images is omitted', () => {
    const result = parseProductInput(validBody);
    expect(result.success).toBe(true);
    expect(result.data.images).toEqual([validBody.image]);
  });

  it('should put image first and remove duplicates in images', () => {
    const result = parseProductInput({
      ...validBody,
      images: ['https://example.com/2.png', validBody.image, 'https://example.com/2.png'],
    });
    expect(result.success).toBe(true);
    expect(result.data.images).toEqual([validBody.image, 'https://example.com/2.png']);
  });

  it('should reject invalid URL inside images', () => {
    const result = parseProductInput({ ...validBody, images: ['not-a-url'] });
    expect(result.success).toBe(false);
  });

  it('should reject images that is not an array', () => {
    const result = parseProductInput({ ...validBody, images: 'https://example.com/2.png' });
    expect(result.success).toBe(false);
  });

  it('should reject more than 10 images including image', () => {
    const images = Array.from({ length: 10 }, (_, i) => `https://example.com/${i}.png`);
    const result = parseProductInput({ ...validBody, images });
    expect(result.success).toBe(false);
  });
});
