function bubbleSort(arr) {
    let array = [...arr]; 
    let n = array.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
               [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
    }
    return array;
}
const dataArray = [19, 7, 1, 23, 2, 15, 4, 20, 12, 30, 27];
console.log("Bubble Sort:", bubbleSort(dataArray));