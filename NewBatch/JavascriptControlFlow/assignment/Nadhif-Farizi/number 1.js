const max = 20;

for (let i = 1; i <= max; i++) {
    if (i % 4 === 0 && i % 6 === 0) {
        console.log(`${i} habis dibagi dengan angka 4 dan 6`);
    } else if (i % 3 === 0 || i % 5 === 0) {
        console.log(`${i} habis dibagi dengan angka 3 atau 5`);
    } else if (i % 6 === 0) {
        console.log(`${i} habis dibagi dengan 6`);
    } else if (i % 4 === 0) {
        console.log(`${i} habis dibagi dengan 4`);
    } else if (i % 2 === 0) {
        console.log(`${i} merupakan bilangan Genap`);
    } else {
        console.log(`${i} merupakan bilangan Ganjil`);
    }
}