// Looping dari angka 1-20
for (let i = 1; i <= 20; i++) {
  // IF-ELSE pertama
  if (i % 2 == 0) {
    console.log(`${i} merupakan bilangan Genap`);
  } else {
    console.log(`${i} merupakan bilangan Ganjiil`);
  }

  // IF-ELSE kedua
  if (i % 4 == 0 && i % 6 == 0) {
    console.log(`${i} habis dibagi dengan 4`);
  } else if (i % 4 == 0) {
    console.log(`${i} habis dibagi dengan 6`);
  } else if (i % 6 == 0) {
    console.log(`${i} habis dibagi 6`);
  } else if (i % 3 == 0 || i % 5 == 0) {
    console.log(`${i} habis dibagi dengan 3 atau 5`);
  } else {
    console.log(`${i} tidak habis dibagi dengan 3, 4, 5, ataupun 6`);
  }

  console.log("=================");
}
