function selectionSort(arrayData) {
    const n = arrayData.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arrayData[j] < arrayData[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            let temp = arrayData[i];
            arrayData[i] = arrayData[minIndex];
            arrayData[minIndex] = temp;
        }
    }
    return arrayData;
}

const arrayData = [10, 4, 6, 2, 8];
console.log(`Array sebelum sorting:`, arrayData);
const sortedData = selectionSort(arrayData);
console.log(`Array setelah sorting:`, sortedData);
