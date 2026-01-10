//* Belajar membuat console.log (dynamic value)
/**
 * - Menggunakan string dan +
 * - Menggunakan string dan ,
 * - Menggunakan template literals
 */

//* Practice Data Types
//* 1. String
const namaSiswa = "Budi Santoso";
const typeDataNamaSiswa = typeof namaSiswa;
console.log(`Nama Siswa: ${namaSiswa} \nType Data: ${typeDataNamaSiswa}`);

console.log("\n=====================================\n");

//* 2. Number
const umur = 20;
const typeDataUmur = typeof umur;
console.log(`Umur: ${umur} \nType Data: ${typeDataUmur}`);

console.log("\n=====================================\n");

//* 3. Boolean
const isStudent = true;
const typeDataIsStudent = typeof isStudent;
console.log(`Is Student: ${isStudent} \nType Data: ${typeDataIsStudent}`);

console.log("\n=====================================\n");

//* 4. Array
const dataBuahBuahan = ["Apel", "Mangga", true, 20, ["Pisang", "Jeruk"]];
console.log("Data Buah Buahan: ", dataBuahBuahan);
const buahMangga = dataBuahBuahan[1];
console.log(`Buah Mangga: ${buahMangga}`);

console.log("\n=====================================\n");

//* 5. Object
const dataSiswa = {
  nama: "Budi Santoso",
  umur: 17,
  jurusan: "Teknik Informatika",
  email: "budi.santoso@example.com",
  nilaiIpk: 3.5,
  alamat: "Jl. Raya No. 123",
}
const dataNamaSiswa = dataSiswa.nama;
console.log(`Nama Siswa: ${dataNamaSiswa}`);