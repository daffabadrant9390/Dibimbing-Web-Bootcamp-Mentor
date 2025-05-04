/**
 * Terdapat sebuah array sorted [1, 7, 13, 21, 27, 45, 50]
 * Buatlah sebuah function untuk searching sebuah angka menggunakan "BINARY SEARCH"
 * - Jika menemukan angka, kembalikan true;
 * - Jika tidak menemukan angka, kembalikan false;
 *
 * Input -> 45 dan 21 (tentukan apakah keduanya ada didalam array tersebut)
 */

const binarySearchAlgorithm = (arrayData, targetValue) => {
  if (!arrayData?.length || !targetValue) return false;

  let startIndex = 0;
  let endIndex = arrayData.length - 1;

  while (startIndex <= endIndex) {
    let middleIndex = Math.floor((startIndex + endIndex) / 2);

    // If the middleIndex === targetValue
    if (arrayData[middleIndex] === targetValue) {
      return true;
    }

    if (arrayData[middleIndex] < targetValue) {
      startIndex = middleIndex + 1;
    } else {
      endIndex = middleIndex - 1;
    }
  }

  return false;
};

const binarySearchAlgorithmRecursive = ({
  arrayData,
  targetValue,
  startIndex,
  endIndex,
}) => {
  // Base condition
  if (startIndex > endIndex) {
    return false;
  }

  let middleIndex = Math.floor((startIndex + endIndex) / 2);
  // Jika middleIndex === targetValue
  if (arrayData[middleIndex] === targetValue) {
    return true;
  }

  if (arrayData[middleIndex] < targetValue) {
    return binarySearchAlgorithmRecursive({
      arrayData,
      targetValue,
      startIndex: middleIndex + 1,
      endIndex,
    });
  } else {
    return binarySearchAlgorithmRecursive({
      arrayData,
      targetValue,
      startIndex,
      endIndex: middleIndex - 1,
    });
  }
};

// Without Recursive
const arrayNums = [1, 7, 13, 21, 27, 45, 50];
const isFoundFirstNumber = binarySearchAlgorithm(arrayNums, 45);
const isFoundSecondNumber = binarySearchAlgorithm(arrayNums, 25);

console.log(`is 45 inside the array: ${isFoundFirstNumber}`);
console.log(`is 25 inside the array: ${isFoundSecondNumber}`);

console.log('\n====================\n');

const isFoundFirstNumberRecursive = binarySearchAlgorithmRecursive({
  arrayData: arrayNums,
  targetValue: 45,
  startIndex: 0,
  endIndex: arrayNums.length - 1,
});
const isFoundSecondNumberRecursive = binarySearchAlgorithmRecursive({
  arrayData: arrayNums,
  targetValue: 25,
  startIndex: 0,
  endIndex: arrayNums.length - 1,
});
console.log(`is 45 inside the array: ${isFoundFirstNumberRecursive}`);
console.log(`is 25 inside the array: ${isFoundSecondNumberRecursive}`);
