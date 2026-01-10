/*
  Melakukan filter angka: hanya menampilkan angka yang diminta

  Gunakan looping "for", tidak boleh menggunakan method "javascript filter"
*/

const filterData = (dataAngka, yangMauDicari) => {
  //inisiasi variable
  let result = []  
  
  //proses
  for (let i=0; i < dataAngka.length; i++) {
  
    //bandingkan angka yang sedang di looping
    if ( dataAngka[i] === yangMauDicari) {
        result.push(dataAngka[i]) // artinya ke dalam result, lakukan push data arr ke-i
    }
  }

  return result
}

let data_array = [1,2,4,7,3,1,5,7,8,5,9,1,3,6,2,6,5,5,5,5,1];
console.log(filterData(data_array, 5));  // output: [ 5, 5, 5, 5, 5, 5 ] (ada 6 kali)

//Gunakan ctrl d kalau mau mengganti nama variable/paramater sekaligus