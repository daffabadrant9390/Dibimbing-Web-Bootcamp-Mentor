function linearSearch(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i 
        }
    }
    return -1 
}

function binarySearch(array, target) {
    let left = 0
    let right = array.length - 1

    while (left <= right) {
        let mid = Math.floor((left + right) / 2)

    if (array[mid] === target) {
        return true 
    } else if (target < array[mid]) {
        right = mid - 1 
    } else {
        left = mid + 1 
        }
    }

    return false 
}


let dataLinear = [29, 5, 13, 40, 7, 33, 18, 21, 9, 2]
let dataBinary = [2, 5, 7, 9, 13, 18, 21, 29, 33, 40]


console.log("=== LINEAR SEARCH ===")
console.log("Cari 2 -> index:", linearSearch(dataLinear, 2))     // Expected Output: 9 - ditemukan, di index ke 9
console.log("Cari 99 -> index:", linearSearch(dataLinear, 99))   // Expected Output: -1 - tidak ditemukan

console.log("\n=== BINARY SEARCH ===");
console.log("Cari 7 ->", binarySearch(dataBinary, 7))            // Expected Output: true - ditemukan
console.log("Cari 21 ->", binarySearch(dataBinary, 21))          // Expected Output: true - ditemukan
console.log("Cari 100 ->", binarySearch(dataBinary, 100))        // Expected Output: false - tidak ditemukan
