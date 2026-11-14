// ===== LANGKAH 3.1 · DATA + STATE =====
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


// ===== LANGKAH 3.2 · DERIVED: nilai yang DIHITUNG dari state =====
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


// ===== LANGKAH 3.3 · render(): gambar ulang layar dari state =====
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


// ===== LANGKAH 3.4 · EVENTS: satu listener, banyak action =====
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


// ===== LANGKAH 4 · IMMERSIVE: warna sepatu, View Transition, tilt 3D =====
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


// ===== LANGKAH 5 · MICRO-INTERACTIONS: async button, fly-to-cart, toast =====
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function addToCart() {
  const same = state.cart.find((item) => item.colorId === state.colorId && item.size === state.size);
  if (same) same.qty += state.qty;
  else state.cart.push({ colorId: state.colorId, size: state.size, qty: state.qty });
  state.qty = 1;
}

function flyToCart() {
  if (reduceMotion()) return;
  const from = $('#addBtn').getBoundingClientRect();
  const to = $('#cartCount').getBoundingClientRect();
  const dot = document.createElement('span');
  dot.className = 'fly-dot';
  dot.style.left = `${from.left + from.width / 2}px`;
  dot.style.top = `${from.top}px`;
  document.body.append(dot);
  const dx = to.left - (from.left + from.width / 2);
  const dy = to.top - from.top;
  dot.animate(
    [
      { transform: 'translate(0, 0) scale(1)' },
      { transform: `translate(${dx * 0.5}px, ${dy - 80}px) scale(1.3)`, offset: 0.5 },
      { transform: `translate(${dx}px, ${dy}px) scale(0.4)` },
    ],
    { duration: 700, easing: 'ease-in-out' },
  ).finished.then(() => {
    dot.remove();
    $('#cartCount').animate([{ transform: 'scale(1)' }, { transform: 'scale(1.5)' }, { transform: 'scale(1)' }], { duration: 300 });
  });
}

