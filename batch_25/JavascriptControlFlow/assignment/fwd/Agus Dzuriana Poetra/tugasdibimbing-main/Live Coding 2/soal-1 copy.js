/*
  Melakukan filter angka: hanya menampilkan angka yang diminta

  Gunakan looping "for", tidak boleh menggunakan method "javascript filter"
*/

let data_array = [1,2,4,7,3,1,5,7,8,5,9,1,3,6,2,6,5,5,5,5,1];

let filtered = data_array.filter(tiapDatanya => tiapDatanya === 5)

console.log(filtered);  // output: [ 5, 5, 5, 5, 5, 5 ] (ada 6 kali)

//Gunakan ctrl d kalau mau mengganti nama variable/paramater sekaligus