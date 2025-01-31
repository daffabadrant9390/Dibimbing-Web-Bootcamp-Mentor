/**
 * 2. System Grading dari nilai mahasiswa. Terdapat sebuah variable yang berisi nilai seorang mahasiswa
 * Tentukan Grade dari siswa tersebut berdasarkan nilai nya menggunakan rules berikut
 * - Jika nilai siswa kurang dari 0 ATAU lebih dari 100, maka print "nilai yang dimasukkan tidak valid";
 * - Jika nilai siswa lebih dari sama dengan 90 DAN kurang dari sama dengan 100, maka grade siswa tersebut adalah "A"
 * - Jika nilai siswa lebih dari sama dengan 80 DAN kurang dari 90, maka:
 *    - Jika nilai siswa lebih dari sama dengan 85 DAN kurang dari 90, maka grade siswa tersebut adalah "B+"
 *    - Jika nilai siswa lebih dari sama dengan 80 DAN kurang dari 85, maka grade siswa tersebut adalah "B"
 * - Jika nilai siswa lebih dari sama dengan 75 DAN kurang dari 80, maka grade siswa tersebut adalah "C"
 * - Jika nilai siswa lebih dari sama dengan 60 DAN kurang dari 75, maka grade siswa tersebut adalah "D"
 * - Selain itu, maka grade siswa tersebut adalah "F" -> print "Maaf {NamaSiswa} belum lulus dan mendapat grade F"
 *
 * Print hasil akhir dengan format "{NamaSiswa} mendapatkan grade {gradeAkhir}"
 */

const nilaiMahasiswa = 87.5;

//* Lanjutkan code untuk membuat kondisi dan print hasil

// const nilaiNilaiSiswa = [22, 57, 69, 91, 48, 88];

// for (let i = 0; i < nilaiNilaiSiswa.length; i++) {
//   const isAngkaGenap = i % 2 === 0;

//   /**
//    * - Menggunakan index (i) untuk mengakses elemen dari Array
//    * - Menggunkan .length sebagai batas dari looping, yaitu panjang Array
//    */
//   if (isAngkaGenap) {
//     console.log(`Angka ${nilaiNilaiSiswa[i]} merupakan bilangan Genap!`);
//   } else {
//     console.log(`Angka ${nilaiNilaiSiswa[i]} merupakan bilangan Ganjil!`);
//   }
// }

// const namaNamaBuah = ['Mangga', 'Strawberry', 'Melon'];
// const namaNamaSiswa = ['Meuthia', 'Jacob', 'Bryan'];
// console.log('\nArray nama buah sebelum concat : ', namaNamaBuah);
// console.log('\nArray nama siswa sebelum concat : ', namaNamaSiswa, '\n');
// const gabunganArray = namaNamaBuah.concat(namaNamaSiswa); // Menggabungkan nama siswa kedalam nama buah
// console.log('\nArray setelah concat : ', gabunganArray, '\n');

// let counter = 0;
// while (counter < namaNamaSiswa.length) {
//   const isIndexGanjil = counter % 2 !== 0;

//   if (isIndexGanjil) {
//     console.log(`Selamat Pagi ${namaNamaSiswa[counter]}!`);
//   } else {
//     console.log(`Selamat Sore ${namaNamaSiswa[counter]}!`);
//   }

//   counter++;
// }

// const namaBuahBuahan = ['mangga', 'jeruk', 'nangka', 'jambu', 'manggis'];
// console.log('\nArray sebelum reverse: ', namaBuahBuahan);
// namaBuahBuahan.reverse();
// console.log('Array setelah reverse: ', namaBuahBuahan);

// const nilaiScore = [90, 82.5, 95, 97.5, 75, 65.25];

// console.log('\nArray sebelum reverse: ', nilaiScore);
// nilaiScore.reverse();
// console.log('Array setelah reverse: ', nilaiScore);

// //? Cara sort ascending biasa
// console.log('\nArray sebelum sort: ', usiaEmployee);
// usiaEmployee.sort(); // Mengurutkan array sesuai alphabet
// console.log('Array setelah sort ascending: ', usiaEmployee, '\n');

// const usiaEmployee2 = [20, 23, 17, 40, 27, 30];
// console.log('\nArray sebelum sort: ', usiaEmployee2);
// //? Cara sort menggunakan fungsi komparasi (ascending & descending)
// usiaEmployee.sort(function (a, b) {
//   // return a - b -> ASCENDING
//   return b - a; // DESCENDING
// });
// console.log('Array setelah sort descending: ', usiaEmployee, '\n');

// const objectSmartPhone = {
//   model: 'A300 Turbo',
//   brand: 'Samsingsung',
//   battery: '10.000 mAh',
//   price: 9500000,
//   camera: ['4.85 MP', '12.0 MP', '34.5 MP'],
// };

// console.log(Object.values(objectSmartPhone));

// // console.log(objectSmartPhone);

// // delete objectSmartPhone.model; // Menghapus property dengan key "model" (valid)
// // delete objectSmartPhone.helloWorld; // (tidak valid)

// // console.log(objectSmartPhone);

const person = {
  name: 'Meuthia',
  email: 'meuthia@gmail.com',
  gender: 'female',
  age: 23,
  hobby: ['reading', 'watching netflix', 'traveling'],
};

const objectValuesArray = Object.values(person);
console.log('\nKumpulan values pada object person: ', objectValuesArray, '\n');

/**
 * Function Declaration
 * - 1. Menggunakan Parameter
 * - 2. Tanpa menggunakan Parameter
 */
const luasSegitigaSiku = function (alas, tinggi) {
  // Block code function
  const hasilPerhitungan = (alas * tinggi) / 2;
  return hasilPerhitungan;
};

// const luasTrapesium = (sisiA, sisiB, tinggi) => {
//   // Block code function
//   const hasilPerhitungan = (tinggi * (sisiA + sisiB)) / 2;
//   return hasilPerhitungan;
// };

console.log(`\nLuas trapesium adalah : ${luasTrapesium(10, 20, 5)}\n`);

function menghitungDiscount(harga, discount) {
  // Block code function
  const hasilPerhitungan = harga - harga * discount;
  return hasilPerhitungan;
}

// Masukkan hasil function kedalam variable
const hasilDiscount = menghitungDiscount(100000, 0.5);

// Menggunakan untuk program komputasi lain
const totalBelanja = 150000 + hasilDiscount;
console.log(`Total Belanja : ${totalBelanja}`);

const angkaGanjilAtauGenap = (angka) => {
  // Block code function
  if (angka % 2 === 0) {
    // Tampilkan bilangan genap
    console.log(`Angka ${angka} adalah Genap`);
  } else {
    // Tampilkan bilangan ganjil
    console.log(`Angka ${angka} adalah Ganjil`);
  }
};

// Pemanggilan function untuk eksekusi
angkaGanjilAtauGenap(4);


/**
 * Membuat function Luas Trapesium yang menerima 3 parameter
 * - parameter 1 => sisiA
 * - parameter 2 => sisiB
 * - parameter 3 => tinggi
 */
const luasTrapesium = function( sisiA , sisiB , tinggi ) {
  // Block code function
  const hasilPerhitungan = (tinggi * (sisiA + sisiB)) / 2;
  return hasilPerhitungan;
};

const hasilLuasTrapesium = luasTrapesium( 8 , 12 , 5 );