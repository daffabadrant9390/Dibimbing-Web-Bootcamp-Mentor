# Penilaian Assignment Day 14 — FE 28 (Frontend Batch 28)

Mini Project: Sistem Checkout Produk Sederhana (Computational Thinking, Flowchart, Pseudocode, JavaScript)

Cara hitung nilai: tiap indikator skor 0-3, dikonversi skor/3 × 20 (3 = 20, 2 = 13,33, 1 = 6,67, 0 = 0). Total maksimal 100.
Batas lulus: 75 untuk penyaluran kerja, 65 untuk lulus bootcamp.
Deadline: Rabu, 28 Oktober 2026 pukul 23.30 WIB. Waktu submit di bawah diambil dari commit terakhir di repo.

Standar penilaian: mengikuti ketentuan di assignment guidance saja (tidak menilai best practice kode), dengan mempertimbangkan bahwa student masih belajar. Hasil yang salah tetap dihitung sebagai kesalahan logika.

Cara saya cek: semua file dibaca, gambar flowchart dilihat langsung, dan checkout.js dijalankan dengan Node memakai kasus uji dari guidance (member, non-member, di bawah/tepat/di atas Rp250.000, jebakan member Rp260.000 yang setelah diskon jadi Rp234.000, jumlah 0, jumlah pecahan, harga 0/negatif/string).

## Ringkasan batch

- Aqidatul Izzah Chairul: 26,67 (belum lulus)
- Mohammad Erfan Suprihadi: 33,33 (belum lulus)

Catatan untuk Kak Daffa: dua student FE 28 sama-sama belum menangkap inti tugas. Aqidatul sudah di jalur yang benar tapi logika ongkirnya terbalik dan analysis.md kosong. Erfan justru membuat halaman checkout web lengkap (HTML, metode pembayaran, dll.), padahal guidance meminta fungsi `hitungCheckout` tanpa UI. Mungkin perlu diingatkan ke kelas bahwa fokus tugas ini adalah logika, bukan tampilan.

---

## 1. Aqidatul Izzah Chairul

- Repo: https://github.com/aqidatulizzahc/-ASSIGNMENT-Day-14---Mini-Project
- Commit terakhir: 28 Okt 2026, 21.10 WIB (tepat waktu, tanpa penalti)
- Deliverables:
  - README.md: ada, tapi hanya judul
  - analysis.md: ada, tapi kosong
  - flowchart.drawio: tidak ada (hanya flowchart.png)
  - flowchart.png: ada
  - pseudocode.md: ada
  - checkout.js: ada
  - testing.md: ada (7 skenario)

Hasil saya jalankan checkout.js (input lewat terminal):

- 100.000 × 2, member: keluar Rp180.000, seharusnya Rp195.000 (ongkir Rp15.000 tidak ditambahkan)
- 100.000 × 2, non-member: keluar Rp200.000, seharusnya Rp215.000
- 125.000 × 2, non-member (tepat Rp250.000): keluar Rp235.000, seharusnya Rp250.000 (malah dikurangi Rp15.000)
- 300.000 × 1, non-member: keluar Rp285.000, seharusnya Rp300.000
- Jumlah 1,5 / harga 0 / harga "abc": "Input tidak valid" (sudah benar)

### Computational Thinking: 0 (Tidak Sesuai)

Feedback:
Halo Aqidatul! File analysis.md kamu masih kosong, jadi bagian problem decomposition belum bisa dinilai. Di bagian ini, coba tuliskan: (1) input apa saja (harga, jumlah, status member), (2) proses yang terjadi berurutan (validasi → subtotal → diskon → ongkir → total), (3) output yang diharapkan, (4) aturan keputusannya (kapan input tidak valid, kapan dapat diskon, kapan gratis ongkir), lalu (5) pattern dan abstraction. Bagian ini penting karena jadi "peta" sebelum kamu menggambar flowchart dan menulis kode. Semangat, isinya bisa singkat yang penting jelas!

### Flowchart: 1 (Kurang Sesuai)

Feedback:
Bagian awal flowchart kamu sudah bagus: validasi harga dan jumlah sudah dipisah, jalur "Tidak" langsung keluar dengan output "Input tidak valid", label Ya/Tidak juga sudah ada. Yang masih perlu diperbaiki ada di logika ongkir. Saat ini kalau subtotal ≥ 250.000, kamu menulis "diskon ongkir 15.000, Subtotal - 15.000", jadi total malah dipotong 15.000. Seharusnya kalau total setelah diskon ≥ Rp250.000 ongkirnya Rp0 (gratis), dan kalau kurang dari Rp250.000 ongkir Rp15.000 DITAMBAHKAN ke total. Saran: buat dua kotak proses terpisah "ongkir = 0" dan "ongkir = 15.000", lalu satu kotak "total bayar = total setelah diskon + ongkir". Tulis juga diskon dengan jelas, misalnya "diskon = 10% × subtotal", dan untuk Start/End gunakan bentuk oval (terminator). Jangan lupa sertakan juga file .drawio-nya.

