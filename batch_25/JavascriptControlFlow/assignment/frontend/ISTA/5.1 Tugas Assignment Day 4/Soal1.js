//ASSIGNMENT  DAY 4

/*AUTHOR : Ista Cahya Khoeriyyah
  DUEDATE   : 18 Oktober 2025

/*soal_1 Analisis Bilangan 1-20
* - Lakukan looping dari angka 1 hingga 20.
* - Untuk setiap angka, berikan kondisi dan cetak output jika angka tersebut:
//Blok IF, ELSE, ELSE IF  pertama:
  * - Bilangan ganjil: tampilkan “{bilangan} merupakan bilangan Ganjil”.
  * - Bilangan genap: tampilkan “{bilangan} merupakan bilangan Genap”.
//Blok IF, ELSE, ELSE IF kedua:
  * - Habis dibagi 4: tampilkan “{bilangan} habis dibagi dengan 4”.
  * - Habis dibagi 6: tampilkan “{bilangan} habis dibagi dengan 6”.
  * - Habis dibagi 4 dan 6: tampilkan “{bilangan} habis dibagi dengan angka 4 dan 6”.
  * - Habis dibagi 3 atau 5: tampilkan “{bilangan} habis dibagi dengan angka 3 atau 5”.
  * - Jika bilangan tidak habis dibagi 4, 6, 3, dan 5 maka tampilkan bilangan nya saja
 */

//inisial variable
let angka = 0;

//proses
for (let angka = 1; angka <= 20; angka++) {
  if (angka % 2 == 0) {
    console.log(`${angka} merupakan bilangan Genap`);
  } else {
    console.log(`${angka} merupakan bilangan Ganjil`);
  }

  if (angka % 4 == 0) {
    console.log(`${angka} habis dibagi dengan 4`);
  } else if (angka % 6 == 0) {
    console.log(`${angka} habis dibagi dengan 6`);
  } else if (angka % 4 == 0 && angka % 6 == 0) {
    console.log(`${angka} habis dibagi dengan angka 4 dan 6`);
  } else if (angka % 3 == 0 || angka % 5 == 0) {
    console.log(`${angka} habis dibagi dengan angka 3 atau 5`);
  } else {
    console.log(`${angka}`);
  }

  console.log(`\n`);
}
