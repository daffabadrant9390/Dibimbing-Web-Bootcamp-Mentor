/* Soal 2: Sorting Algorithm
1. Buat tiga buah fungsi berbeda untuk masing-masing satu metode sorting:
  - Bubble Sort -> array data = [7,2,9,4,1]
  - Selection Sort -> array data = [10,4,6,2,8]
  - Insertion Sort -> array data = [5,3,8,6,2]
2. Masing-masing fungsi menerima array sebagai input dan mengembalikan array yang sudah terurut secara ascending.
3. Tampilkan hasil dari array yang sudah diurutkan dari masing-masing metode ke console
*/

//* Bubble Sort
const bubbleSort = (arrayData) => {
    let isSwapped = false;
    const n = arrayData.length;

    for(let i = 0; i < n; i++){
        isSwapped = false;

        for(let j = 0; j < n - 1; j++){
            if(arrayData[j] > arrayData[j + 1]) {
                [arrayData[j], arrayData[j + 1]] = [arrayData[j + 1], arrayData[j]]
                isSwapped = true;
            }
        }
        if(!isSwapped) {
            break;
        }
    }
    
    return arrayData;
}

const arrayDataBubble = [7, 2, 9, 4, 1];
console.log('====== Sorting dengan Bubble Sort ======')
console.log('Array sebelum sorting: ',arrayDataBubble)
console.log('Array setelah sorting dengan bubble sort: ',bubbleSort(arrayDataBubble));
console.log(`========================================\n`)

//* Selection Sort

const selectionSort = (arrayData) => {
    const n = arrayData.length;
    for(let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for(let j = 0; j < n; j++) {
            if(arrayData[j] < arrayData[minIndex]) {
                minIndex = j;
            }
        }
        if(minIndex !== i) {
            let tempData = arrayData[i]
            arrayData[i] = arrayData[minIndex];
            arrayData[minIndex] = tempData;
        }

    }
    return arrayData;

}

const arrayDataSelection = [10,4,6,2,8];
console.log('====== Sorting dengan Selection Sort ======')
console.log('Array sebelum sorting: ',arrayDataSelection)
console.log('Array setelah sorting dengan selection sort: ',bubbleSort(arrayDataSelection));
console.log(`========================================\n`)

//* Insertion Sort

const insertionSort = (arrayData) => {
    const arrayDataCopy = [...arrayData];

    if(arrayDataCopy.length === 0) {
        return [];
    }
    const n = arrayDataCopy.length;

    for(let i = 0; i < n; i++){
        let keyTarget = arrayDataCopy[i];
        let j = i - 1;

        while(j >= 0 && arrayDataCopy[j] > keyTarget) {
            arrayDataCopy[j + 1] = arrayDataCopy[j];
            j--;
        }
        arrayDataCopy[j + 1] = keyTarget;
    }
    return arrayDataCopy;
}

const arrayDataRandom = [5,3,8,6,2];
const arrayDataSorted = insertionSort(arrayDataRandom);
console.log('====== Sorting dengan Insertion Sort ======')
console.log('Array sebelum sorting: ',arrayDataRandom)
console.log('Array setelah sorting dengan Insertion sort: ',arrayDataSorted);
console.log(`========================================\n`)