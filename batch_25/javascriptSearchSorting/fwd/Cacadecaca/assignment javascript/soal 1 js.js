// --- SOAL 1: SEARCHING ALGORITHM ---

// 1. Linear Search
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Kembalikan indeks jika ditemukan
        }
    }
    return -1; // Kembalikan -1 jika tidak ditemukan
}

// Array untuk Linear Search
const arrayLinear = [29, 5, 13, 40, 7, 33, 18, 21, 9, 2];

// Lakukan pencarian
console.log("=== Linear Search ===");
console.log(`Pencarian nilai 2: ${linearSearch(arrayLinear, 2)}`);   // Harusnya 9
console.log(`Pencarian nilai 99: ${linearSearch(arrayLinear, 99)}`); // Harusnya -1

// 2. Binary Search (Iteratif)
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return true; // Ditemukan
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return false; // Tidak ditemukan
}

// Array untuk Binary Search (sudah terurut)
const arrayBinary = [3, 7, 12, 18, 22, 27, 31, 36, 40, 45];

// Lakukan pencarian
console.log("\n=== Binary Search ===");
console.log(`Pencarian nilai 7: ${binarySearch(arrayBinary, 7)}`);   // Harusnya true
console.log(`Pencarian nilai 21: ${binarySearch(arrayBinary, 21)}`); // Harusnya false