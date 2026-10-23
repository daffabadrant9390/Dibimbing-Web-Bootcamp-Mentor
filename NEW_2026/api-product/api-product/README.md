# Product API

REST API CRUD produk dengan Express.js dan PostgreSQL, dilengkapi Swagger UI dan integration test.

## Tech Stack

- **Runtime**: Node.js LTS (ESM)
- **Framework**: Express.js
- **Database**: PostgreSQL (Docker)
- **Validasi**: Zod
- **Docs**: OpenAPI 3.1 + Swagger UI
- **Testing**: Vitest + Supertest

---

## Setup & Jalankan

### 1. Clone dan install dependencies

```bash
npm install
```

### 2. Copy environment variable

```bash
cp .env.example .env
```

Edit `.env` sesuai konfigurasi Docker kamu.

### 3. Jalankan PostgreSQL dengan Docker

```bash
docker compose up -d
```

Ini akan membuat:
- `product_api_postgres` (service `db`) di port **5432** (development)
- `product_api_postgres_test` (service `db_test`) di port **5433** (testing)

### 4. Jalankan Migrasi

```bash
npm run migrate
```

Perintah ini aman dijalankan berulang kali (idempotent). File SQL di `migrations/` dijalankan urut dan di-track agar tidak diulang.

### 5. Seed Data (opsional)

```bash
npm run seed
```

Menambah 2 produk dengan variasi untuk development (stok 30 dan 40).

### 6. Jalankan Aplikasi

```bash
# Development (dengan auto-reload)
npm run dev

# Production
npm start
```

Server berjalan di `http://localhost:3000`.

---

## Environment Variables

| Variable | Default | Keterangan |
|---|---|---|
| `PORT` | `3000` | Port HTTP server |
| `NODE_ENV` | `development` | Environment (`development`/`test`/`production`) |
| `DATABASE_URL` | - | PostgreSQL connection string (wajib) |
| `DATABASE_SSL` | `false` | Aktifkan SSL untuk koneksi database |
| `DATABASE_TEST_URL` | sama dgn DATABASE_URL | Database khusus untuk testing |

---

## API Endpoints

| Method | Endpoint | Keterangan | Response |
|---|---|---|---|
| GET | `/api/products` | Daftar semua produk | `200` + `{ data, meta }` |
| GET | `/api/products/:id` | Detail satu produk | `200` + `{ data, meta }` |
| POST | `/api/products` | Buat produk baru | `201` + header `Location` |
| PUT | `/api/products/:id` | Ganti seluruh data produk | `200` + `{ data, meta }` |
| DELETE | `/api/products/:id` | Hapus produk | `204 No Content` |
| GET | `/health` | Health check | `200` |
| GET | `/api-docs` | Swagger UI | HTML |
| GET | `/openapi.json` | Dokumen OpenAPI 3.1 | JSON |

---

## Swagger UI

Buka di browser setelah server berjalan:

```
http://localhost:3000/api-docs
```

---

## Format Response

**Sukses** (`application/json; charset=utf-8`):
```json
{
  "data": { ... },
  "meta": {}
}
```

**Error** (`application/problem+json; charset=utf-8`) — RFC 9457:
```json
{
  "type": "https://api.example.com/problems/validation-error",
  "title": "Request validation failed",
  "status": 400,
  "detail": "One or more request fields are invalid",
  "instance": "/api/products",
  "errors": [
    { "field": "price", "message": "price must be >= 0" }
  ]
}
```

---

## Contoh Request

**POST /api/products**
```bash
curl -X POST http://localhost:3000/api/products \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Kaos Katun Polos",
    "price": 150000,
    "image": "https://example.com/kaos.png",
    "variants": {
      "colorOrSize": ["S", "M", "L"],
      "quantity": 10
    },
    "description": "Kaos katun nyaman untuk sehari hari."
  }'
```

**GET /api/products/1**
```bash
curl http://localhost:3000/api/products/1
```

**PUT /api/products/1**
```bash
curl -X PUT http://localhost:3000/api/products/1 \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Kaos Premium",
    "price": 250000,
    "image": "https://example.com/premium.png",
    "variants": {
      "colorOrSize": ["M", "L", "XL"],
      "quantity": 20
    },
    "description": "Kaos premium bahan halus."
  }'
```

**DELETE /api/products/1**
```bash
curl -X DELETE http://localhost:3000/api/products/1
```

---

## Testing

### Unit Test (tanpa database)

```bash
npm run test:unit
```

### Integration Test (membutuhkan Docker PostgreSQL)

Pastikan container `product_api_postgres_test` berjalan di port 5433 (`docker compose up -d` menjalankannya).

```bash
# Ubah DATABASE_TEST_URL di .env jika menggunakan port berbeda
DATABASE_TEST_URL=postgresql://app_user:change-me@localhost:5433/product_api_test

npm run test:integration
```

### Semua Test

```bash
npm test
```

### Coverage

```bash
npm run test:coverage
```

---

## Struktur Proyek

```
src/
  app.js                    # Konfigurasi Express dan middleware global
  server.js                 # Entry point HTTP server
  config/
    env.js                  # Validasi environment variable
    database.js             # PostgreSQL connection pool
  routes/
    product.routes.js       # 5 endpoint produk
    docs.routes.js          # Swagger UI dan /openapi.json
  controllers/
    product.controller.js   # HTTP request/response
  services/
    product.service.js      # Logika bisnis dan transaksi
  repositories/
    product.repository.js   # Query SQL berparameter
  schemas/
    product.schema.js       # Zod schema validasi body
  middlewares/
    validate-id.js          # Validasi parameter :id
    validate-request.js     # Validasi body POST/PUT
    not-found.js            # Handler route tidak ditemukan
    error-handler.js        # RFC 9457 Problem Details
  errors/
    app-error.js            # Class error terstruktur
  utils/
    product-response.js     # Mapper DB -> API response
migrations/
  001_create_products.sql
  002_create_product_variants.sql
  003_updated_at_trigger.sql
scripts/
  migrate.js                # Runner migrasi
  seed.js                   # Seed data development
tests/
  unit/                     # Unit test tanpa DB
  integration/              # Integration test dengan DB
openapi.yaml                # Sumber OpenAPI 3.1
compose.yaml                # Docker PostgreSQL dev (5432) + test (5433)
```
