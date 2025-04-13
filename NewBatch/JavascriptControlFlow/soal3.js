/**
 * Looping
 * 1. Lakukan looping pada string, untuk melihat apakah
 *  - Terdapat karakter huruf A pada string tersebut dan berapa kali muncul.
 *  - Menghitung berapa banyak huruf vokal pada string tersebut kemunculannya.
 *  - Menghitung apakah string tersebut mengandung lebih dari 7 karakter huruf (membuat username / password)
 *
 *
 * 2. Looping pada range of number, lalu menentukan bilangan ganjil dan bilangan genap dari angka 1-30
 */
//? 1. String
const contohString = 'HelloaaaaWorldAA';

//* Menghitung kemunculan huruf A
let counterHurufA = 0;
for (let i = 0; i < contohString.length; i++) {
  const contohStringLowerCase = contohString[i].toLowerCase();
  if (contohStringLowerCase === 'a') {
    counterHurufA++;
  }
}
console.log('Berapa kemunculan huruf A: ', counterHurufA);

//* Menghitung kemunculan huruf Vokal
const contohString2 = 'Alphabetooo';
let counterHurufVokal = 0;

let counterLooping = 0;
while (counterLooping < contohString2.length) {
  const contohStringLowerCase = contohString2[counterLooping].toLowerCase();
  const isHurufVokal =
    contohStringLowerCase === 'a' ||
    contohStringLowerCase === 'i' ||
    contohStringLowerCase === 'u' ||
    contohStringLowerCase === 'e' ||
    contohStringLowerCase === 'o';

  if (isHurufVokal) {
    counterHurufVokal++;
  }

  counterLooping++;
}

console.log(
  'Jumlah Huruf Vokal pada text : ',
  contohString2,
  ' adalah : ',
  counterHurufVokal
);

//* Menghitung apakah string memiliki lebih dari 7 karakter
const contohString3 = 'ABCDEF';
let jumlahKarakterPadaString = 0;
for (let i = 0; i < contohString3.length; i++) {
  jumlahKarakterPadaString++;
}

if (jumlahKarakterPadaString > 7) {
  console.log(`username dengan nama ${contohString3} berhasil dibuat!`);
} else {
  console.log(
    `username dengan nama ${contohString3} gagal dibuat. Check kembali jumlah karaketer nya`
  );
}

//? 2. Menentukan genap dan ganjil dari angka 1-30
for (let i = 1; i <= 30; i++) {
  const isNilaiGenap = i % 2 === 0;

  if (isNilaiGenap) {
    console.log(`Nilai ${i} merupakan bilangan genap!`);
  } else {
    console.log(`Nilai ${i} merupakan bilangan ganjil!`);
  }
}
