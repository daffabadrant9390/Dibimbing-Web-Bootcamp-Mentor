/**
 * Gunakan array berikut yang belum terurut:
 * [19, 7, 1, 23, 2, 15, 4, 20, 12, 30, 27]
 * Buat tiga buah fungsi berbeda, masing-masing untuk satu metode sorting:
 * Bubble Sort
 * Selection Sort
 * Insertion Sort
 * Masing-masing fungsi menerima array sebagai input dan mengembalikan array yang sudah terurut secara ascending.
 * Tampilkan hasil array yang sudah diurutkan dari masing-masing metode ke console.
*/

const number = [19, 7, 1, 23, 2, 15, 4, 20, 12, 30, 27];
// Bubble Sort
function bubbleSort(array) {
    const n = array.length;
    const newArr = [...array];

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if(newArr[j] > newArr [j + 1]){
                [newArr[j], newArr[j + 1]] = [newArr [j + 1], newArr [j]];
            }
        }
    }
    return newArr;
}

// Selection Sort
function selectionSort(array) {
    if(!array?.length){
        return [];
    }
    const n = array.length;
    const newArr = [...array];

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < n; j++) {
            if (newArr[j] < newArr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [newArr[i], newArr[minIndex]] = [newArr[minIndex], newArr[i]]
        }
    }
    return newArr;
}

//Insertion Sort
function insertionSort(array) {
    const n = array.length;
    const newArr = [...array];

    for (let i = 1; i < n; i++) {
        let keyTarget = newArr[i];
        let j = i - 1;

        while (j >= 0 && newArr[j] > keyTarget) {
            newArr[j + 1] = newArr[j];
            j = j -1;
        }
        newArr[j + 1] = keyTarget;
    }
    return newArr;
}

console.log(`Array asli: ${number}\n`);
const output1 = bubbleSort(number);
const output2 = selectionSort(number);
const output3 = insertionSort(number);
console.log(`Array terurut dengan metode bubble sort: ${output1}`);
console.log(`Array terurut dengan metode selection sort: ${output2}`);
console.log(`Array terurut dengan metode insertion sort: ${output3}`);
