/**
 * Linear Search
 * - Terdapat sebuah array angka random dengan panjang 8 elemen sebagai berikut:
 *  [5, 3, 8, 6, 2, 7, 4, 1]
 * - Buatlah sebuah fungsi bernama linearSearch yang menerima parameter array dan target,
 *   dan mengembalikan indeks dari target jika ditemukan, atau -1 jika tidak ditemukan.
 * 
 * - Cari angka 4 pada array tersebut menggunakan fungsi linearSearch.
 * - Cari angka 99 pada array tersebut menggunakan fungsi linearSearch.
 */

const linearSearchAlgorithm = (arrayData, target) => {
  for(let i = 0; i < arrayData.length; i++) {
    if(arrayData[i] === target) {
      return i; // Return the index if target is found
    }
  }
  return -1; // Return -1 if target is not found


  // // Higher Order Function
  // return arrayData.findIndex((element) => element === target);
}

// const linearSearchAlgorithm = (arrayAngka, target) => {
//   for (let i = 0; i < arrayAngka.length; i++) {
//     if (arrayAngka[i] === target) {
//       return i; // Return the index if target is found
//     }
//   }
//   return -1; // Return -1 if target is not found
// }