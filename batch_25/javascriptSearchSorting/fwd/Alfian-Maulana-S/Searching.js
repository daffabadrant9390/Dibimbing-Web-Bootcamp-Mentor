// SOAL 1: LINEAR SEARCH

const unsortedArray = [29, 5, 13, 40, 7, 33, 18, 21, 9, 2];

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // Nilai ditemukan, kembalikan indeks
    }
  }
  return -1; // Nilai tidak ditemukan
}

console.log("SOAL 1: Linear Search");

const result1_1 = linearSearch(unsortedArray, 2);
console.log(`[${unsortedArray}]`);
console.log(`Pencarian 2: Ditemukan pada indeks ${result1_1}`); 

// Pencarian untuk Nilai kedua: 99
const result1_2 = linearSearch(unsortedArray, 99);
console.log(`Pencarian 99: Ditemukan pada indeks ${result1_2}`); 

console.log("\n" + "-".repeat(40) + "\n");

//SOAL 2: BINARY SEARCH

const sortedArray = [3, 7, 12, 18, 22, 27, 31, 36, 40, 45];

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    // Hitung indeks tengah
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return true; // Nilai ditemukan
    } else if (arr[mid] < target) {
      left = mid + 1; // Cari di bagian kanan
    } else {
      right = mid - 1; // Cari di bagian kiri
    }
  }

  return false; // Nilai tidak ditemukan
}

console.log("HASIL SOAL 2: Binary Search");

// Pencarian untuk Nilai pertama: 7
const result2_1 = binarySearch(sortedArray, 7);
console.log(`[${sortedArray}]`);
console.log(`Pencarian 7: Ditemukan: ${result2_1}`); 

// Pencarian untuk Nilai kedua: 21
const result2_2 = binarySearch(sortedArray, 21);
console.log(`Pencarian 21: Ditemukan: ${result2_2}`);