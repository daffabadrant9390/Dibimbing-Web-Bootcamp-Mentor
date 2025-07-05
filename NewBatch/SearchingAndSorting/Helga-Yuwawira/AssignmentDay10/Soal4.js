function selectionSort(arr) {
    let array = [...arr];
    let n = array.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            let temp = array[i];
            array[i] = array[minIndex];
            array[minIndex] = temp;
        }
    }
    return array;
}
const dataArray = [19, 7, 1, 23, 2, 15, 4, 20, 12, 30, 27];
console.log("Selection Sort:", selectionSort(dataArray));