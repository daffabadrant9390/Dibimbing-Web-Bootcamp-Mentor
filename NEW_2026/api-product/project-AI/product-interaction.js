// Day 16 · product-interaction.js (shared by product detail 1, 2 and 3)
// Day 15: Number(), subtotal, checkout bar.
// Day 16: switch (stock per variant), if / else if / else (stock badge, stepper, validation,
// free shipping) and for (unit list in the checkout bar).
const form = document.querySelector('#productForm');
const priceElement = document.querySelector('#productPrice');
const variantInput = document.querySelector('#variant');
const quantityInput = document.querySelector('#quantity');
const variantLabel = document.querySelector('label[for="variant"]').textContent; // "Ukuran" / "Warna" / "Varian"
const summary = document.querySelector('#selectionSummary');
const subtotalText = document.querySelector('#subtotalText');
const checkoutBar = document.querySelector('#checkoutBar');
const checkoutButton = document.querySelector('#checkoutButton');
const checkoutToast = document.querySelector('#toast');
// Day 16 elements
const stockBadge = document.querySelector('#stockBadge');
const formMessage = document.querySelector('#formMessage');
const minusButton = document.querySelector('#quantityMinus');
const plusButton = document.querySelector('#quantityPlus');
const unitList = document.querySelector('#unitList');
const shippingInfo = document.querySelector('#shippingInfo');
const FREE_SHIPPING_MIN = 300000;

// Day 16 · Step 1: stock per variant with switch (practice numbers, not real API data)
function getStock(variant) {
  // Product 2 (API): the API has ONE total stock, script.js puts it in form.dataset.stock
  if (form.dataset.stock !== undefined) {
    return Number(form.dataset.stock);
  }
  let stock;
  switch (variant) {
    case 'S':
      stock = 5;
      break;
    case 'M':
      stock = 3;
      break;
    case 'L':
      stock = 0;
      break;
    case 'Putih':
      stock = 6;
      break;
    case 'Hitam':
      stock = 2;
      break;
    case 'Krem':
      stock = 0;
      break;
    default:
      stock = -1;                                           // unknown variant
  }
  return stock;
}

function showMessage(text) {
  formMessage.textContent = text;
  formMessage.hidden = false;
}

function hideMessage() {
  formMessage.textContent = '';
  formMessage.hidden = true;
}

// Day 16 · Step 2: stock badge with if / else if / else (runs every time the variant changes)
function updateStockBadge() {
  const variant = variantInput.value;
  const stock = getStock(variant);
  stockBadge.classList.remove('is-ok', 'is-low', 'is-empty');
  if (variant === '') {
    stockBadge.hidden = true;
    return;
  } else if (stock === -1) {
    stockBadge.textContent = variantLabel + ' tidak dikenal';
    stockBadge.classList.add('is-empty');
  } else if (stock === 0) {
    stockBadge.textContent = variantLabel + ' ' + variant + ' habis';
    stockBadge.classList.add('is-empty');
  } else if (stock <= 3) {
    stockBadge.textContent = 'Sisa ' + stock + ', segera habis!';
    stockBadge.classList.add('is-low');
  } else {
    stockBadge.textContent = stock + ' tersedia';
    stockBadge.classList.add('is-ok');
  }
  stockBadge.hidden = false;
}

variantInput.addEventListener('change', () => {
  hideMessage();
  checkoutBar.hidden = true;                                // old summary no longer matches the choice
  updateStockBadge();
  const stock = getStock(variantInput.value);
  if (stock > 0 && Number(quantityInput.value) > stock) {
    quantityInput.value = stock;                            // keep the quantity inside the new stock
  }
});

// Day 16 · Step 3: stepper − / + with if / else (min 1, max = stock of the chosen variant)
minusButton.addEventListener('click', () => {
  const quantity = Number(quantityInput.value);
  if (quantity > 1) {
    quantityInput.value = quantity - 1;
    hideMessage();
  } else {
    showMessage('Jumlah minimal 1.');
  }
});

