for (let i = 1; i <= 20; i++) {
  // block pertama
  if (i % 2 === 0) {
    console.log(i + " adalah bilangan genap");
  } else if (i % 2 != 2) {
    console.log(i + " adalah bilangan ganjil");
  }
  // block kedua
  if (i % 4 === 0 && i % 6 === 0) {
    console.log(i + "habis dibagi 4 dan 6");
  } else if (i % 4 === 0) {
    console.log(i + "habis dibagi dengan 4");
  } else if (i % 6 === 0) {
    console.log(i + "habis dibagi dengan 6");
  } else if (i % 3 === 0 || i % 5 === 0) {
    console.log(i + "habis dibagi 3 atau 5");
  } else {
    console.log(i);
  }
}
