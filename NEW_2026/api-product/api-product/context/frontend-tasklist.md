# Tasklist Front End Product Detail

Dokumen ini adalah checklist integrasi front end dengan Product API. Sumber kontrak adalah [PRD](prd.md), [Architecture](architecture.md), dan Swagger UI yang tersedia dari back end pada `/api-docs`.

## Persiapan integrasi

- [ ] Tetapkan base URL API melalui environment variable, misalnya `VITE_API_BASE_URL` atau padanan framework yang digunakan.
- [ ] Buat `.env.example` front end tanpa URL atau token rahasia.
- [ ] Pastikan front end tidak menyimpan atau memakai `DATABASE_URL`, `POSTGRES_*`, maupun port PostgreSQL; database hanya diakses oleh back end.
- [ ] Konfigurasikan CORS back end untuk origin local front end bila aplikasi berjalan di port berbeda.
- [ ] Verifikasi endpoint dan contoh payload melalui Swagger sebelum menulis UI.
- [ ] Buat type/interface `Product`, `ProductResponse`, `ProductListResponse`, dan `ProblemDetails` dari kontrak OpenAPI.
- [ ] Pilih satu HTTP client (`fetch`, Axios, atau client generated dari OpenAPI) dan gunakan konsisten.

Selesai bila aplikasi dapat mengambil `GET /api/products/1` dari environment local tanpa URL hardcode di komponen.

## API client dan penanganan respons

- [ ] Buat module API khusus, misalnya `src/services/product-api.js` atau `src/api/products.ts`.
- [ ] Ambil resource dari `response.data`; jangan memperlakukan seluruh envelope sebagai Product.
- [ ] Untuk daftar produk, gunakan `response.data` sebagai array dan `response.meta.total` sebagai jumlah hasil.
- [ ] Perlakukan status HTTP `2xx` sebagai sukses; jangan mendeteksi sukses dari teks pesan.
- [ ] Parse error `application/problem+json` sebagai `ProblemDetails`.
- [ ] Buat pemetaan error UI berdasarkan `status` dan `type`: validation error, ID invalid, product not found, serta error server/jaringan.
- [ ] Jangan tampilkan `detail` error server mentah kepada pengguna bila berpotensi bersifat teknis; gunakan pesan UI yang aman.
- [ ] Batalkan request atau abaikan respons lama ketika pengguna berpindah produk sebelum request sebelumnya selesai.

Selesai bila seluruh halaman memakai satu API client dan dapat membedakan error API, error jaringan, serta loading state.

## Halaman detail produk

- [ ] Baca `id` dari route dan validasi keberadaannya sebelum request API.
- [ ] Fetch `GET /api/products/:id` saat halaman detail dibuka atau ID berubah.
- [ ] Tampilkan nama, harga Rupiah, gambar, variasi warna/ukuran, quantity, dan deskripsi dari `data` API.
- [ ] Format harga dengan locale Indonesia, misalnya `Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' })`.
- [ ] Tampilkan loading state yang tidak menyerupai data produk nyata.
- [ ] Tampilkan empty/error state untuk `404` dengan navigasi kembali ke daftar produk.
- [ ] Tampilkan pesan yang jelas untuk `400`, error jaringan, dan `500`, serta tombol coba lagi bila sesuai.
- [ ] Tampilkan status stok habis bila quantity `0`.
- [ ] Gunakan `alt` gambar yang bermakna dari nama produk dan fallback bila gambar gagal dimuat.
- [ ] Hapus seluruh detail produk yang sebelumnya di-hardcode dari halaman.

Selesai bila halaman detail dapat menampilkan produk API dan semua state loading, error, not found, serta stok habis dapat diuji.

## Daftar produk

- [ ] Buat atau integrasikan halaman daftar yang memanggil `GET /api/products`.
- [ ] Render seluruh item dari `data` tanpa asumsi data selalu ada.
- [ ] Tampilkan empty state saat `data` kosong atau `meta.total` bernilai `0`.
- [ ] Tautkan setiap item ke halaman detail menggunakan `id` produk.
- [ ] Tampilkan loading, error, dan retry state.

Selesai bila daftar dan detail dapat dinavigasi menggunakan hanya data dari API.

## Form tambah dan ubah produk

- [ ] Buat form dengan seluruh field wajib: nama, harga, URL gambar, variasi warna/ukuran, quantity, dan deskripsi.
- [ ] Gunakan state form yang membedakan nilai input string dan payload akhir; ubah harga/quantity menjadi integer sebelum submit.
- [ ] Lakukan validasi client yang selaras dengan batas back end: field wajib, panjang teks, URL HTTP/HTTPS, integer tidak negatif, dan variasi unik.
- [ ] Tetap jadikan validasi server sebagai sumber kebenaran; validasi client hanya meningkatkan pengalaman pengguna.
- [ ] Kirim `POST /api/products` dengan JSON valid untuk membuat produk.
- [ ] Kirim `PUT /api/products/:id` dengan seluruh field wajib untuk mengubah produk; jangan kirim body parsial.
- [ ] Jangan kirim `id` di request body.
- [ ] Tampilkan setiap item `errors[]` dari Problem Details pada field form yang sesuai.
- [ ] Nonaktifkan submit saat request berlangsung untuk mencegah duplikasi.
- [ ] Setelah `201`, gunakan resource pada `data` atau header `Location` untuk menuju halaman detail produk baru.
- [ ] Setelah `200` dari PUT, perbarui data detail dari `data` dan berikan feedback berhasil.

Selesai bila error validasi multi-field dapat ditampilkan pada masing-masing input tanpa menghapus input pengguna.

## Hapus produk

- [ ] Sediakan aksi hapus hanya pada area admin atau halaman manajemen produk.
- [ ] Tampilkan dialog konfirmasi yang menyebut nama produk sebelum memanggil `DELETE /api/products/:id`.
- [ ] Saat konfirmasi, kirim DELETE dan tangani `204` sebagai sukses tanpa mencoba parse JSON body.
- [ ] Setelah sukses, hapus item dari state/cache dan arahkan pengguna ke daftar produk bila sedang berada di halaman detail.
- [ ] Tangani `404` bila produk sudah dihapus dari sesi lain, lalu refresh daftar atau arahkan pengguna dengan pesan yang jelas.
- [ ] Pastikan tombol tidak dapat diklik berulang saat penghapusan berlangsung.

Selesai bila produk tidak lagi muncul di daftar atau detail setelah delete berhasil.

## Quality dan testing

- [ ] Buat unit test formatter harga, parser envelope, dan pemetaan Problem Details ke error UI.
- [ ] Buat component test untuk loading, data sukses, stok habis, validasi form, `404`, dan error jaringan/server.
- [ ] Buat end-to-end test untuk alur daftar → detail → tambah/ubah → hapus bila tooling tersedia.
- [ ] Uji tampilan pada layar kecil dan desktop serta keyboard navigation untuk form dan dialog hapus.
- [ ] Pastikan gambar memiliki alt text, form memiliki label, dan pesan error dapat diakses pembaca layar.
- [ ] Jalankan formatter, linter, type check, dan test dalam CI.

Selesai bila integrasi front end tidak memakai data produk hardcode dan semua state utama telah diuji.
