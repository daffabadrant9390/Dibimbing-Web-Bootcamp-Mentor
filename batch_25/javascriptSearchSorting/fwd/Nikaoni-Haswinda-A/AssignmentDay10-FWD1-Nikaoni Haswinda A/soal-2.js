//Soal Bubble Sort
const bubbleSort = (arr) => {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let swapped = false;
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr [j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }
        if (!swapped) break;
    }
    return arr;
}

const arrayNumbers1 = [7, 2, 9, 4, 1];
console.log(bubbleSort(arrayNumbers1));


//Soal Selection Sort
const selectionSort = (arr) => {
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

const arrayNumbers2 = [10, 4, 6, 2, 8];
console.log(selectionSort(arrayNumbers2));


//Soal Insertion Sort
const insertionSort = (arr) => {
    const n = arr.length;

    for (let i = 1; i < n; i++) {
        let temp = arr[i];
        let j = i - 1;

        for (j; j >= 0 && arr[j] > temp; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = temp;
    }
    return arr;
}

const arrayNumbers3 = [5, 3, 8, 6, 2];
console.log(insertionSort(arrayNumbers3));