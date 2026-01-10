let sortedArr = [3, 7, 12, 18, 22, 27, 31, 36, 40, 45];

function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

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

console.log(binarySearch(sortedArr, 7));   // Output?
console.log(binarySearch(sortedArr, 21));  // Output?
