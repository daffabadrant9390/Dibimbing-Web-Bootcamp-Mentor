// 1. Bubble Sort
function bubbleSort(arr) {
  const array = [...arr]; 
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array;
}


function selectionSort(arr) {
  const array = [...arr];
  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [array[i], array[minIndex]] = [array[minIndex], array[i]];
    }
  }
  return array;
}


function insertionSort(arr) {
  const array = [...arr];
  for (let i = 1; i < array.length; i++) {
    let key = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = key;
  }
  return array;
}


const bubbleData = [7, 2, 9, 4, 1];
const selectionData = [10, 4, 6, 2, 8];
const insertionData = [5, 3, 8, 6, 2];


console.log("\nSorting Algorithm:");
console.log("Bubble Sort:", bubbleSort(bubbleData));
console.log("Selection Sort:", selectionSort(selectionData));
console.log("Insertion Sort:", insertionSort(insertionData));