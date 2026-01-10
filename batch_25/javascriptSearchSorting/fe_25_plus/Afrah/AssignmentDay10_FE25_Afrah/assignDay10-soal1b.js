function binarySearch(arr, target) {
  let front = 0;
  let endIndex = arr.length - 1;

  while (front <= endIndex) {
    let middleIndex = Math.floor((front + endIndex) / 2);

    if (arr[middleIndex] === target) {
      return true;
    } else if (arr[middleIndex] < target) {
      front = middleIndex + 1; // mencari ke kana
    } else {
      endIndex = middleIndex - 1; //mencari ke kiri
    }
  }

  return false;
}

let data = [3, 7, 12, 18, 22, 27, 31, 36, 40, 45];

console.log(binarySearch(data, 7));  

console.log(binarySearch(data, 21));
