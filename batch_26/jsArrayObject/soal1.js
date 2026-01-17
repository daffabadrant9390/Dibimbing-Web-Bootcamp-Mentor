//* Array of Object Manipulation
/**
 * Terdapat sebuah array of object berupa object mahasiswa
 * - Masing masing object memiliki property awal berupa
 *   a. nama siswa
 *   b. usia
 *   c. email
 *   d. array nilai siswa
 *
 * RULES
 * - Lakukan looping pada array tersebut, kemudian lakukan hal berikut
 *  1. Tambahkan property "id" dari nilai index array + 1
 *  2. Hitung nilai rata-rata siswa dari property "array nilai siswa",
 *     lalu masukkan pada property baru dengan nama "rataRataNilai"
 *  3. Hapus property "array nilai siswa"
 *  4. Tambahkan property "jurusan" dengan aturan sebagai berikut
 *    - Jika index ganjil -> "Sistem Informasi"
 *    - Jika index genap -> "Teknik Informatika"
 *
 * *  Tampilkan hasil akhir object siswa ke console.log()
 */
const arrayObjectMahasiswa = [
  {
    nama: "Budi",
    usia: 20,
    email: "budi@gmail.com",
    arrayNilaiSiswa: [80, 90.25, 85],
  }, 
  {
    nama: "Siti",
    usia: 19,
    email: "siti@gmail.com",
    arrayNilaiSiswa: [75, 80, 70.35],
  },
  {
    nama: "Andi",
    usia: 23,
    email: "andiGanteng@gmail.com",
    arrayNilaiSiswa: [90, 95.15, 100],
  },
  {
    nama: "Dewi",
    usia: 25,
    email: "dewiCantik21@gmail.com",
    arrayNilaiSiswa: [85, 80, 90]
  }
];

// Original Array Object Mahasiswa
console.log("\nArray Object Mahasiswa Original: ", arrayObjectMahasiswa, "\n");

//* 1 Looping dulu array outernya 
for(let [index, objectMahasiswa] of arrayObjectMahasiswa.entries()) {
  //* 1.1 Tambahkan property "id"
  objectMahasiswa.id = index + 1;

  //* 1.2 Hitung nilai rata-rata siswa dari property arrayNilaiSiswa
  let totalNilaiSiswa = 0;
  const arrayNilaiSiswa = objectMahasiswa.arrayNilaiSiswa;
  for(let i = 0; i < arrayNilaiSiswa.length; i++) {
    //? Tambahkan nilai siswa ke totalNilaiSiswa
    totalNilaiSiswa += arrayNilaiSiswa[i];
  }
  const rataRataNilaiSiswa = totalNilaiSiswa / arrayNilaiSiswa.length;

  //* 1.3 Tambahkan property rataRataNilai kedalam objectMahasiswa
  objectMahasiswa.rataRataNilai = rataRataNilaiSiswa;

  //* 1.4 Hapus property arrayNilaiSiswa
  delete objectMahasiswa.arrayNilaiSiswa;

  //* 1.5 Tambahkan property "jurusan" berdasarkan index
  if(index % 2 === 0) {
    objectMahasiswa.jurusan = "Teknik Informatika";
  } else {
    objectMahasiswa.jurusan = "Sistem Informasi";
  }

  //* Tampilkan hasil akhir object siswa ke console.log()
  // console.log("Object Mahasiswa: ", objectMahasiswa);
}

// Tampilkan hasil akhir array object mahasiswa ke console.log()
console.log("\nArray Object Mahasiswa Setelah Manipulasi: ", arrayObjectMahasiswa, "\n");









// for(let [index, objectMahasiswa] of arrayObjectMahasiswa.entries()) {
//   //* 1. Tambahkan property "id" dari niali index array + 1
//   objectMahasiswa.id = index + 1; //? Menambahkan property id

//   //* 2. Hitung nilai rata-rata siswa dari property "array nilai siswa"
//   let totalNilaiSiswa = 0;
//   for(let i = 0; i < objectMahasiswa.arrayNilaiSiswa.length; i++) {
//     totalNilaiSiswa += objectMahasiswa.arrayNilaiSiswa[i];
//   };
//   const rataRataNilai = totalNilaiSiswa / objectMahasiswa.arrayNilaiSiswa.length;
//   objectMahasiswa.rataRataNilai = Math.round(rataRataNilai); //? Menambahkan property rataRataNilai

//   //* 3. Hapus property "array nilai siswa"
//   delete objectMahasiswa.arrayNilaiSiswa; //? Menghapus property arrayNilai

//   //* 4. Tambahkan property "jurusan" berdasarkan index
//   if(index % 2 === 0) {
//     objectMahasiswa.jurusan = "Teknik Informatika"; //? Jika index genap
//   } else {
//     objectMahasiswa.jurusan = "Sistem Informasi"; //? Jika index ganjil
//   }
// }

// //* Tampilkan hasil akhir object siswa ke console.log() */
// console.log("\nArray Object Mahasiswa Setelah Manipulasi: ", arrayObjectMahasiswa, "\n");