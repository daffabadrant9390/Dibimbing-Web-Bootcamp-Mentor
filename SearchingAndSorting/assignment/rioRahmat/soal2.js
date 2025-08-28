// Bubble Sort
function bubbleSort(arr) {
  const data = [...arr]; // copy array agar tidak mengubah data asli
  for (let i = 0; i < data.length - 1; i++) {
    for (let j = 0; j < data.length - 1 - i; j++) {
      if (data[j] > data[j + 1]) {
        [data[j], data[j + 1]] = [data[j + 1], data[j]];
      }
    }
  }
  return data;
}

const bubbleResult = bubbleSort([7, 2, 9, 4, 1]);
console.log("Bubble Sort:", bubbleResult); // [1, 2, 4, 7, 9]


//Selection Sort

function selectionSort(arr) {
  const data = [...arr];
  for (let i = 0; i < data.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < data.length; j++) {
      if (data[j] < data[minIndex]) {
        minIndex = j;
      }
    }
    [data[i], data[minIndex]] = [data[minIndex], data[i]];
  }
  return data;
}

const selectionResult = selectionSort([10, 4, 6, 2, 8]);
console.log("Selection Sort:", selectionResult); // [2, 4, 6, 8, 10]


//Insertion Sort

function insertionSort(arr) {
  const data = [...arr];
  for (let i = 1; i < data.length; i++) {
    let key = data[i];
    let j = i - 1;

    while (j >= 0 && data[j] > key) {
      data[j + 1] = data[j];
      j--;
    }
    data[j + 1] = key;
  }
  return data;
}

const insertionResult = insertionSort([5, 3, 8, 6, 2]);
console.log("Insertion Sort:", insertionResult); // [2, 3, 5, 6, 8]
