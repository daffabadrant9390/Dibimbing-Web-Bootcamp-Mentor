// Day 15 · product-interaction.js (shared by product detail 1, 2 and 3)
// Mentor pattern from the Practical Guidance, Step 4. Match the selectors to your HTML.
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

form.addEventListener('submit', (event) => {
  event.preventDefault();                                   // no page reload
  const price = Number(priceElement.dataset.price);         // string -> number
  const quantity = Number(quantityInput.value);             // string -> number
  const variant = variantInput.value;                       // string
  let subtotal = 0;
  subtotal += price * quantity;                             // arithmetic + assignment
  const hasSelection = variant !== '' && quantity > 0;      // boolean

  // Footer bar: summary (variant, quantity, unit price) + subtotal
  summary.textContent = variantLabel + ': ' + variant
    + ' · Jumlah: ' + quantity
    + ' · Harga: Rp' + price.toLocaleString('id-ID');
  subtotalText.textContent = 'Rp' + subtotal.toLocaleString('id-ID');
  checkoutBar.hidden = !hasSelection;                       // show the bar only when the choice is complete
  // TODO(Day 16): check the stock for the chosen variant before showing the subtotal
  // TODO(Day 16): branch per variant (for example a different price or "stok habis")
});

checkoutButton.addEventListener('click', () => {
  checkoutToast.textContent = 'Demo: halaman pembayaran belum tersedia.';
  checkoutToast.classList.add('is-visible');
  setTimeout(() => checkoutToast.classList.remove('is-visible'), 2500);
});

// Expected (product 1): Ukuran S, Jumlah 2 -> "Ukuran: S · Jumlah: 2 · Harga: Rp150.000", Subtotal Rp300.000
// Product 2: data-price is filled from the API response before the button is enabled.
