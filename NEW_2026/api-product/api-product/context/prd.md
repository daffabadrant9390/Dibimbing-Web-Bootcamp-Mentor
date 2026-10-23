# PRD API Detail Produk

## Ringkasan

Produk ini menyediakan REST API untuk memasok seluruh informasi pada halaman detail produk 2 di aplikasi front-end. Pada tahap awal, data produk disimpan secara hardcode di back end; database tidak termasuk ruang lingkup.

Hasil yang diharapkan adalah REST API CRUD yang dapat diakses front end secara konsisten untuk melihat, menambah, mengubah, dan menghapus produk. Setiap data produk memuat nama, harga, foto, variasi, stok, dan deskripsi. API dibangun dengan JavaScript dan dapat menggunakan Express.js atau framework JavaScript yang setara.

## Tujuan dan ruang lingkup

Tujuan:

- Menyediakan operasi CRUD produk melalui REST API.
- Memungkinkan halaman detail produk 2 terisi dari respons API, bukan data yang ditulis langsung di front end.
- Memberikan respons dan pesan kesalahan yang jelas saat ID produk tidak valid atau produk tidak ditemukan.

Termasuk dalam ruang lingkup:

- Endpoint daftar, detail, pembuatan, perubahan, dan penghapusan produk.
- Data produk hardcode di aplikasi back end.
- Validasi parameter `id` dan request body.
- Respons JSON untuk sukses dan kegagalan.

Di luar ruang lingkup:

- Database, autentikasi dan otorisasi, pembayaran, dan keranjang belanja.
- Unggah gambar atau pengelolaan inventori secara real-time.

## Pengguna dan kebutuhan

| Pengguna | Kebutuhan |
| --- | --- |
| Pengunjung aplikasi | Melihat informasi detail produk yang lengkap dan akurat. |
| Aplikasi front-end | Mendapatkan kontrak JSON yang stabil untuk mengisi halaman detail produk. |
| Developer | Memiliki aturan validasi dan respons error yang mudah diuji. |

## Kontrak API

### Endpoint

`GET /api/products/:id`

Endpoint ini mengambil satu produk berdasarkan ID numerik positif.

Contoh permintaan: `GET /api/products/1`

### Standar format respons

Semua respons sukses yang memiliki body memakai envelope JSON berikut. `data` berisi resource atau koleksi resource; `meta` berisi metadata yang relevan. Endpoint `DELETE` yang sukses tetap menggunakan `204 No Content` dan tidak memiliki body.

```json
{
  "data": {},
  "meta": {}
}
```