let toastTimer;
function showToast(text) {
  const toast = $('#toast');
  toast.textContent = text;
  toast.classList.add('is-show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('is-show'), 2200);
}

actions.add = async () => {
  if (state.status !== 'idle') return 'skip-render';   // cegah klik dobel
  state.status = 'loading';
  render();
  await wait(900);                // pura-pura kirim ke server
  addToCart();
  state.status = 'success';
  render();
  flyToCart();
  showToast(`${product.colors[state.colorId].name} ukuran ${state.size} masuk tas 🎉`);
  await wait(1200);
  state.status = 'idle';
  render();
  return 'skip-render';
};

actions.wishlist = () => {
  state.wishlist = !state.wishlist;
  showToast(state.wishlist ? 'Disimpan ke wishlist ♥' : 'Dihapus dari wishlist');
};


// ===== LANGKAH 6 · DRAWER TAS: dialog + gratis ongkir =====
const drawer = $('#cartDrawer');

function renderCart(view) {
  $('#cartLines').innerHTML = state.cart.length === 0
    ? '<li class="empty">Tas masih kosong. Yuk pilih sepatunya 👟</li>'
    : state.cart.map((item, index) => `
        <li class="cart-line">
          <span class="dot" style="background:${product.colors[item.colorId].hex}"></span>
          <div>
            <p><strong>${product.colors[item.colorId].name}</strong> · ukuran ${item.size}</p>
            <p>${rupiah(item.qty * product.price)}</p>
          </div>
          <div class="line-ctrl">
            <button data-action="line-minus" data-index="${index}" aria-label="Kurangi">−</button>
            <span>${item.qty}</span>
            <button data-action="line-plus" data-index="${index}" aria-label="Tambah"
              ${stockLeft(item.size) === 0 ? 'disabled' : ''}>+</button>
          </div>
        </li>`).join('');

  $('#cartTotal').textContent = rupiah(view.cartTotal);
  $('#shipBar').style.width = `${view.shippingProgress}%`;
  $('#shipText').textContent = view.shippingLeft === 0
    ? '🎉 Kamu dapat gratis ongkir!'
    : `Belanja ${rupiah(view.shippingLeft)} lagi buat gratis ongkir`;
  $('#shipHint').textContent = $('#shipText').textContent;

  if (state.cartOpen && !drawer.open) drawer.showModal();
  if (!state.cartOpen && drawer.open) drawer.close();
}
renderers.push(renderCart);

actions['cart-open'] = () => { state.cartOpen = true; };
actions['cart-close'] = () => { state.cartOpen = false; };
actions['line-plus'] = (btn) => { state.cart[btn.dataset.index].qty += 1; };
actions['line-minus'] = (btn) => {
  const index = Number(btn.dataset.index);
  state.cart[index].qty -= 1;
  if (state.cart[index].qty === 0) state.cart.splice(index, 1);
};

// Tombol Esc atau klik backdrop juga harus mengubah state
drawer.addEventListener('close', () => {
  state.cartOpen = false;
  render();
});
drawer.addEventListener('click', (event) => {
  const box = drawer.getBoundingClientRect();
  const outside = event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom;
  if (event.target === drawer && outside) {      // klik di backdrop
    state.cartOpen = false;
    render();
  }
});


// ===== LANGKAH 7 · INGAT PILIHAN: localStorage + dark mode =====
const SAVE_KEY = 'langkah-studio';
try {
  const saved = JSON.parse(localStorage.getItem(SAVE_KEY));
  if (saved) Object.assign(state, saved);
} catch (error) {
  console.warn('Data tersimpan rusak, mulai dari awal', error);
}
if (!localStorage.getItem(SAVE_KEY)) {
  state.theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function renderTheme() {
  document.documentElement.dataset.theme = state.theme;
  const isDark = state.theme === 'dark';
  const btn = $('.theme-btn');
  btn.setAttribute('aria-pressed', isDark);
  btn.textContent = isDark ? '☀️ Light' : '🌙 Dark';
}

function saveState() {
  const { colorId, cart, wishlist, theme } = state;   // simpan yang penting aja
  localStorage.setItem(SAVE_KEY, JSON.stringify({ colorId, cart, wishlist, theme }));
}
renderers.push(renderTheme, saveState);

actions.theme = () => {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
};


// ===== LANGKAH 8 · MENU HAMBURGER + CAROUSEL REKOMENDASI =====
const nav = $('#siteNav');
const menuBtn = $('.menu-btn');

function renderMenu() {
  nav.dataset.open = state.menuOpen;
  menuBtn.setAttribute('aria-expanded', state.menuOpen);
  menuBtn.setAttribute('aria-label', state.menuOpen ? 'Tutup menu' : 'Buka menu');
  menuBtn.textContent = state.menuOpen ? '✕' : '☰';
}
renderers.push(renderMenu);

actions.menu = () => { state.menuOpen = !state.menuOpen; };
actions['nav-link'] = () => { state.menuOpen = false; };   // link tetap jalan (scroll ke section)

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && state.menuOpen) {
    state.menuOpen = false;
    render();
    menuBtn.focus();
  }
});

// Carousel: posisi scroll dipegang browser (scroll-snap), BUKAN state
const track = $('#recoTrack');
const prevBtn = $('[data-action="reco-prev"]');
const nextBtn = $('[data-action="reco-next"]');

function slideCarousel(direction) {
  const card = track.querySelector('.reco-card');
  const step = card.offsetWidth + 16;                    // lebar kartu + gap
  track.scrollBy({ left: direction * step, behavior: reduceMotion() ? 'auto' : 'smooth' });
  return 'skip-render';
}
actions['reco-prev'] = () => slideCarousel(-1);
actions['reco-next'] = () => slideCarousel(1);

function updateCarouselButtons() {
  prevBtn.disabled = track.scrollLeft <= 4;
  nextBtn.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
}
track.addEventListener('scroll', updateCarouselButtons, { passive: true });
window.addEventListener('resize', updateCarouselButtons);
updateCarouselButtons();


// ===== LEVEL UP · Confetti waktu gratis ongkir kebuka =====
let hadFreeShipping = null;
function celebrate(view) {
  const hasFreeShipping = view.shippingLeft === 0;
  if (hadFreeShipping === false && hasFreeShipping && window.confetti && !reduceMotion()) {
    window.confetti({ particleCount: 120, spread: 80, origin: { y: 0.3 }, zIndex: 9999 });
  }
  hadFreeShipping = hasFreeShipping;
}
renderers.push(celebrate);


// ===== LANGKAH 3 · FIRST PAINT (selalu paling bawah) =====
render();
