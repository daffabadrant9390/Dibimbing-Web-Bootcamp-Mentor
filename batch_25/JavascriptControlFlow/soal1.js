/**
 * Menghitung jumlah bilangan genap dan ganjil
 * - Mencari bilangan genap dan ganjil dari array
 * - Hitung total bilangan genap dan ganjil
 * - Pisahkan bilangan genap dan ganjil ke dalam array terpisah
 */

const arrayBilanganRandom = [7, 21, 2, 14, 17, 25, 29, 18, 22, 31];

let totalBilanganGenap = 0;
let totalBilanganGanjil = 0;
const arrayBilanganGenap = [];
const arrayBilanganGanjil = [];

// Looping untuk menghitung total bilangan genap dan ganjil
for(let i = 0; i < arrayBilanganRandom.length; i++) {
  const angkaSaatIni = arrayBilanganRandom[i];
  const isAngkaSaatIniGenap = angkaSaatIni % 2 === 0;

  //! Bilangan Genap
  if(isAngkaSaatIniGenap) {
    // Tambahkan ke total bilangan genap
    totalBilanganGenap += 1; // totalBilanganGenap = totalBilanganGenap + 1;
    // Tambahkan ke array bilangan genap
    arrayBilanganGenap.push(angkaSaatIni);
  } else {
    //! Bilangan Ganjil
    // Tambahkan ke total bilangan ganjil
    totalBilanganGanjil += 1; // totalBilanganGanjil = totalBilanganGanjil + 1;
    // Tambahkan ke array bilangan ganjil
    arrayBilanganGanjil.push(angkaSaatIni);
  }
}

console.log("===== GENAP =====");
console.log("Total bilangan genap: ", totalBilanganGenap);
console.log("Array bilangan genap: ", arrayBilanganGenap);
console.log("\n===== GANJIL =====");
console.log("Total bilangan ganjil: ", totalBilanganGanjil);
console.log("Array bilangan ganjil: ", arrayBilanganGanjil);