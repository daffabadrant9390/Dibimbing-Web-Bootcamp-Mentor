// *Gunakan array berikut:
// * [50, 7, 5, 20, 8, 23, 17, 19]
// * Buat fungsi pencarian menggunakan linear search yang menerima array dan nilai target, dan mengembalikan nilai boolean (true jika ditemukan, false jika tidak).
// *Lakukan pencarian untuk:
// *Nilai pertama: 17
// *Nilai kedua: 77

let arr = [50, 7, 5, 20, 8, 23, 17, 19];

function linearSearch(array, target) {
  for (i = 0; i < array.length; i++) {
    let temp = array[i];
    if (temp === target) return true;
  }
  return false;
}

let result1 = linearSearch(arr, 17);
console.log(result1);
let result2 = linearSearch(arr, 77);
console.log(result2);

// *Gunakan array berikut (sudah terurut):
// * [1, 7, 9, 12, 23, 30, 55, 93]
// * Buat fungsi pencarian menggunakan binary search, boleh menggunakan pendekatan iteratif atau rekursif. Fungsi harus mengembalikan nilai boolean.
// *Lakukan pencarian untuk:
// *Nilai pertama: 93
// *Nilai kedua: 17

let arr1 = [1, 7, 9, 12, 23, 30, 55, 93];

const binarySearch = (array, target) => {
  let startIndex = 0;
  let endIndex = array.length - 1;

  while (startIndex <= endIndex) {
    let middleIndex = Math.floor((startIndex + endIndex) / 2);

    if (array[middleIndex] < target) {
      startIndex = middleIndex + 1;
    } else {
      endIndex = middleIndex - 1;
    }

    if (array[middleIndex] === target) {
      return true;
    }
  }
  return false;
};

let result3 = binarySearch(arr1, 1);
console.log(result3);
