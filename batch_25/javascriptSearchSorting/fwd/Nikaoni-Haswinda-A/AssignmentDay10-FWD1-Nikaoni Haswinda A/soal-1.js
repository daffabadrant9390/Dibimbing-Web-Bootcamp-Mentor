//Soal Linear Search
const linearSearch = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return true;
        } 
    }
    return -1;
}

const numbers = [29, 5, 13, 40, 7, 33, 18, 21, 9, 2];

console.log(linearSearch(numbers, 2));
console.log(linearSearch(numbers, 99));


//Soal Binary Search
const binarySearch = ({arr, target, left, right}) => {
    //base condition
    if (left > right) {
        return -1;
    }

    let mid = Math.floor((left + right) / 2);
    let midVal = arr[mid];

    if (midVal === target) {
        return true;
    } 
    if (midVal < target) {
        return binarySearch({
            arr,
            target,
            left: mid + 1,
            right
        })
    } else {
        return binarySearch({
            arr,
            target,
            left,
            right: mid - 1
        })
    }
}

const arrayNumbers = [3, 7, 12, 18, 22, 27, 31, 36, 40, 45];

console.log(binarySearch({
    arr: arrayNumbers,
    target: 7,
    left: 0,
    right: arrayNumbers.length - 1
}))

console.log(binarySearch({
    arr: arrayNumbers,
    target: 21,
    left: 0,
    right: arrayNumbers.length - 1
}))