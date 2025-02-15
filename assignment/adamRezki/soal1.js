//perulangan dari 1 - 20
for (let i = 1; i <= 20; i++) {
    //cek bilangan habis dibagi 4 & 6
    if (i % 4 === 0 && i % 6 ===0) {
        console.log(`${i} habis dibagi dengan angka 4 dan 6`);
    }
    //cek bilangan apakah habis dibagi 4
    else if (i % 4 === 0) {
        console.log(`${i} habis dibagi dengan 4`);
    }
    //cek bilangan apakah habis dibagi dengan 6
    else if (i % 6 ===0) {
        console.log(`${i} habis dibagi dengan 6`);
    }
    //cek bilangan apakah habis dibagi 3 atau 5
    else if (i % 3 === 0 || i % 5 === 0) {
        console.log(`${i} habis dibagi dengan angka 3 atau 5`);
    }
    //Cek apakah bilangan genap
    else if (i % 2 === 0) {
        console.log(`${i} merupakan bilangan Genap`);
    }
    //Cek bilangan apakah ganjil
    else {
        console.log(`${i} merupakan bilangan Ganjil`);
    }
}
