// Bagian 1
const arr1 = [50, 7, 5, 20, 8, 23, 17, 19];
function linearSearch(array, target) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === target) {
        return true;
      }
    }
    return false;
  }
  
  // Tes pencarian
  console.log(linearSearch(arr1, 17)); // true
  console.log(linearSearch(arr1, 77)); // false

  // Bagian 2
  const arr2 = [1, 7, 9, 12, 23, 30, 55, 93];
  function binarySearch(array, target) {
    let left = 0;
    let right = array.length - 1;
  
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
  
      if (array[mid] === target) {
        return true;
      } else if (array[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return false;
  }
  
  // Tes pencarian
  console.log(binarySearch(arr2, 93)); // true
  console.log(binarySearch(arr2, 17)); // false
  
  