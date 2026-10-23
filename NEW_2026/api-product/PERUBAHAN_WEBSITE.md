# Catatan perubahan website (api-product + project-AI)

Ringkasan semua yang sudah diubah di codebase `dibimbing-mentorship/api-product` untuk Day 15, sampai tanggal 22 Oktober 2026.

---

## 0. Peta project: kenapa ada 3 halaman produk?

Satu repo berisi dua project yang memakai **satu API dan satu database yang sama**:

```
Vite app (5173)  ──┐
                   ├──► API Express (localhost:3000) ──► PostgreSQL (5432)
index.html?id=2 ───┘
product-1.html / product-3.html  ──► tidak pakai API (data ditulis langsung di HTML)
```

| URL | Folder / file | Sumber data | Bisa apa | Dipakai di kelas? |
|---|---|---|---|---|
| `localhost:5173/#/products/2` | `project-AI/frontend/` (Vite) | API | **CRUD lengkap**: lihat, tambah, ubah, hapus | Opsional, untuk demo ubah harga atau foto |
| `127.0.0.1:5500/project-AI/index.html?id=2` | `project-AI/index.html` + `script.js` | API (`GET /api/products/:id`) | **Read saja** + form varian/jumlah/subtotal | **Ya**, sebagai Product 2 (API) |
| `127.0.0.1:5500/project-AI/product-1.html` | `project-AI/product-1.html` | Hardcode di HTML | Read + form varian/jumlah/subtotal | **Ya**, sebagai Product 1 (hardcode) |
| `127.0.0.1:5500/project-AI/product-3.html` | `project-AI/product-3.html` | Hardcode di HTML | Sama seperti product-1 | Contoh tambahan |

Kalau kamu ubah data lewat Vite app, misalnya harga atau foto produk **id 2**, lalu refresh `index.html?id=2`, perubahannya ikut tampil karena keduanya membaca database yang sama.

---

## 1. Perbaikan backend (18 Oktober 2026)

| Perubahan | File | Alasan |
|---|---|---|
| Stok disimpan satu kali di `products.stock` | `migrations/004_move_stock_to_products.sql`, repository, response | Bug lama: stok 10 dengan 3 varian terbaca 30, karena stok disalin ke tiap varian lalu dijumlahkan. |
| Satu file `compose.yaml` (db 5432 + db_test 5433), `docker-compose.yml` dihapus | `api-product/compose.yaml` | Sebelumnya ada dua file compose yang saling bentrok. |
| `.env.example` diperbarui (CORS untuk 5173, port DB test 5433) | `api-product/.env.example` | Supaya Vite app dan integration test langsung jalan. |

---

## 2. Fitur Day 15: interaksi varian, jumlah, dan subtotal (19–22 Oktober 2026)

Tujuannya mengikuti Practical Guidance Day 15/16: ada dua halaman detail produk (hardcode dan API) dengan form yang sama, dan subtotal dihitung pakai `Number()`.

| Perubahan | File |
|---|---|
| Elemen harga jadi `<p id="productPrice" data-price="...">`, jadi harga asli (angka) disimpan di `data-price` | `index.html`, `product-1.html`, `product-3.html` |
| Form baru `#productForm`: `select#variant`, `input#quantity` (min 1, step 1), tombol **Update Pilihan**, dan `p#selectionSummary` | ketiga halaman di atas |
| `product-interaction.js` (baru, dipakai bersama): `Number()` untuk harga dan jumlah, `subtotal += price * quantity`, `hasSelection = variant !== '' && quantity > 0`, lalu tampil `Varian X \| Jumlah N \| Subtotal RpY \| Pilihan terisi: true` | `project-AI/product-interaction.js` |
| Di halaman API, `renderProduct` mengisi `data-price` dan pilihan varian dari response API. Tombol submit baru aktif setelah data API masuk. Selector dibuat lokal (`priceElement`, `variantInput`, `submitButton`) supaya tidak bentrok dengan `product-interaction.js` | `project-AI/script.js` |
| Stepper lama, Add to bag, dan batas stok di-comment dengan tanda `TODO(Day 16)`, karena if/else baru dipelajari di Day 16 | `index.html`, `script.js` |
| `product-1.html` (baru): **Kemeja Linen Biru**, Rp150.000, ukuran S/M/L, stok 25, 3 foto Unsplash | `project-AI/product-1.html` |
| `product-3.html` (baru): **Tote Bag Kanvas**, Rp85.000, warna Putih/Hitam/Krem, stok 40, 3 foto Unsplash | `project-AI/product-3.html` |
| `static-gallery.js` (baru): thumbnail, zoom, wishlist, dan accordion untuk halaman hardcode, tanpa fetch API | `project-AI/static-gallery.js` |
| Style `.product-form` dan `.selection-summary` | `project-AI/styles.css` |

