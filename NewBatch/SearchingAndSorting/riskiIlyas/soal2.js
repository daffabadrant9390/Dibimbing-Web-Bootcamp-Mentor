const arrUnsorted = [19, 7, 1, 23, 2, 15, 4, 20, 12, 30, 27];

// 1. Bubble Sort
function bubbleSort(arr) {
    let n = arr.length;
    let result = [...arr];
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (result[j] > result[j + 1]) {
                [result[j], result[j + 1]] = [result[j + 1], result[j]];
            }
        }
    }
    return result;
}

// 2. Selection Sort
function selectionSort(arr) {
    let result = [...arr];
    for (let i = 0; i < result.length; i++) {
        let minIdx = i;
        for (let j = i + 1; j < result.length; j++) {
            if (result[j] < result[minIdx]) minIdx = j;
        }
        [result[i], result[minIdx]] = [result[minIdx], result[i]];
    }
    return result;
}

// 3. Insertion Sort
function insertionSort(arr) {
    let result = [...arr];
    for (let i = 1; i < result.length; i++) {
        let key = result[i];
        let j = i - 1;
        while (j >= 0 && result[j] > key) {
            result[j + 1] = result[j];
            j--;
        }
        result[j + 1] = key;
    }
    return result;
}

// Display the results
console.log("Bubble Sort:", bubbleSort(arrUnsorted));
console.log("Selection Sort:", selectionSort(arrUnsorted));
console.log("Insertion Sort:", insertionSort(arrUnsorted));