# Penilaian Assignment Day 14 — FWD 13 (Full Stack Web Dev Batch 13)

Mini Project: Sistem Checkout Produk Sederhana (Computational Thinking, Flowchart, Pseudocode, JavaScript)

Cara hitung nilai: tiap indikator skor 0-3, dikonversi skor/3 × 20 (3 = 20, 2 = 13,33, 1 = 6,67, 0 = 0). Total maksimal 100.
Batas lulus: 75 untuk penyaluran kerja, 65 untuk lulus bootcamp.
Deadline: Rabu, 28 Oktober 2026 pukul 23.30 WIB. Waktu submit diambil dari commit terakhir di repo.
Penalti telat: ≤12 jam −3, ≤1×24 jam −6.

Standar penilaian: hanya mengikuti ketentuan di assignment guidance (tidak menilai best practice kode), dengan mempertimbangkan bahwa student masih belajar. Hal seperti bentuk simbol, nama file, atau edge case di luar guidance hanya jadi tips. Hasil yang salah tetap dihitung sebagai kesalahan logika.

Cara saya cek: semua file dibaca, gambar flowchart dilihat langsung, dan `hitungCheckout` tiap student dipanggil dengan Node memakai kasus: member, non-member, di bawah/tepat/di atas Rp250.000, jebakan member 130.000 × 2 (setelah diskon Rp234.000, harus kena ongkir, total Rp249.000), jumlah 0, jumlah 1,5, serta harga 0/negatif/teks.

## Ringkasan batch

- Abdul Arif Habibi: 100 − 3 = 97 (lulus penyaluran kerja)
- Abdullah Ahmad Rauf: 93,33 (lulus penyaluran kerja)
- Afrizon Hasan: 100 (lulus penyaluran kerja)
- Ahmad Muhammad: 26,67 (belum lulus)
- Andika Saputra: 80 (lulus penyaluran kerja)
- Bramantio Ghany: 93,33 − 6 = 87,33 (lulus penyaluran kerja)
- Hadid Sukma Raganata: 93,33 (lulus penyaluran kerja)
- Ilham Dwi Putranto: 100 (lulus penyaluran kerja)
- Iroh Nurrohmah: 93,33 (lulus penyaluran kerja)
- Islah Shalahuddin: 86,67 (lulus penyaluran kerja)
- Ismu Azhar Ahmad: 73,33 − 3 = 70,33 (lulus bootcamp)
- Joseph Marcell Gultom: 46,67 (belum lulus)
- Muhamad Agung Al Avit: 100 (lulus penyaluran kerja)
- Muhamad Nurhamam: 60 − 6 = 54 (belum lulus)
- Muhammad Aryaputra Adji: 80 (lulus penyaluran kerja)
- Muhammad Fadli Purnama: 100 (lulus penyaluran kerja)
- Muhammad Rafli Hakim: 100 (lulus penyaluran kerja)
- Muhammad Rizqon Ahsany: 86,67 (lulus penyaluran kerja)
- Ramadhany Setiawan Shogira: 80 − 3 = 77 (lulus penyaluran kerja)
- Yoga Ismail: 93,33 (lulus penyaluran kerja)
- arifian rahman: 100 (lulus penyaluran kerja)

Rekap: 17 lulus penyaluran kerja, 1 lulus bootcamp (Ismu), 3 belum lulus (Ahmad Muhammad, Joseph, Nurhamam).

Catatan untuk Kak Daffa:

- **Kemiripan Afrizon Hasan dan Muhamad Agung Al Avit:** README keduanya identik kata per kata (hanya beda satu baris path flowchart). Pseudocode, analysis, dan tabel testing juga hampir sama persis (termasuk contoh input "aku" dan Rp250.000 member → Rp240.000). Kodenya sedikit berbeda. Commit Afrizon 28 Okt 14.08, Agung 28 Okt 15.00. Nilai di bawah belum saya kurangi; mungkin perlu ditanyakan apakah mereka mengerjakan bersama.
- **Muhamad Nurhamam:** checkout.js dan testing.md di repo-nya kosong (0 byte), padahal README menyebut 10 skenario uji. Mungkin file lupa di-save sebelum commit; kalau diizinkan submit ulang, nilainya bisa naik banyak.
- **Joseph Marcell Gultom:** memakai ongkir Rp25.000 (bukan Rp15.000) secara konsisten di analysis, flowchart, pseudocode, dan kode, sehingga semua hasil di bawah Rp250.000 salah.
- **Ahmad Muhammad:** tidak ada analysis.md dan testing.md, dan kodenya berupa 8 fungsi terpisah dengan nilai hardcoded (bukan `hitungCheckout(harga, jumlah, isMember)`).
- **Andika Saputra:** tidak ada file flowchart sama sekali di repo, jadi Flowchart 0.
- Telat: Abdul Arif (29 Okt 11.20, ±12 jam → −3), Ismu (29 Okt 04.42, ±5 jam → −3), Ramadhany (28 Okt 23.55, 25 menit → −3), Bramantio (29 Okt 21.28, ±22 jam → −6), Nurhamam (29 Okt 23.11, ±24 jam → −6).
- Bonus: 0 untuk semua.

---

## 1. Abdul Arif Habibi

- Repo: https://github.com/arifhabibiee/mini-project-day-14-checkout-system
- Commit terakhir: 29 Okt 2026, 11.20 WIB (telat ±12 jam → −3)
- Deliverables: lengkap (README, analysis, flowchart.drawio + png, pseudocode, checkout.js, testing)
- Hasil uji: semua kasus sesuai

### Computational Thinking: 3 (Sesuai)

Feedback:
Analysis kamu lengkap dan rapi, Arif! Ada problem decomposition, pattern recognition, abstraction, algorithmic thinking, IPO, sampai contoh perhitungan member Rp250.000 yang setelah diskon tetap kena ongkir. Ini menunjukkan kamu paham titik penting di soal ini.

### Flowchart: 3 (Sesuai)

Feedback:
Flowchart kamu benar dan jelas: validasi harga dan jumlah dipisah dengan jalur "Input tidak valid" ke Selesai, cabang member, total setelah diskon, keputusan ongkir ≥ Rp250.000, dan output rincian. Simbol dan label Ya/Tidak juga tepat. Mantap!

### Pseudocode: 3 (Sesuai)

Feedback:
Pseudocode kamu runtut (START, INPUT, IF/ENDIF, OUTPUT, END) dan sama persis dengan flowchart, termasuk STOP setelah input tidak valid. Pertahankan!

### JavaScript Implementation: 3 (Sesuai)

Feedback:
Fungsi `hitungCheckout` kamu benar untuk semua skenario wajib, termasuk kasus member yang setelah diskon turun di bawah Rp250.000. Hasilnya dikembalikan sebagai rincian lengkap atau pesan "Input tidak valid". Keren!

### Testing dan Dokumentasi: 3 (Sesuai)

Feedback:
Testing kamu lengkap: 12 test case dengan expected, actual, dan status PASS, sudah mencakup 8 skenario wajib. README juga lengkap (identitas, deskripsi, aturan, struktur folder). Bagus sekali!

### Review Submission

Submission yang sangat solid, Arif! Semua deliverable lengkap dan logikanya benar dari analysis sampai kode. Catatan satu-satunya adalah pengumpulan yang terlambat sekitar 12 jam, jadi ada pengurangan nilai sesuai ketentuan. Next time coba kumpulkan sebelum deadline ya. Great job!

### Bonus

0

### Nilai

- Skor: 3 / 3 / 3 / 3 / 3
- Total: 100
- Penalti telat: −3
- Nilai akhir: 97 (lulus penyaluran kerja)

---

## 2. Abdullah Ahmad Rauf

- Repo: https://github.com/ahm81r-spec/Simple-System-Product-Checkout-Problem
- Commit terakhir: 28 Okt 2026, 08.06 WIB (tepat waktu)
- Deliverables: README, analysis, flowchart.drawio + pdf, pseudocode.txt, checkout.js, testing
- Hasil uji: semua skenario wajib sesuai, tapi `hitungCheckout(0, 2, true)` mengembalikan 15000 (harga 0 masih dianggap valid)

