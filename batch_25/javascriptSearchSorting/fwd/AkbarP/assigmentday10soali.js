function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

let arr1 = [29, 5, 13, 40, 7, 33, 18, 21, 9, 2];

console.log("Linear Search:");
console.log("Cari 2 → index:", linearSearch(arr1, 2));
console.log("Cari 99 → index:", linearSearch(arr1, 99));
