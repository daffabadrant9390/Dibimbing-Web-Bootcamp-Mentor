//* Variable Scope
/**
 * 1. Buatlah sebuah variable dengan let -> let nama;
 * 2. print variable tersebut, lihat hasilnya
 * 3. Buat sebuah function dimana dia akan mengubah variable nama dengan initialize value -> "Hello"
 * 4. Jalankan function tersebut dan print variable nama
 * 5. Buat sebuah function dimana dia menginisialisasi let nama lagi dan masukan value -> "World"
 * 6. Jalankan function dan print variable nama
 * 7. Ubah value pada variable nama pada global scope dan print variable nama
 */

let nama = 'Budi';
console.log(`Print nama 1 : ${nama}`);

// Membuat function untuk mengubah nama
function mengubahNama(value) {
  nama = value;
}
mengubahNama('Hello');
console.log(`Print nama 2 : ${nama}`);

// Membuat function untuk menginisialisasi variable nama dan print value
function updateData() {
  let nama = 'World';
  console.log(`Print nama 3 : ${nama}`);
}
updateData();
console.log(`Print nama 4 : ${nama}`);

nama = 'Angel';
console.log(`Print nama 5 : ${nama}`);
