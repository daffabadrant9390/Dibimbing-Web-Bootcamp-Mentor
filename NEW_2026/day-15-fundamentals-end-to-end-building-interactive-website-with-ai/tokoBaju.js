// Day 15 · Exercise 4: Toko Baju Rapi (end-of-month promo)
// Discount 10% only if ALL are true: the buyer gets a kaos AND a celana, AND subtotal >= 400000.
// Only plain variables: change the values, run again (node toko_baju.js).
 
let hasKaos = true;
let hasCelana = true;
let subtotal = 400000;
 
const hasBoth = hasKaos && hasCelana;
const bigEnough = subtotal >= 400000;
const eligible = hasBoth && bigEnough;
console.log('A', eligible);                                  // true
 
// Case B: kaos only, 500000
hasCelana = false;
subtotal = 500000;
console.log('B', hasKaos && hasCelana && subtotal >= 400000); // false
 
// Case C: kaos + celana, 300000
hasCelana = true;
subtotal = 300000;
console.log('C', hasKaos && hasCelana && subtotal >= 400000); // false
 
// Case D: kaos + celana, 450000
subtotal = 450000;
console.log('D', hasKaos && hasCelana && subtotal >= 400000); // true
 
// Bonus 1: a member gets the discount even with a small total (parentheses matter)
let isMember = true;
subtotal = 300000;
console.log('member:', hasKaos && hasCelana && (subtotal >= 400000 || isMember)); // true
hasCelana = false;                                              // kaos only, but a member
console.log('with ( ):   ', hasKaos && hasCelana && (subtotal >= 400000 || isMember)); // false
console.log('without ( ):', hasKaos && hasCelana && subtotal >= 400000 || isMember);   // true  <- wrong!
 
// Bonus 2: true counts as 1 in math (case A again)
subtotal = 400000;
console.log(subtotal - subtotal * 0.1 * true);    