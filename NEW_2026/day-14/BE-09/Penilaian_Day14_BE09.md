# Penilaian Assignment Day 14 — BE 09 (Backend Batch 09)

Mini Project: Sistem Checkout Produk Sederhana (Computational Thinking, Flowchart, Pseudocode, JavaScript)

Cara hitung nilai: tiap indikator skor 0-3, dikonversi skor/3 × 20 (3 = 20, 2 = 13,33, 1 = 6,67, 0 = 0). Total maksimal 100.
Batas lulus: 75 untuk penyaluran kerja, 65 untuk lulus bootcamp.
Deadline: Rabu, 28 Oktober 2026 pukul 23.30 WIB. Waktu submit di bawah diambil dari commit terakhir di repo.

Standar penilaian: mengikuti ketentuan di assignment guidance saja (tidak menilai best practice kode), dengan mempertimbangkan bahwa student masih belajar. Hasil yang salah tetap dihitung sebagai kesalahan logika.

Cara saya cek: semua file dibaca, gambar flowchart dilihat langsung (plus isi file .drawio), dan `hitungCheckout` tiap student dipanggil dengan Node memakai 15 kasus: member, non-member, di bawah/tepat/di atas Rp250.000, jebakan member 130.000 × 2 (subtotal Rp260.000 → setelah diskon Rp234.000 → harus kena ongkir, total Rp249.000), jumlah 0, jumlah 1,5, harga 0/negatif/string/NaN/Infinity, jumlah string, dan isMember bukan boolean.

## Ringkasan batch

- Adrian Surya Atmaja: 100 (lulus penyaluran kerja)
- Gilang Moh Ikbal: 100 (lulus penyaluran kerja)
- Jihadul Hanif: 100 − 6 (telat ±23,5 jam) = 94 (lulus penyaluran kerja)
- Richie Leonardo: 80 (lulus penyaluran kerja)

Catatan untuk Kak Daffa:

- Semua `hitungCheckout` di batch ini lolos 8 skenario wajib dan kasus jebakan member, termasuk cek ongkir dari total setelah diskon dan `>=` di Rp250.000.
- Jihadul: commit terakhir 29 Okt 22.59 WIB, sekitar 23,5 jam setelah deadline, jadi penalti −6 (rentang 1×24 jam).
- Richie: flowchart-nya punya cabang member yang terbalik (Ya → Diskon 0, Tidak → Diskon 10%), sedangkan kode dan pseudocode-nya benar. Sesuai arahan Kak Daffa, hasil flowchart yang salah dihitung sebagai kesalahan logika, jadi skor Flowchart 1. Indikator lain dinilai sesuai guidance tanpa mengurangi lagi untuk kesalahan yang sama.
- Gilang: di testing.md ada kalimat sisa dari AI ("Kolom actual berasal dari kode referensi... jika menggunakan implementasi sendiri, perbarui kolom actual"), dan README menyebut ChatGPT memberi "contoh implementasi JavaScript". Hasilnya benar (saya jalankan sendiri), tapi mungkin perlu dicek di kelas apakah Gilang bisa menjelaskan kodenya.
- Jihadul: dokumentasinya sangat lengkap dan sangat "dipoles" AI (sudah diakui di README). Sama seperti Gilang, cukup dicek pemahamannya secara lisan.
- Bonus: saya beri 0 untuk semua. Yang paling layak diapresiasi lebih adalah Adrian dan Gilang, karena mereka menambah skenario uji di luar 8 skenario wajib (isMember non-boolean, harga string, jebakan diskon member). Silakan tambahkan bonus kalau Kakak mau.

---

## 1. Adrian Surya Atmaja

- Repo: https://github.com/drianss89/CheckoutSistem-Assignment5-Dibimbing
- Commit terakhir: 28 Okt 2026, 13.10 WIB (tepat waktu, tanpa penalti)
- Deliverables: README.md, analysis.md, flowchart.drawio, flowchart-checkoutSistem.png, pseudocode.md, checkout.js, testing.md (lengkap)
- Hasil uji: 15/15 kasus sesuai, `node checkout.js --test` → 9/9 lulus

