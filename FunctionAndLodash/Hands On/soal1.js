/**
 * 1. Buatlah sebuah function untuk menampilkan tulisan Hello World sebanyak N kali
 * Tampilkan tulisan `Hello World ke-N`
 *
 * - N merupakan sebuah nilai pada parameter.
 *
 * Tugas
 * - Buat function menggunakan 3 cara (function declaration, function expression, arrow function)
 * - Gunakan default value pada N jika N tidak diisi, isi default value dengan angka 5
 */

const menampilkanHelloWorld = function (n) {
  //* Lanjutkan code disini
  for (let i = 1; i <= n; i++) {
    console.log(`Hello World ke-${i}`);
  }
};

menampilkanHelloWorld(5);
