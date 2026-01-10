console.log("============== LINEAR SEARCH ==================== ");
// linear seacrh
const number = [29, 5, 13, 40, 7, 33, 18, 21, 9, 2];
const nilaiTarget1 = 2;
const nilaiTarget2 = 99;

function linearSearch(arrayAngka, nilaiTarget) {
  for (let i = 0; i < arrayAngka.length; i++) {
    if (arrayAngka[i] === nilaiTarget) {
      console.log(`${nilaiTarget} ditemukan pada index ke - ${i}`);
      return i;
    }
  }
  console.log(`${nilaiTarget} tidak ditemukan pada array`);
  return -1;
}
const result1 = linearSearch(number, nilaiTarget1);
console.log(result1);
const result2 = linearSearch(number, nilaiTarget2);
console.log(result2);

console.log("============== BINARY SEARCH ==================== ");
// Binary search
const sortedNum = [3, 7, 12, 18, 22, 27, 31, 36, 40, 45];
const targetValue1 = 7;
const targetValue2 = 21;
const binarySearch = (arr, targetValue) => {
  let startIndex = 0;
  let endIndex = arr.length - 1;

  while (startIndex <= endIndex) {
    let middleIndex = Math.floor((startIndex + endIndex) / 2);
    if (arr[middleIndex] === targetValue) {
      return true; // nilai ditemukan
    } else if (arr[middleIndex] < targetValue) {
      startIndex = middleIndex + 1;
    } else {
      endIndex = middleIndex - 1;
    }
  }
  return false; // nilai tidak ditemukan
};
const hasil1 = binarySearch(sortedNum, targetValue1);
console.log("Apakah nilai 7 terdapat pada array :", hasil1);
const hasil2 = binarySearch(sortedNum, targetValue2);
console.log("Apakah nilai 21 terdapat pada array:", hasil2);
