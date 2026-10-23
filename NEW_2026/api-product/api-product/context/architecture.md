# Architecture API Produk dengan Node js dan PostgreSQL

## Tujuan

Dokumen ini menetapkan arsitektur implementasi REST API CRUD produk. Sistem menggunakan Node.js dengan Express.js dan PostgreSQL. Data produk disimpan secara relasional agar variasi warna atau ukuran beserta stoknya dapat dikelola tanpa mengulang data produk.

Arsitektur ini mendukung lima endpoint pada PRD:

- `GET /api/products`
- `GET /api/products/:id`
- `POST /api/products`
- `PUT /api/products/:id`
- `DELETE /api/products/:id`

## Keputusan teknologi

| Area | Pilihan | Alasan |
| --- | --- | --- |
| Runtime | Node.js LTS | Runtime JavaScript untuk API. |
| HTTP framework | Express.js | Ringan, mudah dipahami untuk exercise, dan cukup untuk REST API CRUD. |
| Database | PostgreSQL | Mendukung transaksi, constraint, dan relasi produk–variasi. |
| Driver database | `pg` | Driver PostgreSQL Node.js yang stabil dan menggunakan query parameter. |
| Validasi request | Zod atau Joi | Memvalidasi request body sebelum service menyentuh database. Pilih satu dan gunakan konsisten. |
| Migrasi schema | node-pg-migrate atau Knex migrations | Menjaga perubahan schema dapat diulang di setiap environment. |
| Dokumentasi API | OpenAPI 3.1 + Swagger UI | Kontrak API yang dapat dibaca manusia dan dicoba langsung dari browser. |
| Testing | Vitest/Jest + Supertest + database test PostgreSQL | Menguji HTTP, validasi, dan constraint database. |

## Diagram arsitektur

```text
Client atau Front End
        |
        | HTTP JSON
        v
Express Router
        |
        v
Controller
  - baca parameter dan body
  - bentuk respons HTTP
        |
        v
Request validation middleware
  - validasi id dan body
        |
        v
Product service
  - aturan bisnis
  - transaksi create update delete
        |
        v
Product repository
  - query berparameter melalui pg
        |
        v
PostgreSQL
  products 1 --- * product_variants
```

Respons sukses mengikuti envelope PRD `{ "data": ..., "meta": ... }`. Semua error ditangani middleware pusat dalam format RFC 9457 `application/problem+json`.

## Struktur aplikasi

```text
src/
  app.js                         # Konfigurasi Express dan middleware global
  server.js                      # Membuka HTTP server
  config/
    env.js                       # Membaca serta memvalidasi environment variable
    database.js                  # PostgreSQL connection pool
  routes/
    product.routes.js            # Pemetaan lima endpoint produk
    docs.routes.js               # Swagger UI dan OpenAPI JSON
  controllers/
    product.controller.js        # HTTP request dan response
  services/
    product.service.js           # Logika CRUD dan transaksi
  repositories/
    product.repository.js        # Query SQL produk dan variasi
  schemas/
    product.schema.js            # Schema Zod/Joi untuk POST dan PUT
    openapi.js                   # Dokumen OpenAPI 3.1 dan reusable components
  middlewares/
    validate-request.js          # Menjalankan schema validator
    not-found.js                 # Endpoint tidak ditemukan
    error-handler.js             # RFC 9457 Problem Details
  errors/
    app-error.js                 # Error terstruktur: status, type, title, detail
  utils/
    product-response.js          # Pemetaan model database ke respons API
migrations/
  001_create_products.sql
  002_create_product_variants.sql
tests/
  integration/
  unit/
```

Controller tidak boleh berisi SQL. Repository tidak boleh menentukan HTTP status. Pembagian ini menjaga validasi dan aturan bisnis dapat diuji tanpa HTTP server.

## Dokumentasi API dengan Swagger

Back end harus menyediakan dokumentasi interaktif melalui Swagger UI pada `GET /api-docs` dan dokumen kontrak mesin dalam OpenAPI JSON pada `GET /openapi.json`. Keduanya tidak memerlukan autentikasi pada exercise ini. Untuk production, akses Swagger UI dapat dibatasi berdasarkan environment atau jaringan internal; file OpenAPI tetap harus tersedia untuk tooling yang membutuhkannya.

