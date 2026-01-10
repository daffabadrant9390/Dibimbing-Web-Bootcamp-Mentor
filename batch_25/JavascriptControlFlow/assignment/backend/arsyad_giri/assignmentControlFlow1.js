/**
 * Lakukan looping dari angka 1 hingga 20.
 * Untuk setiap angka, berikan kondisi dan cetak output jika angka tersebut:
 * Blok IF, ELSE, ELSE IF  pertama:
 * Bilangan ganjil: tampilkan “{bilangan} merupakan bilangan Ganjil”.
 * Bilangan genap: tampilkan “{bilangan} merupakan bilangan Genap”.
 
 * Blok IF, ELSE, ELSE IF kedua:
 * Habis dibagi 4: tampilkan “{bilangan} habis dibagi dengan 4”.
 * Habis dibagi 6: tampilkan “{bilangan} habis dibagi dengan 6”.
 * Habis dibagi 4 dan 6: tampilkan “{bilangan} habis dibagi dengan angka 4 dan 6”.
 * Habis dibagi 3 atau 5: tampilkan “{bilangan} habis dibagi dengan angka 3 atau 5”.
 * Jika bilangan tidak habis dibagi 4, 6, 3, dan 5 maka tampilkan bilangan nya saja
 */

for (let i = 1; i <= 20; i++) {
    // Blok IF, ELSE, ELSE IF pertama
    if (i % 2 === 0) {
        console.log(`${i} Merupakan Bilangan Genap`);
    } else {
        console.log(`${i} Merupakan Bilangan Ganjil`);
    }
}
console.log('\n-------------------\n');

for (let i = 1; i <= 20; i++) {
    // Blok IF, ELSE, ELSE IF kedua
    if (i % 4 === 0 && i % 6 === 0) {
        console.log(`${i} Habis dibagi dengan angka 4 dan 6`);
    } else if (i % 4 === 0) {
        console.log(`${i} Habis dibagi dengan 4`);
    } else if (i % 6 === 0) {
        console.log(`${i} Habis dibagi dengan 6`);
    } else if (i % 3 === 0 || i % 5 === 0) {
        console.log(`${i} Habis dibagi dengan angka 3 atau 5`);
    } else {
        console.log(i);
    }
}
console.log('\n-------------------\n');