### Computational Thinking: 3 (Sesuai)

Feedback:
Analysis kamu sudah memuat input, proses, output, pattern, dan abstraction, lengkap dengan aturan validasi dan diskon. Tips kecil: di bagian Delivery Fee decision, tulis "total setelah diskon" (bukan "subtotal") supaya sama dengan aturan di soal dan kode kamu.

### Flowchart: 3 (Sesuai)

Feedback:
Flowchart kamu benar: validasi dengan jalur Invalid Input ke End, cabang member, keputusan ongkir dari subtotal setelah diskon, lalu output. Tips: tuliskan kriteria di dalam belah ketupat "Valid Input" (misalnya harga > 0 dan jumlah bilangan bulat > 0) supaya pembaca tahu apa yang dicek.

### Pseudocode: 3 (Sesuai)

Feedback:
Pseudocode kamu sudah mencakup validasi, diskon member, ongkir, dan total, dan alurnya sesuai flowchart. Tips: hitung subtotal setelah validasi (bukan sebelumnya), supaya urutannya sama dengan flowchart.

### JavaScript Implementation: 2 (Cukup Sesuai)

Feedback:
Logika perhitungan kamu sudah benar untuk member, non-member, dan batas Rp250.000, dan pesan error-nya juga jelas. Satu yang belum sesuai aturan: harga 0 masih lolos validasi, sehingga `hitungCheckout(0, 2, true)` menghasilkan 15000. Padahal soal meminta harga berupa angka positif, jadi harga 0 harus menghasilkan pesan input tidak valid. Coba cek lagi kondisi validasi harga kamu (harus `harga > 0`).

### Testing dan Dokumentasi: 3 (Sesuai)

Feedback:
Testing kamu berisi 10 kasus dengan hasil perhitungan dan penjelasan tiap kasus, termasuk input berupa string. Tips: tambahkan kasus harga 0 (pasti ketahuan bug-nya), cocokkan deskripsi case 3 dengan tabel (di deskripsi member true, di tabel false), dan tuliskan nama kamu di README.

### Review Submission

Kerja yang bagus, Abdullah! Hampir semua sudah sesuai guidance, dan testing-mu cukup teliti sampai menguji input string. PR-nya cuma satu: perbaiki validasi supaya harga 0 dianggap tidak valid. Terima kasih juga sudah mengumpulkan jauh sebelum deadline!

### Bonus

0

### Nilai

- Skor: 3 / 3 / 3 / 2 / 3
- Total: 20 + 20 + 20 + 13,33 + 20 = 93,33
- Penalti telat: 0
- Nilai akhir: 93,33 (lulus penyaluran kerja)

---

## 3. Afrizon Hasan

- Repo: https://github.com/afrizonhasandanida-ops/project-day14-javascript-psedocode-flowchart
- Commit terakhir: 28 Okt 2026, 14.08 WIB (tepat waktu)
- Deliverables: lengkap (README, analysis, flowchart .drawio.xml + png, pseudocode.txt, checkout.js, testing)
- Hasil uji: semua kasus sesuai

### Computational Thinking: 3 (Sesuai)

Feedback:
Analysis kamu lengkap: deskripsi masalah, input, proses berurutan, output, tabel aturan keputusan, pattern recognition, dan abstraction. Sangat jelas, Afrizon!

### Flowchart: 3 (Sesuai)

Feedback:
Flowchart kamu benar: kriteria validasi ditulis di dalam belah ketupat, ada jalur pesan error ke End, cabang member, keputusan ongkir dari total setelah diskon, dan output lengkap. Tips kecil: ada typo "bilangan blulat" dan "dskon".

### Pseudocode: 3 (Sesuai)

Feedback:
Pseudocode kamu runtut dan konsisten dengan flowchart: INPUT, validasi, subtotal, diskon, total setelah diskon, ongkir, total bayar, OUTPUT. Pertahankan!

### JavaScript Implementation: 3 (Sesuai)

Feedback:
Fungsi `hitungCheckout` kamu benar untuk semua skenario, termasuk kasus member yang setelah diskon turun di bawah Rp250.000. Validasinya juga lengkap sampai status member. Mantap!

### Testing dan Dokumentasi: 3 (Sesuai)

Feedback:
Testing kamu berisi 11 skenario beserta hasilnya, termasuk kasus diskon yang membuat total turun di bawah Rp250.000. README juga lengkap dengan cara menjalankan dan ringkasan AI. Tips: tambahkan nama kamu di README, dan kolom "expected" di testing supaya terlihat perbandingannya dengan hasil aktual.

### Review Submission

Submission yang lengkap dan benar, Afrizon! Logika dari analysis sampai kode konsisten, dan pengujianmu sudah mencakup kasus jebakan diskon member. Pastikan kamu bisa menjelaskan setiap langkahnya dengan bahasamu sendiri ya. Great job!

### Bonus

0

### Nilai

- Skor: 3 / 3 / 3 / 3 / 3
- Total: 100
- Penalti telat: 0
- Nilai akhir: 100 (lulus penyaluran kerja)

---

## 4. Ahmad Muhammad

- Repo: https://github.com/iamdamaaa/ASSIGNMENT-Day-14---Mini-Project-Full-Stack-Case-Study-Flowchat-Pseudocode-Javascript
- Commit terakhir: 23 Okt 2026, 15.15 WIB (tepat waktu)
- Deliverables: readme.md, DrawIoDiagram.drawio.png, pseudocode.txt, checkout.js, hasilRun.txt. Tidak ada analysis.md dan testing.md.
- Hasil uji: tidak ada fungsi `hitungCheckout(harga, jumlah, isMember)`. Kodenya berisi 8 fungsi (`hitungCheckout1` sampai `hitungCheckout8`) dengan nilai hardcoded. Diskon dan ongkir sudah benar, tapi jumlah pecahan dan harga 0 belum ditolak.

### Computational Thinking: 0 (Tidak Sesuai)

Feedback:
Halo Ahmad! File analysis.md belum ada, jadi bagian problem decomposition belum bisa dinilai. Coba buat analysis.md yang berisi input (harga, jumlah, status member), proses (validasi → subtotal → diskon → ongkir → total), output, aturan keputusan, pattern, dan abstraction.

### Flowchart: 1 (Kurang Sesuai)

Feedback:
Flowchart kamu sudah punya alur subtotal, cek member, dan cek total ≥ 250.000 untuk ongkir. Tapi bagian penting dari guidance belum ada: belah ketupat validasi input dengan jalur "Input tidak valid", input status member, langkah total setelah diskon, dan output total pembayaran. Ada juga dua simbol END. Coba lengkapi alurnya dari Start sampai output dengan satu End.

### Pseudocode: 1 (Kurang Sesuai)

Feedback:
Pseudocode kamu masih berupa catatan singkat (komentar), belum menjelaskan langkahnya dengan jelas. Coba tulis lengkap dengan INPUT, IF validasi (harga positif dan jumlah bilangan bulat positif) lalu OUTPUT "Input tidak valid", hitung subtotal, IF member diskon 10%, total setelah diskon, IF ongkir, total bayar, dan OUTPUT.

### JavaScript Implementation: 1 (Kurang Sesuai)

Feedback:
Perhitungan diskon dan ongkir di kode kamu sudah benar, ini bagus! Tapi guidance meminta satu fungsi `hitungCheckout(harga, jumlah, isMember)` yang menerima input sebagai parameter, sedangkan kode kamu memakai 8 fungsi terpisah dengan nilai yang di-hardcode. Validasinya juga belum lengkap: jumlah pecahan (misalnya 1,5) dan harga 0 masih lolos. Coba buat satu fungsi dengan parameter, lalu panggil fungsi itu 8 kali dengan input berbeda.

