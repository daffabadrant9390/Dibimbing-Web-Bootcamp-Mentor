// Bubble Sort
const arrayBubble = [7, 2, 9, 4, 1];
function bubbleSort(arr) {
    if (arr.length  <= 0) {
        return `array kosong!`;
    }
    for (let i = 0; i < arr.length - 1; i++){
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}
console.log(`\n============ Bubble Sort ============`)
console.log(`Array sebelum disort = `, arrayBubble)
console.log(`Sort menggunakan bubble Sort = `, bubbleSort(arrayBubble));

// Selection Sort
const arraySelection = [10,4,6,2,8]
function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) { 
            // akan terus mencari nilai terkecil.
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        // Kalau nilai terkecil ketemu, maka akan melakukan swap.
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
        // ulangi sampai array terurut.
    }
    return arr;
}
console.log(`\n============ Selection Sort ============`)
console.log(`Array sebelum disort =`,arraySelection)
console.log(`Sort menggunakan selection Sort =`, selectionSort(arraySelection))

// insertion sort
const arrayInsertion = [5,3,8,6,2]
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }
    return arr;
}
console.log(`\n============ insertion Sort ============`)
console.log(`Array sebelum disort =`,arrayInsertion)
console.log(`Sort menggunakan insertion Sort =`, insertionSort(arrayInsertion))