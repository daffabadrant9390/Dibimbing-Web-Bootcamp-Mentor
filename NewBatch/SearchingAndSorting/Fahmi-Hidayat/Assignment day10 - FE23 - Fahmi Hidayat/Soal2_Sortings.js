// Gunakan array berikut yang belum terurut:
//  [19, 7, 1, 23, 2, 15, 4, 20, 12, 30, 27]
// Buat tiga buah fungsi berbeda, masing-masing untuk satu metode sorting:
// Bubble Sort
// Selection Sort
// Insertion Sort
// Masing-masing fungsi menerima array sebagai input dan mengembalikan array yang sudah terurut secara ascending.
// Tampilkan hasil array yang sudah diurutkan dari masing-masing metode ke console.

// =================================== Bubble Sort Method

let arrayAngka = [19, 7, 1, 23, 2, 15, 4, 20, 12, 30, 27];

const bubbleSort = (arr) => {
  for (let a = 0; a < arr.length; a++) {
    let swapped = false;

    for (let b = 0; b < arr.length - 1 - a; b++) {
      if (arr[b] > arr[b + 1]) {
        let temp = arr[b + 1];
        arr[b + 1] = arr[b];
        arr[b] = temp;
        swapped = true;
      }
    }
    if (swapped == false) break;
  }

  return arr;
};

console.log(bubbleSort(arrayAngka));

// =================================== Selection Sort Method

const selectionSort = (arr) => {
  for (let a = 0; a < arr.length; a++) {
    let minIndex = a;
    for (let b = a + 1; b < arr.length; b++) {
      if (arr[b] < arr[minIndex]) {
        minIndex = b;
      }
    }
    if (minIndex != a) {
      [arr[a], arr[minIndex]] = [arr[minIndex], arr[a]];
    }
  }

  return arr;
};

console.log(selectionSort([...arrayAngka]));

// =================================== Insertion Method

const insertionMethod = (arr) => {
  for (let a = 1; a < arr.length; a++) {
    let keyTarget = arr[a];
    let x = a - 1;

    while (x >= 0 && arr[x] > keyTarget) {
      arr[x + 1] = arr[x];
      x--;
    }

    arr[x + 1] = keyTarget;
  }
  return arr;
};

console.log(insertionMethod([...arrayAngka]));
