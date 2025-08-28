// --- Soal 1: Searching Algorithm ---

// Linear Search Function
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}

const unsortedArray = [29, 5, 13, 40, 7, 33, 18, 21, 9, 2];

console.log("Linear Search:");
console.log(`Index of 2: ${linearSearch(unsortedArray, 2)}`); // Expected: index
console.log(`Index of 99: ${linearSearch(unsortedArray, 99)}`); // Expected: -1

// Binary Search Function (Iterative)
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

const sortedArray = [3, 7, 12, 18, 22, 27, 31, 36, 40, 45];

console.log("\nBinary Search:");
console.log(`Is 7 in array? ${binarySearch(sortedArray, 7)}`); // Expected: true
console.log(`Is 21 in array? ${binarySearch(sortedArray, 21)}`); // Expected: false
