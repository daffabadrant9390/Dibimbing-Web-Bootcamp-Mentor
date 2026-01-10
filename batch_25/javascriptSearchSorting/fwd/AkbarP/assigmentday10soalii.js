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

let arr2 = [3, 7, 12, 18, 22, 27, 31, 36, 40, 45];

console.log("\nBinary Search:");
console.log("Cari 7 →", binarySearch(arr2, 7));
console.log("Cari 21 →", binarySearch(arr2, 21));
