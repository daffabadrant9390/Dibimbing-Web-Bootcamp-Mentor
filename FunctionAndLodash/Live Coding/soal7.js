/**
 * 7. Buatlah sebuah function yang dapat menerima 2 parameter, dengan ketentuan:
 * - Parameter pertama adalah function
 * - Parameter kedua adalah REST Parameter (bisa menampung lebih dari 1 parameter)
 * 
 * Kemudian buat 4 function tambahan yang dapat digunakan untuk menghitung:
 * - Luas segitiga siku siku (menerima 2 nilai) -> a x t / 2
 * - Luas Trapesium (menerima 3 nilai) -> 1/2 x (a + b) x t  
 * - volume balok (menerima 3 nilai) -> p x l x t
 * - volume tabung (menerima 2 nilai) -> π x r x r x t (π = 3.14)
 * - volume kerucut (menerima 2 nilai) -> 1/3 x π x r x r x t
 * - volume bola (menerima 1 nilai) -> 4/3 x π x r x r x r
 * 
 * 
 * * NOTE: Penggunaan Rest Parameter karena jumlah parameter bisa dinamis dan tidak terbatas
 */

const mainFunction = (callbackFunction, ...restParams) => {
  return callbackFunction(...restParams);
}

const luasSegitigaSikuSiku = function(...restParams) {
  const alas = restParams[0];
  const tinggi = restParams[1];

  //* Lakukan pengecekan jika parameter tidak sesuai
  if(!alas || !tinggi) {
    return 'Parameter tidak sesuai';
  }

  return alas * tinggi / 2;
}

const hasilLuasSegitiga = mainFunction(luasSegitigaSikuSiku, 5);
console.log(hasilLuasSegitiga);
