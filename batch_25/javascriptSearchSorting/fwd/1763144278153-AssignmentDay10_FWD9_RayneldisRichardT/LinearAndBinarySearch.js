// ===========================================
// SOAL 1: SEARCHING
// ===========================================

console.log("--- HASIL SOAL 1: SEARCHING ---");

// 1.1 Linear Search
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; 
    }
  }
  return -1; 
}

const dataLinear = [29, 5, 13, 40, 7, 33, 18, 21, 9, 2];
const index1 = linearSearch(dataLinear, 2);
console.log(`Linear Search (Nilai: 2): Ditemukan di indeks ${index1}`);
const index2 = linearSearch(dataLinear, 99);
console.log(`Linear Search (Nilai: 99): Ditemukan di indeks ${index2}`);

console.log(" "); 

// 1.2 Binary Search
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
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
  
  const dataBinary = [3, 7, 12, 18, 22, 27, 31, 36, 40, 45];
  const found1 = binarySearch(dataBinary, 7);
  console.log(`Binary Search (Nilai: 7): ${found1}`);
  const found2 = binarySearch(dataBinary, 21);
  console.log(`Binary Search (Nilai: 21): ${found2}`);