### Computational Thinking: 3 (Sesuai)

Feedback:
Mantap, Adrian! analysis.md kamu lengkap dan runtut: input dengan syaratnya, 10 langkah proses, output (termasuk bentuk error), pattern recognition (validasi berurutan, percabangan member, percabangan ongkir, perhitungan berantai), dan abstraction yang jelas menyebut apa yang tidak dimodelkan. Bagian "Asumsi Implementasi" (misalnya string "2" ditolak, dan catatan soal representasi uang) menunjukkan kamu berpikir sampai ke edge case. Pertahankan!

### Flowchart: 3 (Sesuai)

Feedback:
Flowchart kamu sudah memuat semua yang diminta guidance: validasi input dengan kriteria tertulis jelas, jalur "Tidak" langsung ke pesan error lalu Selesai, subtotal, cabang member, total setelah diskon, keputusan ongkir ≥ Rp250.000, dan output. Label Ya/Tidak juga ada di setiap cabang. Tips kecil untuk berikutnya: simbol input dan output ("Input harga, jumlah, status member", "Output rincian checkout", dan pesan error) biasanya digambar dengan jajar genjang, dan nama file PNG bisa disamakan dengan yang disebut di README (`flowchart.png`).

### Pseudocode: 3 (Sesuai)

Feedback:
Pseudocode kamu jelas, terstruktur (FUNCTION, IF/ELSE/END IF, RETURN), dan urutannya sama persis dengan flowchart: validasi → subtotal → diskon → total setelah diskon → ongkir → total pembayaran. Pesan error yang berbeda per jenis validasi juga nilai plus.

### JavaScript Implementation: 3 (Sesuai)

Feedback:
Implementasi `hitungCheckout` kamu benar semua. Saya uji dengan 15 kasus, termasuk jebakan member Rp260.000 (setelah diskon Rp234.000, tetap kena ongkir) dan input aneh seperti NaN, Infinity, jumlah berupa string, serta isMember bukan boolean, dan semuanya tertangani dengan benar. Fungsi mengembalikan rincian perhitungan atau pesan error sesuai ketentuan, dan ada test runner lewat flag `--test`. Keren!

### Testing dan Dokumentasi: 3 (Sesuai)

Feedback:
Testing kamu lengkap: 9 skenario dengan input, expected, dan hasil, ditambah test otomatis yang bisa dijalankan dengan `node checkout.js --test`. README juga lengkap (nama, deskripsi, cara menjalankan, aturan bisnis, ringkasan AI, struktur berkas). Saran kecil: T3 ("di bawah Rp250.000") memakai input yang sama persis dengan T1, jadi lebih baik pakai input berbeda supaya skenarionya benar-benar terpisah. Kamu juga bisa menambah skenario member yang subtotalnya di atas Rp250.000 tapi setelah diskon jadi di bawah (contoh 130.000 × 2), karena itu kasus jebakan yang paling sering salah.

### Review Submission

Kerja yang sangat solid, Adrian! Semua deliverable lengkap, logikanya benar, dan kamu bahkan menambah validasi isMember serta test otomatis. Submission ini bisa jadi contoh yang baik untuk teman-teman. Pertahankan kebiasaan menulis asumsi dan menguji edge case ya!

### Bonus

0

### Nilai

- Skor: 3 / 3 / 3 / 3 / 3
- Total: 100
- Penalti telat: 0
- Nilai akhir: 100 (lulus penyaluran kerja)

---

## 2. Gilang Moh Ikbal

- Repo: https://github.com/GilangMohIkbal/Sistem-Chechout-Produk
- Commit terakhir: 24 Okt 2026, 19.37 WIB (tepat waktu, tanpa penalti)
- Deliverables: README.md, analysis.md, "Untitled Diagram.drawio.png" (PNG yang menyimpan data draw.io, jadi masih bisa diedit), pseudocode.md, checkout.js, testing.md. Tidak ada file `flowchart.drawio`/`flowchart.png` terpisah seperti yang disebut di README.
- Hasil uji: 15/15 kasus sesuai, output terminal sama dengan testing.md

