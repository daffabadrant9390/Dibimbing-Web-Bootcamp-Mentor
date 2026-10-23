// Day 15 · Exercise 3: KebunSegar checkout (Day 14 pseudocode -> JavaScript operators)
// Story: the online shop KebunSegar needs a mini checkout.
//   subtotal = price * quantity, members get 10% off, totalPay = subtotal - discount.
// No if/else yet (that's Day 16). Hint: true counts as 1, false as 0 in math.
const price = 100000;
const quantity = 2;
const member = true;
 
// TODO 1: subtotal = price * quantity
const subtotal = undefined;
// TODO 2: discount = 10% of subtotal, only for members
const discount = undefined;
// TODO 3: totalPay = subtotal - discount (use -=)
let totalPay = subtotal;
 
console.log(subtotal, discount, totalPay);   // expected: 200000 20000 180000
 
// ---- ANSWER KEY (mentor only) ----
// const subtotal = price * quantity;
// const discount = subtotal * 0.10 * member;     // true -> 1, false -> 0
// let totalPay = subtotal;  totalPay -= discount;
//
// 3 cases (price, quantity, member -> subtotal discount totalPay):
// 100000, 2, true  -> 200000 20000 180000
// 100000, 2, false -> 200000 0     200000
// 50000,  3, true  -> 150000 15000 135000