Gunakan paket berikut:

```bash
npm install swagger-ui-express
```

OpenAPI disimpan sebagai source code, misalnya `src/schemas/openapi.js`, atau sebagai `openapi.yaml` di root proyek. Pilih satu sumber kebenaran. Rekomendasi untuk project kecil ini adalah `openapi.yaml` karena mudah dibaca dan direview; server memuat file tersebut untuk Swagger UI dan `/openapi.json`.

Contoh wiring Express:

```js
import swaggerUi from 'swagger-ui-express';
import { openapiDocument } from './schemas/openapi.js';

app.get('/openapi.json', (_req, res) => res.json(openapiDocument));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openapiDocument, {
  explorer: true,
  customSiteTitle: 'Product API Docs'
}));
```

Jika memakai YAML, parse file hanya ketika aplikasi mulai dan gagal startup bila dokumennya tidak valid. Jangan membuat spec saat request diterima.

### Kontrak yang wajib muncul di Swagger

| Bagian OpenAPI | Kebutuhan |
| --- | --- |
| `info` | Judul `Product API`, versi API, deskripsi singkat, dan informasi lisensi bila ada. |
| `servers` | Server lokal, misalnya `http://localhost:3000`. |
| `paths` | Lima operasi CRUD: daftar, detail, tambah, ubah, hapus produk. |
| Parameter `id` | `in: path`, `required: true`, type integer, minimum 1, dan contoh nilai 1. |
| Request body POST/PUT | `application/json`, `required: true`, schema ProductInput, contoh body valid, serta contoh validasi gagal. |
| Respons sukses | Envelope `data` dan `meta` untuk `200`/`201`; `204` tanpa content untuk DELETE sukses. |
| Respons error | `400`, `404`, dan `500` memakai `application/problem+json` dan schema ProblemDetails. |
| Header `Location` | Didokumentasikan pada respons `201 Created`. |
| Tags | Seluruh operasi diberi tag `Products`. |

### Reusable components OpenAPI

Dokumen OpenAPI minimal mendefinisikan komponen berikut agar schema tidak disalin ke setiap endpoint:

```yaml
components:
  schemas:
    Product:
      type: object
      required: [id, name, price, image, variants, description]
      properties:
        id:
          type: integer
          format: int64
          minimum: 1
          example: 1
        name:
          type: string
          minLength: 1
          maxLength: 120
        price:
          type: integer
          format: int64
          minimum: 0
          example: 150000
        image:
          type: string
          format: uri
          maxLength: 2048
        variants:
          type: object
          required: [colorOrSize, quantity]
          properties:
            colorOrSize:
              type: array
              minItems: 1
              items:
                type: string
                minLength: 1
                maxLength: 50
            quantity:
              type: integer
              minimum: 0
        description:
          type: string
          minLength: 1
          maxLength: 2000
    ProductInput:
      type: object
      additionalProperties: false
      required: [name, price, image, variants, description]
      properties:
        name:
          type: string
          minLength: 1
          maxLength: 120
        price:
          type: integer
          format: int64
          minimum: 0
        image:
          type: string
          format: uri
          maxLength: 2048
        variants:
          $ref: '#/components/schemas/VariantsInput'
        description:
          type: string
          minLength: 1
          maxLength: 2000
    VariantsInput:
      type: object
      additionalProperties: false
      required: [colorOrSize, quantity]
      properties:
        colorOrSize:
          type: array
          minItems: 1
          items:
            type: string
            minLength: 1
            maxLength: 50
        quantity:
          type: integer
          minimum: 0
    ProductResponse:
      type: object
      required: [data, meta]
      properties:
        data:
          $ref: '#/components/schemas/Product'
        meta:
          type: object
          additionalProperties: true
    ProductListResponse:
      type: object
      required: [data, meta]
      properties:
        data:
          type: array
          items:
            $ref: '#/components/schemas/Product'
        meta:
          type: object
          required: [total]
          properties:
            total:
              type: integer
              minimum: 0
    ProblemDetails:
      type: object
      required: [type, title, status]
      properties:
        type:
          type: string
          format: uri-reference
        title:
          type: string
        status:
          type: integer
        detail:
          type: string
        instance:
          type: string
          format: uri-reference
        errors:
          type: array
          items:
            type: object
            required: [field, message]
            properties:
              field:
                type: string
              message:
                type: string
```

