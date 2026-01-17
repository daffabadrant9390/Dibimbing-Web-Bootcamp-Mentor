// const menampilkanDataOrang = ({ nama = "Daffa", umur, email, gender }) => {
//     return `Nama: ${nama}, Umur: ${umur}, Email: ${email}, Gender: ${gender}`;
// }

// //* Parameter destructuring
// const hasilMenampilkanData = menampilkanDataOrang({
//     email: "john.doe@example.com",
//     gender: "male",
//     umur: 20,
//     nama: "John Doe"
// });
// console.log(hasilMenampilkanData);
// console.log(menampilkanDataOrang( "male", 20, "john.doe@example.com", "John Doe"));

// const arrayNilaiRandom = [12, 90, 37, 42, 58];
//* ForEach
// arrayNilaiRandom.forEach(function(nilai) {
//     const isBilanganGenap = nilai % 2 === 0;
//     if(isBilanganGenap) {
//         console.log(`Bilangan genap: ${nilai}`);
//     } else {
//         console.log(`Bilangan ganjil: ${nilai}`);
//     }
// });

//* MAP
// const arrayNilaiRandomKaliDua = arrayNilaiRandom.map(function(nilai){
//     // Harus di return
//     return nilai * 2;
// });
// console.log(arrayNilaiRandomKaliDua);

// const arraySiswa = [
//     {
//         nama: "Yanto",
//         jurusan: "Sistem Informasi",
//         nilai: [80, 85, 90, 95, 100]
//     },
//     {
//         nama: "Budi",
//         jurusan: "Teknik Informatika",
//         nilai: [70, 75, 80, 85, 90]
//     }
// ];

/**
 * RULES
 * - nama harus uppercase full YANTO, BUDI
 * - ID dari index + 1
 * - rataRataNilai ditambahkan
 */
// const arraySiswaBaru = arraySiswa.map((objectSiswa, index) => {
//     let totalNilaiSiswa = 0;
//     objectSiswa.nilai.forEach(function(nilaiItem){
//         totalNilaiSiswa += nilaiItem;
//     });
//     const rataRataNilaiSiswa = totalNilaiSiswa / objectSiswa.nilai.length;

//     return {
//         ...objectSiswa,
//         id: index + 1,
//         nama: objectSiswa.nama.toUpperCase(),
//         rataRataNilai: rataRataNilaiSiswa
//     }
// });
// console.log(arraySiswaBaru);

// const arrayNilai = [80, 85, 90, 95, 100, 70, 75, 80, 85, 90];
// const totalNilai = arrayNilai.reduce(function(totalNilaiSaatIni, nilaiSaatIni) {
//     console.log(`totalNilaiSaatIni: ${totalNilaiSaatIni}, nilaiSaatIni: ${nilaiSaatIni}`);
//     console.log("=========================");
//     return totalNilaiSaatIni += nilaiSaatIni;
// }, 0);
// console.log(totalNilai);

// const arrayNilaiRandomBaru = [12, 90, 37, 42, 58];
// const arrayNilaiGenap = arrayNilaiRandomBaru.filter((nilai) => nilai % 2 === 0);
// console.log(arrayNilaiGenap);


// for(let i = 0; i < arrayNilaiRandom.length; i++) {
//     const isBilanganGenap = arrayNilaiRandom[i] % 2 === 0;
//     if(isBilanganGenap) {
//         console.log(`Bilangan genap: ${arrayNilaiRandom[i]}`);
//     } else {
//         console.log(`Bilangan ganjil: ${arrayNilaiRandom[i]}`);
//     }
// }

// //* escape string
// // \n => new line
// const nama = "Daffa";
// console.log(nama.toUpperCase());
// console.log(nama.snakeCase());

// Import lodash in COMMONJS
// const _ = require('lodash');

import _ from 'lodash';

const penjumlahanDuaAngka = _.add(10, 20);
console.log("Hasil penjumalahan dua angka: ", penjumlahanDuaAngka);

const arrayNilaiRandom = [12, 90, 37, 42, 58];
const nilaiMaksimum = _.max(arrayNilaiRandom);
console.log("Nilai maksimum: ", nilaiMaksimum);

const text = "Hello World, My name is Avatar";
const snakeCaseText = _.snakeCase(text);
console.log("Text dalam snake case: ", snakeCaseText);