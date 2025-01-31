/**
 * - Menginisialisasi value dari rangeAngka dari 1-5;
 * - Menginisialisasi value dari rangePangkat dari pangkat 1-3
 */
const rangeAngka = 5;
const rangePangkat = 3;

console.log('=== Program Looping dimulai ===');
// (Outer Loop, melooping rangeAngka)
for (let i = 1; i <= rangeAngka; i++) {
  // (Inner Loop, melooping rangePangkat untuk setiap rangeAngka)
  for (let j = 1; j <= rangePangkat; j++) {
    const hasilPangkat = i ** j;
    console.log(`Hasil dari ${i} pangkat ${j} = ${hasilPangkat}`);
  }
  console.log('================');
}
console.log('=== Program Looping Selesai ===');
