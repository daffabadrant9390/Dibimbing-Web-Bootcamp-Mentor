function insertionSort(arrayData) {
    const n = arrayData.length;

    for (let i = 1; i < n ; i++) {
        let keyTarget = arrayData[i];
        let j = i - 1;

        while (j >= 0 && arrayData[j] > keyTarget) {
            arrayData[j + 1] = arrayData[j];
            j--;
        }

        arrayData[j + 1] = keyTarget;
    }

    return arrayData
}

const arrayData = [5, 3, 8, 6, 2];
console.log(`Array sebelum sorting:`, arrayData);
const sortedData = insertionSort(arrayData);
console.log(`Array setelah sorting:`, sortedData);