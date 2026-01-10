
const numbers = [29, 5, 13, 40, 7, 33, 18, 21, 9, 2];

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; 
        }
    }
    return -1; 
}

console.log("Pencarian nilai 2:", linearSearch(numbers, 2));

console.log("Pencarian nilai 99:", linearSearch(numbers, 99));

const sortedNumbers = [2, 5, 7, 9, 13, 18, 21, 29, 33, 40];

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (arr[mid] === target) {
            return true; 
        } else if (arr[mid] < target) {
            left = mid + 1; 
        } else {
            right = mid - 1; 
        }
    }
    
    return false;
}


console.log("Pencarian nilai 7:", binarySearch(sortedNumbers, 7)); 


console.log("Pencarian nilai 21:", binarySearch(sortedNumbers, 21)); 


console.log("Pencarian nilai 99:", binarySearch(sortedNumbers, 99)); 