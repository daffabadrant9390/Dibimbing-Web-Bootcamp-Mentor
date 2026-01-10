const arrayAngkaRandom = [29, 5, 13, 40, 7, 33, 18, 21, 9, 2];
const nilaiTarget1 = 2;
const nilaiTarget2 = 90;

function linearSearch(arrayAngka, nilaiTarget) {
  for(let i = 0; i < arrayAngka.length; i++) {
    if (arrayAngka[i] === nilaiTarget) {
      console.log(`${nilaiTarget} ditemukan pada index ke ${i}`);
      return i;
    }
  }

  console.log(`${nilaiTarget} tidak ditemukan`);
  return -1;
}

linearSearch(arrayAngkaRandom, nilaiTarget1);
linearSearch(arrayAngkaRandom, nilaiTarget2);
