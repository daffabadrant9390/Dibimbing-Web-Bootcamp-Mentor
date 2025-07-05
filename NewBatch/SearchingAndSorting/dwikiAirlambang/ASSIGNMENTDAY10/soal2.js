// Bubble Sort Function
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // nuker elemen kalau urutan masih salah
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

// Array untuk diurutkan
let arr1 = [19, 7, 1, 23, 2, 15, 4, 20, 12, 30, 27];
console.log("Bubble Sort:", bubbleSort([...arr1])); // Salin untuk tidak ubah array asli


// Selection Sort Function
function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;  // Temukan elemen terkecil
            }
        }
        //nuker elemen terkecil dengan elemen pertama yang belum terurut
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return arr;
}

console.log("Selection Sort:", selectionSort([...arr1])); // Salin untuk tidak ubah array asli


// Insertion Sort Function
function insertionSort(arr) {
    let n = arr.length;
    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;

        // urutkan elemen yang lebih besar 
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;  // untuk naro key pada posisi yang benar
    }
    return arr;
}

console.log("Insertion Sort:", insertionSort([...arr1])); // Salin untuk tidak ubah array asli