### Testing dan Dokumentasi: 1 (Kurang Sesuai)

Feedback:
hasilRun.txt sudah berisi output dari 8 contoh, ini langkah yang baik. Tapi belum ada testing.md, dan skenario "jumlah pecahan" diganti menjadi harga pecahan. README juga belum berisi nama, deskripsi case, dan cara menjalankan program. Coba buat testing.md dengan 8 skenario wajib (input, expected, hasil) dan lengkapi README sesuai guidance.

### Review Submission

Ahmad, terima kasih sudah mengumpulkan lebih awal! Logika diskon dan ongkir kamu sebenarnya sudah benar. Yang perlu dilengkapi adalah deliverable yang belum ada (analysis.md dan testing.md), satu fungsi `hitungCheckout` dengan parameter, validasi jumlah pecahan dan harga 0, serta flowchart dan pseudocode yang lebih lengkap. Semangat, kamu sudah di jalur yang benar!

### Bonus

0

### Nilai

- Skor: 0 / 1 / 1 / 1 / 1
- Total: 0 + 6,67 + 6,67 + 6,67 + 6,67 = 26,67
- Penalti telat: 0
- Nilai akhir: 26,67 (belum mencapai batas lulus 65)

---

## 5. Andika Saputra

- Repo: https://github.com/AndikaSaputra27/-ASSIGNMENT-Day-14---Mini-Project-Full-Stack-Case-Study-Flowchat-Pseudocode-Javascript_Andika-N.S
- Commit terakhir: 26 Okt 2026, 14.17 WIB (tepat waktu)
- Deliverables: Readme, analysis, pseudocode, checkout.js, testing.js, testing.md. Tidak ada file flowchart.
- Hasil uji: semua kasus sesuai (input tidak valid ditangani dengan `throw Error` berisi pesan)

### Computational Thinking: 3 (Sesuai)

Feedback:
Analysis kamu lengkap dan jelas, Andika: input, proses, output, aturan keputusan, pattern, dan abstraction. Bagus!

### Flowchart: 0 (Tidak Sesuai)

Feedback:
Di repo kamu belum ada file flowchart (.drawio maupun PNG/PDF), jadi bagian ini belum bisa dinilai. Buat flowchart di draw.io yang memuat validasi input (dengan jalur "Input tidak valid"), subtotal, keputusan member, keputusan ongkir, dan output total, lalu upload file .drawio dan hasil export-nya.

### Pseudocode: 3 (Sesuai)

Feedback:
Pseudocode kamu jelas dan lengkap: validasi tiap input, subtotal, diskon member, total setelah diskon, ongkir, dan RETURN rincian. Mantap!

### JavaScript Implementation: 3 (Sesuai)

Feedback:
Fungsi `hitungCheckout` kamu benar untuk semua skenario, termasuk kasus member yang setelah diskon di bawah Rp250.000. Tips: guidance menyebut fungsi "mengembalikan" pesan error, jadi kamu bisa `return` pesan error (bukan `throw`) supaya sesuai dengan pseudocode kamu sendiri.

### Testing dan Dokumentasi: 3 (Sesuai)

Feedback:
testing.md berisi 8 skenario wajib dengan hasilnya, dan ada testing.js untuk menjalankannya. README sudah berisi deskripsi dan cara menjalankan. Tips: kolom "Nama" di README masih berisi "[ADIKS Market]", jadi ganti dengan nama kamu, dan tambahkan ringkasan penggunaan AI kalau ada.

### Review Submission

Andika, logika dan dokumentasi kamu sudah sangat baik! Sayangnya flowchart belum ada di repo, padahal itu satu dari lima indikator penilaian. Kalau ada kesempatan, lengkapi flowchart-nya ya. Selebihnya pertahankan!

### Bonus

0

### Nilai

- Skor: 3 / 0 / 3 / 3 / 3
- Total: 20 + 0 + 20 + 20 + 20 = 80
- Penalti telat: 0
- Nilai akhir: 80 (lulus penyaluran kerja)

---

## 6. Bramantio Ghany

- Repo: https://github.com/bramantioghany/mini-project-checkout
- Commit terakhir: 29 Okt 2026, 21.28 WIB (telat ±22 jam → −6)
- Deliverables: lengkap (README, analysis, flowchart.drawio + png, pseudocode, checkout.js, unit test Jest, testing)
- Hasil uji: semua kasus sesuai

### Computational Thinking: 3 (Sesuai)

Feedback:
Analysis kamu lengkap, Bramantio: deskripsi, input, proses, output, pattern recognition, abstraction, dan ringkasan computational thinking. Jelas dan mudah diikuti!

### Flowchart: 2 (Cukup Sesuai)

Feedback:
Alur flowchart kamu sudah lengkap dan rapi: input, validasi dengan jalur "Input tidak valid", subtotal, cabang member, total setelah diskon, keputusan ongkir ≥ Rp250.000, dan output. Yang perlu diperbaiki ada di kondisi validasi: "hargaProduk dan jumlahProduk >= 0?" artinya harga 0 dan jumlah 0 dianggap valid, dan belum ada cek bilangan bulat untuk jumlah. Sesuai soal, kondisinya seharusnya harga > 0 dan jumlah bilangan bulat > 0.

### Pseudocode: 3 (Sesuai)

Feedback:
Pseudocode kamu jelas, ada komentar di tiap langkah, dan validasinya sudah tepat (harga > 0, jumlah bilangan bulat > 0). Pertahankan!

### JavaScript Implementation: 3 (Sesuai)

Feedback:
Fungsi `hitungCheckout` kamu benar untuk semua skenario wajib dan kasus jebakan diskon member. Return object rincian atau object error juga sesuai ketentuan. Mantap!

### Testing dan Dokumentasi: 3 (Sesuai)

Feedback:
Testing kamu sangat baik: 10 skenario dengan expected result dan status PASS, plus output Jest. Skenario 9 dan 10 menguji ongkir dari total setelah diskon, bagus sekali. Tips: di README masih ada kalimat "Dokumentasi hasil pengujian akan dilengkapi setelah unit test dijalankan", jadi bisa diperbarui.

### Review Submission

Kerja yang sangat bagus, Bramantio! Semua deliverable lengkap dan kodenya benar. Perbaikan kecilnya ada di kondisi validasi flowchart (> 0, bukan >= 0, dan cek bilangan bulat). Sayangnya pengumpulan terlambat sekitar 22 jam, jadi ada pengurangan nilai. Next time kumpulkan dulu sebelum deadline ya!

### Bonus

0

### Nilai

- Skor: 3 / 2 / 3 / 3 / 3
- Total: 20 + 13,33 + 20 + 20 + 20 = 93,33
- Penalti telat: −6
- Nilai akhir: 87,33 (lulus penyaluran kerja)

---

## 7. Hadid Sukma Raganata

- Repo: https://github.com/hadidsukma15/Mini-Project-Full-Stack-Case-Study-Flowchat-Pseudocode-Javascript
- Commit terakhir: 28 Okt 2026, 17.10 WIB (tepat waktu)
- Deliverables: lengkap (README, analysis, flowchart.drawio + png, pseudocode, checkout.js, testing)
- Hasil uji: semua kasus sesuai

### Computational Thinking: 3 (Sesuai)

Feedback:
Analysis kamu lengkap, Hadid: deskripsi, input, proses, output, aturan keputusan, pattern recognition, dan abstraction. Rapi dan jelas!

### Flowchart: 3 (Sesuai)

Feedback:
Flowchart kamu benar: validasi harga, jumlah, dan isMember dipisah, cabang member, keputusan ongkir dari total setelah diskon, dan output. Tips: kotak "Tampilkan pesan input tidak valid" belum punya panah ke Selesai, jadi tambahkan supaya alurnya tidak berhenti di tengah.

### Pseudocode: 3 (Sesuai)

Feedback:
Pseudocode kamu jelas dan sesuai flowchart, dengan pesan error per jenis validasi dan RETURN rincian. Pertahankan!

