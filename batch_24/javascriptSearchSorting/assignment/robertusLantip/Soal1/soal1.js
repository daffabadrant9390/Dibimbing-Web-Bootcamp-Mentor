function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // return index where target is found
    }
  }
  return -1; // return -1 if not found
}

const arrNumber = [29, 5, 13, 40, 7, 33, 18, 21, 9, 2];

console.log(linearSearch(arrNumber, 2));
console.log(linearSearch(arrNumber, 99));