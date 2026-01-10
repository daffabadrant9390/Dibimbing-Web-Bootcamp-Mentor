// --- SOAL 2: SORTING ALGORITHM ---

// 1. Bubble Sort
function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

// 2. Selection Sort
function selectionSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        // Swap
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return arr;
}

// 3. Insertion Sort
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

// Data input untuk masing-masing metode
const dataBubble = [7, 2, 9, 4, 1];
const dataSelection = [10, 4, 6, 2, 8];
const dataInsertion = [5, 3, 8, 6, 2];

// Urutkan array
const sortedBubble = bubbleSort([...dataBubble]);     // Gunakan spread untuk tidak merubah original
const sortedSelection = selectionSort([...dataSelection]);
const sortedInsertion = insertionSort([...dataInsertion]);

// Tampilkan hasil
console.log("=== Sorting Algorithm ===");
console.log(`Bubble Sort: [${dataBubble}] -> [${sortedBubble}]`);
console.log(`Selection Sort: [${dataSelection}] -> [${sortedSelection}]`);
console.log(`Insertion Sort: [${dataInsertion}] -> [${sortedInsertion}]`);