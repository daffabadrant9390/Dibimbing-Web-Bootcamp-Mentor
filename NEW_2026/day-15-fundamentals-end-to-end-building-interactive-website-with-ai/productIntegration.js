// Day 15 · product-interaction.js (shared by product detail 1 and 2)
// Mentor pattern from the Practical Guidance, Step 4. Match the selectors to your HTML.
const form = document.querySelector('#productForm');
const priceElement = document.querySelector('#productPrice');
const variantInput = document.querySelector('#variant');
const quantityInput = document.querySelector('#quantity');
const summary = document.querySelector('#selectionSummary');
 
form.addEventListener('submit', (event) => {
  event.preventDefault();                                   // no page reload
  const price = Number(priceElement.dataset.price);         // string -> number
  const quantity = Number(quantityInput.value);             // string -> number
  const variant = variantInput.value;                       // string
  let subtotal = 0;
  subtotal += price * quantity;                             // arithmetic + assignment
  const hasSelection = variant !== '' && quantity > 0;      // boolean
  summary.textContent = 'Varian ' + variant
    + ' | Jumlah ' + quantity + ' | Subtotal Rp'
    + subtotal + ' | Pilihan terisi: ' + hasSelection;
  // TODO(Day 16): check the stock for the chosen variant before showing the subtotal
  // TODO(Day 16): branch per variant (for example a different price or "stok habis")
});
 
// Expected (product 1): S, quantity 2 -> "Varian S | Jumlah 2 | Subtotal Rp300000 | Pilihan terisi: true"
// Product 2: data-price is filled from the API response before the button is enabled.