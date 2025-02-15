// Terdapat sebuah variabel dengan nilai 20. Lakukan perulangan (looping) pada variabel tersebut dimulai dari angka 1.
// Kemudian untuk setiap angka dari (1-20), berikan kondisi berdasarkan rules berikut :
// Bilangan Ganjil
// Bilangan Ganjil adalah bilangan yang tidak habis dibagi 2 (menyisakan sisa bagi)
// Tampilkan / print dengan format “{bilangan} merupakan bilangan Ganjil”
// Bilangan Genap
// Bilangan Genap adalah bilangan yang habis dibagi 2 (tidak menyisakan sisa bagi)
// Tampilkan / print dengan format “{bilangan} merupakan bilangan Genap”
// Bilangan habis dibagi 4
// Bilangan yang habis dibagi 4 (tidak menyisakan sisa bagi)
// Tampilkan / print dengan format “{bilangan} habis dibagi dengan 4”
// Bilangan habis dibagi 6
// Bilangan yang habis dibagi 6 (tidak menyisakan sisa bagi)
// Tampilkan / print dengan format “{bilangan} habis dibagi dengan 6”
// Bilangan habis dibagi 4 DAN 6
// Bilangan yang habis dibagi dengan angka 4 DAN 6 (tidak menyisakan sisa bagi) jika dibagi oleh kedua angka tersebut.
// Tampilkan / print dengan format “{bilangan} habis dibagi dengan angka 4 dan 6”
// Bilangan habis dibagi 3 ATAU 5
// Bilangan yang habis dibagi dengan angka 3 ATAU 5 (tidak menyisakan sisa bagi) jika dibagi oleh kedua angka tersebut.
// Tampilkan / print dengan format “{bilangan} habis dibagi dengan angka 3 atau 5”

const angka = 20;

for (let i = 0; i <= angka; i++) {
  if (i % 2 !== 0) {
    console.log(`bilangan ${i} merupakan bilangan ganjil`);
  } else {
    console.log(`bilangan ${i} merupakan bilangan genap`);
  }
}

console.log("=====================================");

for (let i = 1; i <= angka; i++) {
  if (i % 4 === 0 && i % 6 === 0) {
    console.log(`bilangan ${i} habis dibagi 4 dan 6`);
  } else if (i % 4 === 0) {
    console.log(`bilangan ${i} habis dibagi 4`);
  } else if (i % 6 === 0) {
    console.log(`bilangan ${i} habis dibagi 6`);
  } else if (i % 3 === 0 || i % 5 === 0) {
    console.log(`bilangan ${i} habis dibagi 3 atau 5`);
  } else {
    console.log(`${i}`);
  }
}
