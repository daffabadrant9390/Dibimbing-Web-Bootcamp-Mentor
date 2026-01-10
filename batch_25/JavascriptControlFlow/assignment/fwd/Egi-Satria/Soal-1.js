/*
- Analisis Bilangan 1 - 20
*/

let angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

console.log(`Blok IF, ELSE, ELSE IF Pertama`);
console.log(`================================`);
console.log(` `);
for (let i = 0; i < angka.length; i++) {
    if (angka[i] % 2 == 0) {
        console.log(`${angka[i]} adalah bilangan genap`);
        console.log(`============================`);
    } else {
        console.log(`${angka[i]} adalah bilangan ganjil`);
        console.log(`============================`);
    }
}
console.log(`\n\n`);

console.log(`Blok IF, ELSE, ELSE IF Kedua`);
console.log(`================================`);
console.log(` `);

for (let i = 0; i < angka.length; i++) {
    if (angka[i] % 4 === 0 && angka[i] % 6 === 0) {
        console.log(`${angka[i]} habis dibagi dengan angka 4 dan 6`);
        console.log(`=====================================`);
    } else if (angka[i] % 4 === 0) {
        console.log(`${angka[i]} habis dibagi dengan 4`);
        console.log(`=====================================`);
    } else if (angka[i] % 6 === 0) {
        console.log(`${angka[i]} habis dibagi dengan 6`);
        console.log(`=====================================`);
    } else if (angka[i] % 3 === 0 || angka[i] % 5 === 0) {
        console.log(`${angka[i]} habis dibagi dengan angka 3 atau 5`);
        console.log(`=====================================`);
    } else {
        console.log(`${angka[i]}`);
        console.log(`=====================================`);
    }
}