### Computational Thinking: 3 (Sesuai)

Feedback:
Bagus sekali, Gilang! Analysis kamu lengkap: deskripsi masalah, decomposition 8 bagian, input dengan syarat, proses berurutan, output, tiga aturan keputusan yang ditulis sebagai pertanyaan (input valid? member? total ≥ Rp250.000?), pattern recognition, dan abstraction. Saran kecil: di bagian abstraction, tambahkan juga detail apa yang sengaja diabaikan (misalnya nama produk, alamat, metode pembayaran), supaya terlihat proses "menyaring" informasinya.

### Flowchart: 3 (Sesuai)

Feedback:
Flowchart kamu benar dan simbolnya tepat: oval untuk Start/End, jajar genjang untuk input/output, belah ketupat untuk keputusan dengan label True/False, jalur "Input tidak valid" langsung ke End, dan keputusan ongkir sudah memakai total setelah diskon ≥ Rp250.000. Beberapa saran supaya makin rapi: (1) tulis kriteria validasi di dalam belah ketupat, misalnya "harga > 0 dan jumlah bilangan bulat > 0?", (2) ada typo "pembaayaran", (3) beri nama file sesuai deliverable (`flowchart.drawio` dan `flowchart.png`), karena README kamu menyebut nama itu tapi filenya bernama "Untitled Diagram.drawio.png".

### Pseudocode: 3 (Sesuai)

Feedback:
Pseudocode kamu jelas dan konsisten dengan flowchart: START, INPUT, satu IF validasi yang lengkap (finite, > 0, bilangan bulat, boolean), lalu SET subtotal, IF member, SET totalSetelahDiskon, IF ongkir, OUTPUT totalBayar, END. Penggunaan SET dan OUTPUT membuatnya mudah dipetakan ke simbol flowchart. Pertahankan gaya penulisan ini!

### JavaScript Implementation: 3 (Sesuai)

Feedback:
Fungsi `hitungCheckout` kamu bekerja dengan benar. Saya uji dengan 15 kasus, termasuk harga NaN/Infinity/string dan jumlah berupa string, dan semuanya sesuai aturan. Alurnya juga sama persis dengan pseudocode kamu.

### Testing dan Dokumentasi: 3 (Sesuai)

Feedback:
Testing kamu sangat baik: 9 skenario dengan input, expected, actual, dan status, ditambah skenario ke-9 (member dengan subtotal di atas batas tapi setelah diskon di bawah batas) yang menguji jebakan paling penting di case ini, plus perhitungan manual dan output terminal. README juga lengkap. Satu catatan: di testing.md masih ada kalimat "Kolom actual di bawah berasal dari menjalankan kode referensi... Jika menggunakan implementasi sendiri, perbarui kolom actual". Sebaiknya kalimat seperti ini dihapus dan diganti dengan hasil dari kode kamu sendiri. Pastikan juga kamu bisa menjelaskan setiap baris kode yang dikumpulkan ya.

### Review Submission

Submission yang rapi dan benar, Gilang! Semua logika lolos pengujian, dan skenario tambahan untuk kasus diskon member menunjukkan kamu paham titik rawan di soal ini. Perbaikan berikutnya cukup kecil: rapikan nama file flowchart dan hapus catatan sisa dari AI di testing.md. Terima kasih juga sudah mengumpulkan jauh sebelum deadline!

### Bonus

0

### Nilai

- Skor: 3 / 3 / 3 / 3 / 3
- Total: 100
- Penalti telat: 0
- Nilai akhir: 100 (lulus penyaluran kerja)

---

## 3. Jihadul Hanif

