/**
 * *****
 *  ****
 *   ***
 *    **
 *     *
 */
let totalRows = 5; // You can change this number to control the size

for (let i = totalRows; i >= 1; i--) {
  let stars = '';

  // Add spaces before the stars
  for (let j = 1; j <= totalRows - i; j++) {
    stars += ' ';
  }

  // Add stars
  for (let j = 1; j <= i; j++) {
    stars += '*';
  }

  console.log(stars);
}
