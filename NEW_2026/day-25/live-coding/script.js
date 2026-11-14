// =====================================================================
// 👟 LANGKAH STUDIO · MENTOR LIVE CODING · script.js
// Pola: event (click) → actions ubah state → render() gambar ulang layar
// Semua code sudah ada, tapi masih di-comment. Cara buka: blok baris code di bawah
// judul Langkah, lalu tekan Ctrl + /  (Mac: Cmd + /). Save, lalu refresh browser.
// Urutan kelas: Langkah 1 (rancang) → 3.1 → 3.2 → 3.3 → 3.4 + FIRST PAINT → 4 → 5 → 6 → 7 → 8 → Level up.
// =====================================================================


// =====================================================================
// LANGKAH 1 · Rancang state (belum ada code, cuma rancangan)
// 🤖 Prompt AI:
// Konteks: aku mau upgrade halaman produk sepatu "Langkah Pagi Runner" jadi product
// configurator: pilih warna (4), ukuran 39-43 (stok beda-beda), jumlah, tombol Tambah ke tas,
// drawer tas belanja, gratis ongkir mulai Rp1.000.000, wishlist, dan dark mode.
// Batasan: HTML, CSS, vanilla JavaScript. Satu objek state + satu function render().
// Kriteria hasil: tulis rancangan objek state (nama key, nilai awal, tipe data). Pisahkan
// mana yang STATE, mana yang DERIVED (dihitung dari state: sisa stok, subtotal, sisa ongkir),
// dan mana yang BUKAN state (efek visual sesaat, misalnya posisi mouse). Belum perlu code,
// jelaskan buat pemula.
//   state   : colorId, size, qty, status, cart, wishlist, cartOpen, menuOpen, theme
//   derived : sisa stok, canAdd, subtotal, cartCount, cartTotal, sisa ongkir
//   BUKAN state: posisi mouse buat tilt 3D, posisi scroll carousel (dipegang browser)
// =====================================================================


// =====================================================================
// LANGKAH 3.1 · DATA + STATE
// 🤖 Prompt AI:
// Konteks: ini index.html-ku: [tempel]. Rancangan state-ku: [tempel].
// Batasan: vanilla JS. Satu objek state { colorId, size, qty, status, cart, wishlist,
// cartOpen, theme }. Function getView() menghitung nilai turunan (sisa stok, canAdd, subtotal,
// cartCount). render() menjalankan daftar renderers. SATU click listener di document membaca
// data-action, memanggil actions[nama] untuk ubah state, lalu render().
// Kriteria hasil: pilih warna/ukuran/jumlah langsung mengubah tampilan, ukuran stok 0
// disabled, jumlah nggak bisa lewat stok, tombol bertuliskan "Pilih ukuran dulu" kalau ukuran
// belum dipilih. Jelaskan baris per baris buat pemula.
// =====================================================================
const product = {
  name: 'Langkah Pagi Runner',
  price: 549000,
  colors: {
    sunset:   { name: 'Sunset Orange', hex: '#E0743C' },
    ocean:    { name: 'Ocean Blue',    hex: '#2F7DD1' },
    matcha:   { name: 'Matcha Green',  hex: '#5E9E5B' },
    midnight: { name: 'Midnight Navy', hex: '#3A3F55' },
  },
  stock: { 39: 6, 40: 3, 41: 0, 42: 5, 43: 2 },   // stok per ukuran
};
const FREE_SHIPPING = 1000000;
//
// Satu-satunya "sumber kebenaran" halaman ini
const state = {
  colorId: 'sunset',
  size: null,
  qty: 1,
  status: 'idle',     // idle | loading | success  (tombol Tambah)
  cart: [],           // [{ colorId, size, qty }]
  wishlist: false,
  cartOpen: false,
  menuOpen: false,    // menu hamburger (layar HP)
  theme: 'light',
};

const rupiah = (n) => 'Rp' + n.toLocaleString('id-ID');
const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;