### JavaScript Implementation: 3 (Sesuai)

Feedback:
Fungsi `hitungCheckout` kamu benar untuk semua skenario, termasuk kasus jebakan diskon member. Return rincian lengkap dan pesan error yang jelas. Mantap!

### Testing dan Dokumentasi: 2 (Cukup Sesuai)

Feedback:
Testing kamu sudah berisi 10 skenario dengan hasil yang diharapkan. Yang masih kurang adalah hasil pengujiannya: guidance meminta skenario uji beserta hasilnya, jadi tambahkan kolom hasil aktual (output saat dijalankan) dan status lulus/gagal. README juga belum mencantumkan nama kamu.

### Review Submission

Hadid, logika dan dokumentasi kamu sudah sangat baik! Supaya sempurna, lengkapi testing.md dengan hasil aktual dari menjalankan program, dan tambahkan nama di README. Keep it up!

### Bonus

0

### Nilai

- Skor: 3 / 3 / 3 / 3 / 2
- Total: 20 + 20 + 20 + 20 + 13,33 = 93,33
- Penalti telat: 0
- Nilai akhir: 93,33 (lulus penyaluran kerja)

---

## 8. Ilham Dwi Putranto

- Repo: https://github.com/ilhamdwiputranto/Mini_Project_Day14_FWD13_IlhamDwiPutranto
- Commit terakhir: 28 Okt 2026, 22.57 WIB (tepat waktu)
- Deliverables: lengkap (README, analysis, flowchart.drawio + png, pseudocode, checkout_hardcoded.js + checkout_interactive.js, testing)
- Hasil uji: semua kasus sesuai di kedua file

### Computational Thinking: 3 (Sesuai)

Feedback:
Analysis kamu sangat lengkap, Ilham: input, aturan validasi, proses kalkulasi, output, pattern, dan abstraction. Jelas sekali!

### Flowchart: 3 (Sesuai)

Feedback:
Flowchart kamu benar dan rapi, ditambah alur "hitung transaksi lain" untuk versi interaktif. Semua bagian wajib ada: validasi, subtotal, cabang member, keputusan ongkir, dan output. Mantap!

### Pseudocode: 3 (Sesuai)

Feedback:
Pseudocode kamu terstruktur dengan baik, ada spesifikasi input/output, langkah validasi, dan perhitungan yang sesuai flowchart. Pertahankan!

### JavaScript Implementation: 3 (Sesuai)

Feedback:
Fungsi `hitungCheckout` kamu benar untuk semua skenario, baik di versi hardcoded maupun interaktif. Tips: guidance meminta file bernama `checkout.js` (README kamu juga menyebut nama itu), jadi file utamanya bisa diberi nama `checkout.js`.

### Testing dan Dokumentasi: 3 (Sesuai)

Feedback:
Testing kamu lengkap: 8 skenario wajib dengan tujuan, input, expected, actual, dan status. README juga lengkap dengan profil, deskripsi, struktur file, dan cara menjalankan. Bagus sekali!

### Review Submission

Kerja yang sangat lengkap, Ilham! Kamu bahkan membuat versi interaktif lewat terminal. Semua sesuai guidance. Pertahankan kualitas ini!

### Bonus

0

### Nilai

- Skor: 3 / 3 / 3 / 3 / 3
- Total: 100
- Penalti telat: 0
- Nilai akhir: 100 (lulus penyaluran kerja)

---

## 9. Iroh Nurrohmah

- Repo: https://github.com/irohnurrohmah29/Assignment_Day_14
- Commit terakhir: 28 Okt 2026, 14.41 WIB (tepat waktu)
- Deliverables: lengkap (README, analysis, flowchart .drawio + png, pseudocode.txt, checkout.js, testing)
- Hasil uji: semua kasus sesuai

### Computational Thinking: 3 (Sesuai)

Feedback:
Analysis kamu lengkap dan detail, Iroh: tujuan, input dengan aturannya, proses, aturan keputusan (termasuk catatan bahwa ongkir dihitung dari total setelah diskon), pattern, dan abstraction. Bagus!

### Flowchart: 3 (Sesuai)

Feedback:
Flowchart kamu benar: validasi dengan jalur "Input Tidak Valid" ke End, cabang member, total setelah diskon, keputusan ongkir ≥ 250.000, dan output. Tips: di belah ketupat validasi, tulis "jumlah berupa bilangan bulat positif" (sekarang tertulis "bilangan positif") supaya sama dengan aturan soal.

### Pseudocode: 2 (Cukup Sesuai)

Feedback:
Pseudocode kamu sudah runtut dan sesuai flowchart. Ada dua hal yang perlu diperbaiki: (1) kondisi validasi `Harga < 0` dan `Jumlah < 0` artinya harga 0 dan jumlah 0 masih dianggap valid, padahal seharusnya `<= 0`, (2) setelah OUTPUT "Input Tidak Valid" belum ada STOP, jadi alurnya masih lanjut ke perhitungan diskon. Kode JavaScript kamu sudah benar (`<= 0`), jadi tinggal samakan pseudocode-nya.

### JavaScript Implementation: 3 (Sesuai)

Feedback:
Fungsi `hitungCheckout` kamu benar untuk semua skenario, termasuk harga 0, jumlah pecahan, dan kasus jebakan diskon member. Mantap!

### Testing dan Dokumentasi: 3 (Sesuai)

Feedback:
Testing kamu berisi 9 skenario dengan output program yang disalin dari terminal. README lengkap dengan nama, deskripsi, cara menjalankan, link deliverables, dan catatan AI. Bagus!

### Review Submission

Iroh, submission kamu sudah sangat baik dan kodenya benar semua. Perbaikan kecilnya ada di pseudocode: kondisi validasi `<= 0` dan tambahkan STOP setelah pesan error. Tips tambahan: folder `.history` (riwayat file dari VS Code) sebaiknya tidak ikut di-commit. Keep it up!

### Bonus

0

### Nilai

- Skor: 3 / 3 / 2 / 3 / 3
- Total: 20 + 20 + 13,33 + 20 + 20 = 93,33
- Penalti telat: 0
- Nilai akhir: 93,33 (lulus penyaluran kerja)

---

## 10. Islah Shalahuddin

- Repo: https://github.com/IslahShalahuddin/Mini-Project-JavaScript
- Commit terakhir: 28 Okt 2026, 22.18 WIB (tepat waktu)
- Deliverables: README, Analysis, flowchart .drawio + png, Pseudocode, Checkout.js, Testing (screenshot)
- Hasil uji: logika benar untuk semua kasus (fungsi bernama `menghitungCheckout`)

### Computational Thinking: 2 (Cukup Sesuai)

Feedback:
Analysis kamu sudah memuat input, proses, output, dan aturan keputusan yang lengkap dan jelas, Islah. Yang belum ada adalah bagian pattern dan abstraction yang diminta guidance. Contoh pattern: "setiap transaksi memakai urutan validasi → subtotal → diskon → ongkir → total". Contoh abstraction: "yang dipakai hanya harga, jumlah, dan status member; nama produk atau alamat diabaikan".

### Flowchart: 2 (Cukup Sesuai)

Feedback:
Urutan alurnya sudah benar dan semua tahap ada. Tapi beberapa hal membuat flowchart sulit dibaca: (1) keputusan ("Apakah input valid?", "Apakah Member?", "Apakah Gratis ongkir?") digambar dengan persegi, sedangkan proses (hitung subtotal, hitung diskon, ongkir) digambar dengan belah ketupat, jadi simbolnya tertukar, (2) keputusan ongkir belum menulis kriterianya (total setelah diskon ≥ Rp250.000), (3) cabang member belum diberi label Ya/Tidak. Coba perbaiki ketiganya supaya flowchart bisa dibaca tanpa melihat kode.

### Pseudocode: 3 (Sesuai)

Feedback:
Pseudocode kamu jelas, mudah dibaca, dan mencakup semua aturan: validasi, subtotal, diskon, total setelah diskon, ongkir, dan output. Bagus!

