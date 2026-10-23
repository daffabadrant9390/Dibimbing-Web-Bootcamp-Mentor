// Day 15 · Data types practice: KebunSegar member sign-up
// Story: Andi signs up as a KebunSegar member. The sign-up form saves his data in variables.
//   Fill in each TODO with the right data type, then run: node tipe_data.js
// Only plain variables (no if/else, no objects, no arrays).
 
const nama = 'Andi';
const umur = 20;
const isStudent = true;
const alamat = null;                      // null = empty on purpose
let hobi = 'diisi nanti';
 
console.log(nama, typeof nama);           // expected: Andi string
console.log(umur, typeof umur);           // expected: 20 number
console.log(isStudent, typeof isStudent); // expected: true boolean
console.log(alamat, typeof alamat);       // expected: null object   <- a known JavaScript quirk
console.log(hobi, typeof hobi);           // expected: undefined undefined
 
// TODO 6: the form sends the age as text. Turn it into a number.
const umurText = '20';
const umurNext = Number(umurText) + 1;    // '20' + 1 joins text -> '201'
console.log(umurNext, typeof umurNext);   // expected: 21 number   (now it prints 201 string)
 
// TODO 7: build the welcome message with a template literal
const welcome = `Halo ${nama}, umur ${umur}, pelajar: ${isStudent}`;
console.log(welcome);                     // expected: Halo Andi, umur 20, pelajar: true
 
// Predict first, then run:
console.log(alamat === null);             // ?
console.log(hobi === undefined);          // ?
console.log(typeof '20' === typeof 20);   // ?