// =====================================================================
// LANGKAH 3.2 · DERIVED: nilai yang DIHITUNG dari state
// Buka bareng 3.1, 3.3, 3.4, dan FIRST PAINT (paling bawah).
// =====================================================================
function inCart(size) {
  return state.cart
    .filter((item) => item.size === size)
    .reduce((sum, item) => sum + item.qty, 0);
}

function stockLeft(size) {
  return product.stock[size] - inCart(size);
}

function getView() {
  const left = state.size ? stockLeft(state.size) : 0;
  const cartCount = state.cart.reduce((sum, item) => sum + item.qty, 0);
  const cartTotal = cartCount * product.price;
  return {
    color: product.colors[state.colorId],
    left,
    canAdd: state.size !== null && left >= state.qty && state.status === 'idle',
    subtotal: product.price * state.qty,
    cartCount,
    cartTotal,
    shippingLeft: Math.max(0, FREE_SHIPPING - cartTotal),
    shippingProgress: Math.min(100, (cartTotal / FREE_SHIPPING) * 100),
  };
}


// =====================================================================
// LANGKAH 3.3 · render(): gambar ulang layar dari state
// renderers = daftar function gambar. Langkah 4-7 nambah function-nya sendiri.
// =====================================================================
const $ = (selector) => document.querySelector(selector);
const renderers = [];          // tiap Langkah boleh daftar function gambar sendiri

function render() {
  const view = getView();
  for (const draw of renderers) draw(view);
}

function renderOptions(view) {
  document.querySelectorAll('.swatch').forEach((btn) => {
    btn.setAttribute('aria-pressed', btn.dataset.color === state.colorId);
  });
  document.querySelectorAll('.size').forEach((btn) => {
    const size = btn.dataset.size;
    btn.setAttribute('aria-pressed', size === state.size);
    btn.disabled = stockLeft(size) === 0;
  });

  const badge = $('#stockBadge');
  badge.hidden = state.size === null;
  badge.classList.toggle('is-low', view.left > 0 && view.left <= 3);
  badge.classList.toggle('is-empty', view.left === 0);
  badge.textContent = view.left === 0 ? 'Habis' : view.left <= 3 ? `Sisa ${view.left}!` : `${view.left} tersedia`;

  $('#qty').textContent = state.qty;
  $('[data-action="qty-minus"]').disabled = state.qty <= 1;
  $('[data-action="qty-plus"]').disabled = state.size === null || state.qty >= view.left;
  $('#price').textContent = rupiah(view.subtotal);
  $('#cartCount').textContent = view.cartCount;

  const wish = $('.wish-btn');
  wish.setAttribute('aria-pressed', state.wishlist);
  wish.textContent = state.wishlist ? '♥' : '♡';

  const addBtn = $('#addBtn');
  addBtn.dataset.status = state.status;
  addBtn.disabled = !view.canAdd && state.status === 'idle';
  const labels = {
    loading: 'Menyimpan...',
    success: '✓ Masuk tas!',
    idle: state.size === null ? 'Pilih ukuran dulu'
        : view.left === 0 ? 'Ukuran ini habis'
        : `Tambah ke tas · ${rupiah(view.subtotal)}`,
  };
  $('#addLabel').textContent = labels[state.status];
}
renderers.push(renderOptions);


// =====================================================================
// LANGKAH 3.4 · EVENTS: satu listener, banyak action
// Tombol yang action-nya belum dibuat diam aja (aman, nggak error).
// =====================================================================
const actions = {
  color(btn) {
    state.colorId = btn.dataset.color;
  },
  size(btn) {
    state.size = btn.dataset.size;
    state.qty = Math.max(1, Math.min(state.qty, stockLeft(state.size)));
  },
  'qty-minus'() {
    state.qty = Math.max(1, state.qty - 1);
  },
  'qty-plus'() {
    state.qty = Math.min(stockLeft(state.size), state.qty + 1);
  },
};

