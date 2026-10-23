-- migrations/004_move_stock_to_products.sql
-- Stok adalah satu angka total per produk (kontrak API: variants.quantity).
-- Sebelumnya quantity disalin ke setiap baris product_variants lalu dijumlahkan
-- saat dibaca, sehingga produk dengan 3 variasi dan stok 10 terbaca 30.
-- Sekarang stok disimpan satu kali di products.stock.

ALTER TABLE products
  ADD COLUMN IF NOT EXISTS stock BIGINT NOT NULL DEFAULT 0;

ALTER TABLE products
  DROP CONSTRAINT IF EXISTS products_stock_non_negative;
ALTER TABLE products
  ADD CONSTRAINT products_stock_non_negative CHECK (stock >= 0);

DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'product_variants' AND column_name = 'quantity'
  ) THEN
    -- Pindahkan data lama: total stok = jumlah quantity seluruh variasinya.
    UPDATE products p
    SET stock = COALESCE(
      (SELECT SUM(v.quantity) FROM product_variants v WHERE v.product_id = p.id), 0
    );

    -- Kolom lama (beserta CHECK constraint-nya) tidak dipakai lagi.
    ALTER TABLE product_variants DROP COLUMN quantity;
  END IF;
END $$;
