const arrayToSort = [19, 7, 1, 23, 2, 15, 4, 20, 12, 30, 27];

// BUBBLE SORT
function bubbleSort(arr) {
  const result = [...arr];
  const n = result.length;

  for (let i = 0; i < n - 1; i++) {
    let swapped = false;

    for (let j = 0; j < n - i - 1; j++) {
      if (result[j] > result[j + 1]) {
        [result[j], result[j + 1]] = [result[j + 1], result[j]];
        swapped = true;
      }
    }

    if (!swapped) break;
  }

  return result;
}

//SELECTION SORT
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

// INSERTION SORT
function insertionSort(arr) {
  const result = [...arr];
  const n = result.length;

  for (let i = 1; i < n; i++) {
    const current = result[i];

    let j = i - 1;
    while (j >= 0 && result[j] > current) {
      result[j + 1] = result[j];
      j--;
    }

    result[j + 1] = current;
  }

  return result;
}

console.log("=== SORTING ALGORITHMS ===");
console.log("Array Awal:", arrayToSort);

const bubbleSorted = bubbleSort(arrayToSort);
console.log("\n=== BUBBLE SORT ===");
console.log("Hasil:", bubbleSorted);

const selectionSorted = selectionSort(arrayToSort);
console.log("\n=== SELECTION SORT ===");
console.log("Hasil:", selectionSorted);

const insertionSorted = insertionSort(arrayToSort);
console.log("\n=== INSERTION SORT ===");
console.log("Hasil:", insertionSorted);
