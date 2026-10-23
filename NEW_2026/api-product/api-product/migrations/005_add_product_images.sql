-- migrations/005_add_product_images.sql
-- Galeri foto produk: satu produk bisa punya beberapa URL gambar.
-- image_url tetap ada sebagai foto utama (kontrak API lama: field "image").
-- images menyimpan seluruh galeri, urut, dengan foto utama di posisi pertama.

ALTER TABLE products
  ADD COLUMN IF NOT EXISTS images TEXT[] NOT NULL DEFAULT '{}';

ALTER TABLE products
  DROP CONSTRAINT IF EXISTS products_images_max_10;
ALTER TABLE products
  ADD CONSTRAINT products_images_max_10 CHECK (cardinality(images) <= 10);

-- Data lama: galeri diisi dengan foto utama yang sudah ada.
UPDATE products
SET images = ARRAY[image_url]
WHERE cardinality(images) = 0;
