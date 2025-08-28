let insertionData = [5, 3, 8, 6, 2];
let bubbleData = [7, 2, 9, 4, 1];
let selectionData = [10, 4, 6, 2, 8];

function bubbleSort(arr) {
    let array = [...arr]; // array di copy menggunakan spread operator
    let n = array.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
    }
    return array;
}
console.log("===============================================");
console.log("Array awal (Bubble Sort):", bubbleData);
console.log("Array urut (Bubble Sort):", bubbleSort(bubbleData));
console.log("================================================");

function selectionSort(arr) {
    // spread operator array awal untuk perbandingan 
    let array = [...arr];
    let n = array.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        [array[i], array[minIndex]] = [array[minIndex], array[i]];
    }
    return array;
}
console.log("===============================================");
console.log("\nArray awal (Selection Sort):", selectionData);
console.log("Array urut (Selection Sort):", selectionSort(selectionData));
console.log("================================================");

function insertionSort(arr) {
    let array = [...arr];
    let n = array.length;
    for (let i = 1; i < n; i++) {
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
console.log("================================================");
console.log("\nArray awal (Insertion Sort):", insertionData);
console.log("Array urut (Insertion Sort):", insertionSort(insertionData));
console.log("================================================");
