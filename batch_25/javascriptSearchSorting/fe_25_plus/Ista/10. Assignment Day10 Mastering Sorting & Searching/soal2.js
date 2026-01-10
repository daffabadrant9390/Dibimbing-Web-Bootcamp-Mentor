//*
//soal 2: sorting Algorithm
//A. Buat tiga buah fungsi berbeda, masing-masing untuk metode sorting:
//    *buble sort : array data [7, 2, 9, 4, 1]
//    *selection sort : array data [10, 4, 6, 2, 8]
//    *Insertion sort : array data [5, 3, 8, 6, 2]
//B. Masing-masing fungsi menerima array sebagai input dan mengembalikan array yang sudah terurut secara ascending
//C. Tampilkan hasil array yang sudah diurutkan dari masig-masing metode ke console
//*

//**BAGIAN 1 — SEARCHING ALGORITHM

// Data array tidak terurut
const dataLinear = [29, 5, 13, 40, 7, 33, 18, 21, 9, 2];

// Fungsi Linear Search
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    // Cek setiap elemen satu per satu
    if (arr[i] === target) {
      return i; // Mengembalikan posisi index kalau ketemu
    }
  }
  return -1; // Kalau tidak ditemukan
}

// Pengujian Linear Search
console.log("=== HASIL LINEAR SEARCH ===");
let cariA = 2;
let cariB = 99;
console.log(
  `Cari nilai ${cariA} → index ke-${linearSearch(dataLinear, cariA)}`
);
console.log(
  `Cari nilai ${cariB} → index ke-${linearSearch(dataLinear, cariB)}`
);
console.log("-------------------------------------------");

// B. BINARY SEARCH

// Data array yang sudah terurut
const dataBinary = [3, 7, 12, 18, 22, 27, 31, 36, 40, 45];

// Fungsi Binary Search (versi iterative)
function binarySearch(arr, target) {
  let kiri = 0;
  let kanan = arr.length - 1;

  while (kiri <= kanan) {
    let tengah = Math.floor((kiri + kanan) / 2);

    if (arr[tengah] === target) {
      return true; // nilai ditemukan
    } else if (arr[tengah] < target) {
      kiri = tengah + 1; // geser ke kanan
    } else {
      kanan = tengah - 1; // geser ke kiri
    }
  }
  return false; // nilai tidak ada
}

// Pengujian Binary Search
console.log("=== HASIL BINARY SEARCH ===");
console.log(`Apakah angka 7 ada? → ${binarySearch(dataBinary, 7)}`);
console.log(`Apakah angka 21 ada? → ${binarySearch(dataBinary, 21)}`);
console.log("-------------------------------------------");

//**BAGIAN 2 — SORTING ALGORITHM

// 1. BUBBLE SORT

const dataBubble = [7, 2, 9, 4, 1];

function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      // Tukar jika elemen kiri > elemen kanan
      if (arr[j] > arr[j + 1]) {
        let sementara = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = sementara;
      }
    }
  }
  return arr;
}

console.log("=== HASIL BUBBLE SORT ===");
console.log("Data awal :", dataBubble.join(", "));
console.log("Data urut :", bubbleSort([...dataBubble]).join(", "));
console.log("-------------------------------------------");

// 2. SELECTION SORT
const dataSelection = [10, 4, 6, 2, 8];

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let indexMin = i;

    // Cari elemen terkecil di bagian yang belum terurut
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexMin]) {
        indexMin = j;
      }
    }

    // Tukar posisi elemen terkecil dengan posisi awal
    let sementara = arr[i];
    arr[i] = arr[indexMin];
    arr[indexMin] = sementara;
  }
  return arr;
}

console.log("=== HASIL SELECTION SORT ===");
console.log("Data awal :", dataSelection.join(", "));
console.log("Data urut :", selectionSort([...dataSelection]).join(", "));
console.log("-------------------------------------------");

// 3. INSERTION SORT
const dataInsertion = [5, 3, 8, 6, 2];

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;

    // Geser elemen yang lebih besar ke kanan
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }

    // Masukkan key di posisi yang benar
    arr[j + 1] = key;
  }
  return arr;
}

console.log("=== HASIL INSERTION SORT ===");
console.log("Data awal :", dataInsertion.join(", "));
console.log("Data urut :", insertionSort([...dataInsertion]).join(", "));
