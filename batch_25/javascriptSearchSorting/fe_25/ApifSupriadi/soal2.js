const bubbleSortTest = [7, 2, 9, 4, 1];
const bubbleSort = (numbers) => {
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = 0; j < numbers.length - i - 1; j++) {
      if (numbers[j] > numbers[j + 1]) {
        const temp = numbers[j];
        numbers[j] = numbers[j + 1];
        numbers[j + 1] = temp;
      }
    }
  }
  return numbers;
};
const bubbleSortResult = bubbleSort(bubbleSortTest);
console.log(`hasil bubble sort: ${bubbleSortResult}`);

const selectionSortTest = [10, 4, 6, 2, 8];
const selectionSort = (numbers) => {
  for (let i = 0; i < numbers.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[j] < numbers[minIndex]) {
        minIndex = j;
      }
    }
    const temp = numbers[i];
    numbers[i] = numbers[minIndex];
    numbers[minIndex] = temp;
  }
  return numbers;
};
const selectionSortResult = selectionSort(selectionSortTest);
console.log(`hasil selection sort: ${selectionSortResult}`);

const insertionSortTest = [5, 3, 8, 6, 2];
const insertionSort = (numbers) => {
  for (let i = 1; i < numbers.length; i++) {
    const key = numbers[i];
    let j = i - 1;
    while (j >= 0 && numbers[j] > key) {
      numbers[j + 1] = numbers[j];
      j--;
    }
    numbers[j + 1] = key;
  }
  return numbers;
};
const insertionSortResult = insertionSort(insertionSortTest);
console.log(`hasil insertion sort: ${insertionSortResult}`);
