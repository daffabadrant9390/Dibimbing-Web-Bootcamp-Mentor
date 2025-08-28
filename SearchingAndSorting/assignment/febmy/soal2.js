// --- Soal 2: Sorting Algorithms ---

// Bubble Sort
function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

console.log("\nBubble Sort:");
console.log(bubbleSort([7, 2, 9, 4, 1])); // Expected: [1, 2, 4, 7, 9]

// Selection Sort
function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    let minIdx = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIdx]) minIdx = j;
    }
    [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
  }
  return arr;
}

console.log("\nSelection Sort:");
console.log(selectionSort([10, 4, 6, 2, 8])); // Expected: [2, 4, 6, 8, 10]

// Insertion Sort
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
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

console.log("\nInsertion Sort:");
console.log(insertionSort([5, 3, 8, 6, 2])); // Expected: [2, 3, 5, 6, 8]