- Repo: https://github.com/jihadulhaniffs/mini-project-day5-checkout-dibimbing
- Commit terakhir: 29 Okt 2026, 22.59 WIB (telat sekitar 23,5 jam → penalti −6)
- Deliverables: README.md, analysis.md, flowchart.drawio, flowchart.png, pseudocode.md, checkout.js, testing.md, .gitignore (lengkap)
- Hasil uji: 15/15 kasus sesuai, `node checkout.js` → 8/8 PASSED

### Computational Thinking: 3 (Sesuai)

Feedback:
Analysis kamu sangat lengkap, Jihadul! Ada decomposition 7 komponen, pattern recognition (guard clause, diskon biner, threshold, waterfall calculation), abstraction yang memisahkan informasi esensial dan yang diabaikan, serta decision table untuk validasi, diskon, ongkir, dan 8 skenario. Ini contoh decomposition yang sangat terstruktur. Saran: tetap latih menulis versi yang lebih ringkas dengan bahasamu sendiri, karena saat interview kamu perlu bisa menjelaskan ini secara lisan dengan sederhana.

### Flowchart: 3 (Sesuai)

Feedback:
Flowchart kamu benar dan rapi: simbol tepat (terminator, jajar genjang untuk input/output, persegi untuk proses, belah ketupat untuk keputusan), kriteria validasi tertulis di dalam keputusan, jalur "Input tidak valid" langsung ke End, keputusan ongkir memakai totalAfterDiscount >= 250000, dan semua cabang berlabel Yes/No. Isi file .drawio juga sama dengan PNG-nya.

### Pseudocode: 3 (Sesuai)

Feedback:
Pseudocode kamu jelas, berurutan, dan konsisten 1:1 dengan flowchart serta kode JavaScript, bahkan ada penjelasan konvensi notasi dan traceability-nya. Validasi dipecah per input dengan pola guard clause, sehingga mudah dibaca. Bagian "Program Utama (Test Runner)" juga nilai plus. Pertahankan!

### JavaScript Implementation: 3 (Sesuai)

Feedback:
Implementasi `hitungCheckout` kamu benar semua. Saya uji dengan 15 kasus, termasuk jebakan member 130.000 × 2 (total Rp249.000) dan input seperti NaN, Infinity, jumlah string, serta isMember bukan boolean. Fungsi mengembalikan rincian perhitungan lengkap atau pesan "Input tidak valid", dan ada test suite bawaan. Rapi sekali!

### Testing dan Dokumentasi: 3 (Sesuai)

Feedback:
Testing kamu sangat lengkap: 8 skenario wajib dengan perhitungan expected, output aktual, status, dan log konsol asli. README juga lengkap, termasuk catatan penggunaan AI yang jujur dan detail. Saran: tambahkan satu skenario member yang subtotalnya di atas Rp250.000 tapi setelah diskon jadi di bawah Rp250.000 (contoh 130.000 × 2), karena itu kasus yang paling sering salah. Perbaiki juga label "Day 5" di README dan nama repo supaya sesuai dengan Day 14.

### Review Submission

Jihadul, submission kamu sangat lengkap dan semua logikanya benar. Dokumentasinya juga termasuk yang paling detail di kelas. Sayangnya pengumpulannya terlambat sekitar 23 jam, jadi ada pengurangan nilai sesuai ketentuan. Ke depannya, coba kumpulkan versi yang sudah benar lebih dulu sebelum deadline, lalu poles setelahnya. Karena dokumentasi ini banyak dibantu AI, pastikan juga kamu bisa menjelaskan flowchart, pseudocode, dan kodenya dengan bahasamu sendiri ya. Great job!

### Bonus

0

### Nilai

- Skor: 3 / 3 / 3 / 3 / 3
- Total: 100
- Penalti telat: −6 (rentang 1×24 jam setelah deadline)
- Nilai akhir: 94 (lulus penyaluran kerja)

---

## 4. Richie Leonardo

- Repo: https://github.com/traxside/sistem-checkout-produk-sederhana
- Commit terakhir: 28 Okt 2026, 02.35 WIB (tepat waktu, tanpa penalti)
- Deliverables: README.md, analysis.md, flowchart.drawio, flowchart.png, pseudocode.md, checkout.js, testing.md (lengkap)
- Hasil uji: semua skenario wajib dan kasus jebakan member sesuai

