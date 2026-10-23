// Day 15 · Mini Challenge · ANSWER KEY (for the mentor) · file: mini_challenge_kunci_jawaban.js
// Run: node mini_challenge_kunci_jawaban.js
// Operator order (top runs first):
//   ( )  →  !  →  **  →  * / %  →  + -  →  > >= < <=  →  === !==  →  &&  →  ||  →  = += -= *=
 
// ===== Mini Challenge 1 · Data types: typeof & casting =====
const price = '25000';
const qty = 2;
const isMember = true;
 
console.log(typeof price);     // string
console.log(typeof qty);       // number
console.log(typeof isMember);  // string  ('true' in quotes is text, not a boolean)
 
console.log(price + qty);      // 250002 -> + meets a string, so it JOINS text
console.log(price * qty);      // 50000  -> * can only do math, so JavaScript turns '25000' into a number
 
const total = Number(price) * qty;
console.log(total, typeof total);   // 50000 number
 
console.log(String(150000) + ' rupiah');  // 150000 rupiah
console.log(Number('12abc'));             // NaN (not a number)
console.log(Boolean(0), Boolean('0'));    // false true  ('0' is a non-empty string)
 
// ===== Mini Challenge 2 =====
console.log(5000 * 2 + 3000 > 12000 && !false);   // true
// 1) !false = true   2) 5000 * 2 = 10000   3) 10000 + 3000 = 13000
// 4) 13000 > 12000 = true   5) true && true = true
 
// ===== Mini Challenge 3 =====
console.log(10 + 2 ** 3 % 5 === 13 || 4 > 5 && true);   // true
// 1) 2 ** 3 = 8   2) 8 % 5 = 3   3) 10 + 3 = 13   4) 4 > 5 = false
// 5) 13 === 13 = true   6) false && true = false   7) true || false = true
// Bonus: (10 + 2) ** 3 % 5 === 13 || 4 > 5 && true  -> false
//   12 ** 3 = 1728, 1728 % 5 = 3, 3 === 13 is false, false || false = false
console.log((10 + 2) ** 3 % 5 === 13 || 4 > 5 && true);   // false
 
// ===== Mini Challenge 4 =====
let balance = 20000;
balance += 5000 * 2 - 1000;    // right side first: 10000 - 1000 = 9000, then 20000 + 9000
console.log(balance);          // 29000
balance -= balance % 4000;     // 29000 % 4000 = 1000, then 29000 - 1000
console.log(balance);          // 28000
const canCheckout = balance >= 25000 && !(balance > 50000);
console.log(canCheckout);      // true -> (28000 >= 25000) true && !(false) true