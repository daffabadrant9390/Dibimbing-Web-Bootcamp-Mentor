// Analisis bilangan 1-20
// Blok If... Else if.. (kedua)
const bilangan = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
const a = []; // habis dibagi 4
const b = []; // habis dibagi 6
const c = []; // habis dibagi 4 dan 6
const d = []; // habis dibagi 3 atau 5
const e = []; // tidak habis dibagi 3,4,5,6

for (let i = 0; i < bilangan.length; i++) {
  if (bilangan[i] % 6 == 0 && bilangan[i] % 4 == 0) {
    c.push(bilangan[i]);
  } else if (bilangan[i] % 4 == 0) {
    a.push(bilangan[i]);
  } else if (bilangan[i] % 6 == 0) {
    b.push(bilangan[i]);
  } else if (bilangan[i] % 3 == 0 || bilangan[i] % 5 == 0) {
    d.push(bilangan[i]);
  } else {
    e.push(bilangan[i]);
  }
}
console.log(`${a} habis dibagi dengan 4`);
console.log(`${b} habis dibagi dengan 6`);
console.log(`${c} habis dibagi dengan 4 dan 6`);
console.log(`${d} habis dibagi dengan 3 atau 5`);
console.log(e);
