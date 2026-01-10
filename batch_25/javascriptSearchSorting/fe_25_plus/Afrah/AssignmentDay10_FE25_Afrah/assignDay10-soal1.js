function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; //sesuai posisi
    }
  }
  return -1; // kalau g ada
}


let data = [29, 5, 13, 40, 7, 33, 18, 21, 9, 2];

console.log("Index nilai 2:", linearSearch(data, 2));  

console.log("Index nilai 99:", linearSearch(data, 99)); 
