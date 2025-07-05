// Soal 1: Searching Algorithm

// Linear Search
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return true;
    }
  }
  return false;
}

// Binary Search (Iteratif)
function binarySearch(arr, target) {
  let kiri = 0;
  let kanan = arr.length - 1;

  while (kiri <= kanan) {
    let tengah = Math.floor((kiri + kanan) / 2);
    if (arr[tengah] === target) {
      return true;
    } else if (arr[tengah] < target) {
      kiri = tengah + 1;
    } else {
      kanan = tengah - 1;
    }
  }

  return false;
}

// Cek linear search
console.log("=== Linear Search ===");
const arrayAcak = [50, 7, 5, 20, 8, 23, 17, 19];
console.log("Cari 17:", linearSearch(arrayAcak, 17)); // true
console.log("Cari 77:", linearSearch(arrayAcak, 77)); // false

// Cek binary search
console.log("\n=== Binary Search ===");
const arrayUrut = [1, 7, 9, 12, 23, 30, 55, 93];
console.log("Cari 93:", binarySearch(arrayUrut, 93)); // true
console.log("Cari 17:", binarySearch(arrayUrut, 17)); // false

// Soal 2: Sorting Algorithm

// Bubble Sort
function bubbleSort(arr) {
  let result = [...arr];
  for (let i = 0; i < result.length - 1; i++) {
    for (let j = 0; j < result.length - i - 1; j++) {
      if (result[j] > result[j + 1]) {
        let temp = result[j];
        result[j] = result[j + 1];
        result[j + 1] = temp;
      }
    }
  }
  return result;
}

// Selection Sort
function selectionSort(arr) {
  let result = [...arr];
  for (let i = 0; i < result.length; i++) {
    let minIdx = i;
    for (let j = i + 1; j < result.length; j++) {
      if (result[j] < result[minIdx]) {
        minIdx = j;
      }
    }
    if (minIdx !== i) {
      let temp = result[i];
      result[i] = result[minIdx];
      result[minIdx] = temp;
    }
  }
  return result;
}

// Insertion Sort
function insertionSort(arr) {
  let result = [...arr];
  for (let i = 1; i < result.length; i++) {
    let key = result[i];
    let j = i - 1;
    while (j >= 0 && result[j] > key) {
      result[j + 1] = result[j];
      j--;
    }
    result[j + 1] = key;
  }
  return result;
}

// Array untuk dicoba sorting
const dataAcak = [19, 7, 1, 23, 2, 15, 4, 20, 12, 30, 27];

console.log("\n=== Sorting Algorithms ===");
console.log("Bubble Sort Result     :", bubbleSort(dataAcak));
console.log("Selection Sort Result  :", selectionSort(dataAcak));
console.log("Insertion Sort Result  :", insertionSort(dataAcak));
