// Soal 1: Searching Algorithm
// Gunakan array berikut:
//  [50, 7, 5, 20, 8, 23, 17, 19]
//  Buat fungsi pencarian menggunakan linear search yang menerima array dan nilai target, dan mengembalikan nilai boolean (true jika ditemukan, false jika tidak).
// Lakukan pencarian untuk:
// Nilai pertama: 17
// Nilai kedua: 77
// Gunakan array berikut (sudah terurut):
//  [1, 7, 9, 12, 23, 30, 55, 93]
//  Buat fungsi pencarian menggunakan binary search, boleh menggunakan pendekatan iteratif atau rekursif. Fungsi harus mengembalikan nilai boolean.
// Lakukan pencarian untuk:
// Nilai pertama: 93
// Nilai kedua: 17


function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        return true;
      }
    }
    return false;
  }
  
  
  const unsortedArray = [50, 7, 5, 20, 8, 23, 17, 19];
  
  
  console.log("Linear Search untuk 17:", linearSearch(unsortedArray, 17)); // true
  console.log("Linear Search untuk 77:", linearSearch(unsortedArray, 77)); // false
  
  
  
  function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === target) return true;
      else if (arr[mid] < target) left = mid + 1;
      else right = mid - 1;
    }
  
    return false;
  }
  
  
  const sortedArray = [1, 7, 9, 12, 23, 30, 55, 93];
  
  
  console.log("Binary Search untuk 93:", binarySearch(sortedArray, 93)); // true
  console.log("Binary Search untuk 17:", binarySearch(sortedArray, 17)); // false
  