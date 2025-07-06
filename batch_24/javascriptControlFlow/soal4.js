/**
 * Hitung penjualan selama 12 bulan
 * - Terdapat array pendapatan dan pengeluaran
 * - Tentukan pendapatan bersih dari toko setiap bulannya (check yang mengalami kerugian)
 *  - Setiap bulan ganjil, ada tambahan pendapatan dari parkir sebesar 10% dari total pendapatan
 *  - Setiap bulan genap, ada tambahan pendapatan dari parkir sebesar 5% dari total pendapatan
 *
 * Hitung
 * - Total pendapatan bersih setiap bulan
 */

const arrayPenjualan = [2000000, 5000000, 10000000, 7500000, 4750000, 1025050];
const arrayPengeluaran = [1800000, 2000750, 4550000, 4750000, 5000000, 5150000];

for(let i = 0; i < arrayPenjualan.length; i++) {
  const pendapatanBulanan = arrayPenjualan[i];
  const pengeluaranBulanan = arrayPengeluaran[i];
  const pendapatanBersih = pendapatanBulanan - pengeluaranBulanan;

  let tambahanPendapatan = 0;
  if((i + 1) % 2 === 0) {
    // Bulan genap
    tambahanPendapatan = pendapatanBulanan * 0.05; // 5% dari pendapatan
  }
  else {
    // Bulan ganjil
    tambahanPendapatan = pendapatanBulanan * 0.1; // 10% dari pendapatan
  }
  const totalPendapatanBersih = pendapatanBersih + tambahanPendapatan;
  console.log(`Bulan ${i + 1}: Pendapatan Bersih = ${totalPendapatanBersih}, Tambahan Pendapatan = ${tambahanPendapatan}`);
  if(totalPendapatanBersih < 0) {
    console.log(`Bulan ${i + 1}: Toko mengalami kerugian sebesar ${Math.abs(totalPendapatanBersih)}`);
  }
  else {
    console.log(`Bulan ${i + 1}: Toko mendapatkan keuntungan sebesar ${totalPendapatanBersih}`);
  }
}
