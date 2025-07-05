function insertionSort(arr) {
    let array = [...arr];
    for (let i = 1; i < array.length; i++) {
        let key = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = key;
    }
    return array;
}
const dataArray = [19, 7, 1, 23, 2, 15, 4, 20, 12, 30, 27];
console.log("Insertion Sort:", insertionSort(dataArray));