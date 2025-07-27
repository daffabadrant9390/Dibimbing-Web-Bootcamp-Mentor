/**
 * Binary Search
 * - Terdapat sebuah array angka random yang sudah diurutkan sebagai berikut:
 * [3, 10, 13, 29, 47, 60, 77, 81, 93, 101
 * 
 * Buatlah fungsi binarySearch untuk mencari indeks dari target yang diberikan
 * - Jika target ditemukan, kembalikan indeksnya
 * - Jika tidak ditemukan, kembalikan -1.
 * 
 * NOTE: Gunakan fungsi recursive untuk implementasi binary search.
 * - Cari angka 29 pada array tersebut menggunakan fungsi binarySearch.
 * - Cari angka 100 pada array tersebut menggunakan fungsi binarySearch.
 */

const binarySearchAlgorithmRecursive = ({
  arrayAngka,
  target, 
  indexAwal,
  indexAkhir
}) => {
  //* Base Condition
  if(indexAwal > indexAkhir) {
    return -1; // Target not found
  }

  const middleIndex = Math.floor((indexAwal + indexAkhir) / 2);
  const middleValue = arrayData[middleIndex];

  //* Check if the middle value is the target
  if(middleValue === target) {
    return middleIndex; // Target found
  }

  //* Jika middle value lebih kecil dari target, cari di bagian kanan
  if(middleValue < target) {
    return binarySearchAlgorithmRecursive({
      arrayAngka,
      target,
      indexAwal: middleIndex + 1,
      indexAkhir
    });
  } else {
    return binarySearchAlgorithmRecursive({
      arrayAngka,
      target,
      indexAwal,
      indexAkhir: middleIndex - 1
    })
  }
}

const arrayData = [3, 10, 13, 29, 47, 60, 77, 81, 93, 101];
const angkaPertamaDitemukan = binarySearchAlgorithmRecursive({
  arrayAngka: arrayData,
  target: 29,
  indexAwal: 0,
  indexAkhir: arrayData.length - 1
});
console.log("Indeks angka 29:", angkaPertamaDitemukan); // Output: Indeks angka 29: 3

const angkaKeduaDitemukan = binarySearchAlgorithmRecursive({
  arrayAngka: arrayData,
  target: 100,
  indexAwal: 0,
  indexAkhir: arrayData.length - 1
});
console.log("Indeks angka 100:", angkaKeduaDitemukan); // Output: Indeks angka 100: -1