`ProductInput` mengikuti kontrak PRD yang saat ini menggunakan `variants.colorOrSize` dan `variants.quantity`. Bila kontrak request dinormalisasi ke array variasi pada bagian model data, schema `ProductInput` Swagger dan PRD harus diubah pada commit yang sama.

### Quality gate dokumentasi

- Swagger UI harus dapat dibuka di `http://localhost:3000/api-docs` saat aplikasi lokal berjalan.
- `GET /openapi.json` mengembalikan dokumen OpenAPI 3.1 valid dengan `Content-Type: application/json`.
- Semua lima endpoint memiliki summary, tag, parameter/request body bila relevan, respons sukses, dan respons error.
- Contoh respons di Swagger harus sesuai persis dengan envelope sukses dan Problem Details yang benar-benar dikembalikan aplikasi.
- CI memvalidasi spec menggunakan `@redocly/cli lint openapi.yaml` atau validator OpenAPI setara.

## Model data

Satu produk memiliki satu atau lebih variasi. Variasi berisi salah satu jenis atribut, `color` atau `size`, dan nilainya. Stok disimpan satu kali sebagai total pada `products.stock`, sesuai kontrak API `variants.quantity` (migrasi `004_move_stock_to_products.sql`).

> Catatan domain: bila stok sesungguhnya bergantung pada variasi—contoh Merah/M berbeda dari Merah/L—model perlu diperluas dengan stok per variasi atau SKU, dan kontrak API (PRD) harus diubah bersamaan. Untuk exercise ini stok cukup satu total per produk.

### Relasi

```text
products
  id (PK)
  name
  price
  image_url
  description
  stock
  created_at
  updated_at

product_variants
  id (PK)
  product_id (FK -> products.id)
  variant_type
  value
  created_at
  updated_at
```

### Tabel `products`

| Kolom | Tipe PostgreSQL | Aturan |
| --- | --- | --- |
| `id` | `BIGINT GENERATED ALWAYS AS IDENTITY` | Primary key, bernilai positif, sesuai `id` numerik di API. |
| `name` | `VARCHAR(120)` | Wajib, setelah trim tidak boleh kosong. |
| `price` | `BIGINT` | Wajib, harga Rupiah sebagai integer, tidak negatif. |
| `image_url` | `VARCHAR(2048)` | Wajib, URL HTTP/HTTPS divalidasi aplikasi. |
| `description` | `VARCHAR(2000)` | Wajib, setelah trim tidak boleh kosong. |
| `stock` | `BIGINT` | Wajib, default 0, tidak negatif. Total stok produk; dipetakan ke `variants.quantity` di API. |
| `created_at` | `TIMESTAMPTZ` | Wajib, default waktu saat dibuat. |
| `updated_at` | `TIMESTAMPTZ` | Wajib, default waktu saat dibuat dan diperbarui saat update. |

### Tabel `product_variants`

| Kolom | Tipe PostgreSQL | Aturan |
| --- | --- | --- |
| `id` | `BIGINT GENERATED ALWAYS AS IDENTITY` | Primary key. |
| `product_id` | `BIGINT` | Foreign key ke `products.id`; dihapus otomatis saat product dihapus. |
| `variant_type` | `VARCHAR(10)` | Wajib; hanya `color` atau `size`. |
| `value` | `VARCHAR(50)` | Wajib, setelah trim tidak boleh kosong. |
| `created_at` | `TIMESTAMPTZ` | Wajib, default waktu saat dibuat. |
| `updated_at` | `TIMESTAMPTZ` | Wajib, default waktu saat dibuat dan diperbarui saat update. |

Constraint unik `(product_id, variant_type, lower(value))` mencegah variasi seperti `Merah` dan `merah` tersimpan dua kali untuk produk yang sama.

## Schema SQL awal

