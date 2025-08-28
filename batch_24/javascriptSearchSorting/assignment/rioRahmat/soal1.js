//Linear Search
const data1 = [29, 5, 13, 40, 7, 33, 18, 21, 9, 2];

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}
console.log(linearSearch(data1, 2));   // Output: 9
console.log(linearSearch(data1, 99));  // Output: -1


//Binary Search

const data2 = [3, 7, 12, 18, 22, 27, 31, 36, 40, 45];

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

console.log(binarySearch(data2, 7));   // Output: true
console.log(binarySearch(data2, 21));  // output: false