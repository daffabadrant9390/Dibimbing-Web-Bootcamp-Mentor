// Function Declaration untuk menghitung luas persegi panjang
function luasPersegiPanjang(panjang, lebar) {
  return panjang * lebar;
}

// Function Expression untuk menghitung luas lingkaran
const luasLingkaran = function (radius) {
  const pi = 3.14159;
  return pi * radius * radius;
};

// Arrow Function untuk menghitung luas segitiga siku-siku
const luasSegitiga = (alas, tinggi) => (alas * tinggi) / 2;

// Function Declaration untuk menghitung luas ketupat
function luasKetupat(d1, d2) {
  return (d1 * d2) / 2;
}

const panjang = 10;
const lebar = 5;
const radius = 7;
const alas = 8;
const tinggi = 6;
const diagonal1 = 10;
const diagonal2 = 8;

console.log("Luas Persegi Panjang:", luasPersegiPanjang(panjang, lebar));
console.log("Luas Lingkaran:", luasLingkaran(radius));
console.log("Luas Segitiga:", luasSegitiga(alas, tinggi));
console.log("Luas Ketupat:", luasKetupat(diagonal1, diagonal2));
