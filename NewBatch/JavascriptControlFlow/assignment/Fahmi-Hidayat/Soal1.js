// Soal 1: Analisis Bilangan 1 - 20

// Lakukan looping dari angka 1 hingga 20.
// Untuk setiap angka, berikan kondisi dan cetak output jika angka tersebut:
// Bilangan ganjil: tampilkan “{bilangan} merupakan bilangan Ganjil”.
// Bilangan genap: tampilkan “{bilangan} merupakan bilangan Genap”.
// Habis dibagi 4: tampilkan “{bilangan} habis dibagi dengan 4”.
// Habis dibagi 6: tampilkan “{bilangan} habis dibagi dengan 6”.
// Habis dibagi 4 dan 6: tampilkan “{bilangan} habis dibagi dengan angka 4 dan 6”.
// Habis dibagi 3 atau 5: tampilkan “{bilangan} habis dibagi dengan angka 3 atau 5”.

let angkaTerakhir = 20;

for (let angka = 1; angka <= angkaTerakhir; angka++) {
  if (angka % 2 === 1) {
    console.log(`${angka} merupakan bilangan Ganjil`);
  } else {
    console.log(`${angka} merupakan bilangan Genap`);
  }

  if (angka % 4 === 0 && angka % 6 === 0) {
    console.log(`${angka} habis dibagi dengan angka 4 dan 6`);
  } else if (angka % 4 === 0) {
    console.log(`${angka} habis dibagi dengan 4`);
  } else if (angka % 6 === 0) {
    console.log(`${angka} habis dibagi dengan 6`);
  }

  if (angka % 3 === 0 || angka % 5 === 0) {
    console.log(`${angka} habis dibagi dengan angka 3 atau 5`);
  }
}
