/**
 * 4. Terdapat sebuah aray unsorted random
 * - input array [12, 9, 6, 1, 3, 11];
 * - Sort array tersebut menggunakan Selection Sort
 */
const selectionSortAlgorithm = (arrayData) => {
  if (!arrayData?.length) {
    return [];
  }

  const newArrayData = [...arrayData];
  let minIdx = 0;

  for (let i = 0; i < newArrayData.length; i++) {
    minIdx = i;

    for (let j = i + 1; j < newArrayData.length; j++) {
      if (newArrayData[j] < newArrayData[minIdx]) {
        minIdx = j;
      }
    }

    if (minIdx !== i) {
      [newArrayData[i], newArrayData[minIdx]] = [
        newArrayData[minIdx],
        newArrayData[i],
      ];
    }
  }

  return newArrayData;
};

const arrayNums = [20, 1, 7, 5, 2];
console.log('array nums: ', arrayNums);
const sortedArrayNums = selectionSortAlgorithm(arrayNums);
console.log('sorted array: ', sortedArrayNums);
