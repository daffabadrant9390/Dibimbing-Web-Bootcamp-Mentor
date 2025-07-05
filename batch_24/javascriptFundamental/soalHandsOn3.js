//* Basic Operator
/**
 * - Arithmetic Operator
 * - Assignment Operator
 * - Comparison Operator
 */

/**
 * 1. Arithmetic Operator
 * - Penjumlahan (+)
 * - Pengurangan (-)
 * - Perkalian (*)
 * - Pembagian (/)
 * - Modulus (%)
 * - Exponentiation (**)
 * - Increment (++)
 * - Decrement (--)
 */

/**
 * 2. Assignment Operator
 * - Assignment (=)
 * - Addition Assignment (+=)
 * - Subtraction Assignment (-=)
 * - Multiplication Assignment (*=)
 * - Division Assignment (/=)
 * - Modulus Assignment (%=)
 * - Exponentiation Assignment (**=)
 */

/**
 * 3. Comparison Operator
 * - Equal (==)
 * - Not Equal (!=)
 * - Strict Equal (===)
 * - Strict Not Equal (!==)
 * - Greater Than (>)
 * - Less Than (<)
 * - Greater Than or Equal (>=)
 *
 * Logical Operator
 * - && (AND)
 * - || (OR)
 * - ! (NOT)
 */
//* Equal
const nilai1 = 10;
const string1 = "10";
const isNilaiSama = nilai1 == string1;
// console.log("isNilaiSama: ", isNilaiSama);

const isNilaiSama2 = nilai1 === string1;
// console.log("isNilaiSama2: ", isNilaiSama2);

//! Case 2
// console.log(`type data string1: ${typeof string1}`);
const dataNilai2 = Number(string1);
// console.log(`type data dataNilai2: ${typeof dataNilai2}`);

const isNilaiSama3 = dataNilai2 === nilai1;
// console.log("isNilaiSama3: ", isNilaiSama3);


//! Logical Operator
/**
 * Sebuah nilai akan dianggap true jika:
 * - Nilai tersebut > 10 DAN
 * - Type data dari nilai tersebut adalah number DAN
 * - Nilai data tersebut <= 100 
 */
const angka1 = 110;
const kondisiLogicalOperator1 = 
  angka1 > 10 
    && typeof angka1 === 'number' 
      && angka1 <= 100;
console.log(`kondisiLogicalOperator1: ${kondisiLogicalOperator1}`);

/**
 * - Nilai tersebut > 50 DAN
 * - Type data harus number DAN
 * - nilai harus kurang dari 70 ATAU nilai kurang dari 150
 */
const kondisiLogicalOperator2 = 
  angka1 > 50 
    && typeof angka1 === 'number'
      && (angka1 < 70 || angka1 < 150) // true
console.log(`kondisiLogicalOperator2: ${kondisiLogicalOperator2}`);
