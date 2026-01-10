/**
 * Sorting Algorithm
 * 1. Buat tiga fungsi berbeda, masing-masing untuk satu metode sorting:
 * - Bubble Sort -> array data [7, 2, 4, 1]
 * - Selection Sort -> array data [10, 4, 6, 2, 8]
 * - Insertion Sort -> array data [5, 3, 8, 6, 2]
 * 2. Masing-masing fungsi menerima array sebagai input dan mengembalikan array yang sudah terurut secara ascending.
 * 3. Tampilkan hasil array yang sudah diurutkan dari masing-masing metode ke console.
 * 
 */

// Function Bubble Sort
const bubbleSort = (arrayData) => {
    let isSwapped = false;
    const arrayLength = arrayData.length;

    // outer looping
    for(let i = 0; i < arrayLength; i++) {
        // inner looping
        for(let j = 0; j < arrayLength; j++) {
            if(arrayData[j] > arrayData[j + 1]) {
              [arrayData[j], arrayData[j + 1]] = [arrayData[j + 1], 
              arrayData[j]];
              isSwapped = true;
            }
    }
    if(!isSwapped) {
        break;
    }
   }
   return arrayData;
}

const arrayDataUnsorted = [7, 2, 4, 1];
console.log(bubbleSort(arrayDataUnsorted));


//------------------------------------------//
// Function Selection Sort
const selectionSort = (arrayData) => {
    let minIndex;
    const arrayLength = arrayData.length;

    for(let i = 0; i < arrayLength -1; i++) {
        minIndex = i;

        for(let j = i + 1; j < arrayLength; j++) {
            if(arrayData[j] < arrayData[minIndex]) {
                minIndex = j;
            }
        }

        // jika minIndexnya bukan i, maka ada pertukaran
        if(minIndex !== i) {
            let tempData = arrayData[i];
            arrayData[i] = arrayData[minIndex];
            arrayData[minIndex] = tempData;
        }
    }
    return arrayData;
}

const arrayDataUnsorted2 = [10, 4, 6, 2, 8];
console.log(selectionSort(arrayDataUnsorted2));


//--------------------------------------------------//
// Function Insertion Sort
const insertionSort = (arrayData) => {
    const arrayLength = arrayData.length;

    for(let i = 1; i < arrayLength; i++) {
        let key = arrayData[i];
        let j = i - 1;

        while(j >= 0 && arrayData[j] > key) {
            arrayData[j + 1] = arrayData[j];
            j--;
        }
        arrayData[j + 1] = key;
    }
    return arrayData;
}

const arrayDataUnsorted3 = [5, 3, 8, 6, 2];
console.log(insertionSort(arrayDataUnsorted3));

