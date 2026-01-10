// Analisis bilangan 1-20
// Blok If... Else
const bilangan = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
const bilanganGenap = [];
const bilanganGanjil = [];

for (let i = 0; i < bilangan.length; i++) {
  if (bilangan[i] % 2 == 0) {
    bilanganGenap.push(bilangan[i]);
  } else {
    bilanganGanjil.push(bilangan[i]);
  }
}
console.log(`${bilanganGenap} merupakan bilangan genap`);
console.log(`${bilanganGanjil} merupakan bilangan ganjil`);

// Blok if... else.. else if..
