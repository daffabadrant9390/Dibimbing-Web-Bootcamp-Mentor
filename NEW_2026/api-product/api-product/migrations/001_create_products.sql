-- migrations/001_create_products.sql
-- Tabel utama produk

CREATE TABLE IF NOT EXISTS products (
  id          BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name        VARCHAR(120)  NOT NULL,
  price       BIGINT        NOT NULL,
  image_url   VARCHAR(2048) NOT NULL,
  description VARCHAR(2000) NOT NULL,
  created_at  TIMESTAMPTZ   NOT NULL DEFAULT NOW(),
  updated_at  TIMESTAMPTZ   NOT NULL DEFAULT NOW(),

  CONSTRAINT products_name_not_blank        CHECK (btrim(name) <> ''),
  CONSTRAINT products_price_non_negative    CHECK (price >= 0),
  CONSTRAINT products_image_url_not_blank   CHECK (btrim(image_url) <> ''),
  CONSTRAINT products_description_not_blank CHECK (btrim(description) <> '')
);