### JavaScript Implementation: 3 (Sesuai)

Feedback:
Logika kode kamu benar untuk semua skenario, termasuk validasi status member. Tips: guidance meminta nama fungsi `hitungCheckout`, sedangkan fungsi kamu bernama `menghitungCheckout`, dan nama file sebaiknya `checkout.js` (huruf kecil) supaya sesuai deliverable.

### Testing dan Dokumentasi: 3 (Sesuai)

Feedback:
Testing kamu berisi 8 skenario wajib dengan screenshot hasil running, dan README lengkap (identitas, deskripsi, cara menjalankan, ringkasan AI). Tips: tambahkan expected output di setiap skenario supaya pembaca bisa membandingkan dengan screenshot.

### Review Submission

Islah, kodemu sudah benar dan rapi! Bagian yang perlu dipoles ada di analysis (tambahkan pattern dan abstraction) dan flowchart (simbol keputusan vs proses, kriteria ongkir, dan label cabang). Semangat terus!

### Bonus

0

### Nilai

- Skor: 2 / 2 / 3 / 3 / 3
- Total: 13,33 + 13,33 + 20 + 20 + 20 = 86,67
- Penalti telat: 0
- Nilai akhir: 86,67 (lulus penyaluran kerja)

---

## 11. Ismu Azhar Ahmad

- Repo: https://github.com/ismuazhara/Bootcamp-Dibimbing.id-FWD13_AssignmentD14
- Commit terakhir: 29 Okt 2026, 04.42 WIB (telat ±5 jam → −3)
- Deliverables: Readme, Analysis, Diagram Assignment.png, pseudocode.txt, checkout.js, testing (tidak ada file .drawio)
- Hasil uji: perhitungan benar, tapi jumlah pecahan (1/2) masih diterima dan dihitung. Fungsi bernama `calculateCheckout`, dan semua contoh pemanggilan masih di-comment.

### Computational Thinking: 2 (Cukup Sesuai)

Feedback:
Analysis kamu sudah menyebut decomposition, pattern, abstraction, algorithmic, serta input-proses-output. Tapi isinya masih sangat singkat, dan alur proses belum memasukkan langkah ongkir (validasi → subtotal → diskon → total). Coba jabarkan tiap langkah dan aturan keputusannya, terutama ongkir gratis kalau total setelah diskon ≥ Rp250.000 dan Rp15.000 kalau kurang.

### Flowchart: 3 (Sesuai)

Feedback:
Flowchart kamu benar dan lengkap: validasi dengan jalur "Input Tidak Valid", cabang member, total setelah diskon, keputusan ongkir, dan output total. Tips: di validasi, tulis "jumlah bilangan bulat positif" supaya sesuai soal, dan sertakan juga file .drawio-nya.

### Pseudocode: 2 (Cukup Sesuai)

Feedback:
Urutan pseudocode kamu sudah benar dan validasinya lengkap. Yang perlu diperbaiki: (1) setelah OUTPUT "Input tidak valid" belum ada STOP, jadi alurnya tetap lanjut menghitung, (2) baris terakhir hanya menampilkan subtotal, diskon, dan ongkir, sedangkan total bayar belum ditampilkan.

### JavaScript Implementation: 2 (Cukup Sesuai)

Feedback:
Perhitungan diskon dan ongkir di kode kamu sudah benar. Tapi validasi jumlah belum mengecek bilangan bulat, sehingga jumlah 1/2 masih dihitung (hasilnya total 37.500), padahal sesuai soal harus "Input tidak valid". Tambahkan `Number.isInteger(jumlah)` di validasi. Tips: guidance meminta nama fungsi `hitungCheckout`, dan contoh pemanggilan sebaiknya tidak di-comment supaya `node checkout.js` langsung menampilkan hasil.

### Testing dan Dokumentasi: 2 (Cukup Sesuai)

Feedback:
Testing kamu sudah memuat 8 skenario beserta hasil output-nya. Tapi skenario jumlah pecahan menghasilkan perhitungan, padahal seharusnya "Input tidak valid", dan ini belum ditandai sebagai gagal. Tambahkan kolom expected dan status lulus/gagal supaya kesalahan seperti ini langsung terlihat. Di README, bagian "cara menjalankan" sebaiknya berisi perintah `node checkout.js`.

### Review Submission

Ismu, terima kasih atas submission-nya! Flowchart kamu sudah bagus dan perhitungan utamanya benar. PR utamanya: validasi jumlah bilangan bulat di kode, STOP di pseudocode, dan analysis yang lebih lengkap. Pengumpulan terlambat sekitar 5 jam, jadi ada pengurangan nilai. Semangat!

### Bonus

0

### Nilai

- Skor: 2 / 3 / 2 / 2 / 2
- Total: 13,33 + 20 + 13,33 + 13,33 + 13,33 = 73,33
- Penalti telat: −3
- Nilai akhir: 70,33 (lulus bootcamp, belum mencapai 75 untuk penyaluran kerja)

---

## 12. Joseph Marcell Gultom

- Repo: https://github.com/JosephMarcell/Day14-Assignment-JosephMarcellGultom
- Commit terakhir: 28 Okt 2026, 22.44 WIB (tepat waktu)
- Deliverables: README, analysis, flowchart.png, pseudocode, checkout.js, testing (tidak ada file .drawio)
- Hasil uji: ongkir dihitung Rp25.000 (seharusnya Rp15.000), jadi semua total di bawah Rp250.000 salah (contoh member 100.000 × 2 = Rp205.000, seharusnya Rp195.000). Input tidak valid mengembalikan `false`, bukan pesan error.

### Computational Thinking: 2 (Cukup Sesuai)

Feedback:
Analysis kamu sudah menjelaskan input dan tahapan algoritma dengan runtut, Joseph. Dua hal yang perlu diperbaiki: (1) ongkir di soal adalah Rp15.000, bukan Rp25.000, (2) bagian pattern dan abstraction yang diminta guidance belum ada.

### Flowchart: 1 (Kurang Sesuai)

Feedback:
Struktur flowchart kamu rapi: validasi dengan jalur "Input Tidak Valid" ke END, cabang member, keputusan ongkir, dan output total. Tapi nilai ongkirnya tertulis Rp25.000, sehingga semua total di bawah Rp250.000 jadi salah. Ganti menjadi Rp15.000 sesuai soal, dan sertakan file .drawio-nya juga.

### Pseudocode: 1 (Kurang Sesuai)

Feedback:
Pseudocode kamu sudah sesuai dengan flowchart dan validasinya lengkap. Tapi ongkir masih Rp25.000, sehingga hasilnya salah untuk total di bawah Rp250.000. Selain itu, IF member dan IF ongkir belum ditutup dengan ENDIF. Perbaiki nilai ongkir menjadi Rp15.000.

### JavaScript Implementation: 1 (Kurang Sesuai)

Feedback:
Validasi dan diskon di kode kamu sudah berjalan. Tapi ada dua hal yang membuat hasilnya belum sesuai: (1) ongkir Rp25.000, sehingga misalnya member 100.000 × 2 menghasilkan Rp205.000, padahal seharusnya Rp195.000, (2) `return "Input Tidak Valid", false;` sebenarnya hanya mengembalikan `false`, jadi pesan error tidak keluar. Cukup tulis `return "Input tidak valid";`. Contoh pemanggilan juga masih di-comment, jadi `node checkout.js` tidak menampilkan apa-apa.

### Testing dan Dokumentasi: 2 (Cukup Sesuai)

Feedback:
8 skenario wajib sudah lengkap dengan input dan hasil yang diharapkan, dan README kamu jelas (nama, deskripsi, cara menjalankan, AI). Yang kurang adalah hasil aktual dari menjalankan program dan status lulus/gagal. Setelah ongkir diperbaiki, jalankan ulang dan catat hasilnya.

### Review Submission

