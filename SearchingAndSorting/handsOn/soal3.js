/**
 * 3. Terdapat array unsorted sebagai berikut
 * - input array  [20, 1, 7, 5, 2]
 * - Sort array tersebut menggunakan Bubble Sort
 */

const bubbleSortAlgorithm = (arrayData) => {
  if (!arrayData?.length) {
    return [];
  }

  const newArrayData = [...arrayData];
  let isSwapped = false;

  for (let i = 0; i < newArrayData.length; i++) {
    isSwapped = false;

    for (let j = 0; j < newArrayData.length - i; j++) {
      if (newArrayData[j] > newArrayData[j + 1]) {
        [newArrayData[j], newArrayData[j + 1]] = [
          newArrayData[j + 1],
          newArrayData[j],
        ];
        isSwapped = true;
      }
    }

    if (isSwapped === false) {
      break;
    }
  }

  return newArrayData;
};

const arrayNums = [20, 1, 7, 5, 2];
console.log('array nums: ', arrayNums);
const sortedArrayNums = bubbleSortAlgorithm(arrayNums);
console.log('sorted array: ', sortedArrayNums);
