// ===========================================
// SOAL 2: SORTING
// ===========================================

console.log("\n--- HASIL SOAL 2: SORTING ---");

// 2.1 Bubble Sort
function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

const dataBubble = [7, 2, 9, 4, 1];
console.log(`Bubble Sort: [${bubbleSort(dataBubble)}]`);


// 2.2 Selection Sort
function selectionSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
}

const dataSelection = [10, 4, 6, 2, 8];
console.log(`Selection Sort: [${selectionSort(dataSelection)}]`);


// 2.3 Insertion Sort
function insertionSort(arr) {
  const n = arr.length;
  for (let i = 1; i < n; i++) {
    let current = arr[i]; 
    let j = i - 1; 
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
}

const dataInsertion = [5, 3, 8, 6, 2];
console.log(`Insertion Sort: [${insertionSort(dataInsertion)}]`);