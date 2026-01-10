// Looping 1 sampai 20 dan cek Ganjil Genap

let i = 1;
while (i <= 20) {
  // cek ganjil genap
  if (i % 2 == 0) {
    console.log(`${i} adalah Bilangan Genap`);
  } else {
    console.log(`${i} adalah Bilangan Ganjil`);
  }

  // cek Bilangan 1 sampai 20 yang habis dibagi dengan 3, 4, 5, 6
  if (i % 4 == 0 && i % 6 == 0) {
    console.log(`${i} habis dibagi 4 dan 6`);
  } else if (i % 4 == 0) {
    console.log(`${i} habis dibagi 4`);
  } else if (i % 6 == 0) {
    console.log(`${i} habis bila dibagi 6`);
  } else if (i % 3 == 0 || i % 5 == 0) {
    console.log(`${i} habis dibagi 3 atau 5`);
  } else {
    console.log(i);
  }
  i++;
}
