//*soal 1 : Searching Algorithm

//A. gunakan array berikut : [29,5,13,40,7,33,18,21,9,2]
// buat fungsi pencarian menggunakan linear search yang menerima array dan nilai target, dan mengembalikan nilai
//index di posisi mana angka tersebut ditemukan (jika tidak ditemukan, kembalikan "-1").
// *lakukan pencarian untuk:
//  1. nilaipertana :2
//  2. nilai kedua: 99

//B. Gunakan array berikut (sudah terurut):
//   [3, 7, 12, 18, 22, 27, 31, 36, 40, 45]
//   buat fungsi pencarian menggunakan binary search, boleh menggunakan pendekatan iterative atau rekursif. fungsi
//   harus mengembalikan nilai Boolean.
//   *Lakukan pencarian untuk:
//   1. nilai pertama: 7
//   2. nilai kedua : 21
//*

//1. LINEAR SEARCH

const arr1 = [29, 5, 13, 40, 7, 33, 18, 21, 9, 2];

// fungsi linear search
function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    // periksa satu per satu
    if (array[i] === target) {
      return i; // kembalikan posisi jika ketemu
    }
  }
  return -1; // kalau tidak ada
}

// pengujian
console.log("=== LINEAR SEARCH ===");
let cari1 = 2;
let cari2 = 99;
console.log(`Cari nilai ${cari1} → index:`, linearSearch(arr1, cari1));
console.log(`Cari nilai ${cari2} → index:`, linearSearch(arr1, cari2));
console.log("-------------------------------------------");

//2. BINARY SEARCH
const arr2 = [3, 7, 12, 18, 22, 27, 31, 36, 40, 45];

// fungsi binary search (versi iterative)
function binarySearch(array, target) {
  let kiri = 0;
  let kanan = array.length - 1;

  while (kiri <= kanan) {
    let tengah = Math.floor((kiri + kanan) / 2);
    if (array[tengah] === target) {
      return true; // ditemukan
    } else if (array[tengah] < target) {
      kiri = tengah + 1;
    } else {
      kanan = tengah - 1;
    }
  }
  return false; // tidak ditemukan
}

// pengujian
console.log("=== BINARY SEARCH ===");
console.log(`Apakah angka 7 ada? →`, binarySearch(arr2, 7));
console.log(`Apakah angka 21 ada? →`, binarySearch(arr2, 21));
console.log("-------------------------------------------");