document.addEventListener('click', (event) => {
  const btn = event.target.closest('[data-action]');
  if (!btn || btn.disabled) return;
  const action = actions[btn.dataset.action];
  if (!action) return;            // action ini belum dibuat (Langkah berikutnya)
  const result = action(btn);     // 1. ubah state
  if (result !== 'skip-render') render();   // 2. gambar ulang
});


// =====================================================================
// LANGKAH 4 · IMMERSIVE (JS): warna, View Transition, tilt 3D
// Buka juga blok CSS "LANGKAH 4" di style.css.
// 🤖 Prompt AI:
// Konteks: aku sudah punya state + render() dan sepatu inline SVG yang warnanya pakai
// CSS variable --shoe.
// Batasan: vanilla JS + CSS, tanpa library. renderStage() mengisi --shoe dari state. Ganti
// warna dibungkus document.startViewTransition (pakai fallback kalau browser belum dukung).
// Efek tilt 3D: pointermove di #stage mengubah CSS variable --rx/--ry, BUKAN state.
// Kriteria hasil: sepatu dan background ikut warna, transisi halus 0,3-0,5 detik, efek mati
// kalau user pilih reduced motion. Jelaskan kenapa tilt nggak disimpan di state.
// =====================================================================
function renderStage(view) {
  document.documentElement.style.setProperty('--shoe', view.color.hex);
  $('#colorName').textContent = view.color.name;
}
renderers.push(renderStage);

// Ganti warna versi upgrade: pakai View Transitions API kalau browser-nya bisa
actions.color = (btn) => {
  const change = () => {
    state.colorId = btn.dataset.color;
    render();
  };
  if (document.startViewTransition && !reduceMotion()) {
    document.startViewTransition(change);
  } else {
    change();
  }
  return 'skip-render';           // render() sudah dipanggil di dalam change()
};

// Tilt 3D: posisi mouse → CSS variable. Ini BUKAN state (cuma efek visual sesaat)
const stage = $('#stage');
const tilt = $('#stageTilt');
stage.addEventListener('pointermove', (event) => {
  if (reduceMotion()) return;
  const box = stage.getBoundingClientRect();
  const x = (event.clientX - box.left) / box.width - 0.5;    // -0.5 .. 0.5
  const y = (event.clientY - box.top) / box.height - 0.5;
  tilt.style.setProperty('--ry', `${x * 24}deg`);
  tilt.style.setProperty('--rx', `${y * -18}deg`);
});
stage.addEventListener('pointerleave', () => {
  tilt.style.setProperty('--ry', '0deg');
  tilt.style.setProperty('--rx', '0deg');
});