---

## 2b. Footer checkout bar (22 Oktober 2026)

Ringkasan pilihan tidak lagi tampil sebagai teks di bawah form. Sekarang ringkasan muncul sebagai **bar di bagian bawah layar** setelah klik **Update Pilihan**.

| Perubahan | File |
|---|---|
| `<p id="selectionSummary">` dipindah ke dalam `<aside id="checkoutBar" hidden>`, yang berisi "Ringkasan pesanan", `#subtotalText`, dan tombol `#checkoutButton` **Lanjutkan Pembayaran** | `index.html`, `product-1.html`, `product-3.html` |
| Teks ringkasan: `Ukuran: M · Jumlah: 2 · Harga: Rp150.000` (label ikut form: Ukuran/Warna/Varian). Subtotal diformat `Rp300.000` dengan `toLocaleString('id-ID')`. Bar tampil lewat `checkoutBar.hidden = !hasSelection` (tanpa if/else). Tombol bayar cuma menampilkan toast demo. | `product-interaction.js` |
| Style `.checkout-bar` (fixed di bawah, responsif di HP) | `styles.css` |

Id `selectionSummary` tetap ada, jadi selector untuk Day 16 tidak berubah. Variabel toast di file ini bernama `checkoutToast` supaya tidak bentrok dengan `toast` di `script.js`.

## 3. Multiple image per produk (22 Oktober 2026)

Sebelumnya database, API, dan Vite app cuma punya **satu** gambar per produk (`image_url` → `image`). Sekarang satu produk bisa punya galeri sampai **10 foto**.

### Database
- **Migration baru `migrations/005_add_product_images.sql`**
  - Menambah kolom `products.images TEXT[] NOT NULL DEFAULT '{}'` (array URL).
  - Menambah constraint `products_images_max_10` (maksimal 10 foto).
  - Untuk data lama, `images` otomatis diisi `[image_url]`, jadi produk yang sudah ada tetap punya 1 foto.
  - `image_url` **tetap ada** sebagai foto utama, jadi kontrak API lama tidak rusak.

### API (`api-product/`)
| File | Perubahan |
|---|---|
| `src/schemas/product.schema.js` | Field baru `images` (opsional, array URL http/https, maksimal 10). Foto utama `image` otomatis ditaruh paling depan dan duplikat dibuang. |
| `src/repositories/product.repository.js` | SELECT, INSERT, dan UPDATE ikut membaca dan menyimpan kolom `images`. |
| `src/utils/product-response.js` | Response sekarang punya `images: [...]`. Kalau kolomnya kosong, fallback ke `[image]`. |
| `openapi.yaml` | `Product.images` dan `ProductInput.images` didokumentasikan (lihat di `/api-docs`). |
| `tests/unit/*.test.js` | +5 test schema, +2 test response. |
| `tests/integration/products.test.js` | +3 test: simpan 3 foto, default `[image]`, URL salah → 400. |

Contoh body `POST`/`PUT`:
```json
{
  "name": "Sepatu Sneaker Casual",
  "price": 450000,
  "image": "https://contoh.com/sepatu-1.jpg",
  "images": ["https://contoh.com/sepatu-2.jpg", "https://contoh.com/sepatu-3.jpg"],
  "variants": { "colorOrSize": ["Merah", "Biru"], "quantity": 40 },
  "description": "Sepatu sneaker casual."
}
```
Response `images` akan berisi `["…sepatu-1.jpg", "…sepatu-2.jpg", "…sepatu-3.jpg"]`.

