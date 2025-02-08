/**
 * 3.
 * a. Menggabungkan nilai pada array tanpa spread operator
 *
 * b. Mengcopy dan mengupdate nilai pada array
 *  - Ubah element pada array (tambahkan element di akhir index)
 *  - Copy array kedalam variable baru
 *  - Ubah array pada variable baru dengan menambah element di tengah array menggunakan spread operator
 *    melalui array lain
 *  - Ubah array pada variable lama dengan menambah element di ujung array menggunakan spread operator
 *    melalui array lain dengan kondisi hanya element ke 2-4
 *
 *  print array lama dan array baru setelah di copy (array baru tidak akan mengubah array lama)
 */

// a
const arrayNilai1 = [10, 20, 30];
const arrayNilai2 = [40, 50, 60];
const gabunganArray = [...arrayNilai1, ...arrayNilai2];
console.log('\ngabunganArray: ', gabunganArray);

// b
const arrayBuah1 = ['pisang', 'apel', 'mangga'];
arrayBuah1.push('anggur');

const arrayBuah2 = [...arrayBuah1];
const arrayBuahLain = ['manggis', 'pepaya'];
const arrayGabungan = [
  ...arrayBuah2.slice(0, 2), //* Mengambil array pada index 0 - 1
  ...arrayBuahLain,
  ...arrayBuah2.slice(2), //* Mengambil array pada index 2 - akhir array
  // arrayBuah2[arrayBuah2.length - 1], //* Mengambil array element pada index terakhir
];

console.log('\n arrayBuah1: ', arrayBuah1, '\n');
console.log('\n arrayGabungan: ', arrayGabungan);
