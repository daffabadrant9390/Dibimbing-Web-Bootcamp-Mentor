function binarySearch(array, target) {
    let left = 0;
    let right = array.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (array[mid] === target) {
            return true;
        } else if (array[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return false;
}
const data = [1, 7, 9, 12, 23, 30, 55, 93];
console.log("Cari 93:", binarySearch(data, 93)); 
console.log("Cari 17:", binarySearch(data, 17)); 
