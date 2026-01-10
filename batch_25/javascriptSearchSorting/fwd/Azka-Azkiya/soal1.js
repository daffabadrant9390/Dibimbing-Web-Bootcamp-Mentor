//! Fungsi Linear Search
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // mengembalikan index jika ditemukan
    }
  }
  return -1; // jika tidak ditemukan
}

// Data array
const data1 = [129, 5, 13, 40, 7, 33, 18, 21, 9, 2];

// Tes pencarian
console.log("Index nilai 2 =", linearSearch(data1, 2));   // Output: 9
console.log("Index nilai 99 =", linearSearch(data1, 99)); // Output: -1


//! Fungsi Binary Search (versi iteratif)
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return true; // ditemukan
    } else if (arr[mid] < target) {
      left = mid + 1; // cari di kanan
    } else {
      right = mid - 1; // cari di kiri
    }
  }

  return false; // tidak ditemukan
}

// Data array (sudah terurut)
const data2 = [3, 7, 12, 18, 22, 27, 31, 36, 40, 45];

// Tes pencarian
console.log("Apakah 7 ditemukan?", binarySearch(data2, 7));   // Output: true
console.log("Apakah 21 ditemukan?", binarySearch(data2, 21)); // Output: false
