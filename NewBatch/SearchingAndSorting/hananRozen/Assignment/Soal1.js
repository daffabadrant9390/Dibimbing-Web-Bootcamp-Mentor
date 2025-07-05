// Linear Search
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return true;
    }
  }
  return false;
}

const unsortedArray = [50, 7, 5, 20, 8, 23, 17, 19];

console.log("=== LINEAR SEARCH ===");
console.log(`Mencari nilai 17: ${linearSearch(unsortedArray, 17)}`); // Harusnya true
console.log(`Mencari nilai 77: ${linearSearch(unsortedArray, 77)}`); // Harusnya false

// BINARY SEARCH
// Binary Search Iterative
function binarySearchIterative(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return true;
    }

    if (arr[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return false;
}

//Binary Search Recursive
function binarySearchRecursive(arr, target, left = 0, right = arr.length - 1) {
  if (left > right) {
    return false;
  }

  const mid = Math.floor((left + right) / 2);

  if (arr[mid] === target) {
    return true;
  }

  if (arr[mid] > target) {
    return binarySearchRecursive(arr, target, left, mid - 1);
  } else {
    return binarySearchRecursive(arr, target, mid + 1, right);
  }
}

const sortedArray = [1, 7, 9, 12, 23, 30, 55, 93];

console.log("\n=== BINARY SEARCH (ITERATIF) ===");
console.log(`Mencari nilai 17: ${binarySearchIterative(sortedArray, 17)}`);
console.log(`Mencari nilai 93: ${binarySearchIterative(sortedArray, 93)}`);

console.log("\n=== BINARY SEARCH (REKURSIF) ===");
console.log(`Mencari nilai 93: ${binarySearchRecursive(sortedArray, 93)}`);
console.log(`Mencari nilai 17: ${binarySearchRecursive(sortedArray, 17)}`);
