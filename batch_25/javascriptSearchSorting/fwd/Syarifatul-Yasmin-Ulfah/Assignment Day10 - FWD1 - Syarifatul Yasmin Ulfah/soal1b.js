// Binary Search

function binarySearch(arr, target) {
    if (arr.length === 0) {
        return false;
    }
    const mid = Math.floor(arr.length / 2);
    const midValue = arr[mid];
    if (midValue === target) {
        return true;
    } else if (midValue < target) {
        return binarySearch(arr.slice(mid + 1), target);
    } else {
        return binarySearch(arr.slice(0, mid), target);
    }
}

const dataArray = [3, 7, 12, 18, 22, 27, 31, 36, 40, 45];
const targetA = 7;
const targetB = 21;
console.log(`Apakah nilai ${targetA} ada dalam array? ${binarySearch(dataArray, 7)}`);
console.log(`Apakah nilai ${targetB} ada dalam array? ${binarySearch(dataArray, 21)}`);