### Pseudocode: 1 (Kurang Sesuai)

Feedback:
Struktur pseudocode kamu sudah rapi (START, INPUT, IF ... ENDIF, OUTPUT) dan urutannya sama dengan flowchart, ini bagus. Tapi ada dua logika yang perlu dibetulkan: (1) `subtotal <- subtotal * 0.10` artinya total jadi tinggal 10% saja, padahal yang dimaksud diskon 10%, jadi seharusnya `diskon <- subtotal * 0.10` lalu `totalSetelahDiskon <- subtotal - diskon`. (2) Bagian ongkir terbalik: seharusnya IF totalSetelahDiskon >= 250000 THEN ongkir <- 0 ELSE ongkir <- 15000, lalu `total <- totalSetelahDiskon + ongkir`.

### JavaScript Implementation: 1 (Kurang Sesuai)

Feedback:
Validasi input kamu sudah tepat, sudah pakai `Number.isInteger` untuk jumlah dan cek harga > 0, keren! Program juga bisa dijalankan dengan Node. Namun ada beberapa hal yang belum sesuai ketentuan: (1) belum ada fungsi bernama `hitungCheckout(harga, jumlah, isMember)` yang me-return hasil, sekarang semua logika ada di dalam `main()` dengan readline. (2) Logika ongkir terbalik, sehingga hasilnya salah, contohnya 100.000 × 2 untuk member keluar Rp180.000, padahal seharusnya Rp195.000, dan tepat Rp250.000 keluar Rp235.000, padahal seharusnya Rp250.000. Saran: buat fungsi `hitungCheckout` yang me-return objek `{ subtotal, diskon, ongkir, total }` atau string "Input tidak valid", lalu panggil fungsi itu dengan beberapa contoh menggunakan `console.log`.

### Testing dan Dokumentasi: 1 (Kurang Sesuai)

Feedback:
Kamu sudah mencoba membuat tabel testing, ini langkah yang baik. Tapi testing masih perlu dilengkapi: (1) baru ada 7 skenario dan belum mencakup skenario wajib seperti tepat Rp250.000 dan di atas Rp250.000, (2) belum ada kolom hasil aktual (output program) dan status lulus/gagal, (3) beberapa expected output belum sesuai aturan, contohnya jumlah 1,5 seharusnya "Input tidak valid" (bukan 135) dan harga 0 seharusnya juga tidak valid. README juga masih berisi judul saja. Lengkapi README dengan nama, deskripsi case, cara menjalankan (`node checkout.js`), dan catatan penggunaan AI kalau ada.

### Review Submission

Aqidatul, terima kasih sudah mengumpulkan tepat waktu! Bagian validasi input kamu (baik di flowchart, pseudocode, maupun kode) sudah benar, dan itu fondasi yang bagus. PR utamanya ada tiga: isi analysis.md, perbaiki logika ongkir (gratis kalau ≥ Rp250.000, tambah Rp15.000 kalau kurang) dan diskon, lalu bungkus logika ke dalam fungsi `hitungCheckout`. Setelah itu, cocokkan hasilnya dengan 8 skenario wajib di guidance. Kalau ada yang bingung, boleh tanya di kelas ya. Kamu pasti bisa!

### Bonus

0

### Nilai

- Skor: 0 / 1 / 1 / 1 / 1
- Total: 0 + 6,67 + 6,67 + 6,67 + 6,67 = 26,67
- Penalti telat: 0
- Nilai akhir: 26,67 (belum mencapai batas lulus 65)

---

## 2. Mohammad Erfan Suprihadi

- Repo: https://github.com/rfuns/Assignment-Day-14
- Commit terakhir: 28 Okt 2026, 22.53 WIB (tepat waktu, tanpa penalti)
- Deliverables (di folder "Mini Project - Day 14"):
  - Readme.md: ada (deskripsi case disalin dari guidance)
  - Analysis.md: ada
  - Flowchart DAY 14.drawio: ada, tapi tanpa export PNG/PDF
  - pseudocode.txt: ada (berisi potongan kode JavaScript)
  - checkout.js: ada (kode browser/DOM)
  - Testing.pdf: ada (8 skenario UI)
  - Tambahan di luar ketentuan: beli-sekarang.html, bayar-sekarang.html/js, style.css, assets

Hasil cek: checkout.js tidak berisi fungsi `hitungCheckout` dan tidak bisa dijalankan dengan Node (memakai `document`/`localStorage`). Di dalamnya ongkir dibuat tetap Rp10.000 untuk semua transaksi, harga tetap Rp45.000, dan tidak ada aturan gratis ongkir ≥ Rp250.000.

### Computational Thinking: 1 (Kurang Sesuai)

