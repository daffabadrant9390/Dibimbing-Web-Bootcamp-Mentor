// Soal - 1, Linear Search
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; 
    }
  }
  return -1; 
}

const array1 = [29, 5, 13, 40, 7, 33, 18, 21, 9, 2];
console.log("Hasil Dari Linear Search");
console.log("mencari nilai 2   -> indeks:", linearSearch(array1, 2));
console.log("mencari nilai 99  -> indeks:", linearSearch(array1, 99));

//Soal - 2, Binary Search
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] == target) return true;
    else if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return false;
}

const array2 = [3, 7, 12, 18, 22, 27, 31, 36, 40, 45];
console.log("\nHasil Dari Binary Search ");
console.log("Pencarian nilai 7   -> ditemukan?", binarySearch(array2, 7));
console.log("Pencarian nilai 21  -> ditemukan?", binarySearch(array2, 21));