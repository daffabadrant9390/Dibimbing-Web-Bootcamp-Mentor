# Tasklist Back End Product API

Dokumen ini adalah checklist implementasi back end untuk PRD Product API. Kontrak API, format respons, dan aturan validasi merujuk ke [PRD](prd.md); detail teknis Node.js, PostgreSQL, serta Swagger merujuk ke [Architecture](architecture.md).

## Setup proyek

- [ ] Inisialisasi proyek Node.js dengan mode ESM atau CommonJS, lalu gunakan satu pilihan secara konsisten.
- [ ] Tambahkan Express.js, `pg`, library validasi (Zod atau Joi), `swagger-ui-express`, dan tooling test.
- [ ] Buat `.env.example` berisi `PORT`, `DATABASE_URL`, `DATABASE_SSL`, dan `NODE_ENV`; jangan commit `.env`.
- [ ] Salin `.env.example` ke `.env` untuk konfigurasi lokal; jangan mengubah password development menjadi kredensial production.
- [ ] Buat konfigurasi environment yang gagal saat variabel penting tidak tersedia atau tidak valid.
- [ ] Buat Express app, JSON body parser, route registry, middleware 404, dan error handler pusat.
- [ ] Tambahkan `GET /health` untuk memeriksa proses aplikasi.

Selesai bila aplikasi dapat dijalankan lokal dan `GET /health` memberi respons sukses.

## Database PostgreSQL dan migrasi

- [ ] Jalankan PostgreSQL development dari root repository dengan `docker compose up -d db`.
- [ ] Tunggu `docker compose ps` menunjukkan service `db` berstatus `healthy` sebelum menjalankan migration.
- [ ] Saat API berjalan lokal, gunakan `DATABASE_URL` dengan host `localhost`; bila API nanti berjalan pada Compose yang sama, gunakan host `db`.
- [ ] Siapkan database development dan database test PostgreSQL terpisah.
- [ ] Konfigurasi connection pool `pg` menggunakan `DATABASE_URL`.
- [ ] Buat migration tabel `products` sesuai schema architecture.
- [ ] Buat migration tabel `product_variants` dengan foreign key `ON DELETE CASCADE`.
- [ ] Tambahkan constraint untuk nama/deskripsi/URL yang tidak kosong, harga dan quantity tidak negatif, serta type variasi `color` atau `size`.
- [ ] Tambahkan unique index variasi tanpa membedakan kapitalisasi.
- [ ] Tentukan mekanisme pembaruan `updated_at` dan implementasikan secara konsisten.
- [ ] Buat seed data minimal satu produk dengan variasi valid untuk development.
- [ ] Dokumentasikan perintah menjalankan migration dan seed di README.

Selesai bila migration dapat dijalankan berulang dari database kosong dan schema dapat diverifikasi melalui PostgreSQL.

## Data access dan domain service

- [ ] Buat `product.repository` untuk query daftar, detail, insert, update, dan delete menggunakan query berparameter.
- [ ] Buat query yang membaca produk beserta variasinya tanpa N+1 query.
- [ ] Buat mapper database ke kontrak API `Product` (`image_url` menjadi `image`).
- [ ] Tentukan dan implementasikan pemetaan variasi relasional ke respons API yang tercantum pada PRD.
- [ ] Buat `product.service` untuk aturan `not found`, pembuatan ID, dan pengelolaan transaksi.
- [ ] Implementasikan transaksi POST: insert product dan variasi harus commit atau rollback bersama.
- [ ] Implementasikan transaksi PUT: validasi keberadaan product, update product, ganti variasi, lalu commit atau rollback bersama.
- [ ] Pastikan DELETE produk ikut menghapus variasi melalui cascade dan memeriksa jumlah baris terhapus.
- [ ] Tangani error constraint PostgreSQL sebagai error aplikasi yang aman; jangan teruskan pesan mentah database ke client.

Selesai bila service dapat diuji unit tanpa HTTP server dan tidak ada query yang menggabungkan input client ke string SQL.

## Validasi dan error handling

