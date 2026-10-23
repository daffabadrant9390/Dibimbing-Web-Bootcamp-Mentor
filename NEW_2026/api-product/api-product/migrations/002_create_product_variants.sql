-- migrations/002_create_product_variants.sql
-- Tabel variasi produk dengan foreign key ON DELETE CASCADE

CREATE TABLE IF NOT EXISTS product_variants (
  id           BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  product_id   BIGINT       NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  variant_type VARCHAR(10)  NOT NULL,
  value        VARCHAR(50)  NOT NULL,
  quantity     INTEGER      NOT NULL,
  created_at   TIMESTAMPTZ  NOT NULL DEFAULT NOW(),
  updated_at   TIMESTAMPTZ  NOT NULL DEFAULT NOW(),

  CONSTRAINT product_variants_type_valid            CHECK (variant_type IN ('color', 'size')),
  CONSTRAINT product_variants_value_not_blank        CHECK (btrim(value) <> ''),
  CONSTRAINT product_variants_quantity_non_negative  CHECK (quantity >= 0)
);

-- Unique index case-insensitive: mencegah 'Merah' dan 'merah' tersimpan bersamaan
CREATE UNIQUE INDEX IF NOT EXISTS product_variants_unique_value
  ON product_variants (product_id, variant_type, lower(value));

-- Index pada foreign key untuk query cepat
CREATE INDEX IF NOT EXISTS product_variants_product_id_idx
  ON product_variants (product_id);
