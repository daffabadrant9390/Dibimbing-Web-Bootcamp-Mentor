for (let bilangan = 1; bilangan <= 20; bilangan++) {
    // Cek bilangan ganjil atau genap
    if (bilangan % 2 === 0) {
        console.log(`${bilangan} merupakan bilangan Genap`);
    } else {
        console.log(`${bilangan} merupakan bilangan Ganjil`);
    }

    // Cek habis dibagi 4
    if (bilangan % 4 === 0) {
        console.log(`${bilangan} habis dibagi dengan 4`);
    }

    // Cek habis dibagi 6
    if (bilangan % 6 === 0) {
        console.log(`${bilangan} habis dibagi dengan 6`);
    }

    // Cek habis dibagi 4 dan 6
    if (bilangan % 4 === 0 && bilangan % 6 === 0) {
        console.log(`${bilangan} habis dibagi dengan angka 4 dan 6`);
    }

    // Cek habis dibagi 3 atau 5
    if (bilangan % 3 === 0 || bilangan % 5 === 0) {
        console.log(`${bilangan} habis dibagi dengan angka 3 atau 5`);
    }

    // Tambahkan pemisah
    console.log("-".repeat(40));
}
