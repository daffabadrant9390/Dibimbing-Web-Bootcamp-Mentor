/*Analisis Bilangan 1 - 20
●	Lakukan looping dari angka 1 hingga 20.
●	Untuk setiap angka, berikan kondisi dan cetak output jika angka tersebut:
○	Blok IF, ELSE, ELSE IF  pertama:
■	Bilangan ganjil: tampilkan “{bilangan} merupakan bilangan Ganjil”.
■	Bilangan genap: tampilkan “{bilangan} merupakan bilangan Genap”.
○	Blok IF, ELSE, ELSE IF kedua:
■	Habis dibagi 4: tampilkan “{bilangan} habis dibagi dengan 4”.
■	Habis dibagi 6: tampilkan “{bilangan} habis dibagi dengan 6”.
■	Habis dibagi 4 dan 6: tampilkan “{bilangan} habis dibagi dengan angka 4 dan 6”.
■	Habis dibagi 3 atau 5: tampilkan “{bilangan} habis dibagi dengan angka 3 atau 5”.
■	Jika bilangan tidak habis dibagi 4, 6, 3, dan 5 maka tampilkan bilangan nya saja
*/

const arrayBilangan = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

console.log(`===================BLOK PERTAMA===================`);

for (let i = 0; i < arrayBilangan.length; i++) {
    const bilangan = arrayBilangan[i];
    const isBilanganIniGanjil = bilangan % 2 !== 0;

    if (isBilanganIniGanjil) {
    console.log(`${bilangan} merupakan bilangan Ganjil`);
    } else {
    console.log(`${bilangan} merupakan bilangan Genap`);
    }
}

console.log(`===================BLOK KEDUA===================`);


for (let i = 0; i < arrayBilangan.length; i++) {
    const bilangan = arrayBilangan[i];
    const isHabisDibagi4Dan6 = bilangan % 4 == 0 && bilangan % 6 == 0;
    if (isHabisDibagi4Dan6) {
    console.log(`${bilangan} habis dibagi dengan angka 4 dan 6`);
       } else {
       const isHabisDibagi4 = bilangan % 4 == 0;
         if (isHabisDibagi4) {
         console.log(`${bilangan} habis dibagi dengan 4`);
           } else {
           const isHabisDibagi6 = bilangan % 6 == 0;
             if (isHabisDibagi6) {
             console.log(`${bilangan} habis dibagi dengan 6`);
             } else {
             const isHabisDibagi3Atau5 = bilangan % 3 == 0 || bilangan % 5 == 0;
               if (isHabisDibagi3Atau5) {
               console.log(`${bilangan} habis dibagi dengan angka 3 atau 5`);
               } else {
               console.log(`${bilangan}`);
               }
             }
          }
      }
}