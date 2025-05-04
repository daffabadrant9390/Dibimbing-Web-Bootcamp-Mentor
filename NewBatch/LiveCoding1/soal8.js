// /**
//  * 5. Menampilkan karakter yang mengandung vowel / huruf vokal.
//  * Terdapat 2 kata:
//  * - Programming
//  * - Infrastructure
//  *
//  * Temukan karakter yang mengandung huruf vokal (A, I, U, E, O) dari setiap kata tersebut.
//  * Rules:
//  * - Jika mengandung huruf vokal -> print (karakter X mengandung huruf vokal Y)
//  * - Jika tidak mengandung huruf vokal -> print karakternya saja
//  *
//  * NOTE:
//  * - Gunakan kombinasi dari looping dan conditional statement (Switch Case)!
//  * - Gunakan string[iterator] untuk mengakses setiap karakter dari string
//  */

// const kataPertama = 'programming';
// const kataKedua = 'infrastructure';

// //* Lanjutkan code untuk membuat looping dan conditional statement kata pertama
// for (let i = 0; i < kataPertama.length; i++) {
//   const karakterSaatIni = kataPertama[i];

//   switch (karakterSaatIni) {
//     case 'a':
//       console.log('');
//       break;
//     //* Lanjutkan code untuk membuat kondisi dari switch case
//   }
// }

// console.log('==========================');

// //* Lannjutkan code untuk membuat looping dan conditional statement kata kedua

//* Menggunakan rest parameter untuk function
const memformatObjectSiswa = (objectSiswa, ...nilaiNilaiSiswa) => {
  //* Menggunakan spread operator untuk menggabungkan array
  const nilaiSiswa = [90, 75, ...nilaiNilaiSiswa, 80];
  const rataRataNilaiSiswa =
    nilaiSiswa.reduce((jumlahNilai, nilaiItem) => {
      return jumlahNilai + nilaiItem;
    }) / nilaiSiswa.length;

  //* Mengcopy dan menambahkan property baru pada object
  return {
    ...objectSiswa,
    rataRataSiswa: rataRataNilaiSiswa,
  };
};

const objectSiswa = {
  nama: 'Meuthia',
  usia: 24,
  jurusan: 'Teknik Informatika',
};
const formattedObjectSiswa = memformatObjectSiswa(
  objectSiswa,
  75,
  87.5,
  90,
  95
);

console.log('Object original: ', objectSiswa);
console.log('Object setelah format: ', formattedObjectSiswa);