// =====================================================================
// LANGKAH 5 · MICRO-INTERACTIONS (JS): tombol async, fly-to-cart, toast
// Buka juga blok CSS "LANGKAH 5" di style.css.
// 🤖 Prompt AI:
// Konteks: tombol #addBtn punya data-status (idle / loading / success) dari state.status.
// Batasan: vanilla JS. Pakai async/await + Promise setTimeout buat pura-pura kirim ke server,
// element.animate() (Web Animations API) buat titik yang terbang ke ikon tas, dan CSS buat
// spinner, hover, :active, :focus-visible, badge stok berdenyut, dan toast.
// Kriteria hasil: klik dobel nggak nambah 2x, label berubah "Menyimpan..." lalu
// "Masuk tas!" lalu normal lagi, toast dibacakan screen reader (role="status"), semua
// animasi mati di reduced motion. Jelaskan per bagian.
// =====================================================================
// const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
//
// function addToCart() {
//   const same = state.cart.find((item) => item.colorId === state.colorId && item.size === state.size);
//   if (same) same.qty += state.qty;
//   else state.cart.push({ colorId: state.colorId, size: state.size, qty: state.qty });
//   state.qty = 1;
// }
//
// function flyToCart() {
//   if (reduceMotion()) return;
//   const from = $('#addBtn').getBoundingClientRect();
//   const to = $('#cartCount').getBoundingClientRect();
//   const dot = document.createElement('span');
//   dot.className = 'fly-dot';
//   dot.style.left = `${from.left + from.width / 2}px`;
//   dot.style.top = `${from.top}px`;
//   document.body.append(dot);
//   const dx = to.left - (from.left + from.width / 2);
//   const dy = to.top - from.top;
//   dot.animate(
//     [
//       { transform: 'translate(0, 0) scale(1)' },
//       { transform: `translate(${dx * 0.5}px, ${dy - 80}px) scale(1.3)`, offset: 0.5 },
//       { transform: `translate(${dx}px, ${dy}px) scale(0.4)` },
//     ],
//     { duration: 700, easing: 'ease-in-out' },
//   ).finished.then(() => {
//     dot.remove();
//     $('#cartCount').animate([{ transform: 'scale(1)' }, { transform: 'scale(1.5)' }, { transform: 'scale(1)' }], { duration: 300 });
//   });
// }
//
// let toastTimer;
// function showToast(text) {
//   const toast = $('#toast');
//   toast.textContent = text;
//   toast.classList.add('is-show');
//   clearTimeout(toastTimer);
//   toastTimer = setTimeout(() => toast.classList.remove('is-show'), 2200);
// }
//
// actions.add = async () => {
//   if (state.status !== 'idle') return 'skip-render';   // cegah klik dobel
//   state.status = 'loading';
//   render();
//   await wait(900);                // pura-pura kirim ke server
//   addToCart();
//   state.status = 'success';
//   render();
//   flyToCart();
//   showToast(`${product.colors[state.colorId].name} ukuran ${state.size} masuk tas 🎉`);
//   await wait(1200);
//   state.status = 'idle';
//   render();
//   return 'skip-render';
// };
//
// actions.wishlist = () => {
//   state.wishlist = !state.wishlist;
//   showToast(state.wishlist ? 'Disimpan ke wishlist ♥' : 'Dihapus dari wishlist');
// };


// =====================================================================
// LANGKAH 6 · DRAWER TAS (JS): dialog + gratis ongkir
// Buka juga blok CSS "LANGKAH 6" di style.css.
// 🤖 Prompt AI:
// Konteks: state.cart berisi item { colorId, size, qty }, dan aku pakai state + render().
// Batasan: vanilla JS + CSS. Pakai elemen dialog + showModal() yang dibuka/ditutup dari
// state.cartOpen di renderCart(). Event close (tombol Esc) dan klik backdrop juga harus
// mengubah state. Tampilkan item (+/- per item, hapus kalau 0), total, dan progress bar gratis
// ongkir Rp1.000.000. Drawer geser dari kanan pakai CSS transition + @starting-style.
// Kriteria hasil: Esc menutup drawer, tombol + nggak bisa lewat stok, teks ongkir berubah jadi
// "Kamu dapat gratis ongkir!". Jelaskan buat pemula.
// =====================================================================
// const drawer = $('#cartDrawer');
//
// function renderCart(view) {
//   $('#cartLines').innerHTML = state.cart.length === 0
//     ? '<li class="empty">Tas masih kosong. Yuk pilih sepatunya 👟</li>'
//     : state.cart.map((item, index) => `
//         <li class="cart-line">
//           <span class="dot" style="background:${product.colors[item.colorId].hex}"></span>
//           <div>
//             <p><strong>${product.colors[item.colorId].name}</strong> · ukuran ${item.size}</p>
//             <p>${rupiah(item.qty * product.price)}</p>
//           </div>
//           <div class="line-ctrl">
//             <button data-action="line-minus" data-index="${index}" aria-label="Kurangi">−</button>
//             <span>${item.qty}</span>
//             <button data-action="line-plus" data-index="${index}" aria-label="Tambah"
//               ${stockLeft(item.size) === 0 ? 'disabled' : ''}>+</button>
//           </div>
//         </li>`).join('');
//
//   $('#cartTotal').textContent = rupiah(view.cartTotal);
//   $('#shipBar').style.width = `${view.shippingProgress}%`;
//   $('#shipText').textContent = view.shippingLeft === 0
//     ? '🎉 Kamu dapat gratis ongkir!'
//     : `Belanja ${rupiah(view.shippingLeft)} lagi buat gratis ongkir`;
//   $('#shipHint').textContent = $('#shipText').textContent;
//
//   if (state.cartOpen && !drawer.open) drawer.showModal();
//   if (!state.cartOpen && drawer.open) drawer.close();
// }
// renderers.push(renderCart);
//
// actions['cart-open'] = () => { state.cartOpen = true; };
// actions['cart-close'] = () => { state.cartOpen = false; };
// actions['line-plus'] = (btn) => { state.cart[btn.dataset.index].qty += 1; };
// actions['line-minus'] = (btn) => {
//   const index = Number(btn.dataset.index);
//   state.cart[index].qty -= 1;
//   if (state.cart[index].qty === 0) state.cart.splice(index, 1);
// };
//
// // Tombol Esc atau klik backdrop juga harus mengubah state
// drawer.addEventListener('close', () => {
//   state.cartOpen = false;
//   render();
// });
// drawer.addEventListener('click', (event) => {
//   const box = drawer.getBoundingClientRect();
//   const outside = event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom;
//   if (event.target === drawer && outside) {      // klik di backdrop
//     state.cartOpen = false;
//     render();
//   }
// });


