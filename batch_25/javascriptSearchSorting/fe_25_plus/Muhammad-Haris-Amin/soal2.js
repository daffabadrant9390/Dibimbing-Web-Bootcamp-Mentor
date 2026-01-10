function bubbleSort(arrayData) {
    let swapped = false;

    const n = arrayData.length;

    for (let i = 0; i < n - 1; i++) {
        swapped = false;

        for (let j = 0; j < n - i; j++){
            if (arrayData[j] > arrayData[j + 1]) {
            let tempData = arrayData[j+1];
            arrayData[j+1] = arrayData[j];
            arrayData[j] = tempData;
            swapped = true;
        
        }
    }

    if (swapped === false) break;
    }
    return arrayData;
}

function selectionSort(arrayData) {
    let n = arrayData.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < n; j++) {
            if (arrayData[j] < arrayData[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            let tempData = arrayData[i];
            arrayData[i] = arrayData[minIndex];
            arrayData[minIndex] = tempData;
        }
    }

    return arrayData;

}

function insertionSort(arrayData) {
    let n = arrayData.length;
    for (let i = 1; i < n; i++) {
        let keyTarget = arrayData[i];
        let j = i - 1;

        while (j >= 0 && arrayData[j] > keyTarget) {
            arrayData[j + 1] = arrayData[j];
            j--;
        }
        arrayData[j + 1] = keyTarget;
    }

    return arrayData;
}


const arrayData1 = [7, 2, 9, 4, 1]
console.log(`Array 1 sebelum diurutkan: ${arrayData1}`)
const sortArrayData1 = bubbleSort(arrayData1)
console.log(`Array 1 setelah diurutkan: ${sortArrayData1}`)

console.log(`------------------------- SPACE ----------------------------`)

const arrayData2 = [10, 4, 6, 2, 8]
console.log(`Array 2 sebelum diurutkan: ${arrayData2}`)
const sortArrayData2 = selectionSort(arrayData2)
console.log(`Array 2 setelah diurutkan: ${sortArrayData2}`)

console.log(`------------------------- SPACE ----------------------------`)

const arrayData3 = [5, 3, 8, 6, 2]
console.log(`Array 3 sebelum diurutkan: ${arrayData3}`)
const sortArrayData3 = insertionSort(arrayData3)
console.log(`Array 3 setelah diurutkan: ${sortArrayData3}`)



