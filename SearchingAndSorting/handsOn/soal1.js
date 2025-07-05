/**
 * 1. Terdapat sebuah array random [9, 12, 1, 7, 29, 18, 6]
 * Buatlah sebuah function untuk searching sebuah angka menggunakan "LINEAR SEARCH"
 * - Jika menemukan angka, kembalikan true;
 * - Jika tidak menemukan angka, kembalikan false;
 *
 * Input -> 17 dan 29 (tentukan apakah keduanya ada didalam array tersebut)
 */

const linearSearchAlgorithm = (arrayData, targetValue) => {
  if (!arrayData?.length || !targetValue) {
    return false;
  }

  for (let i = 0; i < arrayData.length; i++) {
    if (arrayData[i] === targetValue) {
      return true;
    }
  }

  return false;
};

console.log(linearSearchAlgorithm([9, 12, 1, 7, 29, 18, 6], 29));

const a = 2;
const b = 4;
console.log(a + b);
