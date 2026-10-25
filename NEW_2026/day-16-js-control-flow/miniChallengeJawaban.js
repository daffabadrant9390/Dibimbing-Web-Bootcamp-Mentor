// Day 16 · Mini Challenge · ANSWER KEY
// Run: node mini_challenge_kunci_jawaban.js

// Mini Challenge 1 · if / else: Nonton di Bioskop (Raka, 12 tahun)
// 1a: 'Belum boleh'. 12 >= 12 is true, so the if runs. The app is correct, the rule is correct.
// 1b: change >= to > (13 > 12 is true)
const age = 12;
if (age > 12) {
  console.log('Boleh nonton');            // Boleh nonton
} else {
  console.log('Belum boleh');
}

// Mini Challenge 2 · else if: Nilai Kuis Bootcamp (Sinta, nilai 90)
// 2a: 'B'. 90 >= 70 is already true, so the else if is never checked.
// 2b: check the strictest rule first. 85 -> A, 70 -> B, 69 -> C
const score = 90;
if (score >= 85) {
  console.log('A');                       // A
} else if (score >= 70) {
  console.log('B');
} else {
  console.log('C');
}

// Mini Challenge 3 · switch: Mesin Parkir Mal (Budi, motor)
// 3a: 2 lines: 'Rp2000' then 'Rp5000'. No break after 'motor', so it falls into 'mobil'.
// 3b: with break, 'Motor' prints 'Kendaraan tidak dikenal' (switch uses ===, 'Motor' !== 'motor')
const vehicle = 'motor';
switch (vehicle) {
  case 'motor':
    console.log('Rp2000');                // Rp2000
    break;
  case 'mobil':
    console.log('Rp5000');
    break;
  default:
    console.log('Kendaraan tidak dikenal');
}

// Mini Challenge 4 · for: Gudang KebunSegar (Dimas)
// 4a: 4 batches. batch = 1, 2, 3, 4 run; batch = 5 stops because 5 < 5 is false.
// 4b: 22 boxes. boxes = 10, 7, 4, 1 -> 10 + 7 + 4 + 1. Then boxes = -2, -2 >= 1 is false.
// 4c: start at 2, add 2 each lap
for (let shelf = 2; shelf <= 10; shelf += 2) {
  console.log(shelf);                     // 2 4 6 8 10
}

// Mini Challenge 5 · while: Baterai HP & Countdown (Nadia)
// 5a: 5 5. Battery 80 -> 65 -> 50 -> 35 -> 20 -> 5. At 20, 20 >= 20 is still true,
//     so one more game runs. At 5 the condition is false. Only 5% left for the alarm!
// 5b: countdown -= 1 inside the loop
let countdown = 3;
while (countdown > 0) {
  console.log(countdown);                 // 3 2 1
  countdown -= 1;
}
