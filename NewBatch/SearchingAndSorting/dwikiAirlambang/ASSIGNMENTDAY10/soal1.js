// Linear Search Function
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return true;  // ketemu
        }
    }
    return false;  // tidak ketemu
}

// Array untuk cari linear
let arr1 = [50, 7, 5, 20, 8, 23, 17, 19];

// Pencarian Linear
console.log(linearSearch(arr1, 17)); 
console.log(linearSearch(arr1, 77)); 

// Binary Search Function (Iterative)
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return true;  // ketemu
        } else if (arr[mid] < target) {
            left = mid + 1;  // cari dikanan
        } else {
            right = mid - 1;  // cari di kiri
        }
    }
    return false;  // tidak ketemu
}

// Array untuk pencarian binary (terurut)
let arr2 = [1, 7, 9, 12, 23, 30, 55, 93];

// Pencarian Binary
console.log(binarySearch(arr2, 93)); 
console.log(binarySearch(arr2, 17)); 