Joseph, struktur pengerjaan kamu sebenarnya sudah rapi dan konsisten dari analysis sampai testing. Masalah utamanya ada di nilai ongkir yang salah baca (Rp25.000, seharusnya Rp15.000), sehingga semua hasil di bawah Rp250.000 jadi salah. Biasakan mengecek ulang angka-angka di soal sebelum mulai mengerjakan ya. Perbaiki juga `return` pesan error-nya. Semangat!

### Bonus

0

### Nilai

- Skor: 2 / 1 / 1 / 1 / 2
- Total: 13,33 + 6,67 + 6,67 + 6,67 + 13,33 = 46,67
- Penalti telat: 0
- Nilai akhir: 46,67 (belum mencapai batas lulus 65)

---

## 13. Muhamad Agung Al Avit

- Repo: https://github.com/GungVitzzz/Assignment-Day-14
- Commit terakhir: 28 Okt 2026, 15.00 WIB (tepat waktu)
- Deliverables: lengkap (README, analysis, Flowchart.drawio + png, pseudocode.txt, checkout.js, testing, plus PDF)
- Hasil uji: semua kasus sesuai

### Computational Thinking: 3 (Sesuai)

Feedback:
Analysis kamu sudah memuat input, proses, output, pattern recognition, dan abstraction dengan bahasa yang jelas, Agung. Bagus!

### Flowchart: 3 (Sesuai)

Feedback:
Flowchart kamu benar dan rapi: kriteria validasi tertulis lengkap, jalur "Input Tidak Valid" ke Selesai, cabang member, total setelah diskon, keputusan ongkir ≥ Rp250.000, dan output total. Mantap!

### Pseudocode: 3 (Sesuai)

Feedback:
Pseudocode kamu runtut dan konsisten dengan flowchart, mulai dari input sampai output total bayar. Pertahankan!

### JavaScript Implementation: 3 (Sesuai)

Feedback:
Fungsi `hitungCheckout` kamu benar untuk semua skenario, termasuk kasus jebakan diskon member. Kodenya juga mudah dibaca karena mengikuti urutan pseudocode. Keren!

### Testing dan Dokumentasi: 3 (Sesuai)

Feedback:
Testing kamu berisi 10 skenario beserta hasilnya, termasuk kasus diskon yang membuat total turun di bawah Rp250.000. README lengkap. Tips: tambahkan nama kamu di README, dan kolom expected di testing.

### Review Submission

Agung, submission kamu lengkap dan logikanya benar semua. Pastikan kamu bisa menjelaskan setiap langkah flowchart, pseudocode, dan kode dengan bahasamu sendiri ya. Great job!

### Bonus

0

### Nilai

- Skor: 3 / 3 / 3 / 3 / 3
- Total: 100
- Penalti telat: 0
- Nilai akhir: 100 (lulus penyaluran kerja)

---

## 14. Muhamad Nurhamam

- Repo: https://github.com/imhumae/project-1
- Commit terakhir: 29 Okt 2026, 23.11 WIB (telat ±24 jam → −6)
- Deliverables: README, analysis, Flowchart1.drawio.png, pseudocode. **checkout.js dan testing.md ada tapi kosong (0 byte).**
- Hasil uji: tidak bisa diuji karena checkout.js kosong

### Computational Thinking: 3 (Sesuai)

Feedback:
Analysis kamu lengkap dan jelas, Nurhamam: input, proses, output, aturan keputusan (dengan catatan bahwa batas Rp250.000 dibandingkan dengan total setelah diskon), pattern, dan abstraction. Bagus sekali! Tips kecil: di proses tertulis "Total setelah diskon <= Rp250.000: ongkir Rp15.000", seharusnya "< Rp250.000".

### Flowchart: 2 (Cukup Sesuai)

Feedback:
Isi flowchart kamu sudah lengkap: validasi, subtotal, cabang member, total setelah diskon, keputusan ongkir ≥ 250.000, total bayar, dan output. Ada dua hal yang perlu dirapikan: (1) belum ada panah dari kotak "TotalBayar" ke "Output", jadi alurnya terputus, (2) validasi digambar dengan persegi (seharusnya belah ketupat) dan belum mengecek jumlah bilangan bulat.

### Pseudocode: 3 (Sesuai)

Feedback:
Pseudocode kamu jelas dan lengkap, dengan konstanta diskon, batas gratis ongkir, dan biaya ongkir, validasi yang tepat, serta urutan yang sesuai flowchart. Mantap!

### JavaScript Implementation: 0 (Tidak Sesuai)

Feedback:
File checkout.js di repo kamu kosong (0 byte), jadi implementasi JavaScript belum bisa dinilai. Sepertinya file lupa di-save sebelum commit. Pseudocode kamu sudah benar, jadi tinggal diterjemahkan ke fungsi `hitungCheckout(harga, jumlah, isMember)`, di-save, lalu commit dan push ulang.

### Testing dan Dokumentasi: 1 (Kurang Sesuai)

Feedback:
README kamu sudah lengkap (nama, deskripsi, struktur file, cara menjalankan, ringkasan AI), ini bagus. Tapi testing.md kosong, padahal README menyebut 10 skenario uji. Lengkapi testing.md dengan 8 skenario wajib beserta hasilnya.

### Review Submission

Nurhamam, analysis, flowchart, dan pseudocode kamu sudah bagus, jadi pemahaman logikanya sudah ada. Sayangnya checkout.js dan testing.md yang ter-upload masih kosong, dan pengumpulannya terlambat sekitar 24 jam. Biasakan cek ulang isi repo di GitHub setelah push ya. Semangat!

### Bonus

0

### Nilai

- Skor: 3 / 2 / 3 / 0 / 1
- Total: 20 + 13,33 + 20 + 0 + 6,67 = 60
- Penalti telat: −6
- Nilai akhir: 54 (belum mencapai batas lulus 65)

---

## 15. Muhammad Aryaputra Adji

- Repo: https://github.com/aryaptradji/mini-project-checkout-logic
- Commit terakhir: 28 Okt 2026, 22.02 WIB (tepat waktu)
- Deliverables: lengkap (README, analysis, flowchart.drawio + png, pseudocode, checkout.js, testing)
- Hasil uji: logika benar untuk semua skenario ketika dipanggil sesuai format kode kamu (`hitungCheckout({ price, quantity, member })`)

### Computational Thinking: 2 (Cukup Sesuai)

Feedback:
Analysis kamu sudah menyebut input, proses, output, pattern, dan abstraction, Arya. Tapi isinya masih sangat singkat: aturan keputusannya (syarat valid, diskon 10% untuk member, ongkir gratis kalau total setelah diskon ≥ Rp250.000) belum dijelaskan, dan abstraction hanya menyebut "foto dan warna produk". Coba jabarkan sedikit lebih detail.

### Flowchart: 3 (Sesuai)

Feedback:
Flowchart kamu benar dan rapi: validasi dipecah per kondisi dengan jalur ke "Input tidak valid", cabang member, keputusan ongkir dari total setelah diskon, dan output lengkap. Mantap!

### Pseudocode: 1 (Kurang Sesuai)

Feedback:
Urutan pseudocode kamu sudah benar, tapi kondisi validasinya terbalik: `IF price is integer OR ... quantity is integer THEN OUTPUT "Input tidak valid"` artinya input yang benar (bilangan bulat) justru dianggap tidak valid. Seharusnya "price is NOT integer" dan "quantity is NOT integer". Selain itu, setelah OUTPUT "Input tidak valid" belum ada STOP. Flowchart dan kode kamu sudah benar, jadi tinggal samakan pseudocode-nya.

### JavaScript Implementation: 3 (Sesuai)

Feedback:
Logika kode kamu benar untuk semua skenario, dan validasinya lengkap. Tips: guidance meminta fungsi `hitungCheckout(harga, jumlah, isMember)` dengan tiga parameter, sedangkan fungsi kamu menerima satu object `{ price, quantity, member }`. Hasilnya sama, tapi sebaiknya ikuti format di soal.

