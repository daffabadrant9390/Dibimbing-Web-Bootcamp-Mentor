/**
 * Sorting Algorithm
Instruksi:

Buat tiga buah fungsi berbeda, masing-masing untuk satu metode sorting:

Bubble Sort → array data [7, 2, 9, 4, 1]

Selection Sort → array data [10, 4, 6, 2, 8]

Insertion Sort → array data [5, 3, 8, 6, 2]

Masing-masing fungsi menerima array sebagai input dan mengembalikan array yang sudah terurut secara ascending.

Tampilkan hasil array yang sudah diurutkan dari masing-masing metode ke console.

Ekspektasi Output:

File JavaScript (.js) berisi seluruh implementasi algoritma searching dan sorting.

Fungsi linear search mampu memeriksa keberadaan nilai dalam array tidak terurut dan mengembalikan nilai boolean.

Fungsi binary search mampu memeriksa keberadaan nilai dalam array terurut, menggunakan pendekatan iteratif atau rekursif.

Tiga fungsi sorting (bubble, selection, insertion) mengurutkan array dan menampilkan hasilnya ke console.

Seluruh fungsi ditulis dengan struktur yang jelas, efisien, dan mudah dibaca.

Output akhir berupa:

a. Hasil pencarian true atau false dari masing-masing metode dan nilai.

b. Cetakan array yang telah diurutkan menggunakan ketiga metode sorting tersebut.
 */

// Bubble Sort

function bubbleSort(arr) {
  swapped = false;
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    swapped = false;
    for (let j = 0; j < n - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // Tukar elemen
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }

    // Jika tidak ada pertukaran, array sudah terurut
    if (swapped === false) break;
  }

  return arr;
}

console.log(bubbleSort([7, 2, 9, 4, 1]));

// Selection Sort
function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i; // set nilai index terkecil
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        // compare
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      let tempData = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = tempData;
    } //  [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
}

console.log(selectionSort([10, 4, 6, 2, 8]));

// Insertion Sort

function insertionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < arr.length; i++) {
    const key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}

console.log(insertionSort([5, 3, 8, 6, 2]));

// Linear Search
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return true;
  }
  return false;
}

// Binary Search
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

const arrBubble = [7, 2, 9, 4, 1];
const arrSelection = [10, 4, 6, 2, 8];
const arrInsertion = [5, 3, 8, 6, 2];

// Sort dengan bubble untuk binary search
const sortedArr = bubbleSort([...arrBubble]);

console.log("Linear Search (4):", linearSearch(arrBubble, 4)); // true
console.log(
  "Binary Search (4):",
  binarySearch(sortedArr, 0, sortedArr.length - 1, 4),
); // true
console.log(
  "Binary Search (21):",
  binarySearch(sortedArr, 0, sortedArr.length - 1, 21),
); // false
