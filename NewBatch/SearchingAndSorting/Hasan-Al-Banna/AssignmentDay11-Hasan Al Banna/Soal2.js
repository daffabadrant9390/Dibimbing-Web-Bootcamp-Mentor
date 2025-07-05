const data = [19, 7, 1, 23, 2, 15, 4, 20, 12, 30, 27];

// Bubble Short
function bubbleSort(arr) {
    const array = [...arr];
    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
          [array[i], array[i + 1]] = [array[i + 1], array[i]];
          swapped = true;
        }
      }
    } while (swapped);
    return array;
  }

// Selection Short
function selectionSort(arr) {
    const array = [...arr];
    for (let i = 0; i < array.length; i++) {
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

//Insertion Short
function insertionSort(arr) {
    const array = [...arr];
    for (let i = 1; i < array.length; i++) {
      let current = array[i];
      let j = i - 1;
      while (j >= 0 && array[j] > current) {
        array[j + 1] = array[j];
        j--;
      }
      array[j + 1] = current;
    }
    return array;
  }
  

  console.log("Bubble Sort:", bubbleSort(data));
  console.log("Selection Sort:", selectionSort(data));
  console.log("Insertion Sort:", insertionSort(data));
  