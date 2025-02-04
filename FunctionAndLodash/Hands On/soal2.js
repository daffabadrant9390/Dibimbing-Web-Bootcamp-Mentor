/**
 * 2. Buatlah sebuah function untuk memfilter sebuah array kedalam array angka genap dan angka ganjil
 * kembalikan / return 1 buah array bergantung dari parameter yang dimasukkan.
 * 
 * TUGAS
 * - Function tersebut menerima 2 parameter, 
 *  1. array yang akan di filter-kan
 *  2. string 'genap' atau 'ganjil' -> untuk menentukan array yang akan dikembalikan
 * 
 * - Function ini mengembalikan array genap / ganjil berdasarkan filterType nya.
 *  - jika filterType 'genap' maka array yang dikembalikan hanya berisi angka genap
 *  - jika filterType 'ganjil' maka array yang dikembalikan hanya berisi angka ganjil
 *  - jika filterType tidak valid maka return 'FilterType tidak valid'
 * - array yang dikembalikan harus dalam bentuk sorted ascending
 */

const filterArrayGenapOrGanjil = function(array, filterType) {
  const arrayGenap = [];
  const arrayGanjil = [];

  // array.forEach((arrayElement) => {
  //   if (arrayElement % 2 === 0) {
  //     arrayGenap.push(arrayElement);
  //   } else {
  //     arrayGanjil.push(arrayElement);
  //   }
  // });

  for (const nilai of array) {
    if (nilai % 2 === 0) {
      arrayGenap.push(nilai);
    } else {
      arrayGanjil.push(nilai);
    }
  }

  if(filterType === 'genap') {
    return arrayGenap.sort((a, b) => a - b);
  } else if(filterType === 'ganjil') {
    return arrayGanjil.sort((a, b) => a - b);
  } else {
    return 'FilterType tidak valid';
  }
}

const array = [21, 30, 57, 7, 9, 12, 90, 100, 56, 42];
const arrayFilterGenap = filterArrayGenapOrGanjil(array, 'genap');
