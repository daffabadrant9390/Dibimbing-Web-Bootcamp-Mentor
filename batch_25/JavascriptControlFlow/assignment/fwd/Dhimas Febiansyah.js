/** lakukan looping dari angkat 1 hingga 20
 * untuk setiap angka, berikan kondisi dan cetak output jika angka tersebut :
 * blok IF, ELSE, ELSE IF pertama
 * jika bilangan ganjil : tampilkan "{bilangan} merupakan bilangan Ganjil
 * jika bilangan genap : tampilkan "{bilangan} merupakan bilangan Genap
 * blok IF, ELSE, ELSE IF kedua
 * habis dibagi 4 : tampilkan "{bilangan} habis dibagi dengan 4"
 * habis dibagi 6 : tampilkan "{bilangan} habis dibagi dengan 6"
 * habis dibagi 4 dan 6 : tampilkam "{bilangan} habis dibagi dengan angka 4 dan 6"
 * habis dibagi 3 atau 5 : tampilkan "{bilangan} habis dibagi dengan angka 3 atau 5"
 * jika bilangan tidak habis dibagi 4,6,3 dan 5 maka tampilkan bilangan saja 
 */






console.log("Mulai looping dari angka 1 hingga 20");

// Looping dari angka 1 hingga 20
for (let bilangan = 1; bilangan <= 20; bilangan++) {
  console.log("\n---------------------");
  console.log(`Memeriksa angka: ${bilangan}`);
  console.log("---------------------");

  // Blok IF, ELSE, ELSE IF pertama (Ganjil/Genap)
  if (bilangan % 2 === 0) {
    // Jika sisa bagi 2 adalah 0, maka bilangan genap
    console.log(`${bilangan} merupakan bilangan Genap`);
  } else {
    // Jika tidak, maka bilangan ganjil
    console.log(`${bilangan} merupakan bilangan Ganjil`);
  }

  // Blok IF, ELSE, ELSE IF kedua (Kelipatan)
  // Pemeriksaan harus dimulai dari kondisi yang paling spesifik
  if (bilangan % 4 === 0 && bilangan % 6 === 0) {
    // Kondisi ini harus dicek paling awal karena angka yang habis dibagi 4 dan 6 (yaitu 12)
    // juga akan memenuhi kondisi "habis dibagi 4" dan "habis dibagi 3".
    console.log(`${bilangan} habis dibagi dengan angka 4 dan 6`);
  } else if (bilangan % 4 === 0) {
    console.log(`${bilangan} habis dibagi dengan 4`);
  } else if (bilangan % 6 === 0) {
    console.log(`${bilangan} habis dibagi dengan 6`);
  } else if (bilangan % 3 === 0 || bilangan % 5 === 0) {
    console.log(`${bilangan} habis dibagi dengan angka 3 atau 5`);
  } else {
    // Jika tidak ada kondisi di atas yang terpenuhi
    console.log(bilangan);
  }
}

console.log("\n---------------------");
console.log("Looping selesai.");