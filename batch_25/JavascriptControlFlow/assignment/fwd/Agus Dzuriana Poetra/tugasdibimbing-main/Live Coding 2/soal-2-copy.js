/*
  Melakukan filter angka: hanya menampilkan angka yang diminta

  Gunakan looping "for", tidak boleh menggunakan method "javascript filter"

  1. tidak boleh menggunakan method array includes, atau sejenisnya (harus looping manual)
  2. JS method array yang boleh digunakan hanya length & push
*/

let data_array = [1,2,4,7,3,1,5,7,8,5,9,1,3,6,2,6,5,5,5,5,1];

function filterData2(dataAngka, yangMauDicari) {
  return dataAngka.filter(tiapDatanya => 
    yangMauDicari.includes(tiapDatanya)
  );
}

console.log(filterData2(data_array, [1,5]));  // output: [ 1, 1, 5, 5, 1, 5, 5, 5, 5, 1 ]