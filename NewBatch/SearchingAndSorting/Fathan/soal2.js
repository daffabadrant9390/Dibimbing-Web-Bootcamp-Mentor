// *Gunakan array berikut yang belum terurut:
// * [19, 7, 1, 23, 2, 15, 4, 20, 12, 30, 27]
// *Buat tiga buah fungsi berbeda, masing-masing untuk satu metode sorting:
// *Bubble Sort
// *Selection Sort
// *Insertion Sort
// *Masing-masing fungsi menerima array sebagai input dan mengembalikan array yang sudah terurut secara ascending.
// *Tampilkan hasil array yang sudah diurutkan dari masing-masing metode ke console.

//! selection
let array = [19, 7, 1, 23, 2, 15, 4, 20, 12, 30, 27];

function SelectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let startIndex = i;
    for (j = i + 1; j < arr.length; j++) {
      if (arr[startIndex] > arr[j]) {
        startIndex = j;
      }
    }
    if (startIndex !== i) {
      [arr[i], arr[startIndex]] = [arr[startIndex], arr[i]];
    }
  }
  return arr;
}

let result = SelectionSort(array);
console.log(result);

//! bubble sort
function bubbleShort(arr) {
  let swapped = false;
  const n = arr.length;

  for (i = 0; i < n; i++) {
    swapped = false;
    for (j = 0; j < n; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], (arr[j + 1] = [arr[j + 1]]), arr[j]];
        swapped = true;
      }
    }
    if (swapped === false) break;
  }
  return arr;
}

let result1 = bubbleShort(array);
console.log(result1);

// let array = [19, 7, 1, 23, 2, 15, 4, 20, 12, 30, 27]
//insertion sort
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let keyTarget = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > keyTarget) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = keyTarget;
  }
  return arr;
}

let result2 = insertionSort([21, 5, 4, 6, 2, 19]);
console.log(result2);