### Computational Thinking: 3 (Sesuai)

Feedback:
Halo Richie! analysis.md kamu sudah memuat semua bagian yang diminta guidance: input, output, alur proses (di bagian algorithmic thinking), pattern recognition, dan abstraction, termasuk angka-angka aturan seperti tarif diskon dan batas gratis ongkir. Tips untuk berikutnya: aturan keputusannya bisa ditulis lebih eksplisit, misalnya "member dapat diskon 10%" dan "ongkir gratis kalau total setelah diskon ≥ Rp250.000, selain itu Rp15.000", supaya pembaca langsung paham tanpa melihat kode.

### Flowchart: 1 (Kurang Sesuai)

Feedback:
Flowchart kamu sudah lengkap komponennya, simbolnya tepat (oval, jajar genjang, persegi, belah ketupat), kriteria validasi tertulis jelas, dan keputusan ongkir sudah memakai subtotal setelah diskon ≥ 250000. Tapi ada satu kesalahan penting di keputusan "Pembeli produk merupakan member?": cabang "Ya" menuju "Diskon = 0" dan cabang "Tidak" menuju "Diskon = 10%". Artinya kalau flowchart ini diikuti, member tidak dapat diskon dan non-member justru dapat diskon, sehingga hasil totalnya salah. Karena hasil akhirnya salah, skor flowchart ini belum bisa tinggi. Tukar label atau arah panahnya ya, dan biasakan melakukan dry run (coba satu contoh angka) mengikuti flowchart sebelum dikumpulkan.

### Pseudocode: 3 (Sesuai)

Feedback:
Pseudocode kamu jelas dan logikanya benar: INPUT, validasi, subtotal, diskon member, ongkir dengan batas ≥ 250000, total, lalu OUTPUT, termasuk jalur "Input tidak valid". Urutannya juga sama dengan flowchart kamu. Catatan kecil: di bagian member, pseudocode kamu sudah benar (member → diskon 0.1), sedangkan di flowchart cabangnya tertukar. Jadi setelah flowchart diperbaiki, keduanya akan sepenuhnya cocok.

### JavaScript Implementation: 3 (Sesuai)

Feedback:
Fungsi `hitungCheckout` kamu benar untuk semua skenario wajib dan juga kasus jebakan member Rp260.000 (hasil Rp249.000). Validasinya sudah memakai `Number.isInteger` dan cek boolean, keren!

### Testing dan Dokumentasi: 2 (Cukup Sesuai)

Feedback:
8 skenario wajib di testing.md sudah lengkap, dengan expected output dan detail perhitungannya. Yang masih kurang adalah hasil pengujiannya: guidance meminta skenario uji beserta hasilnya, jadi tambahkan kolom actual output dan status lulus/gagal. Kamu sudah punya `console.log` di checkout.js, jadi tinggal salin hasil terminalnya ke tabel. README sudah berisi nama, deskripsi, cara menjalankan, dan ringkasan AI, bagus! Struktur file di README belum mencantumkan flowchart.drawio, jadi tambahkan juga.

### Review Submission

Richie, secara kode kamu sudah sangat paham soalnya, karena semua skenario wajib berjalan benar dan pseudocode-mu juga tepat. Ada dua hal yang perlu diperbaiki: cabang member di flowchart yang tertukar (sehingga hasil totalnya jadi salah kalau flowchart diikuti), dan testing yang belum mencantumkan hasil aktual. Keduanya mudah diperbaiki. Kebiasaan yang perlu dilatih: setelah selesai, cocokkan lagi flowchart, pseudocode, dan kode satu per satu. Semangat terus!

### Bonus

0

### Nilai

- Skor: 3 / 1 / 3 / 3 / 2
- Total: 20 + 6,67 + 20 + 20 + 13,33 = 80
- Penalti telat: 0
- Nilai akhir: 80 (lulus penyaluran kerja)
