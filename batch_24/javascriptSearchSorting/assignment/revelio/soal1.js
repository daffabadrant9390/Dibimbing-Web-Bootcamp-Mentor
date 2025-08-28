let array1 = [29, 5, 13, 40, 7, 33, 18, 21, 9, 2];
let array2 = [3, 7, 12, 18, 22, 27, 31, 36, 40, 45];

function linearSearch(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i;
        }
    }
    return -1;
}

console.log("Array awal (Linear Search):", array1);
console.log("Mencari 2 -> Index:", linearSearch(array1, 2));    
console.log("Mencari 99 -> Index:", linearSearch(array1, 99));  


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

console.log("\nArray awal (Binary Search):", array2);
console.log("Mencari 7 -> Ditemukan?", binarySearch(array2, 7));     
console.log("Mencari 21 -> Ditemukan?", binarySearch(array2, 21));   
