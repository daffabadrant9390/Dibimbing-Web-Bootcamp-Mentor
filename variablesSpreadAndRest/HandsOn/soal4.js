/**
 * 4.
 * a. Mengcopy nilai pada object
 * - Buat sebuah object A
 * - Ubah object A dengan menambahkan beberapa property baru
 * - Copy object tersebut kedalam object B
 * - Ubah object B dengan menambah property baru
 * - Ubah object A dengan menghapus property lama
 *
 * Tampilkan hasil dari object A dan object B (komputasi pada object A tidak akan
 * menghubah object B)
 *
 * b. Mengcopy object untuk mentransform object yang sama didalam function
 */

const objectPekerja = {
  nama: 'Budi',
  usia: 30,
  penghasilan: 10000000,
};
objectPekerja.email = 'budi@gmail.com';

// Mengcopy object A ke object B
const objectPekerja2 = { ...objectPekerja };
objectPekerja2.pekerjaan = 'software engineer';

// Menghapus property pada object A
delete objectPekerja.usia;

console.log(objectPekerja);
console.log('\n==============\n');
console.log(objectPekerja2);