```sql
CREATE TABLE products (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name VARCHAR(120) NOT NULL,
  price BIGINT NOT NULL,
  image_url VARCHAR(2048) NOT NULL,
  description VARCHAR(2000) NOT NULL,
  stock BIGINT NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  CONSTRAINT products_name_not_blank CHECK (btrim(name) <> ''),
  CONSTRAINT products_price_non_negative CHECK (price >= 0),
  CONSTRAINT products_image_url_not_blank CHECK (btrim(image_url) <> ''),
  CONSTRAINT products_description_not_blank CHECK (btrim(description) <> ''),
  CONSTRAINT products_stock_non_negative CHECK (stock >= 0)
);

CREATE TABLE product_variants (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  product_id BIGINT NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  variant_type VARCHAR(10) NOT NULL,
  value VARCHAR(50) NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  CONSTRAINT product_variants_type_valid CHECK (variant_type IN ('color', 'size')),
  CONSTRAINT product_variants_value_not_blank CHECK (btrim(value) <> '')
);

CREATE UNIQUE INDEX product_variants_unique_value
  ON product_variants (product_id, variant_type, lower(value));

CREATE INDEX product_variants_product_id_idx
  ON product_variants (product_id);
```

`updated_at` harus diperbarui oleh service dalam query `UPDATE`, atau dengan trigger PostgreSQL yang dijalankan pada setiap update.

## Pemetaan database ke respons API

Database menyimpan variasi secara terpisah, sedangkan API mempertahankan struktur respons yang mudah dikonsumsi front end. Repository mengambil produk dan seluruh variasinya; mapper kemudian mengelompokkan nilai `color` dan `size`.

```json
{
  "data": {
    "id": 1,
    "name": "Kaos Katun Polos",
    "price": 150000,
    "image": "https://example.com/kaos-katun.png",
    "variants": {
      "colorOrSize": ["Merah", "Biru", "S", "M"],
      "quantity": 18
    },
    "description": "Kaos katun nyaman untuk penggunaan sehari hari."
  },
  "meta": {}
}
```

`image` pada API dipetakan dari `image_url` di database. `variants.quantity` dibaca langsung dari `products.stock` (satu angka total, tidak dijumlahkan dari variasi). Bila kelak stok perlu dicatat per variasi, format request berikut direkomendasikan:

```json
{
  "name": "Kaos Katun Polos",
  "price": 150000,
  "image": "https://example.com/kaos-katun.png",
  "variants": [
    { "type": "color", "value": "Merah", "quantity": 10 },
    { "type": "size", "value": "M", "quantity": 8 }
  ],
  "description": "Kaos katun nyaman untuk penggunaan sehari hari."
}
```

Jika format request ini diadopsi, PRD perlu diperbarui dari `variants.colorOrSize` dan satu `variants.quantity` menjadi array `variants` di atas. Jangan mendukung dua format request secara bersamaan karena akan membuat validasi dan dokumentasi ambigu.

## Alur setiap operasi

### GET daftar dan detail

1. Router mencocokkan endpoint.
2. Untuk detail, middleware memvalidasi `:id` sebagai integer positif.
3. Service meminta repository membaca product beserta variasi.
4. Jika detail tidak ada, service melempar `product-not-found` (`404`).
5. Mapper membentuk `data`; controller mengirim envelope sukses.

### POST produk

1. Parser JSON memastikan body dapat dibaca.
2. Middleware memvalidasi seluruh body dan menolak field tidak dikenal.
3. Service membuka transaksi PostgreSQL.
4. Repository membuat baris `products`, lalu seluruh `product_variants`.
5. Jika semua query berhasil, transaksi di-commit dan controller mengirim `201` beserta `Location`.
6. Jika salah satu query gagal, transaksi di-rollback; tidak boleh ada produk tanpa variasi yang tertinggal.

### PUT produk

1. Middleware memvalidasi `:id` dan body lengkap.
2. Service membuka transaksi dan memastikan produk tersedia.
3. Repository memperbarui `products`, menghapus variasi lama, lalu menyisipkan variasi baru.
4. Transaksi di-commit hanya jika seluruh langkah sukses; jika gagal, rollback mempertahankan data lama.
5. Controller mengirim `200` dengan resource hasil update.

### DELETE produk

1. Middleware memvalidasi `:id`.
2. Repository menghapus produk berdasarkan ID dan memeriksa jumlah baris yang terhapus.
3. PostgreSQL menghapus variasi terkait melalui `ON DELETE CASCADE`.
4. Bila tidak ada baris terhapus, service mengembalikan Problem Details `404`; bila ada, controller mengirim `204` tanpa body.

