//! Bubble Sort
let bubbleArr = [7, 2, 9, 4];
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
console.log("================Bubble Sort================");
console.log("Nilai awal:\t\t", bubbleArr);
bubbleArr = bubbleSort(bubbleArr);
console.log("Setelah diurutkan:\t", bubbleArr); 

//! Selection Sort
let selectionArr = [10, 4, 6, 2, 8];
function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        let temp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = temp;
    }
    return arr;
}
console.log("\n================Selection Sort================");
console.log("Nilai Awal:\t\t", selectionArr);
selectionArr = selectionSort(selectionArr);
console.log("Setelah diurutkan:\t", selectionArr);

//! Insertion Sort
let insertionArr = [5, 3, 8, 6, 2];
function insertionSort(arr) {
    let n = arr.length;
    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}
console.log("\n================Insertion Sort================");
console.log("Nilai awal:\t\t", insertionArr);
insertionArr = insertionSort(insertionArr);
console.log("Setelah diurutkan:\t", insertionArr);