// =====================================================================
// LANGKAH 7 · INGAT PILIHAN (JS): localStorage + dark mode
// Buka juga blok CSS "LANGKAH 7" di style.css. Reset data: DevTools > Application > Local Storage.
// 🤖 Prompt AI:
// Konteks: state-ku sudah lengkap dan semua tampilan lewat render().
// Batasan: vanilla JS. Simpan colorId, cart, wishlist, theme ke localStorage (JSON.stringify)
// setiap render, lalu baca lagi pakai JSON.parse di dalam try/catch sebelum render pertama.
// Tema awal ikut prefers-color-scheme kalau belum ada data. Warna gelap ditulis sebagai CSS
// variables di :root[data-theme="dark"].
// Kriteria hasil: setelah refresh, isi tas, warna, wishlist, dan tema tetap sama. Data rusak
// di localStorage nggak bikin halaman error. Jelaskan buat pemula.
// =====================================================================
// const SAVE_KEY = 'langkah-studio';
// try {
//   const saved = JSON.parse(localStorage.getItem(SAVE_KEY));
//   if (saved) Object.assign(state, saved);
// } catch (error) {
//   console.warn('Data tersimpan rusak, mulai dari awal', error);
// }
// if (!localStorage.getItem(SAVE_KEY)) {
//   state.theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
// }
//
// function renderTheme() {
//   document.documentElement.dataset.theme = state.theme;
//   const isDark = state.theme === 'dark';
//   const btn = $('.theme-btn');
//   btn.setAttribute('aria-pressed', isDark);
//   btn.textContent = isDark ? '☀️ Light' : '🌙 Dark';
// }
//
// function saveState() {
//   const { colorId, cart, wishlist, theme } = state;   // simpan yang penting aja
//   localStorage.setItem(SAVE_KEY, JSON.stringify({ colorId, cart, wishlist, theme }));
// }
// renderers.push(renderTheme, saveState);
//
// actions.theme = () => {
//   state.theme = state.theme === 'dark' ? 'light' : 'dark';
// };


