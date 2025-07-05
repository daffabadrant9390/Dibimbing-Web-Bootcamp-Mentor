// Gunakan array berikut:
//  [50, 7, 5, 20, 8, 23, 17, 19]
//  Buat fungsi pencarian menggunakan linear search yang menerima array dan nilai target, dan mengembalikan nilai boolean (true jika ditemukan, false jika tidak).
// Lakukan pencarian untuk:
// Nilai pertama: 17
// Nilai kedua: 77

let arr = [50, 7, 5, 20, 8, 23, 17, 19];

const isThereValue = (array, target) => {
  for (let a = 0; a < array.length; a++) {
    if (array[a] == target) return true;
  }
  return false;
};

console.log(isThereValue(arr, 17));
console.log(isThereValue(arr, 77));
