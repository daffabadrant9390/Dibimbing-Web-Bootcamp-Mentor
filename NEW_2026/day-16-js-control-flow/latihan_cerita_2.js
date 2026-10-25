// Day 16 · Latihan 2 · ANSWER KEY
const subtotal = 300000; // Dinamis tergantung subtotal belanjaan user
// let discountPercent = 0;

//? Check apakah orang ini dapat diskon atau tidak
// if (subtotal >= 500000) {
//   discountPercent = 15;
// } else if (subtotal >= 200000) {
//   discountPercent = 10;
// } else {
//   discountPercent = 0; // NO DISCOUNT;
// }
const discountPercent = 
  subtotal >= 500000 ? 15 : 
    subtotal >= 200000 ? 10 : 0;

//? Hitung total bayar
const hargaPotonganDiscount = subtotal * (discountPercent / 100);
const totalBayar = subtotal - hargaPotonganDiscount;
console.log("Diskon " + discountPercent + "%");
console.log("Total bayar: Rp" + totalBayar);