// =====================================================================
// LANGKAH 8 · MENU HAMBURGER + CAROUSEL (JS)
// Buka juga blok CSS "LANGKAH 8" di style.css. Tes di HP: Ctrl/Cmd+Shift+M, lebar 375px.
// 🤖 Prompt AI:
// Konteks: halamanku punya navbar (#siteNav berisi link ke #produk, #detail, #ulasan,
// #rekomendasi) dan carousel #recoTrack berisi 8 kartu produk rekomendasi.
// Batasan: vanilla JS + CSS, tanpa library. Di layar <= 760px, link navbar disembunyikan dan
// diganti tombol hamburger (data-action="menu", aria-expanded) yang dibuka/ditutup dari
// state.menuOpen. Klik link atau tekan Esc menutup menu. Carousel pakai CSS scroll-snap;
// tombol kiri/kanan cuma scrollBy satu kartu, dan disabled di ujung. Posisi scroll BUKAN state.
// Kriteria hasil: di HP menu muncul halus dan bisa ditutup, carousel bisa digeser pakai tombol,
// swipe, atau keyboard, kartu rekomendasi nggak ngapa-ngapain waktu diklik. Jelaskan buat pemula.
// =====================================================================
// const nav = $('#siteNav');
// const menuBtn = $('.menu-btn');
//
// function renderMenu() {
//   nav.dataset.open = state.menuOpen;
//   menuBtn.setAttribute('aria-expanded', state.menuOpen);
//   menuBtn.setAttribute('aria-label', state.menuOpen ? 'Tutup menu' : 'Buka menu');
//   menuBtn.textContent = state.menuOpen ? '✕' : '☰';
// }
// renderers.push(renderMenu);
//
// actions.menu = () => { state.menuOpen = !state.menuOpen; };
// actions['nav-link'] = () => { state.menuOpen = false; };   // link tetap jalan (scroll ke section)
//
// document.addEventListener('keydown', (event) => {
//   if (event.key === 'Escape' && state.menuOpen) {
//     state.menuOpen = false;
//     render();
//     menuBtn.focus();
//   }
// });
//
// // Carousel: posisi scroll dipegang browser (scroll-snap), BUKAN state
// const track = $('#recoTrack');
// const prevBtn = $('[data-action="reco-prev"]');
// const nextBtn = $('[data-action="reco-next"]');
//
// function slideCarousel(direction) {
//   const card = track.querySelector('.reco-card');
//   const step = card.offsetWidth + 16;                    // lebar kartu + gap
//   track.scrollBy({ left: direction * step, behavior: reduceMotion() ? 'auto' : 'smooth' });
//   return 'skip-render';
// }
// actions['reco-prev'] = () => slideCarousel(-1);
// actions['reco-next'] = () => slideCarousel(1);
//
// function updateCarouselButtons() {
//   prevBtn.disabled = track.scrollLeft <= 4;
//   nextBtn.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
// }
// track.addEventListener('scroll', updateCarouselButtons, { passive: true });
// window.addEventListener('resize', updateCarouselButtons);
// updateCarouselButtons();


// =====================================================================
// LEVEL UP (opsional) · Confetti waktu gratis ongkir kebuka
// Buka juga tag script confetti di index.html.
// 🤖 Prompt AI:
// Konteks: getView()-ku punya shippingLeft (sisa belanja buat gratis ongkir).
// Batasan: library canvas-confetti 1.9.4 dari CDN jsdelivr, vanilla JS, tanpa npm.
// Kriteria hasil: confetti muncul SEKALI saat shippingLeft berubah dari lebih dari 0 jadi 0
// (bukan tiap render, bukan waktu halaman baru dibuka), dan nggak jalan kalau user pilih
// reduced motion atau library gagal ke-load. Kasih tag script-nya + function-nya, jelaskan.
// =====================================================================
// let hadFreeShipping = null;
// function celebrate(view) {
//   const hasFreeShipping = view.shippingLeft === 0;
//   if (hadFreeShipping === false && hasFreeShipping && window.confetti && !reduceMotion()) {
//     window.confetti({ particleCount: 120, spread: 80, origin: { y: 0.3 }, zIndex: 9999 });
//   }
//   hadFreeShipping = hasFreeShipping;
// }
// renderers.push(celebrate);


// =====================================================================
// LANGKAH 3 · FIRST PAINT: gambar layar pertama kali
// Selalu di paling bawah, biar semua bagian di atas sudah siap.
// =====================================================================
// render();
