for (let i = 1; i <= 20; i++) {
  if (i % 2 === 1) {
    console.log(`${i} merupakan bilangan Ganjil`);
  } else {
    console.log(`${i} merupakan bilangan Genap`);
  }

  if (i % 4 === 0 && i % 6 === 0) {
    console.log(`${i} habis dibagi dengan angka 4 dan 6`);
  } else {
    if (i % 4 === 0) {
      console.log(`${i} habis dibagi dengan 4`);
    }
    if (i % 6 === 0) {
      console.log(`${i} habis dibagi dengan 6`);
    }
  }

  if (i % 3 === 0 || i % 5 === 0) {
    console.log(`${i} habis dibagi dengan angka 3 atau 5`);
  }

  console.log("--------------");
}
