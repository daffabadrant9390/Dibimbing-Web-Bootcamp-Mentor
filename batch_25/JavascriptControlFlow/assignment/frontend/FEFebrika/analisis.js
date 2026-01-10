/**
 * Soal 1: Analisis Bilangan 1 - 20
 * - Lakukan looping dari angka 1 hingga 20.
 * - Untuk setiap angka, berikan kondisi dan cetak output jika angka tersebut:
 * 
 * Blok IF, ELSE, ELSE IF  pertama:
 * - Bilangan ganjil: tampilkan “{bilangan} merupakan bilangan Ganjil”.
 * - Bilangan genap: tampilkan “{bilangan} merupakan bilangan Genap”.
 * 
 * Blok IF, ELSE, ELSE IF kedua:
 * - Habis dibagi 4: tampilkan “{bilangan} habis dibagi dengan 4”.
 * - Habis dibagi 6: tampilkan “{bilangan} habis dibagi dengan 6”.
 * - Habis dibagi 4 dan 6: tampilkan “{bilangan} habis dibagi dengan angka 4 dan 6”.
 * - Habis dibagi 3 atau 5: tampilkan “{bilangan} habis dibagi dengan angka 3 atau 5”.
 * - Jika bilangan tidak habis dibagi 4, 6, 3, dan 5 maka tampilkan bilangan nya saja
 */


for (let bilangan = 1; bilangan <= 20; bilangan++) {
    if (bilangan % 2 === 0) {
        console.log(`${bilangan}  adalah bilangan Genap`);
    } else {
        console.log(`${bilangan}  adalah bilangan Ganjil`);
    }

    if (bilangan % 4 === 0 && bilangan % 6 === 0) { // dahulukan dihabis 4 dan 6 bersamaan
        console.log(`${bilangan} habis dibagi dengan 4 dan 6`)
    } else if (bilangan % 4 === 0) {
        console.log(`${bilangan} habis dibagi 4`);
    } else if (bilangan % 6 === 0) {
        console.log(`${bilangan} habis dibagi dengan 6`);
    } else if (bilangan % 3 === 0 || bilangan % 5 === 0) {
        console.log(`${bilangan} habis di bagi 3 atau 5`);
    } else (bilangan); 

    }
