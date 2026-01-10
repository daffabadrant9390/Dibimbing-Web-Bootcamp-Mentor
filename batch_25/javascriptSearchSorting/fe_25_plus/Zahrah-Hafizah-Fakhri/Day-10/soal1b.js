const binarySearch = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      return true;
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return false;
};

const arr2 = [3, 7, 12, 18, 22, 27, 31, 36, 40, 45];

console.log("Apakah angka ditemukan?", binarySearch(arr2, 7));
Output: true;
console.log("Apakah angka ditemukan?", binarySearch(arr2, 21));
