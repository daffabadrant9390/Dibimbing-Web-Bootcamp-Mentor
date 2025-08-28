//* soal 1 Linear Search
const linearSearch = (arr = [], target) => {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === target) {
            return i; // Return the index of the target element
        }
    }
    return -1; // Return -1 if the target element is not found
};
const arr = [29, 5, 13, 40, 7, 33, 18, 21, 9, 2];
const target1 = 2;
const target2 = 99;
console.log(linearSearch(arr, target1));
console.log(linearSearch(arr, target2));

//* soal 1 Binary Search
const binarySearch = (arrData, startIndex, endIndex, targetData) => {
    if (startIndex > endIndex){
        return false;
    }

    let middleIndex = Math.floor((startIndex + endIndex) / 2);

    if(arrData[middleIndex] === targetData){
        return true;
    }

    if(arrData[middleIndex] < targetData){
        const updateStartIndex  = middleIndex + 1;
        return binarySearch(arrData, updateStartIndex, endIndex, targetData);
    } else {
        const updateEndIndex = middleIndex - 1;
        return binarySearch(arrData, startIndex, updateEndIndex, targetData);
    }
};

const arrData = [3, 7, 12, 18, 22, 27, 31, 36, 40, 45];
const targetData1 = 7;
const targetData2 = 21;

console.log(binarySearch(arrData, 0, arrData.length - 1, targetData1));
console.log(binarySearch(arrData, 0, arrData.length - 1, targetData2));