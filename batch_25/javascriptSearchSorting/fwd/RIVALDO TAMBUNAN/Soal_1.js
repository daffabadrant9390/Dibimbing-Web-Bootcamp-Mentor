// 1. Linear Search
function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i; 
    }
  }
  return -1; 
}


const arrayLinear = [29, 5, 13, 40, 7, 33, 18, 21, 9, 2];

console.log("Linear Search:");
console.log(`Nilai 2 ditemukan di index: ${linearSearch(arrayLinear, 2)}`);
console.log(`Nilai 99 ditemukan di index: ${linearSearch(arrayLinear, 99)}`);


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

const arrayBinary = [3, 7, 12, 18, 22, 27, 31, 36, 40, 45];

console.log("\nBinary Search:");
console.log(`Apakah 7 ditemukan? -> ${binarySearch(arrayBinary, 7)}`);
console.log(`Apakah 21 ditemukan? -> ${binarySearch(arrayBinary, 21)}`);
