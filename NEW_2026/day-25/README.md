# Day 25 · Hands-on Upgrade: Langkah Studio 👟

Langkah Studio adalah product configurator untuk sepatu "Langkah Pagi Runner". Ini lanjutan dari showcase Jelajah/Fokus, tapi lebih lengkap. Semua dibuat pakai HTML, CSS, dan vanilla JS. Library-nya cuma satu dan opsional, yaitu canvas-confetti.

## Isi folder

- `live-coding/`: semua code sudah ada, tapi di-comment per Langkah. Folder ini dipakai waktu kelas.
- `final/`: versi jadi (semua sudah terbuka). Pakai buat demo awal atau buat dibandingkan.
- `slides/`: deck hands-on dalam ID + EN (19 slide) + 3 GIF demo. Penjelasan dan prompt lengkapnya ada di speaker notes.

## Fitur

- **Satu `state` + `getView()`**: nilai turunan seperti sisa stok, subtotal, isi tas, dan sisa ongkir dihitung dari state, bukan disimpan terpisah.
- **Satu click listener untuk semua tombol**: tiap tombol punya `data-action`, lalu `actions[nama]` mengubah state dan `render()` menggambar ulang layar.
- **Immersive**: warna sepatu ikut CSS variable `--shoe`, pergantian warna pakai View Transitions API, dan ada tilt 3D yang mengikuti mouse.
- **Micro-interactions**:
  - tombol Tambah berubah idle → loading → success (async/await);
  - titik terbang ke ikon tas (Web Animations API), angka tas loncat;
  - toast, hati wishlist "pop", hover, `:active`, dan `:focus-visible`.
- **Drawer tas**: pakai `<dialog>` + `showModal()` yang dibuka dari state. Di dalamnya ada +/− per item dan progress bar gratis ongkir Rp1.000.000.
- **Halaman lengkap kayak website beneran**:
  - navbar sticky; di HP jadi menu hamburger ☰;
  - detail produk (3 fitur + accordion `details`);
  - ulasan (rating 4,8 + 3 ulasan contoh **fiktif**);
  - carousel 8 rekomendasi (kartu contoh, diklik nggak ngapa-ngapain), digeser pakai tombol ← →, swipe, atau keyboard;
  - footer.
- **localStorage**: tas, warna, wishlist, dan tema tetap ada setelah refresh. Ada dark mode, dan reduced motion dihormati.

## Cara pakai di kelas

- Buka `live-coding/` di VS Code, lalu jalankan **Live Server** di `index.html`. Awalnya halaman kosong, itu normal.
- Tiap Langkah: cari judul `LANGKAH n · ...`, blok code di bawahnya, tekan **Ctrl + /** (Mac: **Cmd + /**), save, lalu refresh.
- Tidak ada baris `// //`. Tiap Langkah mendaftarkan action dan renderer-nya sendiri, jadi cukup buka bloknya.
- Tiap judul Langkah punya **🤖 Prompt AI** (Konteks · Batasan · Kriteria hasil) yang bisa dipakai siswa nanti.

## Urutan buka (60 menit + Level Up opsional)

- **Langkah 1 · Rancang state (3')**: belum ada code. Bahas rancangan + prompt di bagian atas `script.js`.
- **Langkah 2 · HTML (5')**: buka 6 blok di `index.html`, yaitu "Sambungkan CSS dan JS" di head, lalu di body 2a Navbar, 2b Produk utama, 2c Detail + ulasan, 2d Rekomendasi, dan 2e Footer + drawer + toast.
- **Langkah 3 · State + render() (12')**: buka blok 3.1, 3.2, 3.3, 3.4 di `script.js`, ditambah **FIRST PAINT** di paling bawah file.
- **Langkah 4 · Immersive (8')**: blok LANGKAH 4 di `script.js` + blok LANGKAH 4 di `style.css`.
- **Langkah 5 · Micro-interactions (8')**: blok LANGKAH 5 di `script.js` + `style.css`.
- **Langkah 6 · Drawer tas (8')**: blok LANGKAH 6 di `script.js` + `style.css`.
- **Langkah 7 · Ingat pilihan + dark mode (5')**: blok LANGKAH 7 di `script.js` + `style.css`.
- **Langkah 8 · Menu hamburger + carousel (8')**: blok LANGKAH 8 di `script.js` + `style.css`. Tes di lebar 375px (Ctrl/Cmd + Shift + M).
- **Demo (3')**.
- **Level Up (opsional)**: tag script confetti di head `index.html` + blok LEVEL UP di `script.js`.

## Kalau error

- **Halaman putih polos**: blok head Langkah 2 belum dibuka.
- **Klik nggak ngapa-ngapain**: blok 3.4 EVENTS atau FIRST PAINT (paling bawah) belum dibuka.
  - Tombol Tambah, tas, atau Dark yang diam artinya action-nya belum dibuka (Langkah 5/6/7), bukan error.
- **`... is not defined`**: blok 3.1 atau 3.2 kelewat.
- **Efek CSS nggak muncul**: penutup komentar CSS masih ada, atau file belum di-save.
- **Tombol ☰ tidak muncul**: layar masih lebih lebar dari 760px, atau blok CSS Langkah 8 belum dibuka.
- **Tas sudah ada isinya dari tes sebelumnya**: ketik `localStorage.clear()` di Console, lalu refresh.

## Sudah dites

Setiap tahap (L2, L3, L4, L5, L6, L7, L8, Level Up) sudah dites di Chromium dengan urutan buka di atas, dan tidak ada error di Console. Yang dicek di tiap tahap:

- warna dan ukuran
- batas stok
- tombol async
- drawer + tombol Esc
- refresh (localStorage)
- dark mode
- confetti sekali saat ongkir gratis tercapai
- menu hamburger (buka, tutup lewat link, tutup lewat Esc) dan carousel (← → disabled di ujung)
- layout HP 375px tanpa scroll ke samping
