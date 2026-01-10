/**
 * Rotate array 1 Dimensi
 */

const rotate = (arr, num) => {

  let newArr = [...arr]
  for (let i=0; i < num; i++) {
    let last = newArr.pop()
    newArr.unshift(last)
  }
  return newArr
}

let angka = [3,4,5,6,7,8];
console.log('array : ', angka); // [3,4,5,6,7,8]
console.log('rotasi ke-1 : ', rotate(angka, 1)); // output: [8,3,4,5,6,7]
console.log('rotasi ke-2 : ', rotate(angka, 2)); // output: [7,8,3,4,5,6]
console.log('rotasi ke-3 : ', rotate(angka, 3)); // output: [6,7,8,3,4,5]
console.log('rotasi ke-8 : ', rotate(angka, 8)); // output: [7,8,3,4,5,6] (note: sama dengan rotasi kedua)

let last = angka.pop() // Ambil dari belakang
console.log(last) // tampilkan yang diambil

angka.unshift(last) //Simpan ke depan si last nya
console.log(angka) // Tampilkan hasil akhir

//! Catatan
// Push = tambah di belakang
// pop = ambil di belakang
// shift = ambil di depan
// unshift = tambah didepan