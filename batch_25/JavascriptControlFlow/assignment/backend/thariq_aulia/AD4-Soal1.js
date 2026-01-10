for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        // genap
        console.log(`${i} merupakan bilangan Genap`);
    } else {
        // ganjil
        console.log(`${i} merupakan bilangan Ganjil`);
    }

    if (i % 6 === 0 && i % 4 === 0) {
      console.log(`${i} habis dibagi dengan 4 dan 6`);
    } else if (i % 4 === 0) {
      console.log(`${i} habis dibagi dengan 4`);
    } else if (i % 6 === 0) {
      console.log(`${i} habis dibagi dengan 6`);
    } else if (i % 3 || i % 5) {
      console.log(`${i} habis dibagi dengan 3 atau 5`);
    } else {
      console.log(`${i}`);
    }

    console.log(`==========================================`)
};