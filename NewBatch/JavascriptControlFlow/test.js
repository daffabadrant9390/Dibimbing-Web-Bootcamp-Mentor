// // Nested Looping Array
// const namaNamaSiswa = ['John', 'Meu', 'Charlie'];
// const nilaiNilaiSiswa = [
//   [85, 90, 100], // Nilai John
//   [100, 75, 87.5], // Nilai Meu
//   [92.5, 90, 95], // Nilai Charlie
// ];
// const mataPelajaran = ['Alpro', 'Artificial Intelligence', 'Kalkulus'];

// for (let i = 0; i < namaNamaSiswa.length; i++) {
//   console.log('Nilai-nilai pada siswa ', namaNamaSiswa[i], '==>');

//   // Looping Nilai
//   for (let j = 0; j < nilaiNilaiSiswa[i].length; j++) {
//     console.log(' ', mataPelajaran[j], ':', nilaiNilaiSiswa[i][j]);
//   }

//   console.log('');
// }

const dataDataSiswa = [
  ['nama', 'Meuthia'],
  ['usia', 23],
  ['email', 'meuthia_aaa@gmail.com'],
  ['dataIpk', [3.45, 4.0, 3.9, 3.75, 3.85]],
];
console.log('data siswa: ', dataDataSiswa);

// Transform menjadi object
const objectSiswa = Object.fromEntries(dataDataSiswa);
console.log('Object siswa: ', objectSiswa);
