// 1. Linear Search
const number = [50, 7, 5, 20, 8, 23, 17, 19];

function linearSearch(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return true;
        }
    }
    return false;
}

const target1 = 17;
const target2 = 77;
console.log(`Apakah angka ${target1} ada di dalam array? ${linearSearch(number, target1)}`);
console.log(`Apakah angka ${target2} ada di dalam array? ${linearSearch(number, target2)}\n`);

// 2. Binary Search
function binarySearch(array, target) {
    let startIndex = 0;
    let endIndex = array.length - 1;

    while (startIndex <= endIndex) {
        const midIndex = Math.floor((startIndex + endIndex)/2);

        if (array [midIndex] == target) {
            return true;
        }else if (array[midIndex] < target) {
            startIndex = midIndex + 1;
        }else {
            endIndex = midIndex - 1;
        }
    }
    return false;
}
const numbers = [1, 7, 9, 12, 23, 30, 55, 93];
const target3 = 93;
const target4 = 17;
console.log(`Apakah angka ${target3} ada di dalam array? ${binarySearch(numbers, target3)}`);
console.log(`Apakah angka ${target4} ada di dalam array? ${binarySearch(numbers, target4)}`);

