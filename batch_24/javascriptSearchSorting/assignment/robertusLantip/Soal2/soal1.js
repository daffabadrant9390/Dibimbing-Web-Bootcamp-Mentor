//Bubble sort
function bubbleSort(arr) {
  const n = arr.length;
  let swapped;

  for (let i = 0; i < n; i++) {
    swapped = false;

    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }

    if (!swapped) break;
  }

  return arr;
}

const arrNumberBubble = [7, 2, 9, 4, 1];
console.log("Bubble sort :",bubbleSort(arrNumberBubble));

//Selection sort
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

const arrNumberSelection = [10, 4, 6, 2, 8];
console.log("Selection sort :",selectionSort(arrNumberSelection));

//Insertion sort
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = key;
  }

  return arr;
}

const arrNumberInsertion = [5, 3, 8, 6, 2];
console.log("Insertion sort :",insertionSort(arrNumberInsertion));
