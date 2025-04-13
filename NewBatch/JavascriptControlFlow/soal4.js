/**
 * Looping pada array
 * - Terdapat sebuah array yang berisikan element sebanyak 6 yang merpresentasikan hasil penjualan
 * selama 6 bulan terakhir. Hitunglah total dari seluruh hasil penjualan tersebut dengan aturan sebagai berikut.
 *  1. setiap bulan, pendapatan kotor akan dikurangi dengan 10% untuk gaji karyawan
 *  2. setiap 3 bulan sekali, pendapatan kotor akan dikurangi dengan 10% gaji karyawan dan 10% biaya maintenance
 * (lampu, listrik, air, AC dsb).
 *
 * Hitunglah total pendapatan bersih dan rata-ratanya selama 6 bulan terakhir.
 *
 */
const hasilPenjualanToko = [
  25000000, 37500000, 50000000, 75000000, 100000000, 45750000,
];
let totalPendapatanBersih = 0;

for (let i = 0; i < hasilPenjualanToko.length; i++) {
  let biayaMaintenance = 0;
  let gajiKaryawan = hasilPenjualanToko[i] * 0.1;

  // Jika index merupakan kelipatan 3, maka kurangi pendapatan bulanan dengan biaya maintenance juga
  if (i % 3 === 0) {
    biayaMaintenance = hasilPenjualanToko[i] * 0.1;
  }

  //* Setelah mendapatkan gaji karyawan dan biaya maintenance, hitung pendapatan bersih dengan menguranginya dengan kedua harga tsb
  const pendapatanBersihBulanIni =
    hasilPenjualanToko[i] - gajiKaryawan - biayaMaintenance;
  totalPendapatanBersih += pendapatanBersihBulanIni;
}

console.log(
  `Pendapatan bersih toko selama 6 bulan adalah : Rp. ${totalPendapatanBersih}`
);