plusButton.addEventListener('click', () => {
  const quantity = Number(quantityInput.value);
  const stock = getStock(variantInput.value);
  if (variantInput.value === '') {
    showMessage('Pilih ' + variantLabel.toLowerCase() + ' dulu.');
  } else if (stock === 0) {
    showMessage(variantLabel + ' ' + variantInput.value + ' sedang habis.');
  } else if (quantity >= stock) {
    showMessage('Maksimal ' + stock + ', sesuai stok.');
  } else {
    quantityInput.value = quantity + 1;
    hideMessage();
  }
});

// Day 16 · Step 4-6: validate, then show the summary, free shipping info and unit list
form.addEventListener('submit', (event) => {
  event.preventDefault();                                   // no page reload
  const price = Number(priceElement.dataset.price);         // string -> number
  const quantity = Number(quantityInput.value);             // string -> number
  const variant = variantInput.value;                       // string
  const stock = getStock(variant);
  unitList.textContent = '';                                // clear units from the last submit

  // Step 4: validation with if / else if / else. The first true wins, so the order matters.
  let error = '';
  if (variant === '') {
    error = 'Pilih ' + variantLabel.toLowerCase() + ' dulu.';
  } else if (stock === -1) {
    error = variantLabel + ' tidak valid.';
  } else if (!Number.isInteger(quantity) || quantity <= 0) {
    error = 'Jumlah harus bilangan bulat positif.';
  } else if (!Number.isFinite(price) || price <= 0) {
    error = 'Harga produk belum tersedia.';
  } else if (stock === 0) {
    error = variantLabel + ' ' + variant + ' sedang habis.';
  } else if (quantity > stock) {
    error = 'Jumlah melebihi stok (sisa ' + stock + ').';
  }

  if (error !== '') {
    showMessage(error);
    checkoutBar.hidden = true;
    return;                                                 // stop: nothing below runs
  }
  hideMessage();

  // Day 15 code: subtotal + summary
  let subtotal = 0;
  subtotal += price * quantity;
  summary.textContent = variantLabel + ': ' + variant
    + ' · Jumlah: ' + quantity
    + ' · Harga: Rp' + price.toLocaleString('id-ID');
  subtotalText.textContent = 'Rp' + subtotal.toLocaleString('id-ID');

  // Step 5: free shipping with if / else
  if (subtotal >= FREE_SHIPPING_MIN) {
    shippingInfo.textContent = 'Gratis ongkir!';
    shippingInfo.classList.add('is-free');
  } else {
    const missing = FREE_SHIPPING_MIN - subtotal;
    shippingInfo.textContent = 'Tambah Rp' + missing.toLocaleString('id-ID') + ' lagi untuk gratis ongkir';
    shippingInfo.classList.remove('is-free');
  }

  // Step 6: one chip per unit with for
  for (let unit = 1; unit <= quantity; unit += 1) {
    const item = document.createElement('li');
    item.textContent = 'Unit ' + unit + ' · ' + variant;
    unitList.appendChild(item);
  }
  // Same result with while. Use ONE version at a time (comment out the for above first).
  // let unit = 1;
  // while (unit <= quantity) {
  //   const item = document.createElement('li');
  //   item.textContent = 'Unit ' + unit + ' · ' + variant;
  //   unitList.appendChild(item);
  //   unit += 1;                                           // without this the loop never stops
  // }

  checkoutBar.hidden = false;
});

checkoutButton.addEventListener('click', () => {
  checkoutToast.textContent = 'Demo: halaman pembayaran belum tersedia.';
  checkoutToast.classList.add('is-visible');
  setTimeout(() => checkoutToast.classList.remove('is-visible'), 2500);
});

// Expected (product 1, Rp150.000): S · 2 -> Subtotal Rp300.000, "Gratis ongkir!", 2 units
// M · 1 -> Rp150.000, "Tambah Rp150.000 lagi untuk gratis ongkir" | M · 4 -> "Jumlah melebihi stok (sisa 3)."
// L -> badge "Ukuran L habis", submit -> "Ukuran L sedang habis."
// Product 2: script.js fills data-price and data-stock from the API before the button is enabled.
