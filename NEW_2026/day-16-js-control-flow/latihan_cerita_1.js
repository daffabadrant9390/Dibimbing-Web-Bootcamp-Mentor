// Day 16 · Latihan 1 · ANSWER KEY
const subtotalBelanja = 80000; // ini dinamis tergantung subtotal belanjaan user
let ongkir = 0;

//? Check apakah orang ini dapat ongkir gratis atau tidak
if(subtotalBelanja >= 100000) {
  console.log("Gratis ongkir!");
  ongkir = 0;
} else {
  console.log("Ongkir Rp15000");
  ongkir = 15000;
}

//? Hitung total bayar
const totalBayar = subtotalBelanja + ongkir;
console.log("Total bayar: Rp" + totalBayar);
