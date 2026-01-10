//  Bubble Sort 
function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
const bubbleData = [7, 2, 9, 4, 1];
console.log("Bubble Sort");
console.log("Sebelum:", [7, 2, 9, 4, 1]);
console.log("Sesudah:", bubbleSort(bubbleData));

//  Selection Sort 
function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
 
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return arr;
}
const selectionData = [10, 4, 6, 2, 8];
console.log("Selection Sort ");
console.log("Sebelum:", [10, 4, 6, 2, 8]);
console.log("Sesudah:", selectionSort(selectionData));