- [ ] Validasi parameter `:id`: hanya digit, integer positif, dan berada dalam safe integer JavaScript.
- [ ] Validasi JSON malformed, body kosong, `null`, array, dan content type selain JSON untuk POST/PUT.
- [ ] Validasi body POST/PUT untuk `name`, `price`, `image`, `variants`, dan `description` sesuai batas PRD.
- [ ] Tolak `id` dalam body POST/PUT dan field yang tidak dikenal.
- [ ] Tolak duplikasi variasi tanpa membedakan kapitalisasi.
- [ ] Kumpulkan seluruh error field lalu kembalikan sekali dalam array `errors`.
- [ ] Buat class atau helper error terstruktur berisi status, `type`, `title`, `detail`, dan `instance`.
- [ ] Implementasikan error middleware RFC 9457 dengan `Content-Type: application/problem+json; charset=utf-8`.
- [ ] Pastikan error `500` tidak mengirim stack trace, SQL, konfigurasi, atau password.

Selesai bila seluruh error `400`, `404`, dan `500` mengikuti Problem Details dalam PRD.

## Endpoint CRUD

- [ ] Implementasikan `GET /api/products` dengan `200`, envelope `{ data, meta }`, dan `meta.total`.
- [ ] Implementasikan `GET /api/products/:id` dengan `200` + Product, `400` untuk ID invalid, dan `404` bila tidak ada.
- [ ] Implementasikan `POST /api/products` dengan `201`, envelope `data`, dan header `Location: /api/products/{id}`.
- [ ] Implementasikan `PUT /api/products/:id` sebagai penggantian penuh dan atomik.
- [ ] Implementasikan `DELETE /api/products/:id` dengan `204 No Content`, tanpa response body.
- [ ] Pastikan semua respons sukses berbadan memakai `Content-Type: application/json; charset=utf-8`.
- [ ] Pastikan controller tidak mengembalikan format respons lama yang memakai `message` sebagai error utama.

Selesai bila semua acceptance criteria AC-01 sampai AC-16 pada PRD lulus.

## Swagger dan OpenAPI

- [ ] Buat satu sumber kebenaran OpenAPI 3.1, disarankan `openapi.yaml`.
- [ ] Tambahkan Swagger UI di `GET /api-docs`.
- [ ] Tambahkan endpoint dokumen `GET /openapi.json`.
- [ ] Dokumentasikan kelima endpoint dengan tag `Products`, summary, parameter, request body, dan response status.
- [ ] Definisikan reusable schema `Product`, `ProductInput`, respons list/detail, dan `ProblemDetails`.
- [ ] Dokumentasikan content type `application/json` untuk sukses dan `application/problem+json` untuk error.
- [ ] Tambahkan contoh request/response valid, validasi gagal, ID invalid, dan product tidak ditemukan.
- [ ] Dokumentasikan header `Location` untuk `201 Created` dan respons kosong untuk `204`.
- [ ] Tambahkan lint OpenAPI di CI menggunakan Redocly atau validator setara.

Selesai bila Swagger UI dapat dicoba di lokal dan spec yang sama tervalidasi dalam CI.

## Testing, quality, dan delivery

- [ ] Buat unit test untuk validator, mapper, service, dan error handler.
- [ ] Buat integration test terhadap database test untuk lima endpoint CRUD.
- [ ] Uji semua skenario validasi ID dan request body pada PRD.
- [ ] Uji respons sukses envelope, header `Location`, `204` tanpa body, serta Problem Details `400`/`404`/`500`.
- [ ] Uji rollback transaksi ketika penyimpanan variasi gagal.
- [ ] Uji cascade delete `product_variants` setelah produk dihapus.
- [ ] Tambahkan structured logging dengan request ID dan tanpa data rahasia.
- [ ] Jalankan formatter, linter, test, migration, dan OpenAPI lint pada CI.
- [ ] Perbarui README: setup Docker Compose, environment, migration, seed, run, test, Swagger URL, dan contoh request.

Selesai bila CI hijau dan engineer lain dapat menjalankan API dari README tanpa asumsi tambahan.
