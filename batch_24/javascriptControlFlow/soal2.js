/**
 * 2. Movie Ticket Pricing
 * - Senin -> 100.000
 * - Selasa -> tutup
 * - Rabu -> 100.000
 * - kamis -> 100.000
 * - jumat -> 150.000
 * - sabtu -> 150.000
 * - minggu -> 175.000
 * - Diluar 7 hari -> Invalid Day
 *
 * Add Ons Pricing
 * - pop-corn -> 50.000
 * - minuman -> 45.000
 */

const inputHari = 'SENIN';
const totalTiket = 3;
const addOns = 'pop-corn';
const uangDiDompet = 200000;

const formattedInputHari = inputHari.toLowerCase();
let totalHarga = 0;

switch (formattedInputHari) {
  case 'senin':
  case 'rabu':
  case 'kamis':
    totalHarga += 100000 * totalTiket; // Harga ticket nonton / orang
    //* Case dengan add-ons
    if (!!addOns) {
      if (addOns.toLowerCase() === 'pop-corn') {
        totalHarga += 50000; // Harga pop-corn
      } else {
        totalHarga += 45000; // Harga minuman
      }
    }
    break;
  case 'jumat':
  case 'sabtu':
    totalHarga += 150000 * totalTiket; // Harga ticket nonton
    //* Case dengan add-ons
    if (!!addOns) {
      if (addOns.toLowerCase() === 'pop-corn') {
        totalHarga += 50000; // Harga pop-corn
      } else {
        totalHarga += 45000; // Harga minuman
      }
    }
    break;
  case 'minggu':
    totalHarga += 175000 * totalTiket; // Harga ticket nonton
    //* Case dengan add-ons
    if (!!addOns) {
      if (addOns.toLowerCase() === 'pop-corn') {
        totalHarga += 50000; // Harga pop-corn
      } else {
        totalHarga += 45000; // Harga minuman
      }
    }
    break;
  case 'selasa':
    totalHarga = 0;
    console.log('Maaf cinema tutup hari ini!');
    break;
  default:
    console.log('Invalid Day!');
}

const sisaUangAkhir = uangDiDompet - totalHarga;
//* Check jika uang cukup
if (sisaUangAkhir >= 0) {
  console.log('Uang cukup, lanjutkan pembayaran!');
} else {
  console.error('Maaf uang tidak cukup, check ulang total pembelian!');
}

console.log(
  'Total Harga Harus Dibayar: ',
  totalHarga,
  '\nSisa uang didompet: ',
  sisaUangAkhir
);
