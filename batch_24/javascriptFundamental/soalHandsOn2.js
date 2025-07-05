/**
 * Var, Let, dan Const
 * - Cara membuat variabel dengan tipe data yang berbeda
 * - Behavior berbeda dari Let dan Const
 * - Avoid penggunaan var (gunakan Let dan Const)
 */

//* Special behavior dari let (mirip dengan var)
let nama = "John Doe";
console.log("Nama Awal: ", nama);

//? Mengganti nilai variabel
nama = "Louis Kienne";
console.log("Nama Baru: ", nama);


//! Const tidak bisa diubah nilainya
const umurSiswa = 17;
console.log('Umur Siswa awal: ', umurSiswa);
// ? Mengganti nilai const akan menghasilkan error
umurSiswa = 18;
console.log('Umur Siswa baru: ', umurSiswa);