let bilangan = 20;

function anilisisBilangan(bilangan) {
  for (let i = 1; i <= bilangan; i++) {
    if (i % 2 === 0) {
      console.log(`${i} adalah bilangan genap`);
    } else {
      console.log(`${i} adalah bilangan ganjil`);
    }

    if (i % 4 === 0 && i % 6 === 0) {
      console.log(`${i} habis dibagi dengan angka 4 dan 6`);
    } else if (i % 4 === 0) {
      console.log(`${i} habis dibagi dengan angka 4`);
    } else if (i % 6 === 0) {
      console.log(`${i} habis dibagi dengan angka 6`);
    } else if (i % 3 === 0 || i % 5 === 0) {
      console.log(`${i} habis dibagi dengan angka 3 atau 5`);
    } else {
      console.log(`${i} tidak habis dibagi dengan angka 4, 6, 3, atau 5`);
    }
  }
}

anilisisBilangan(bilangan);
