//* ===== LINEAR SEARCH =====
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return true;
    }
  }
  return false;
}

//* ===== BINARY SEARCH =====
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

//* ===== BUBBLE SORT =====
function bubbleSort(arr) {
  let sorted = [...arr];
  let n = sorted.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (sorted[j] > sorted[j + 1]) {
        [sorted[j], sorted[j + 1]] = [sorted[j + 1], sorted[j]];
      }
    }
  }

  return sorted;
}

//* ===== SELECTION SORT =====
function selectionSort(arr) {
  let sorted = [...arr];
  let n = sorted.length;

  for (let i = 0; i < n - 1; i++) {
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (sorted[j] < sorted[min]) {
        min = j;
      }
    }
    if (min !== i) {
      [sorted[i], sorted[min]] = [sorted[min], sorted[i]];
    }
  }

  return sorted;
}

//* ===== INSERTION SORT =====
function insertionSort(arr) {
  let sorted = [...arr];

  for (let i = 1; i < sorted.length; i++) {
    let key = sorted[i];
    let j = i - 1;
    while (j >= 0 && sorted[j] > key) {
      sorted[j + 1] = sorted[j];
      j--;
    }
    sorted[j + 1] = key;
  }

  return sorted;
}

// ===== DATA DAN OUTPUT =====

console.log("=== HASIL PENCARIAN ===");

//* input untuk linear search
const dataLinear = [29, 5, 13, 40, 7, 33, 18, 21, 9, 2];
console.log("Linear Search - cari 2  :", linearSearch(dataLinear, 2));
console.log("Linear Search - cari 99 :", linearSearch(dataLinear, 99));

//* input untuk binary search
const dataBinary = [3, 7, 12, 18, 22, 27, 31, 36, 40, 45];
console.log("Binary Search - cari 7  :", binarySearch(dataBinary, 7));
console.log("Binary Search - cari 21 :", binarySearch(dataBinary, 21));

console.log("\n=== HASIL SORTING ===");

const bubbleData = [7, 2, 9, 4, 1];
const selectionData = [10, 4, 6, 2, 8];
const insertionData = [5, 3, 8, 6, 2];

console.log("Bubble Sort     :", bubbleSort(bubbleData));
console.log("Selection Sort  :", selectionSort(selectionData));
console.log("Insertion Sort  :", insertionSort(insertionData));
