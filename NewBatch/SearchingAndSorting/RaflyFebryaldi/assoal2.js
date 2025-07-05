
const data = [19, 7, 1, 23, 2, 15, 4, 20, 12, 30, 27];
function bubbleSort(arr) {
  let result = [...arr];
  let n = result.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (result[j] > result[j + 1]) {
        [result[j], result[j + 1]] = [result[j + 1], result[j]]; 
      }
    }
  }
  return result;
}


function selectionSort(arr) {
  let result = [...arr];
  let n = result.length;
  for (let i = 0; i < n - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < n; j++) {
      if (result[j] < result[minIdx]) {
        minIdx = j;
      }
    }
    if (minIdx !== i) {
      [result[i], result[minIdx]] = [result[minIdx], result[i]]; 
    }
  }
  return result;
}


function insertionSort(arr) {
  let result = [...arr];
  for (let i = 1; i < result.length; i++) {
    let key = result[i];
    let j = i - 1;
    while (j >= 0 && result[j] > key) {
      result[j + 1] = result[j];
      j = j - 1;
    }
    result[j + 1] = key;
  }
  return result;
}

console.log("Data asli:       ", data);
console.log("Bubble Sort:     ", bubbleSort(data));
console.log("Selection Sort:  ", selectionSort(data));
console.log("Insertion Sort:  ", insertionSort(data));
