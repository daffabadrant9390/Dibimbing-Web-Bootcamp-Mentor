/**
 * Filter angka ganjil dan genap
 * - Range angka 1-20
 * - Filter angka apakah ganjil dan genap
 * - Total bilangan ganjil saja dan total bilangan genap saja
 */

const rangeNumber = 20;

let totalBilanganGenap = 0;
let totalBilanganGanjil = 0;
const arrayBilanganGanjil = [];
const arrayBilanganGenap = [];

let i = 1;
while (i <= rangeNumber) {
  // Check bilangan genap atau ganjil
  const isBilanganGenap = i % 2 === 0;

  if(isBilanganGenap) {
    //* Tambah ke total bilangan genap
    totalBilanganGenap += i;
    //* Tambahkan ke array bilangan genap
    arrayBilanganGenap.push(i);
  } else {
    //* Tambah ke total bilangan ganjil
    totalBilanganGanjil += i;
    //* Tambahkan ke array bilangan ganjil
    arrayBilanganGanjil.push(i);
  }

  //* Increment i (updation)
  i++;
};

console.log("===== GENAP =====");
console.log(`Total bilangan genap: ${totalBilanganGenap}`);
console.log("Array bilangan genap: ", arrayBilanganGenap);
console.log("\n===== GANJIL =====");
console.log(`Total bilangan ganjil: ${totalBilanganGanjil}`);
console.log("Array bilangan ganjil: ", arrayBilanganGanjil);
console.log("\n===== DONE =====");
