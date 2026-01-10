console.log("=============== BUBBLE SORT ====================== ");
// Bubble sort
const num1 = [7, 2, 9, 4, 1];
const bubbleSort = (arrayAngka) => {
  let isSwapped = false;
  const arrayLength = arrayAngka.length;
  for (let i = 0; i < arrayLength; i++) {
    // outerlooping
    isSwapped = false;
    for (let j = 0; j < arrayLength; j++) {
      // inner looping
      if (arrayAngka[j] > arrayAngka[j + 1]) {
        // cek pertukaran
        [arrayAngka[j], arrayAngka[j + 1]] = [arrayAngka[j + 1], arrayAngka[j]];
        isSwapped = true;
      }
    }
    if (!isSwapped) {
      break;
    }
  }
  return arrayAngka;
};
console.log(bubbleSort(num1));

console.log("============== SELECTION SORT ==================== ");
// Selection sort
const num2 = [10, 4, 6, 2, 8];
const selectionSort = (arrAngka) => {
  let midIndex;
  const arrLength = arrAngka.length;
  // outer looping
  for (let i = 0; i < arrLength - 1; i++) {
    midIndex = i;
    // looping minimum index
    for (let j = i + 1; j < arrLength; j++) {
      if (arrAngka[j] < arrAngka[midIndex]) {
        midIndex = j;
      }
    }
    // pertukaran jika minimum index bukan i
    if (midIndex !== i) {
      let tempData = arrAngka[i];
      arrAngka[i] = arrAngka[midIndex];
      arrAngka[midIndex] = tempData;
    }
  }
  return arrAngka;
};
console.log(selectionSort(num2));

console.log("============== INSERTION SORT ==================== ");
// Insertion sort
const num3 = [5, 3, 8, 6, 2];
const insertionSort = (arrayData) => {
  const n = arrayData.length;
  // set nilai keyTarget dan j
  for (let i = 1; i < n; i++) {
    let keyTarget = arrayData[i];
    let j = i - 1;
    // looping ke belakang untuk compare j dan keyTarget
    while (j >= 0 && arrayData[j] > keyTarget) {
      // apabila kondisi memenuhi, tukar nilai [j+1] dengan j
      arrayData[j + 1] = arrayData[j];
      j--;
    }
    // ubah nilai j + 1 dengan keyTarget.
    arrayData[j + 1] = keyTarget;
  }
  return arrayData;
};
console.log(insertionSort(num3));
