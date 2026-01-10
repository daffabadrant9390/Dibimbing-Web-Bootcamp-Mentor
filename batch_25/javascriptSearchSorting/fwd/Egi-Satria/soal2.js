// 1️ Bubble Sort
function bubbleSort(array) {
    let n = array.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                // tukar posisi
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
    }
    return array;
}

// 2️ Selection Sort
function selectionSort(array) {
    let n = array.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        // tukar nilai terkecil ke posisi i
        [array[i], array[minIndex]] = [array[minIndex], array[i]];
    }
    return array;
}

// 3️ Insertion Sort
function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let key = array[i];
        let j = i - 1;
        // geser elemen yang lebih besar ke kanan
        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = key;
    }
    return array;
}

// Data dan hasil
const bubbleData = [7, 2, 9, 4, 1];
const selectionData = [10, 4, 6, 2, 7];
const insertionData = [5, 3, 8, 6, 2];

console.log("Hasil Bubble Sort:", bubbleSort([...bubbleData]));
console.log("Hasil Selection Sort:", selectionSort([...selectionData]));
console.log("Hasil Insertion Sort:", insertionSort([...insertionData]));
