// Day 16 · Latihan 3 · ANSWER KEY
const price = 18000;
const quantity = 7;
let totalPay = 0;

for (let cup = 1; cup <= quantity; cup++) {
  //? Check apakah cup ini gratis (dengan modulus operator)
  if(cup % 5 === 0) {
    console.log('Cup ' + cup + ': GRATIS');
  } else {
    console.log('Cup ' + cup + ': Rp' + price);
    totalPay += price;
  }
}

console.log('Total bayar: Rp' + totalPay);

//* Ganjil genap
const rangeBilangan = 10;
for(let bilangan = 1; bilangan <= rangeBilangan; bilangan++) {
  if(bilangan % 2 === 0) {
    console.log(bilangan + ' adalah bilangan genap');
  } else {
    console.log(bilangan + ' adalah bilangan ganjil');
  }
} 
