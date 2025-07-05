//* 2. Casting the data type from string / boolean -> number
/**
 * - parseInt()
 * - Number()
 */
const angkaString = "100";
const formattedAngka1 = parseInt(angkaString);
const formattedAngka2 = Number(angkaString);
console.log(`formattedAngka1: ${formattedAngka1} dengan type data ${typeof formattedAngka1}`)
console.log(`formattedAngka2: ${formattedAngka2} dengan type data ${typeof formattedAngka2}`)

//* 3. Casting the data type from number / boolean -> string
/**
 * - toString()
 * - String()
*/
const angka = 2000;
const formattedToString = angka.toString();
const isStudent = false;
const formattedString = String(isStudent)
console.log(`formattedToString: ${formattedToString} dengan type data ${typeof formattedToString}`)
console.log(`formattedString: ${formattedString} dengan type data ${typeof formattedString}`)

//* 4. Casting the data type from string / number -> Boolean
/**
 * - Boolean()
 * - Double Negation (!!)
*/
const nama = "hello world";
const isNamaExist = !!nama;
const angkaKosong = 0; 
const isAngkaExist = Boolean(angkaKosong) // false karena boolean 0 adalah false
console.log(`isNamaExist: ${isNamaExist} dengan type data ${typeof isNamaExist}`)
console.log(`isAngkaExist: ${isAngkaExist} dengan type data ${typeof isAngkaExist}`)

