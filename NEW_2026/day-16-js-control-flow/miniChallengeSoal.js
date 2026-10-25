// Day 16 · Mini Challenge: 5 short story challenges in one file

// Cheat sheet:
//   if / else if / else -> checked from the top, the FIRST true wins, the rest is skipped
//   switch              -> compares with ===, break leaves the switch, default = nothing matched
//   for                 -> start ; condition (checked BEFORE each lap) ; update (AFTER each lap)
//   while               -> repeats WHILE the condition is true, something inside MUST change

// =====================================================
//* Mini Challenge 1 · if / else: Nonton di Bioskop
// Story: Raka just turned 12 today and wants to celebrate by watching a 12+ film.
// The cinema rule says "usia 12 tahun ke atas boleh masuk". The ticket app checks his age...
// but Raka gets rejected at the counter! Is the app wrong, or is the rule wrong?
// =====================================================
const age = 12;
if (age >= 12) {
  console.log('Boleh nonton');
} else {
  console.log('Belum boleh');
}
// TODO 1a: guess the output              my guess:
// TODO 1b: the rule says "from 17". Fix ONE character in the condition so Raka can watch.

// =====================================================
//* Mini Challenge 2 · else if: Nilai Kuis Bootcamp
// Story: Sinta scored 90 on the bootcamp quiz, the highest in class. The rule:
// 85+ gets A, 70+ gets B, the rest gets C. But her report card says B! She asks the mentor
// to check the grading code. The conditions are all there... so what went wrong?
// =====================================================
const score = 90;
if (score >= 70) {
  console.log('B');
} else if (score >= 85) {
  console.log('A');
} else {
  console.log('C');
}
// TODO 2a: guess the output for score 90  my guess:
// TODO 2b: swap the conditions so 90 gets 'A'. Then guess 85, 70 and 69:
//          85 -> my guess:    70 -> my guess:    69 -> my guess:

// =====================================================
//* Mini Challenge 3 · switch: Mesin Parkir Mal
// Story: Budi parks his motorbike at the mall. Parking costs Rp2000 for a motorbike and
// Rp5000 for a car. When he leaves, the machine shows TWO prices on the screen.
// Budi is confused: "Saya kan cuma bawa motor?" Find the bug in the machine.
// =====================================================
const vehicle = 'motor';
switch (vehicle) {
  case 'motor':
    console.log('Rp2000');
  case 'mobil':
    console.log('Rp5000');
    break;
  default:
    console.log('Kendaraan tidak dikenal');
}
// TODO 3a: guess what prints (how many lines?)   my guess:
// TODO 3b: add the missing break. What prints for 'Motor' (capital M)?   my guess:

// =====================================================
//* Mini Challenge 4 · for: Gudang KebunSegar
// Story: Dimas is a new staff member at the KebunSegar warehouse. His supervisor gives him 3 tasks.
// =====================================================
// 4a. "Kerjain sortir sayur per batch, mulai batch 1, berhenti sebelum batch 5."
//     How many batches does Dimas sort?
let batches = 0;
for (let batch = 1; batch < 5; batch += 1) {
  batches += 1;
}
console.log(batches);          // TODO 4a: my guess:

// 4b. "Hari ini kirim 10 kardus, terus tiap pengiriman berikutnya kurang 3 kardus,
//     sampai nggak ada kardus lagi." How many boxes are sent in total?
let totalBoxes = 0;
for (let boxes = 10; boxes >= 1; boxes -= 3) {
  totalBoxes += boxes;
}
console.log(totalBoxes);       // TODO 4b: my guess (write each value of boxes first):

// 4c. "Rak dengan nomor genap (2 sampai 10) khusus buat buah. Print nomor raknya ya."
// TODO 4c: write a for that prints only the EVEN shelf numbers from 2 to 10 (2 4 6 8 10)

// =====================================================
// Mini Challenge 5 · while: Baterai HP & Countdown
// Story: Nadia plays her favourite game before sleeping. Her battery is 80% and every game
// uses 15%. Her rule: "Aku main terus selama baterai masih 20% atau lebih."
// How many games does she play, and how much battery is left for her alarm tomorrow?
// =====================================================
let battery = 80;
let games = 0;
while (battery >= 20) {
  battery -= 15;
  games += 1;
}
console.log(games, battery);   // TODO 5a: my guess:

// TODO 5b: Nadia sets a 3-second countdown before the next level starts, but the countdown
// never stops. Add ONE line inside so it prints 3, 2, 1 and stops.
// (Uncomment it only AFTER the fix. If it hangs, press Ctrl + C.)
// let countdown = 3;
// while (countdown > 0) {
//   console.log(countdown);
// }
