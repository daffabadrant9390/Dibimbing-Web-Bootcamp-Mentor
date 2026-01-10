const linearSearch = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
};

const arr1 = [29, 5, 13, 40, 7, 33, 18, 21, 9, 2];

console.log("Angka ditemukan pada indeks ke", linearSearch(arr1, 2));
console.log("Angka ditemukan pada indeks ke", linearSearch(arr1, 99));
