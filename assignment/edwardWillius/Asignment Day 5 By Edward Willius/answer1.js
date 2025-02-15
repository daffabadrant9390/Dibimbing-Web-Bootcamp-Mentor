const rangeAngka = 20; // Set a value for rangeAngka

for (let i = 1; i <= rangeAngka; i++) {
  const isAngkaGenap = i % 2 === 0;
  const isAngkaGanjil = i % 2 !== 0;
  const habisDibagi4 = i % 4 === 0;
  const habisDibagi6 = i % 6 === 0;
  const habisDibagi4Dan6 = habisDibagi4 && habisDibagi6;
  const habisDibagi3Atau5 = (i % 3 === 0 || i % 5 === 0);

  console.log("====================");
  
  // Display the number and its properties
  if (isAngkaGenap) {
    console.log(`${i} bilangan merupakan bilangan genap.`);
  } else {
    console.log(`${i} bilangan merupakan bilangan ganjil.`);
  }

  if (habisDibagi4) {
    console.log(`${i} bilangan merupakan bilangan habis dibagi 4.`);
  }

  if (habisDibagi6) {
    console.log(`${i} bilangan merupakan bilangan habis dibagi 6.`);
  }

  if (habisDibagi4Dan6) {
    console.log(`${i} bilangan merupakan bilangan habis dibagi 4 dan 6.`);
  }

  if (habisDibagi3Atau5) {
    console.log(`${i} bilangan merupakan bilangan habis dibagi 3 atau 5.`);
  }
}
  
  