Feedback:
Halo Erfan! Analysis kamu sudah memakai struktur Input, Process, Output, Pattern, dan Abstraction, dan diskon member 10% juga sudah disebut. Sayangnya isi analisisnya lebih banyak membahas form checkout website (nama, no HP, email, metode pembayaran), bukan case study di guidance. Untuk tugas ini, inputnya cukup tiga: harga produk, jumlah produk, dan status member. Aturan keputusannya: validasi harga positif dan jumlah bilangan bulat positif, diskon member 10%, dan ongkir gratis kalau total setelah diskon ≥ Rp250.000 (kalau kurang, Rp15.000). Coba tulis ulang analysis.md dengan fokus ke aturan-aturan itu.

### Flowchart: 1 (Kurang Sesuai)

Feedback:
Flowchart kamu sudah rapi dan menunjukkan kamu paham alur halaman checkout dan halaman bayar, ada percabangan TRUE/FALSE untuk cek kelengkapan form juga. Tapi flowchart yang diminta adalah alur perhitungan checkout, jadi bagian wajibnya belum ada: validasi harga dan jumlah (dengan jalur "input tidak valid"), hitung subtotal, keputusan member/diskon, keputusan ongkir (≥ Rp250.000 setelah diskon), dan output total pembayaran. Jangan lupa juga export flowchart ke PNG atau PDF ya, karena itu termasuk deliverable.

### Pseudocode: 1 (Kurang Sesuai)

Feedback:
File pseudocode.txt kamu saat ini berisi potongan kode JavaScript (fungsi validasi email/HP, updatePaymentInfo, dll.), jadi belum termasuk pseudocode. Pseudocode adalah langkah-langkah dalam bahasa manusia yang terstruktur, contohnya: START, INPUT harga, jumlah, isMember, IF harga <= 0 ATAU jumlah bukan bilangan bulat positif THEN OUTPUT "Input tidak valid", lalu SET subtotal = harga × jumlah, IF member THEN diskon = 10% subtotal ELSE diskon = 0, dan seterusnya sampai OUTPUT total, END. Pastikan juga urutannya sama persis dengan flowchart kamu.

### JavaScript Implementation: 1 (Kurang Sesuai)

Feedback:
Effort kamu di sisi kode luar biasa, ada validasi format email/HP, pilihan bank dan e-wallet, sampai countdown pembayaran. Perhitungan subtotal dan diskon member 10% juga sudah ada di fungsi `render()`. Namun ketentuan tugas belum terpenuhi: (1) belum ada fungsi `hitungCheckout(harga, jumlah, isMember)` yang me-return hasil atau pesan error, (2) belum ada validasi harga positif dan jumlah bilangan bulat (jumlah malah otomatis di-clamp ke 1-15), (3) ongkir dibuat tetap Rp10.000, padahal aturannya gratis kalau ≥ Rp250.000 dan Rp15.000 kalau kurang, (4) kode tidak bisa dijalankan dengan `node checkout.js` karena bergantung ke `document` dan `localStorage`. Saran: buat checkout.js baru yang isinya hanya fungsi `hitungCheckout` dan beberapa `console.log` untuk mengetesnya. Nanti fungsi itu bisa kamu pakai ulang di halaman web kamu.

### Testing dan Dokumentasi: 1 (Kurang Sesuai)

Feedback:
Testing.pdf kamu sudah rapi dan berisi 8 skenario, tapi semuanya menguji form UI (alamat kosong, format HP/email, metode bayar), bukan 8 skenario wajib dari guidance: member, non-member, total di bawah Rp250.000, tepat Rp250.000, di atas Rp250.000, jumlah 0, jumlah pecahan, dan harga tidak valid. Untuk tiap skenario, tuliskan input, expected output, actual output, dan status. README juga perlu ditambah nama kamu, cara menjalankan program, dan ringkasan penggunaan AI kalau ada.

### Review Submission

Erfan, terima kasih atas kerja kerasnya! Kelihatan sekali kamu senang membangun UI, dan halaman checkout yang kamu buat cukup lengkap. Sayangnya untuk assignment ini, guidance meminta fokus ke logika (tanpa UI, API, atau database), yaitu fungsi `hitungCheckout` dengan aturan validasi, diskon member, dan ongkir. Saran saya, baca lagi bagian "Case Study" dan "Ketentuan Pengerjaan" di guidance, lalu kerjakan ulang analysis, flowchart, pseudocode, checkout.js, dan testing sesuai 8 skenario wajib. Skill UI kamu nanti bisa dipakai untuk menampilkan hasil fungsi tersebut. Semangat terus!

### Bonus

0 (halaman UI-nya bagus, tapi di luar ruang lingkup tugas)

### Nilai

- Skor: 1 / 1 / 1 / 1 / 1
- Total: 6,67 × 5 = 33,33
- Penalti telat: 0
- Nilai akhir: 33,33 (belum mencapai batas lulus 65)