## Aturan validasi dan pertahanan data

- Validasi aplikasi harus mengikuti batas field pada PRD sebelum query dibuat.
- Semua query wajib menggunakan placeholder parameter `pg` seperti `$1`, `$2`; dilarang menyusun SQL dari string input pengguna.
- Constraint PostgreSQL tetap wajib sebagai pertahanan lapis kedua jika validasi aplikasi terlewati.
- `POST` dan `PUT` menolak `id` dari body dan semua field yang tidak terdaftar pada schema.
- URL gambar divalidasi di aplikasi sebagai URL absolut dengan protokol `http:` atau `https:`; database hanya memastikan nilai tidak kosong.
- Error constraint unik variasi dipetakan ke Problem Details `400` dengan type `validation-error`, bukan `500`.
- Nilai konfigurasi rahasia (`DATABASE_URL`, password) hanya dibaca dari environment variable dan tidak boleh ditulis ke source control atau respons API.

## Konfigurasi environment

```env
POSTGRES_DB=product_api
POSTGRES_USER=product_api
POSTGRES_PASSWORD=product_api_dev_password
POSTGRES_PORT=5432
NODE_ENV=development
PORT=3000
DATABASE_URL=postgresql://product_api:product_api_dev_password@localhost:5432/product_api
DATABASE_SSL=false
```

## PostgreSQL dengan Docker Compose

File [compose.yaml](../compose.yaml) adalah satu-satunya file Compose (nama kanonis Compose V2). File ini menyediakan dua service PostgreSQL 16: `db` (development, port 5432) dan `db_test` (integration test, port 5433). Data development disimpan pada named volume `pgdata`, sehingga tetap ada setelah container dihentikan. Volume hanya dihapus bila developer secara sengaja menjalankan `docker compose down -v`.

Jalankan dari root `api-product/`:

```bash
cp .env.example .env
docker compose up -d
docker compose ps
```

Service dianggap siap setelah healthcheck bernilai `healthy`. Log dapat diperiksa dengan `docker compose logs -f db`; koneksi SQL interaktif tersedia dengan `docker compose exec db psql -U app_user -d product_api`.

| Lokasi aplikasi API | Nilai host dalam `DATABASE_URL` | Contoh |
| --- | --- | --- |
| Node.js berjalan langsung di komputer developer | `localhost` | `postgresql://app_user:change-me@localhost:5432/product_api` |
| Node.js berjalan sebagai service pada Compose yang sama | `db` | `postgresql://app_user:change-me@db:5432/product_api` |

Front end tidak boleh memakai `DATABASE_URL`, port PostgreSQL, atau kredensial database. Front end hanya mengarah ke HTTP API melalui variabel seperti `VITE_API_BASE_URL=http://localhost:3000`.

Untuk menghentikan database tanpa menghapus data, gunakan `docker compose down`. Untuk menghapus seluruh data development dengan sengaja, gunakan `docker compose down -v`. Jangan gunakan password default development ini pada staging atau production; gunakan secret manager dan user database dengan hak minimum, serta TLS bila didukung platform.

## Observability dan testing

- Beri setiap request ID dan tulis log terstruktur untuk method, path, status, durasi, serta request ID; jangan log password atau body sensitif.
- Sediakan endpoint `GET /health` yang hanya memeriksa proses aplikasi. Pemeriksaan readiness dapat memverifikasi koneksi PostgreSQL secara terpisah.
- Integration test harus memakai database khusus test dan menjalankan migrasi sebelum suite test.
- Test minimal mencakup CRUD sukses, format envelope sukses, Problem Details untuk `400`/`404`, rollback POST/PUT bila insert variasi gagal, dan cascade delete variasi.

## Catatan deployment

Jalankan migrasi secara terpisah setelah PostgreSQL healthy dan sebelum versi aplikasi baru menerima traffic. Gunakan connection pool `pg`; jumlah koneksi maksimum harus disesuaikan dengan batas koneksi PostgreSQL dan jumlah instance aplikasi. Database merupakan sumber data utama—data in-memory hanya boleh dipakai sebagai fixture test, bukan sebagai penyimpanan production.
