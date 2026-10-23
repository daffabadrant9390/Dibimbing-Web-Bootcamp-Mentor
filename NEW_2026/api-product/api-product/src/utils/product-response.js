// src/utils/product-response.js
// Memetakan baris database ke format respons API (PRD).
// image_url (db) -> image (API); images (db, galeri) -> images (API)
// variants rows -> colorOrSize: [...]; products.stock -> variants.quantity (total stok)

/**
 * Mapper baris database -> Product API object.
 * @param {object} row - baris dari query JOIN products + product_variants
 * @param {Array<object>} variantRows - semua baris variasi untuk produk ini
 * @returns {object} Product sesuai kontrak API
 */
export function mapProductToResponse(row, variantRows) {
  const colorOrSize = variantRows.map((v) => v.value);

  return {
    id: Number(row.id),
    name: row.name,
    price: Number(row.price),
    image: row.image_url,
    images: row.images?.length ? row.images : [row.image_url],
    variants: {
      colorOrSize,
      quantity: Number(row.stock),
    },
    description: row.description,
  };
}

/**
 * Envelope sukses standar.
 */
export function successResponse(data, meta = {}) {
  return { data, meta };
}
