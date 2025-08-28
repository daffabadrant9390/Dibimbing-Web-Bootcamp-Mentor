function bubbleSort(arrayData) {
    let swapped = false;
    const n = arrayData.length;

    for (let i = 0; i < n; i++) {
        swapped = false;
        for (let j = 0; j < n - 1; j++) {

            if (arrayData[j] > arrayData[j + 1]) {
                let tempData = arrayData [j + 1];
                arrayData[j + 1] = arrayData[j];
                arrayData[j] = tempData;
                swapped = true;
            }
        }
        if (swapped === false) break;
    }
    
    return arrayData;
}

const arrayData = [7, 2, 9, 4, 1];
console.log(`Array sebelum sorting: `, arrayData);
const sortedData = bubbleSort(arrayData);
console.log(`Array setelah sorting: `, sortedData);