### Vite app (`project-AI/frontend/`)
| File | Perubahan |
|---|---|
| `src/main.js` | Form tambah/ubah punya bagian **"Foto produk (maks. 3)"**. Foto 1 berlabel **Utama** dan wajib diisi. Tombol **+ Tambah foto** menambah input link baru (nonaktif kalau sudah 3), dan tombol **×** menghapus input. Halaman detail menampilkan thumbnail kalau fotonya lebih dari 1, dan foto utama berganti saat thumbnail diklik. |
| `src/lib/product.js` | `MAX_PHOTOS = 3`. Validasi: foto utama wajib URL http/https, foto tambahan harus URL valid, maksimal 3 foto. Input kosong diabaikan. |
| `src/styles.css` | Style `.photo-row`, `.photo-badge`, `.photo-remove`, `.add-photo`, `.thumbs`. |
| `tests/product.test.js` | +1 test untuk validasi link foto dan batas 3 foto. |

> Batas **3 foto** berlaku di UI Vite. API dan database masih menerima sampai 10 foto (constraint di migration 005).

### Halaman `project-AI/index.html?id=2`
**Tidak ada perubahan kode.** `script.js` sejak awal sudah membaca `product.images` kalau ada, jadi begitu API mengirim lebih dari 1 foto, thumbnail galerinya otomatis muncul.

---

## 4. Cara menjalankan dan memvalidasi

### a. Jalankan migration baru (wajib, sekali saja)
```bash
cd api-product
docker compose up -d          # Postgres
npm run migrate               # menjalankan 005_add_product_images.sql
npm run dev                   # API di localhost:3000
```
Cek di DBeaver: `SELECT id, name, images FROM products;` Kolom `images` seharusnya sudah ada dan berisi 1 URL per produk.

### b. Tambah foto lewat Vite app
```bash
cd project-AI/frontend
npm run dev                   # localhost:5173
```
1. Buka `localhost:5173/#/products/2`, lalu klik **Ubah** (atau **Tambah produk** untuk produk baru).
2. Di **Foto produk**, isi link foto utama, klik **+ Tambah foto** untuk foto ke-2 dan ke-3. Setelah 3 foto, tombol + otomatis nonaktif.
3. Klik **Simpan produk**. Halaman detail menampilkan thumbnail, dan klik thumbnail mengganti foto utama.
4. Coba juga isi link asal (misalnya `bukan-url`) atau kosongkan foto utama. Akan muncul pesan error dan data tidak dikirim.

Kalau mau tanpa Vite, bisa juga lewat Swagger di `localhost:3000/api-docs` → `PUT /api/products/2`, kirim body seperti contoh di atas.

### c. Cek di halaman API
Buka `127.0.0.1:5500/project-AI/index.html?id=2` (Live Server). Galerinya seharusnya menampilkan 3 thumbnail, dan form varian/jumlah tetap menghitung subtotal.

### d. Test otomatis
```bash
cd api-product && npm test    # unit + integration (butuh db_test di 5433)
cd project-AI/frontend && npm test
```

### Hasil uji yang sudah aku jalankan (22 Oktober 2026, di Postgres 16 sementara)
- API: **89/89 test lulus** (unit + integration, termasuk 10 test baru).
- Vite: **5/5 test lulus**.
- Form foto (22 Oktober 2026, sore): tambah produk dengan 3 input lewat tombol + (tombol nonaktif di 3), hapus input dengan × (penomoran ulang), URL salah dan foto utama kosong ditolak, produk tersimpan dengan 2 foto, dan edit produk 2 menampilkan 3 input terisi.
- Migration 005 dijalankan di database yang sudah berisi data seed: `images` terisi `[image_url]`. Dijalankan dua kali juga aman.
- Browser (headless):
  - Edit produk 2 di Vite dengan 2 foto tambahan → 3 thumbnail, dan klik thumbnail mengganti foto.
  - `index.html?id=2` → 3 thumbnail, subtotal Merah × 2 = Rp900.000.
  - Tidak ada error JavaScript.

---

## 5. Catatan

- Kalau **migration 005 belum dijalankan**, API akan error karena query mencari kolom `images` yang belum ada. Jalankan `npm run migrate` dulu sebelum `npm run dev`.
- Foto dari Unsplash di `product-1.html` dan `product-3.html` di-hotlink, jadi butuh internet saat demo.
- Data seed masih memakai URL `example.com`, jadi fotonya akan kosong sampai kamu ganti lewat Vite atau Swagger.
- Multiple image adalah fitur backend dan array, jadi **di luar scope Day 15**. Cukup ditunjukkan sebagai demo mentor kalau perlu.
