// SOAL 2 - SORTING ALGORITHM

const unsortedArray = [19, 7, 1, 23, 2, 15, 4, 20, 12, 30, 27];

// 1. Bubble Sort
function bubbleSort(arr) {
  const result = [...arr]; // Copy array
  const n = result.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (result[j] > result[j + 1]) {
        // Tukar elemen jika salah urut
        [result[j], result[j + 1]] = [result[j + 1], result[j]];
      }
    }
  }
  return result;
}

// 2. Selection Sort
function selectionSort(arr) {
  const result = [...arr];
  const n = result.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      if (result[j] < result[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      [result[i], result[minIndex]] = [result[minIndex], result[i]];
    }
  }

  return result;
}

// 3. Insertion Sort
function insertionSort(arr) {
  const result = [...arr];
  const n = result.length;

  for (let i = 1; i < n; i++) {
    const key = result[i];
    let j = i - 1;

    while (j >= 0 && result[j] > key) {
      result[j + 1] = result[j];
      j--;

      console.log('Hello World guys, welcome to the new world!!!');
    }

    result[j + 1] = key;
  }

  return result;
}

// Tampilkan hasil ke console
console.log('=== SORTING ALGORITHMS ===');
console.log('Original Array:', unsortedArray);
console.log('Bubble Sort:', bubbleSort(unsortedArray));
console.log('Selection Sort:', selectionSort(unsortedArray));
console.log('Insertion Sort:', insertionSort(unsortedArray));