Respons sukses memakai `Content-Type: application/json; charset=utf-8`. Error memakai format [RFC 9457 Problem Details](https://www.rfc-editor.org/rfc/rfc9457.html) dan header `Content-Type: application/problem+json; charset=utf-8`; format ini menyediakan detail error yang dapat diproses oleh client secara konsisten.

### Respons sukses detail produk

Status: `200 OK`

```json
{
  "data": {
    "id": 1,
    "name": "Nama Product",
    "price": 150000,
    "image": "https://example.com/product.png",
    "variants": {
      "colorOrSize": ["S", "M", "L"],
      "quantity": 10
    },
    "description": "Deskripsi singkat product."
  },
  "meta": {}
}
```

### Respons kegagalan

Parameter ID tidak valid — status `400 Bad Request`:

```json
{
  "type": "https://api.example.com/problems/invalid-product-id",
  "title": "Invalid product ID",
  "status": 400,
  "detail": "Product ID must be a positive integer",
  "instance": "/api/products/0"
}
```

Produk tidak ditemukan — status `404 Not Found`:

```json
{
  "type": "https://api.example.com/problems/product-not-found",
  "title": "Product not found",
  "status": 404,
  "detail": "No product exists with ID 999999",
  "instance": "/api/products/999999"
}
```

Kesalahan tak terduga — status `500 Internal Server Error`:

```json
{
  "type": "about:blank",
  "title": "Internal Server Error",
  "status": 500,
  "detail": "An unexpected error occurred"
}
```

Pesan pada respons `500` tidak boleh membocorkan stack trace, detail konfigurasi, atau data internal.

### Endpoint CRUD lain

| Operasi | Endpoint | Tujuan | Respons sukses |
| --- | --- | --- | --- |
| Daftar produk | `GET /api/products` | Mengambil semua produk. | `200 OK` dengan `data` array Product dan `meta.total`; array kosong valid bila belum ada produk. |
| Tambah produk | `POST /api/products` | Membuat produk baru dari request body. | `201 Created` dengan `data` Product yang dibuat dan header `Location`. |
| Ubah produk | `PUT /api/products/:id` | Mengganti seluruh data produk pada ID yang tersedia. | `200 OK` dengan `data` Product hasil perubahan. |
| Hapus produk | `DELETE /api/products/:id` | Menghapus produk pada ID yang tersedia. | `204 No Content` tanpa response body. |

`POST` dan `PUT` menerima header `Content-Type: application/json`. `PUT` adalah penggantian penuh, sehingga seluruh field wajib Product harus dikirim; pembaruan sebagian (`PATCH`) tidak termasuk ruang lingkup.

Contoh respons daftar produk:

```json
{
  "data": [
    {
      "id": 1,
      "name": "Kaos Katun Polos",
      "price": 150000,
      "image": "https://example.com/kaos-katun.png",
      "variants": {
        "colorOrSize": ["S", "M", "L"],
        "quantity": 10
      },
      "description": "Kaos katun nyaman untuk penggunaan sehari hari."
    }
  ],
  "meta": {
    "total": 1
  }
}
```

Contoh body `POST /api/products` dan `PUT /api/products/1`:

```json
{
  "name": "Kaos Katun Polos",
  "price": 150000,
  "image": "https://example.com/kaos-katun.png",
  "variants": {
    "colorOrSize": ["S", "M", "L"],
    "quantity": 10
  },
  "description": "Kaos katun nyaman untuk penggunaan sehari hari."
}
```

Untuk `POST`, ID dibuat oleh server sebagai integer positif yang unik. Field `id` pada body harus ditolak dengan `400` agar kesalahan integrasi langsung terlihat. Pada `PUT`, `id` hanya ditentukan dari parameter URL; field `id` pada body juga ditolak sebagai field tidak dikenal.

Format error validasi body — status `400 Bad Request`:

```json
{
  "type": "https://api.example.com/problems/validation-error",
  "title": "Request validation failed",
  "status": 400,
  "detail": "One or more request fields are invalid",
  "instance": "/api/products",
  "errors": [
    {
      "field": "price",
      "message": "Price must be a non-negative integer"
    }
  ]
}
```

Untuk `PUT` atau `DELETE` dengan ID valid tetapi produk tidak tersedia, responsnya mengikuti Problem Details `404` dengan `type` `https://api.example.com/problems/product-not-found`. Body JSON yang malformed juga menghasilkan Problem Details `400` dengan pesan yang aman dan jelas.

## Schema data

### Product

| Field | Tipe | Wajib | Aturan validasi | Keterangan |
| --- | --- | --- | --- | --- |
| `id` | integer | Ya | Bilangan bulat positif dan unik. | Identitas produk. |
| `name` | string | Ya | Setelah trim tidak kosong; maksimal 120 karakter. | Nama yang ditampilkan pada halaman detail. |
| `price` | integer | Ya | Bilangan bulat, `>= 0`, dalam Rupiah. | Harga produk tanpa simbol mata uang. |
| `image` | string | Ya | URL HTTP atau HTTPS yang valid; maksimal 2.048 karakter. | URL foto utama produk. |
| `variants` | object | Ya | Memiliki `colorOrSize` dan `quantity`. | Pilihan dan stok produk. |
| `variants.colorOrSize` | array of string | Ya | Minimal satu nilai; setiap nilai setelah trim tidak kosong, unik, maksimal 50 karakter. | Pilihan warna atau ukuran, mis. `"Merah"` atau `"M"`. |
| `variants.quantity` | integer | Ya | Bilangan bulat, `>= 0`. | Total stok yang tersedia. Nilai `0` berarti habis. |
| `description` | string | Ya | Setelah trim tidak kosong; maksimal 2.000 karakter. | Deskripsi produk. |

### Schema konseptual JSON

```json
{
  "id": "positive integer",
  "name": "non-empty string, max 120 chars",
  "price": "non-negative integer",
  "image": "valid http(s) URL, max 2048 chars",
  "variants": {
    "colorOrSize": ["non-empty unique string, max 50 chars"],
    "quantity": "non-negative integer"
  },
  "description": "non-empty string, max 2000 chars"
}
```

## Aturan validasi input

Validasi dilakukan sebelum pencarian data produk agar input yang tidak dapat diproses tidak berubah menjadi respons `404`.

| Input | Valid | Tidak valid dan respons |
| --- | --- | --- |
| `:id` | String yang hanya berisi digit dan menghasilkan integer positif, mis. `1` atau `25`. | Kosong, `0`, negatif, pecahan, mengandung spasi, huruf, simbol, notasi eksponensial, atau melebihi rentang integer aman JavaScript: `400`. |
| Data produk hardcode | Memenuhi seluruh schema Product sebelum digunakan sebagai respons. | Jika data internal tidak memenuhi schema, jangan kirim data parsial; catat error di server dan kirim `500` tanpa detail internal. |

### Validasi request body untuk POST dan PUT

| Field | Aturan dan respons saat tidak valid |
| --- | --- |
| Body | Harus berupa objek JSON. JSON malformed, array, `null`, atau body kosong menghasilkan `400`. |
| `id` pada POST | Tidak boleh dikirim. Jika ada, hasilnya `400` dengan error pada field `id`. |
| Field wajib | `name`, `price`, `image`, `variants`, dan `description` wajib ada pada `POST` maupun `PUT`. Field yang hilang menghasilkan `400`. |
| Field tidak dikenal | Tidak boleh diterima; hasilnya `400` agar salah eja, misalnya `prices`, tidak tersimpan diam-diam. |
| `name` | Harus string, ditrim, tidak kosong, maksimal 120 karakter. |
| `price` | Harus number integer, bukan string; nilainya `>= 0` dan `<= Number.MAX_SAFE_INTEGER`. |
| `image` | Harus string URL absolut HTTP/HTTPS yang valid dan maksimal 2.048 karakter. |
| `variants` | Harus object biasa yang hanya memiliki `colorOrSize` dan `quantity`. |
| `variants.colorOrSize` | Harus array berisi minimal satu string setelah trim tidak kosong; nilai harus unik tanpa membedakan kapitalisasi dan maksimal 50 karakter per nilai. |
| `variants.quantity` | Harus number integer, `>= 0`, dan `<= Number.MAX_SAFE_INTEGER`. |
| `description` | Harus string, ditrim, tidak kosong, maksimal 2.000 karakter. |

Validasi body dilakukan sebelum produk dibuat atau data lama ditimpa. Bila lebih dari satu field tidak valid, API mengembalikan seluruh daftar error pada `errors` agar klien dapat memperbaiki input dalam satu kali percobaan. `errors` adalah extension member RFC 9457 dan setiap item selalu memuat `field` serta `message`.

Implementasi perlu memeriksa format string `id` terlebih dahulu, lalu mengubahnya dengan aman ke angka. Hindari menerima nilai seperti `1.5`, `1abc`, ` 1`, atau `1e3` hanya karena perilaku parsing JavaScript.

## User stories

1. Sebagai pengunjung, saya ingin membuka detail produk berdasarkan ID agar dapat melihat informasi produk sebelum mengambil keputusan.
2. Sebagai aplikasi front-end, saya ingin menerima data produk dengan field yang konsisten agar seluruh bagian halaman detail dapat terisi otomatis.
3. Sebagai pengunjung, saya ingin diberi tahu ketika produk tidak ada agar saya tidak melihat halaman kosong atau data yang keliru.
4. Sebagai developer, saya ingin API menolak ID yang salah format agar proses pencarian aman dan perilaku endpoint dapat diprediksi.
5. Sebagai developer, saya ingin data hardcode tervalidasi agar kesalahan data tidak menghasilkan UI yang rusak.
6. Sebagai admin katalog, saya ingin melihat daftar produk agar dapat memeriksa produk yang tersedia.
7. Sebagai admin katalog, saya ingin menambahkan produk baru agar produk tersebut dapat ditampilkan di aplikasi.
8. Sebagai admin katalog, saya ingin mengganti seluruh informasi produk agar informasi yang ditampilkan selalu akurat.
9. Sebagai admin katalog, saya ingin menghapus produk yang tidak lagi dijual agar produk tersebut tidak dapat diakses pelanggan.
10. Sebagai admin katalog, saya ingin menerima semua kesalahan input sekaligus agar dapat memperbaiki formulir tanpa percobaan berulang.

## Acceptance criteria

| ID | Kriteria penerimaan |
| --- | --- |
| AC-01 | Permintaan `GET /api/products/1` untuk produk yang tersedia mengembalikan status `200`, `Content-Type: application/json; charset=utf-8`, serta envelope `data` dan `meta`. |
| AC-02 | Respons `200` memuat Product pada `data` dengan struktur `id`, `name`, `price`, `image`, `variants`, dan `description`; semua nilainya memenuhi schema. |
| AC-03 | `variants` memuat array `colorOrSize` minimal satu pilihan dan `quantity` berupa integer non-negatif. |
| AC-04 | Permintaan dengan ID valid tetapi tidak tersedia, misalnya `GET /api/products/999999`, mengembalikan `404` sebagai `application/problem+json` dengan Problem Details `type`, `title`, `status`, `detail`, dan `instance`. |
| AC-05 | Permintaan dengan ID `0`, `-1`, `1.5`, `abc`, `1abc`, `1e3`, atau ID di luar rentang integer aman mengembalikan `400` sebagai `application/problem+json` dengan Problem Details yang jelas. |
| AC-06 | Input ID tidak valid tidak menjalankan pencarian produk dan tidak mengembalikan `404`. |
| AC-07 | Jika validasi data produk internal gagal atau terjadi error tidak tertangani, API mengembalikan `500 application/problem+json` dengan Problem Details generik tanpa stack trace. |
| AC-08 | Halaman detail produk 2 dapat memakai field respons API untuk menampilkan nama, harga, foto, variasi, jumlah/quantity, dan deskripsi tanpa hardcode nilai produk di UI. |
| AC-09 | `GET /api/products` mengembalikan `200` dengan envelope yang memiliki `data` array seluruh Product valid serta `meta.total`; bila data kosong, `data` adalah `[]` dan `meta.total` adalah `0`. |
| AC-10 | `POST /api/products` dengan body valid mengembalikan `201`, `data` Product lengkap, `id` positif unik yang dibuat server, dan header `Location: /api/products/{id}`. Produk baru dapat diambil lewat `GET /api/products/:id`. |
| AC-11 | `POST /api/products` dengan JSON malformed, body kosong, field wajib hilang, field tidak dikenal, atau field `id` mengembalikan `400` dalam format `application/problem+json` dan tidak menambah produk. |
| AC-12 | `POST` dan `PUT` dengan field yang melanggar aturan schema mengembalikan Problem Details `400` dengan `type` validation error dan array `errors` yang menyebut setiap field yang gagal. |
| AC-13 | `PUT /api/products/:id` dengan ID dan body valid mengembalikan `200` dengan data baru lengkap pada `data`; data sebelumnya seluruhnya tergantikan dan dapat dibaca kembali melalui `GET`. |
| AC-14 | `PUT` dengan body parsial, ID tidak valid, atau ID valid yang tidak tersedia mengembalikan masing-masing `400`, `400`, atau `404` dalam format `application/problem+json`; tidak ada perubahan data pada kondisi gagal. |
| AC-15 | `DELETE /api/products/:id` dengan ID tersedia mengembalikan `204` tanpa response body. Permintaan `GET` berikutnya untuk ID tersebut mengembalikan `404`. |
| AC-16 | `DELETE` dengan ID tidak valid menghasilkan `400 application/problem+json`; dengan ID valid tetapi tidak tersedia menghasilkan `404 application/problem+json`; keduanya tidak mengubah data lain. |

## Contoh skenario uji

| Skenario | Request | Expected result |
| --- | --- | --- |
| Produk tersedia | `GET /api/products/1` | `200` dengan `data` Product valid dan `meta`. |
| Produk tidak tersedia | `GET /api/products/999999` | `404 application/problem+json` dengan type product not found. |
| ID nol | `GET /api/products/0` | `400 application/problem+json` dengan type invalid product ID. |
| ID pecahan | `GET /api/products/1.5` | `400 application/problem+json` dengan type invalid product ID. |
| ID alfanumerik | `GET /api/products/1abc` | `400 application/problem+json` dengan type invalid product ID. |
| ID format eksponensial | `GET /api/products/1e3` | `400 application/problem+json` dengan type invalid product ID. |
| Data internal rusak | Produk dengan URL gambar kosong atau quantity negatif | `500 application/problem+json` generik; detail kegagalan hanya dicatat di server. |
| Daftar produk | `GET /api/products` | `200` dengan `data` array seluruh Product valid dan `meta.total`. |
| Tambah produk valid | `POST /api/products` dengan body contoh | `201`, `data` Product lengkap, ID dibuat server, dan header `Location`. |
| Tambah produk invalid | `POST /api/products` dengan `price: -1` dan nama kosong | `400 application/problem+json`, type validation error, error untuk `price` dan `name`; data tidak bertambah. |
| Ubah produk valid | `PUT /api/products/1` dengan body lengkap valid | `200` dengan produk baru di `data`; seluruh data lama terganti. |
| Ubah produk parsial | `PUT /api/products/1` hanya dengan `price` | `400 application/problem+json`; data lama tidak berubah. |
| Hapus produk valid | `DELETE /api/products/1` | `204` tanpa body; `GET /api/products/1` kemudian `404`. |
| Hapus ID tidak ada | `DELETE /api/products/999999` | `404 application/problem+json` dengan type product not found. |

## Definition of done

- Lima endpoint CRUD dapat dijalankan secara lokal dengan Node.js: `GET /api/products`, `GET /api/products/:id`, `POST /api/products`, `PUT /api/products/:id`, dan `DELETE /api/products/:id`.
- Minimal satu data produk valid tersedia untuk diuji sebelum operasi CRUD dijalankan.
- Semua skenario pada acceptance criteria, termasuk efek perubahan data setelah POST, PUT, dan DELETE, telah diverifikasi melalui automated test atau Postman.
- Tidak ada data detail produk yang di-hardcode pada halaman detail produk 2 setelah integrasi.
- Dokumentasi endpoint dan aturan validasi ini diperbarui bila kontrak API berubah.
- Swagger UI tersedia pada `GET /api-docs` dan mendokumentasikan kelima endpoint, schema request/response, header `Location`, serta Problem Details `400`, `404`, dan `500`.
- Dokumen OpenAPI dapat diambil dari `GET /openapi.json` dan tervalidasi di CI.
