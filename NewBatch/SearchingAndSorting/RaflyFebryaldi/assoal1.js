function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        return true;
      }
    }
    return false;
  }
  
  // Uji coba
  const data1 = [50, 7, 5, 20, 8, 23, 17, 19];
  console.log(linearSearch(data1, 17));  // Output: true
  console.log(linearSearch(data1, 77));  // Output: false
  
  function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;
  
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      
      if (arr[mid] === target) {
        return true;
      } else if (arr[mid] < target) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  
    return false;
  }
  
  // Uji coba
  const data2 = [1, 7, 9, 12, 23, 30, 55, 93];
  console.log(binarySearch(data2, 93));  // Output: true
  console.log(binarySearch(data2, 17));  // Output: false
  