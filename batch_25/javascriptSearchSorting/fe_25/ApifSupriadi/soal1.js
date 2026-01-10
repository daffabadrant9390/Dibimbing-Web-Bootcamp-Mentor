const numbers1 = [29, 5, 13, 40, 7, 33, 18, 21, 9, 2];
const numbers2 = [3, 7, 12, 18, 22, 27, 31, 36, 40, 45];

const linearSearch = (numbers, target) => {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === target) {
      return i;
    }
  }
  return -1;
};

const pertama = linearSearch(numbers1, 2);
const kedua = linearSearch(numbers1, 99);

const binarySearch = (numbers, target) => {
  let left = 0;
  let right = numbers.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (numbers[mid] === target) {
      return mid;
    } else if (numbers[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
};

const pertama2 = binarySearch(numbers2, 7);
const kedua2 = binarySearch(numbers2, 21);

console.log(
  `nilai 2 ada di index ke ${pertama} dan nilai 99 ada di index ${kedua}`
);
console.log(
  `nilai 7 ada di index ke ${pertama2} dan nilai 21 ada di index ${kedua2}`
);
