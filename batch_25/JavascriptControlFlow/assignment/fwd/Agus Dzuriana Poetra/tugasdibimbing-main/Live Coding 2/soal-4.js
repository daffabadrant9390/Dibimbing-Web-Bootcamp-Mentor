/*
  Menghitung banyaknya item yang ingin dicari di dalam array, misal ada berapa angka 5 & 1 di dalam array:
  let data_array = [1,2,4,7,3,1,5,7,8,5,9,1,3,6,2,6,5,5,5,5,1];

  1. tidak boleh menggunakan method array includes, atau sejenisnya (harus looping manual)
  2. JS method array yang boleh digunakan hanya length & push

*/

const countData = (arr, searchValue) => {
  const result = {}  
    for (let i = 0; i < arr.length ; i++) {
      for (let j = 0; j < searchValue.length; j++) {
        if (arr[i] === searchValue[j]) {
          if (result[arr[i]] === undefined)
            {result[arr[i]] =1}
          else {result[arr[i]]++}
      }
    }
  }
    return result      
}


let data_array = [1,2,4,7,3,1,5,7,8,5,9,1,3,6,2,6,5,5,5,5,1];
console.log(countData(data_array, [1,5]));  // output: { '1': 4, '5': 6 }  (satu ada 4 & lima ada 6)