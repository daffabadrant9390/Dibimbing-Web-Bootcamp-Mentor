/**
 * PALINDROME WORDS
 * - Palindrome adalah sebuah string yang memiliki pengejaan yang sama baik dari awal maupun dari akhir, contoh
 *    - "madam" -> di reverse menjadi "madam".
 *    - "ada" -> di reverse menjadi "ada".
 * Buatlah sebuah perulangan dan pengecekan apakah sebuah string merupakan palindrome atau tidak. String tersebut
 * dapat berupa semua karakter alphabet atau kombinasi dengan angka.
 *
 * NOTES: Hanya gunakan looping dan if else biasa, tidak menggunakan method tambahan seperti split(), reverse() dll.
 */

const contohKata1 = 'madamada';

let leftSideIdx = 0;
let rightSideIdx = contohKata1.length - 1;
let isPalindrome = true;

while (leftSideIdx < rightSideIdx) {
  // Jika ada yang sama
  if (contohKata1[leftSideIdx] !== contohKata1[rightSideIdx]) {
    isPalindrome = false;
    break;
  }

  leftSideIdx++;
  rightSideIdx--;
}

console.log(isPalindrome ? 'yes palindrome' : 'no palindrome');
