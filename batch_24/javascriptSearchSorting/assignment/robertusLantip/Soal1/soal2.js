function binarySearchRecursive(arr, target, left = 0, right = arr.length - 1) {
  if (left > right) {
    return -1;
  }

  const mid = Math.floor((left + right) / 2);

  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] < target) {
    return binarySearchRecursive(arr, target, mid + 1, right);
  } else {
    return binarySearchRecursive(arr, target, left, mid - 1);
  }
}

const arrNumber = [3, 7, 12, 18, 22, 27, 31, 36, 40, 45];

console.log(binarySearchRecursive(arrNumber, 7));
console.log(binarySearchRecursive(arrNumber, 21));