### Testing dan Dokumentasi: 3 (Sesuai)

Feedback:
Testing kamu berisi 10 skenario dengan expected result dan status PASS, sudah mencakup 8 skenario wajib. README jelas dengan cara menjalankan dan catatan AI. Tips: tambahkan nama kamu di README.

### Review Submission

Arya, flowchart dan kode kamu sudah benar dan rapi! Perbaikan utamanya ada di pseudocode (kondisi validasi yang terbalik dan STOP) serta analysis yang perlu lebih detail. Keep it up!

### Bonus

0

### Nilai

- Skor: 2 / 3 / 1 / 3 / 3
- Total: 13,33 + 20 + 6,67 + 20 + 20 = 80
- Penalti telat: 0
- Nilai akhir: 80 (lulus penyaluran kerja)

---

## 16. Muhammad Fadli Purnama

- Repo: https://github.com/fadlipurnama/ASSIGNMENT-Day-14-Mini-Project-FullStack-Case-Study-Flowchat-Pseudocode-Javascript
- Commit terakhir: 27 Okt 2026, 17.19 WIB (tepat waktu)
- Deliverables: README, analysis, flowchart (PDF), pseudocode, checkout.js, testing (tidak ada file .drawio)
- Hasil uji: logika benar untuk semua skenario (fungsi bernama `calculateCheckout`)

### Computational Thinking: 3 (Sesuai)

Feedback:
Analysis kamu lengkap dan detail, Fadli: gambaran masalah, tabel input, proses, output, aturan keputusan, pattern, dan abstraction. Mantap!

### Flowchart: 3 (Sesuai)

Feedback:
Flowchart kamu benar: kriteria validasi tertulis jelas, jalur "Input tidak valid" ke END, cabang member, keputusan ongkir dari total setelah diskon, dan output rincian. Tips: sertakan juga file .drawio-nya, dan cukup satu file PDF (flowchart.pdf dan flowchart-assignment-14.pdf isinya sama).

### Pseudocode: 3 (Sesuai)

Feedback:
Pseudocode kamu jelas dan konsisten dengan flowchart, termasuk STOP setelah input tidak valid. Pertahankan!

### JavaScript Implementation: 3 (Sesuai)

Feedback:
Logika kode kamu benar untuk semua skenario. Tips: guidance meminta nama fungsi `hitungCheckout`, sedangkan fungsi kamu bernama `calculateCheckout`, jadi sebaiknya disamakan dengan soal.

### Testing dan Dokumentasi: 3 (Sesuai)

Feedback:
Testing kamu lengkap: 8 skenario wajib dengan expected, hasil aktual, dan status PASS. README juga jelas dan jujur menyebut penggunaan AI. Tips: tambahkan nama kamu di README.

### Review Submission

Fadli, submission kamu rapi dan benar! Tinggal menyamakan nama fungsi dengan soal dan menyertakan file .drawio. Pastikan juga kamu bisa menjelaskan isi dokumentasi yang dibantu AI dengan bahasamu sendiri ya. Great job!

### Bonus

0

### Nilai

- Skor: 3 / 3 / 3 / 3 / 3
- Total: 100
- Penalti telat: 0
- Nilai akhir: 100 (lulus penyaluran kerja)

---

## 17. Muhammad Rafli Hakim

- Repo: https://github.com/mraflihakim93/-ASSIGNMENT-Day-14---Mini-Project-Full-Stack-
- Commit terakhir: 28 Okt 2026, 20.40 WIB (tepat waktu)
- Deliverables: lengkap (README, analysis, flowchart.drawio + png, pseudocode, checkout.js, checkout.test.js, testing)
- Hasil uji: semua kasus sesuai

### Computational Thinking: 3 (Sesuai)

Feedback:
Analysis kamu sangat jelas, Rafli! Kamu tidak hanya menulis input-proses-output, tapi juga alasan kenapa tiap input perlu dicek dan hal-hal yang perlu diperhatikan dari soal. Pattern dan abstraction juga ada.

### Flowchart: 3 (Sesuai)

Feedback:
Flowchart kamu benar: kriteria validasi lengkap, cabang member, keputusan ongkir dari total setelah diskon, dan output. Tips: input dan output biasanya digambar dengan jajar genjang, dan panah dari "Input tidak valid" ke SELESAI bisa dibuat lebih rapi supaya tidak memotong diagram.

### Pseudocode: 3 (Sesuai)

Feedback:
Pseudocode kamu jelas dan lengkap, dengan konstanta, fungsi `hitungCheckout`, dan program utama, serta sesuai dengan flowchart. Mantap!

### JavaScript Implementation: 3 (Sesuai)

Feedback:
Fungsi `hitungCheckout` kamu benar untuk semua skenario, dan program bisa dijalankan dengan input langsung dari terminal. Keren!

### Testing dan Dokumentasi: 3 (Sesuai)

Feedback:
Testing kamu sangat detail: setiap skenario punya tabel perhitungan, hasil program, dan status. README lengkap dengan nama, deskripsi, isi folder, dan cara menjalankan. Bagus sekali!

### Review Submission

Rafli, submission kamu termasuk yang paling rapi dan mudah dipahami. Semua sesuai guidance dan penjelasanmu menunjukkan pemahaman yang baik. Pertahankan!

### Bonus

0

### Nilai

- Skor: 3 / 3 / 3 / 3 / 3
- Total: 100
- Penalti telat: 0
- Nilai akhir: 100 (lulus penyaluran kerja)

---

## 18. Muhammad Rizqon Ahsany

- Repo: https://github.com/Ahsan-code43/Mini-Project-Full-Stack-Case-Study-Flowchat-Pseudocode-Javascript
- Commit terakhir: 28 Okt 2026, 21.07 WIB (tepat waktu)
- Deliverables: Readme, Analysis, Flowchart.drawio.png, Pseudocode.txt, CheckOut.Js, Testing.md + screenshot hasil
- Hasil uji: semua kasus sesuai

### Computational Thinking: 2 (Cukup Sesuai)

Feedback:
Analysis kamu sudah memuat tujuan, input, proses, dan output dengan alur yang benar, Rizqon. Yang belum ada adalah bagian pattern dan abstraction yang diminta guidance. Contoh pattern: "setiap transaksi memakai urutan validasi → subtotal → diskon → ongkir → total". Contoh abstraction: "yang dipakai hanya harga, jumlah, dan status member".

### Flowchart: 3 (Sesuai)

Feedback:
Flowchart kamu benar: kriteria validasi tertulis, jalur "Input Tidak Valid" ke Selesai, cabang member, keputusan ongkir ≥ 250000, dan total akhir. Bagus! Tips: tambahkan simbol output (jajar genjang) untuk menampilkan total akhir sebelum Selesai.

### Pseudocode: 2 (Cukup Sesuai)

Feedback:
Urutan pseudocode kamu sudah sesuai flowchart. Tapi beberapa bagian masih kurang jelas: (1) "Validasi INPUT" belum menyebut syaratnya (harga positif, jumlah bilangan bulat positif) dan belum ada STOP saat gagal, (2) `diskon = 10%` seharusnya `diskon = subtotal × 10%`, (3) ada baris "JIKA" yang menggantung sebelum perhitungan total. Coba rapikan supaya setiap langkah bisa dibaca tanpa melihat kode.

### JavaScript Implementation: 3 (Sesuai)

Feedback:
Fungsi `hitungCheckout` kamu benar untuk semua skenario, termasuk kasus jebakan diskon member. Validasinya juga tepat. Mantap! Tips: nama file sebaiknya `checkout.js` (huruf kecil) sesuai deliverable.

### Testing dan Dokumentasi: 3 (Sesuai)

Feedback:
Testing kamu memuat 8 skenario wajib dengan expected result, dan ada screenshot hasil running. README berisi nama, deskripsi, dan cerita penggunaan AI yang jujur. Tips: tambahkan bagian cara menjalankan program (`node checkout.js`) di README.

