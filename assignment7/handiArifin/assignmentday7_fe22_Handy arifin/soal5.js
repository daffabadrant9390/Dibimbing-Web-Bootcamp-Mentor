const _ = require("lodash");

const arrayAngka = [10, 33, 45, 50, 75, 99, 120, 25];

// Salin array untuk operasi pertama (menghapus nilai genap)
const arrayTanpaGenap = [...arrayAngka];
_.remove(arrayTanpaGenap, (n) => n % 2 === 0);
console.log("Array setelah menghapus genap:", arrayTanpaGenap);

const arrayFiltered = [...arrayAngka];
_.remove(arrayFiltered, (n) => n < 50 || n > 100);
console.log("Array setelah menghapus <50 atau >100:", arrayFiltered);
