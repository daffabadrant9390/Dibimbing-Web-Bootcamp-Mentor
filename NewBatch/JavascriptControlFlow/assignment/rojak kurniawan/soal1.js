const loop = 20;

for (let i = 1; i <= loop; i++) {
  const isGenap = i % 2 === 0;
  const isHabisDibagi4 = i % 4 === 0;
  const isHabisDibagi6 = i % 6 === 0;
  const isHabisDibagi3 = i % 3 === 0;
  const isHabisDibagi5 = i % 5 === 0;

  if (isGenap) {
    console.log(`${i} merupakan bilangan Genap`);
  } else {
    console.log(`${i} merupakan bilangan Ganjil`);
  }

  if (isHabisDibagi4 && isHabisDibagi6) {
    console.log(`${i} habis dibagi dengan angka 4 dan 6`);
  } else {
    if (isHabisDibagi4) {
      console.log(`${i} habis dibagi dengan 4`);
    }
    if (isHabisDibagi6) {
      console.log(`${i} habis dibagi dengan 6`);
    }
  }

  if (isHabisDibagi3 || isHabisDibagi5) {
    console.log(`${i} habis dibagi dengan angka 3 atau 5`);
  }
}
