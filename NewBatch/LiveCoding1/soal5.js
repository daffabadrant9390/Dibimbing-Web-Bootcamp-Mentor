/**
 * RIGHT TRIANGLE
 * Membuat segitiga siku siku dengan 2 kondisi
 * - Kondisi 1 -> dimulai dari kiri
 * *
 * **
 * ***
 * ****
 * *****
 *
 * - Kondisi 2 -> dimulai dari kiri dan terbalik
 * *****
 * ****
 * ***
 * **
 * *
 *
 * - Kondisi 3 -> dimulai dari kiri kemudian dilanjutkan terbalik
 * *
 * **
 * ***
 * ****
 * *****
 * ****
 * ***
 * **
 * *
 *
 * Lakukan looping untuk menyelesaikan segitiga berikut!
 */

//* Put your solution here...
/**
 * *
 * **
 * ***
 * ****
 * *****
 */
for (let i = 1; i <= 5; i++) {
  let stars = '';
  for (let j = 1; j <= i; j++) {
    stars += '*';
  }

  console.log(stars);
}

console.log('\n====================');

/**
 * *****
 * ****
 * ***
 * **
 * *
 */
for (let i = 5; i >= 1; i--) {
  let stars = '';
  for (let j = 1; j <= i; j++) {
    stars += '*';
  }

  console.log(stars);
}

console.log('\n====================');

let totalRows = 9; // Total number of rows (5 up + 4 down)
let peak = Math.ceil(totalRows / 2); // The middle point (5 in this case)

for (let i = 1; i <= totalRows; i++) {
  let stars = '';

  if (i <= peak) {
    // Growing part
    for (let j = 1; j <= i; j++) {
      stars += '*';
    }
  } else {
    // Shrinking part -> i start from 6
    for (let j = 1; j <= totalRows - i + 1; j++) {
      stars += '*';
    }
  }

  console.log(stars);
}
