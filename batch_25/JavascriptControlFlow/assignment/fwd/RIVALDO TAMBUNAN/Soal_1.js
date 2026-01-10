let ganjil = [];
let genap = [];
let bilHabis4 = [];
let bilHabis6 = [];
let bilHabis4dan6 = [];
let bilHabis3atau5 = [];
let sisa = [];

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    genap.push(i); // tambahkan ke array genap
  } else {
    ganjil.push(i); // tambahkan ke array ganjil
  }
}

// Tampilkan hasil dalam satu baris
console.log("Bilangan Ganjil:", ganjil.join(", "));
console.log("Bilangan Genap :", genap.join(", "));


for (let i = 1; i <= 20; i++) {
  if (i % 4 === 0 && i % 6 === 0) {
    bilHabis4dan6.push(i);
  } else if (i % 4 === 0) {
    bilHabis4.push(i);
  } else if (i % 6 === 0) {
    bilHabis6.push(i);
  } else if (i % 3 === 0 || i % 5 === 0) {
    bilHabis3atau5.push(i);
  } else {
    sisa.push(i); // inilah bilangan sisanya
  }
}
console.log("Kelipatan 4:", bilHabis4);
console.log("Kelipatan 6:", bilHabis6);
console.log("Kelipatan 4 dan 6:", bilHabis4dan6);
console.log("Kelipatan 3 atau 5:", bilHabis3atau5);
console.log("Sisa bilangan:", sisa);