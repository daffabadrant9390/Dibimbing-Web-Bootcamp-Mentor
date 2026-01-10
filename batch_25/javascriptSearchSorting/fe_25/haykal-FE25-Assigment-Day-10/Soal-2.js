// =====================
// SEARCHING ALGORITHM
// =====================

// Linear Search (mengembalikan boolean)
function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return true;
    }
  }
  return false;
}

// Binary Search (mengembalikan boolean)
function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (array[mid] === target) {
      return true;
    } else if (array[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return false;
}

// =====================
// SORTING ALGORITHM
// =====================

// Bubble Sort
function bubbleSort(array) {
  let arr = [...array];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

// Selection Sort
function selectionSort(array) {
  let arr = [...array];
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
}

// Insertion Sort
function insertionSort(array) {
  let arr = [...array];
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}

// =====================
// TEST CASES
// =====================

// Linear Search Test
let arr1 = [29, 5, 13, 40, 7, 33, 18, 21, 9, 2];
console.log("Linear Search:");
console.log("Cari 2 ->", linearSearch(arr1, 2));  // true
console.log("Cari 99 ->", linearSearch(arr1, 99)); // false

// Binary Search Test
let arr2 = [3, 7, 12, 18, 22, 27, 31, 36, 40, 45];
console.log("\nBinary Search:");
console.log("Cari 7 ->", binarySearch(arr2, 7));   // true
console.log("Cari 21 ->", binarySearch(arr2, 21)); // false

// Sorting Tests
console.log("\nSorting Algorithms:");
let bubble = bubbleSort([7, 2, 9, 4, 1]);
let selection = selectionSort([10, 4, 6, 2, 8]);
let insertion = insertionSort([5, 3, 8, 6, 2]);

console.log("Bubble Sort ->", bubble);
console.log("Selection Sort ->", selection);
console.log("Insertion Sort ->", insertion);
