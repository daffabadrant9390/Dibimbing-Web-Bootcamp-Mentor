/**
 * Searching Algorithm

Gunakan array berikut:
[29, 5, 13, 40, 7, 33, 18, 21, 9, 2]

Buat fungsi pencarian menggunakan linear search yang menerima array dan nilai target, dan mengembalikan nilai index 
di posisi mana angka tersebut ditemukan (Jika tidak ditemukan, kembalikan “-1”).

○ Lakukan pencarian untuk:
▪ Nilai pertama: 2
▪ Nilai kedua: 99

Gunakan array berikut (sudah terurut):
[3, 7, 12, 18, 22, 27, 31, 36, 40, 45]

Buat fungsi pencarian menggunakan binary search, boleh menggunakan pendekatan iteratif atau rekursif.
Fungsi harus mengembalikan nilai boolean.

○ Lakukan pencarian untuk:
▪ Nilai pertama: 7
▪ Nilai kedua: 21
 */

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1; // tanpa else
}

const arr = [29, 5, 13, 40, 7, 33, 18, 21, 9, 2];

console.log("Cari 2 → Index ke:", linearSearch(arr, 2));
console.log("Cari 99 → Index ke:", linearSearch(arr, 99));

function binarySearch(arr1, startIndex, endIndex, target) {
  // Base condition
  if (startIndex > endIndex) {
    return false;
  }

  let midIndex = Math.floor((startIndex + endIndex) / 2);

  if (arr1[midIndex] === target) {
    return true;
  } else if (arr1[midIndex] < target) {
    const updatedStartIndex = midIndex + 1;
    return binarySearch(arr1, updatedStartIndex, endIndex, target);
  } else {
    const updatedEndIndex = midIndex - 1;
    return binarySearch(arr1, startIndex, updatedEndIndex, target);
  }
}

const arr1 = [3, 7, 12, 18, 22, 27, 31, 36, 40, 45];

console.log(
  "Apakah nilai 7 terdapat pada array :",
  binarySearch(arr1, 0, arr.length - 1, 7),
);
console.log(
  "Apakah nilai 21 terdapat pada array :",
  binarySearch(arr1, 0, arr.length - 1, 21),
);
