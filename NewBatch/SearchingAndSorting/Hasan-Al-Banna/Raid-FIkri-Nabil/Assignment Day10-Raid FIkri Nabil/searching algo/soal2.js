const arr = [1, 7, 9, 12, 23, 30, 55, 93];

function binarySearch(arr,target){
    let leftIndex = 0;
    let rightIndex = arr.length - 1;

    while(leftIndex <= rightIndex){
        let middleIndex = Math.floor((leftIndex + rightIndex)/2);
        if(arr[middleIndex] === target){
            return true;
        }
        if(target < middleIndex){
            rightIndex = middleIndex - 1;
        } else {
            leftIndex = middleIndex +1;
        }
    }
    return false;
}


console.log(binarySearch(arr,93))
console.log(binarySearch(arr,17))