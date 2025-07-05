// SOAL 1 - SEARCHING ALGORITHM

// 1. Linear Search
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        return true;
      }
    }
    return false;
  }
  
  // Array tidak terurut
  const unsortedArray = [50, 7, 5, 20, 8, 23, 17, 19];
  
  // Uji linear search
  const targetLinear1 = 17;
  const targetLinear2 = 77;
  
  console.log("Linear Search Results:");
  console.log(`Apakah ${targetLinear1} ditemukan?`, linearSearch(unsortedArray, targetLinear1)); // true
  console.log(`Apakah ${targetLinear2} ditemukan?`, linearSearch(unsortedArray, targetLinear2)); // false
  
  
  // 2. Binary Search (Iteratif)
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
  
  // Array terurut
  const sortedArray = [1, 7, 9, 12, 23, 30, 55, 93];
  
  // Uji binary search
  const targetBinary1 = 93;
  const targetBinary2 = 17;
  
  console.log("\nBinary Search Results:");
  console.log(`Apakah ${targetBinary1} ditemukan?`, binarySearch(sortedArray, targetBinary1)); // true
  console.log(`Apakah ${targetBinary2} ditemukan?`, binarySearch(sortedArray, targetBinary2)); // false
  