### Review Submission

Rizqon, kode kamu sudah benar dan testing-mu lengkap! Perbaikan berikutnya ada di analysis (tambahkan pattern dan abstraction) dan pseudocode yang lebih detail. Semangat terus!

### Bonus

0

### Nilai

- Skor: 2 / 3 / 2 / 3 / 3
- Total: 13,33 + 20 + 13,33 + 20 + 20 = 86,67
- Penalti telat: 0
- Nilai akhir: 86,67 (lulus penyaluran kerja)

---

## 19. Ramadhany Setiawan Shogira

- Repo: https://github.com/ramadhanySS/Mini-Project-Full-Stack-Case-Study-Flowchat-Pseudocode-Javascript
- Commit terakhir: 28 Okt 2026, 23.55 WIB (telat 25 menit → −3)
- Deliverables: README, analysis, flowchart (PDF), pseudocode, cheackout.js, testing.js. Tidak ada testing.md dan file .drawio.
- Hasil uji: semua kasus sesuai, dan `node testing.js` → 10/10 berhasil

### Computational Thinking: 3 (Sesuai)

Feedback:
Analysis kamu lengkap, Ramadhany: input, proses, output, pattern recognition, dan abstraction dengan bahasa yang jelas. Bagus!

### Flowchart: 1 (Kurang Sesuai)

Feedback:
Flowchart kamu sudah punya subtotal, keputusan member, keputusan ongkir ≥ Rp250.000, total, dan output. Tapi ada kesalahan alur di cabang member: jalur False ("diskon = 0") masuk lagi ke kotak "diskon = subtotal × 10%", jadi non-member juga ikut dapat diskon. Langkah "total setelah diskon = subtotal − diskon" juga belum ada. Selain itu, validasi input belum digambar sebagai belah ketupat dengan kriterianya (harga > 0, jumlah bilangan bulat > 0). Coba perbaiki supaya kedua cabang member bertemu di langkah "total setelah diskon".

### Pseudocode: 3 (Sesuai)

Feedback:
Pseudocode kamu jelas dan benar: validasi tiap input dengan pesan error, diskon member, total setelah diskon, ongkir, dan RETURN rincian. Mantap!

### JavaScript Implementation: 3 (Sesuai)

Feedback:
Fungsi `hitungCheckout` kamu benar untuk semua skenario, termasuk kasus jebakan diskon member. Tips: nama file `cheackout.js` ada typo, sebaiknya `checkout.js` sesuai deliverable.

### Testing dan Dokumentasi: 2 (Cukup Sesuai)

Feedback:
testing.js kamu bagus, 10 skenario dengan ekspektasi dan semuanya berhasil saat dijalankan. Tapi guidance meminta testing.md atau testing.pdf yang memuat skenario dan hasilnya, jadi buat dokumen testing yang berisi input, expected, hasil aktual, dan status. README sudah lengkap.

### Review Submission

Ramadhany, kode dan pseudocode kamu sudah benar, dan test otomatisnya rapi! Yang perlu diperbaiki: alur cabang member di flowchart (non-member jangan ikut masuk ke diskon 10%) dan dokumen testing.md. Pengumpulan terlambat 25 menit, jadi ada pengurangan kecil. Semangat!

### Bonus

0

### Nilai

- Skor: 3 / 1 / 3 / 3 / 2
- Total: 20 + 6,67 + 20 + 20 + 13,33 = 80
- Penalti telat: −3
- Nilai akhir: 77 (lulus penyaluran kerja)

---

## 20. Yoga Ismail

- Repo: https://github.com/rambugasi-dot/Mini-Project-4-Yoga-Ismail-R
- Commit terakhir: 28 Okt 2026, 01.41 WIB (tepat waktu)
- Deliverables: README (kosong), analysis, Flowchart.drawio + png + pdf, pseudocode, checkout.js, testing
- Hasil uji: logika benar untuk semua skenario (fungsi bernama `HitungCheckout`)

### Computational Thinking: 3 (Sesuai)

Feedback:
Analysis kamu lengkap, Yoga: input, proses, output, pattern, dan abstraction dengan penjelasan yang mudah dipahami. Bagus!

### Flowchart: 3 (Sesuai)

Feedback:
Flowchart kamu benar: validasi dengan jalur pesan error ke Finish, cabang member, total setelah diskon, keputusan ongkir ≥ 250000, total pembayaran, dan output. Tips: tulis kriteria validasi di belah ketupat (harga > 0, jumlah bilangan bulat > 0).

### Pseudocode: 3 (Sesuai)

Feedback:
Pseudocode kamu jelas, runtut, dan sesuai flowchart, termasuk SELESAI setelah pesan error. Mantap!

### JavaScript Implementation: 3 (Sesuai)

Feedback:
Logika kode kamu benar untuk semua skenario. Tips: nama fungsi di soal adalah `hitungCheckout` (huruf h kecil), sedangkan punyamu `HitungCheckout`.

### Testing dan Dokumentasi: 2 (Cukup Sesuai)

Feedback:
testing.md kamu sudah lengkap: 8 skenario wajib dengan hasil dan status lulus. Tapi README.md masih kosong. Isi README dengan nama, deskripsi case study, cara menjalankan (`node checkout.js`), dan ringkasan penggunaan AI kalau ada.

### Review Submission

Yoga, logika dan dokumentasi teknis kamu sudah sangat baik! Satu yang terlewat adalah README yang masih kosong. Lengkapi itu, dan submission kamu akan sempurna. Great job!

### Bonus

0

### Nilai

- Skor: 3 / 3 / 3 / 3 / 2
- Total: 20 + 20 + 20 + 20 + 13,33 = 93,33
- Penalti telat: 0
- Nilai akhir: 93,33 (lulus penyaluran kerja)

---

## 21. arifian rahman

- Repo: https://github.com/fianzala/assignment_day14
- Commit terakhir: 28 Okt 2026, 00.56 WIB (tepat waktu)
- Deliverables: README, analysis, sistem-checkout.drawio.png + link draw.io, pseudocode, checkout.js, testing
- Hasil uji: semua skenario wajib sesuai

### Computational Thinking: 3 (Sesuai)

Feedback:
Analysis kamu lengkap dan terstruktur, Arifian: problem decomposition (input, proses, output), aturan validasi, pattern, dan abstraction. Bagus!

### Flowchart: 3 (Sesuai)

Feedback:
Flowchart kamu benar dan konsisten dengan pseudocode: validasi dengan kondisi lengkap (termasuk MOD 1 untuk bilangan bulat), cabang member, keputusan ongkir dari total setelah diskon, dan output. Tips: selain link draw.io, sertakan juga file .drawio di repo.

### Pseudocode: 3 (Sesuai)

Feedback:
Pseudocode kamu jelas, ada komentar di tiap langkah, STOP setelah input tidak valid, dan sama persis dengan flowchart. Mantap!

### JavaScript Implementation: 3 (Sesuai)

Feedback:
Fungsi `hitungCheckout` kamu benar untuk semua skenario wajib, termasuk kasus jebakan diskon member. Tips: kalau harga berupa teks (misalnya "abc"), hasilnya masih NaN. Kamu bisa menambahkan cek `typeof harga !== "number"` supaya pesan "Input tidak valid" juga muncul.

### Testing dan Dokumentasi: 3 (Sesuai)

Feedback:
Testing kamu lengkap: 8 skenario wajib dengan diskon, ongkir, expected, hasil aktual, dan status. README berisi deskripsi, cara menjalankan, dan ringkasan AI. Tips: tambahkan nama kamu di README.

### Review Submission

Arifian, submission kamu rapi dan benar! Semua sesuai guidance. Pertahankan, dan terima kasih sudah mengumpulkan lebih awal!

### Bonus

0

### Nilai

- Skor: 3 / 3 / 3 / 3 / 3
- Total: 100
- Penalti telat: 0
- Nilai akhir: 100 (lulus penyaluran kerja)
