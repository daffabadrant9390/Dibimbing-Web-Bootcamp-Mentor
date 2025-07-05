// 1. Linear Search
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return true;
    }
    return false;
}

const arrLinear = [50, 7, 5, 20, 8, 23, 17, 19];
console.log("Linear Search angka 17:", linearSearch(arrLinear, 17));
console.log("Linear Search angka 77:", linearSearch(arrLinear, 77));

// 2. Binary Search
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return true;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }

    return false;
}

const arrBinary = [1, 7, 9, 12, 23, 30, 55, 93];
console.log("Binary Search angka 93:", binarySearch(arrBinary, 93));
console.log("Binary Search angka 17:", binarySearch(arrBinary, 17));