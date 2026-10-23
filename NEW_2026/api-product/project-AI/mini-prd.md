# Mini PRD: Molecule 01 + Champaca

**Studi kasus:** halaman produk Escentric Molecules  
**Konteks:** pembelajaran Front-end Development  
**Teknologi:** HTML, CSS, JavaScript murni  
**Platform:** web responsif, satu halaman produk  
**Versi:** 1.0 · 1 Oktober 2026

## 1. Overview

Dokumen ini mendefinisikan mini product requirements document untuk membangun halaman produk Molecule 01 + Champaca sebagai studi kasus pembelajaran front-end. Halaman mengambil pola dari halaman produk Escentric Molecules: galeri foto, ringkasan aroma dan harga, pemilih jumlah, tombol tambah ke tas, serta informasi produk yang dapat dibuka.

Implementasi adalah prototipe front-end statis. Harga referensi £135 untuk ukuran 100 ml dan karakter aroma Woody, Floral, Aromatic mengikuti informasi yang terlihat pada halaman referensi saat studi dilakukan. Keranjang hanya simulasi di browser; tidak ada transaksi atau inventaris nyata.

**Referensi:** [Molecule 01 + Champaca | Escentric Molecules](https://www.escentric.com/products/molecule-01-champaca)

## 2. Problem + Target User

### Problem

Pengunjung halaman produk perlu memahami produk dan karakter aromanya, melihat visual botol, memilih jumlah, lalu memperoleh umpan balik yang jelas saat menambahkan produk ke tas. Untuk pembelajar front-end, studi kasus ini perlu cukup nyata untuk melatih struktur semantik, layout responsif, aksesibilitas dasar, dan interaksi DOM tanpa bergantung pada framework atau backend.

### Target User

- **Calon pembeli parfum niche:** ingin memindai nama, ukuran, harga, karakter aroma, dan visual sebelum mengambil keputusan.
- **Pembelajar front-end pemula:** ingin mempelajari implementasi satu alur e-commerce kecil menggunakan HTML, CSS, dan JavaScript murni.

## 3. Goals + Non-Goals

### Goals

- Menyajikan informasi utama satu produk dalam satu halaman yang mudah dipindai.
- Membuat galeri gambar, kontrol kuantitas, dan umpan balik tambah ke tas berfungsi tanpa reload.
- Menjaga konten dan kontrol tetap terbaca serta dapat digunakan pada desktop dan ponsel.
- Menunjukkan praktik dasar HTML semantik, label aksesibel, CSS responsif, dan manipulasi DOM.

### Non-Goals

- Checkout, pembayaran, pajak, ongkos kirim aktual, akun, wishlist tersimpan, atau integrasi e-commerce.
- Backend, API, database, autentikasi, pencarian katalog, atau halaman produk lain.
- Pemilihan ukuran/varian selain ukuran referensi 100 ml.
- Menyalin seluruh situs, navigasi multi-halaman, promosi pop-up, atau sistem analitik.

## 4. User Flow

1. Pengunjung membuka halaman dan melihat foto, nama produk, harga, ukuran, serta karakter aroma.
2. Pengunjung memilih thumbnail untuk mengganti foto utama.
3. Pengunjung membaca deskripsi atau informasi aroma/pengiriman melalui panel detail.
4. Pengunjung menambah atau mengurangi jumlah; jumlah minimum adalah satu.
5. Pengunjung menekan **Tambah ke tas**.
6. Halaman menambah jumlah item ke penghitung tas dan menampilkan konfirmasi sementara.

## 5. Features + Requirements

| ID | Fitur | Requirement |
| --- | --- | --- |
| F-01 | Informasi produk | Tampilkan nama Molecule 01 + Champaca, harga referensi £135, ukuran 100 ml, dan karakter Woody, Floral, Aromatic. |
| F-02 | Galeri | Tampilkan satu foto utama dan minimal dua thumbnail. Memilih thumbnail memperbarui foto utama, teks alternatif, status terpilih, dan indeks gambar. |
| F-03 | Kuantitas | Sediakan kontrol tambah/kurang dengan nilai awal 1 dan batas bawah 1. Nilai selalu terlihat. |
| F-04 | Tas simulasi | Klik tambah ke tas menjumlahkan kuantitas terpilih ke penghitung tas dan menampilkan konfirmasi yang diumumkan ke pembaca layar. |
| F-05 | Informasi tambahan | Sediakan panel deskripsi, karakter aroma, serta pengiriman/pengembalian yang dapat dibuka dan ditutup. |
| F-06 | Responsif | Susun galeri dan informasi berdampingan pada layar lebar dan bertumpuk pada layar kecil tanpa scroll horizontal. |
| F-07 | Aksesibilitas dasar | Gunakan landmark dan heading semantik, tombol dengan nama aksesibel, alt gambar, focus keyboard bawaan, dan status dinamis yang diumumkan. |
| F-08 | Batas prototipe | Tampilkan keterangan bahwa halaman adalah demo dan tidak memproses pembayaran. |

## 6. User Stories

- Sebagai calon pembeli, saya ingin melihat beberapa foto produk agar dapat memahami botol dan kemasannya.
- Sebagai calon pembeli, saya ingin melihat harga, ukuran, dan karakter aroma agar dapat menilai produk tanpa mencari informasi terpisah.
- Sebagai calon pembeli, saya ingin memilih jumlah dan mendapatkan konfirmasi setelah menambahkannya ke tas agar tindakan saya terasa berhasil.
- Sebagai pengguna ponsel, saya ingin informasi dan kontrol menyesuaikan lebar layar agar halaman tetap nyaman digunakan.
- Sebagai pembelajar, saya ingin melihat alur interaktif yang dibuat dengan JavaScript murni agar dapat mempelajari event dan manipulasi DOM.

## 7. Acceptance Criteria

- **AC-01:** Saat halaman dimuat, nama produk, harga £135, ukuran 100 ml, karakter aroma, foto utama, dan kuantitas 1 terlihat.
- **AC-02:** Saat thumbnail lain dipilih, foto utama dan alt text berubah sesuai thumbnail; hanya thumbnail aktif yang ditandai terpilih.
- **AC-03:** Saat tombol kurang ditekan pada kuantitas 1, nilainya tetap 1.
- **AC-04:** Saat tombol tambah ditekan, kuantitas bertambah tepat satu dan nilai terbaru langsung terlihat.
- **AC-05:** Saat tambah ke tas ditekan, penghitung bertambah sebanyak kuantitas saat ini dan konfirmasi tampil tanpa reload.
- **AC-06:** Panel detail bisa dibuka dan ditutup menggunakan mouse maupun keyboard.
- **AC-07:** Pada viewport 390 px, konten tidak menyebabkan scroll horizontal dan kontrol utama tetap dapat digunakan.
- **AC-08:** Tidak ada alur pembayaran nyata; status demo disampaikan pada halaman.

## 8. Constraints + Success Criteria

### Constraints

- Implementasi hanya memakai HTML, CSS, dan JavaScript murni; tanpa framework, library UI, atau backend.
- Scope dibatasi pada satu halaman produk dan satu produk dengan ukuran 100 ml.
- Harga/visual adalah snapshot studi kasus, bukan informasi penawaran atau ketersediaan yang dijamin tetap.
- Foto produk merujuk aset yang disajikan situs referensi; koneksi internet diperlukan untuk memuat gambar dan font eksternal.
- Penghitung tas hanya hidup selama sesi halaman dan tidak tersimpan setelah refresh.
- Identitas merek, nama produk, dan foto tetap milik pemilik masing-masing; implementasi ini hanya untuk pembelajaran.

### Success Criteria

- Seluruh acceptance criteria AC-01 sampai AC-08 dapat didemonstrasikan pada halaman.
- Interaksi galeri, kuantitas, detail, dan tambah ke tas bekerja tanpa error JavaScript dan tanpa reload.
- Layout dapat digunakan pada viewport desktop dan ponsel tanpa overflow horizontal.
- Halaman dapat dijalankan langsung dari file statis di browser modern tanpa proses build atau instalasi dependency aplikasi.