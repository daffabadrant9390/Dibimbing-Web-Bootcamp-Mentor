//bubble sort:
function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {

        let arraySekarang = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = arraySekarang;
      }
    }
  }
  return arr;
}

//selection sort:
function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    let arraySekarang = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = arraySekarang;
  }
  return arr;
}

//insertion sort:
function insertionSort(arr) {
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


let data1 = [7, 2, 9, 4, 1];
console.log( bubbleSort([...data1]));

let data2 = [10, 4, 6, 2, 8];
console.log(selectionSort([...data2]));

let data3 = [5, 3, 8, 6, 2];
console.log(insertionSort([...data3]));
