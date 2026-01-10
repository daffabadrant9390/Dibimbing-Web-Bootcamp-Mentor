/**
 * Menggabungkan array
 */

let array2d = [[1,2,3],[4,5,6],[7,8,9]];
console.log('Asal array: ', array2d); // output: [[1,2,3],[4,5,6],[7,8,9]] (tetap sama/tidak berubah)

// tulis code di sini

console.log('===My Work===')
//!Manual 
let newArr = []
for (let i =0; i < array2d.length; i++) {
    newArr.push(...array2d[i])
 }
console.log('Hasil', newArr)


//!Extended Proccess, Supported by AI and Other's Work
console.log('===AI & CLASS WORK===')
//!Cara 1: Menggunakan Flat
const newArr1 = array2d.flat()
console.log('Cara 1 FLAT: ', newArr1); // output: [1,2,3,4,5,6,7,8,9]

//!Cara 2 Menggunakan Concat dengan Spread Operator
const newArr2 = [].concat(...array2d)
console.log('Cara 2 CONCAT: ', newArr2); 

//!Cara 3 Menggunakan Reduce
const newArr3 = array2d.reduce((acc,arr) => acc.concat(arr), [])
console.log('Cara 3 Reduce-Concat: ', newArr3); 
