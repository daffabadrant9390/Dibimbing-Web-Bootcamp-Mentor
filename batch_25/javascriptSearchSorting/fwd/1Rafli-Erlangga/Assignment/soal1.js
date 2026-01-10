//!Linear Search
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

const arr1 = [29, 5, 13, 40, 7, 33, 18, 21, 9, 2];

console.log("================Linear Search================");
console.log("Array:", arr1);
console.log("Target 2: Index =", linearSearch(arr1, 2));
console.log("Target 99: Index =", linearSearch(arr1, 99));

//! Binary Search
function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] === target) {
            return true;
        } else if (arr[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return false;
}

const arr2 = [3, 7, 12, 18, 22, 27, 31, 36, 40, 45];

console.log("\n================Binary Search================");
console.log("Array:", arr2);
console.log("Target 7: Ditemukan =", binarySearch(arr2, 7));
console.log("Target 21: Ditemukan =", binarySearch(arr2, 21));