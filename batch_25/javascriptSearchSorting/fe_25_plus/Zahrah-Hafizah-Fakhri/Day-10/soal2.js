//bubble sort

const bubbleSort = (arr) => {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};

//selection sort

const selectionSort = (arr) => {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let indexMin = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[indexMin]) {
        indexMin = j;
      }
    }
    [arr[i], arr[indexMin]] = [arr[indexMin], arr[i]];
  }
  return arr;
};

//insertion sort

const insertionSort = (arr) => {
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
};

const arrBubble = [7, 2, 9, 4, 1];
console.log("Bubble Sort:", bubbleSort(arrBubble));

const arrSelection = [10, 4, 6, 2, 8];
console.log("Selection Sort:", selectionSort(arrSelection));

const arrInsertion = [5, 3, 8, 6, 2];
console.log("Insertion Sort:", insertionSort(arrInsertion));
