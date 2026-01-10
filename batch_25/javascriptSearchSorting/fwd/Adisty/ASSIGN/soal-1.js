const unsortedArr = [29, 5, 13, 40, 7, 33, 18, 21, 9, 2];
const target = 2;

linearSearch = (arr, target) => {
  for (let i = 0; i < arr.length; i++){
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

const result = linearSearch(unsortedArr, target);
console.log(`result: ${result}`);

const sortedArr = [3, 7, 12, 18, 22, 27, 31, 36, 40, 45];
const target2 = 7;

binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}
const result2 = binarySearch(sortedArr, target2);
console.log(`result: ${result2}`);

