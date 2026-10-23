// src/schemas/product.schema.js
// Validasi request body POST/PUT menggunakan Zod.

import { z } from 'zod';

const VariantsSchema = z
  .object({
    colorOrSize: z
      .array(
        z
          .string({ invalid_type_error: 'Each variant value must be a string' })
          .trim()
          .min(1, 'Each variant value must not be empty')
          .max(50, 'Each variant value must not exceed 50 characters'),
      )
      .min(1, 'variants.colorOrSize must have at least one item'),
    quantity: z
      .number({ invalid_type_error: 'variants.quantity must be a number' })
      .int('variants.quantity must be an integer')
      .min(0, 'variants.quantity must be >= 0')
      .max(Number.MAX_SAFE_INTEGER, 'variants.quantity exceeds safe integer'),
  })
  .strict('variants contains unknown fields');

// URL gambar absolut http/https, dipakai untuk image dan setiap item images.
function ImageUrlSchema(label) {
  return z
    .string({ invalid_type_error: `${label} must be a string` })
    .max(2048, `${label} URL must not exceed 2048 characters`)
    .refine(
      (val) => {
        try {
          const url = new URL(val);
          return url.protocol === 'http:' || url.protocol === 'https:';
        } catch {
          return false;
        }
      },
      { message: `${label} must be a valid absolute HTTP/HTTPS URL` },
    );
}

const ProductInputObjectSchema = z
  .object({
    name: z
      .string({ invalid_type_error: 'name must be a string' })
      .trim()
      .min(1, 'name must not be empty')
      .max(120, 'name must not exceed 120 characters'),
    price: z
      .number({ invalid_type_error: 'price must be a number' })
      .int('price must be an integer')
      .min(0, 'price must be >= 0')
      .max(Number.MAX_SAFE_INTEGER, 'price exceeds safe integer'),
    image: ImageUrlSchema('image'),
    images: z
      .array(ImageUrlSchema('Each images item'), { invalid_type_error: 'images must be an array' })
      .max(10, 'images must not have more than 10 items')
      .optional(),
    variants: z
      .object(
        {
          colorOrSize: z.any(),
          quantity: z.any(),
        },
        { invalid_type_error: 'variants must be an object' },
      )
      .passthrough()
      .pipe(VariantsSchema),
    description: z
      .string({ invalid_type_error: 'description must be a string' })
      .trim()
      .min(1, 'description must not be empty')
      .max(2000, 'description must not exceed 2000 characters'),
  })
  .strict('Request body contains unknown fields');

// Galeri yang disimpan selalu diawali foto utama (image), tanpa duplikat, maksimal 10.
export const ProductInputSchema = ProductInputObjectSchema
  .transform((data) => ({
    ...data,
    images: [...new Set([data.image, ...(data.images ?? [])])],
  }))
  .refine((data) => data.images.length <= 10, {
    message: 'images must not have more than 10 items (including image)',
    path: ['images'],
  });

/**
 * Parse dan validasi body. Kembalikan { data } atau lempar AppError.
 * Digunakan oleh validate-request middleware.
 */
export function parseProductInput(body, instance) {
  return ProductInputSchema.safeParse(body);
}
