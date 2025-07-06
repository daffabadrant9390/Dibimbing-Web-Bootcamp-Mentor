/**
 * 1. Checking Shop Opening Hours (Basic mode without looping)
 * Kondisi :
 *  - Coffee shop hanya buka 3 hari dalam seminggu dengan kondisi berikut
 *  - SENIN
 *    - Jam buka 10.00 - 22.00
 *    - Jam tutup 22.01 - 9.59
 *  - RABU
 *    - Jam buka 10.30 - 22.00
 *    - Jam tutup 23.01 - 10.29
 *  - SABTU
 *    - Jam buka 12.00 - 23.00
 *    - Jam tutup 23.01 - 11.59
 */

const waktuVisit = '12:31';
const hariVisit = 'SENIN';

const lowerCaseHariVisit = hariVisit.toLowerCase();
const isTokoBuka =
  lowerCaseHariVisit === 'senin' ||
  lowerCaseHariVisit === 'rabu' ||
  lowerCaseHariVisit === 'sabtu';

if (isTokoBuka) {
  //* Jika toko buka, hitung waktu visit pengunjung
  const formattedWaktuVisit = waktuVisit.split(':');
  const jamVisit = parseInt(formattedWaktuVisit[0]);
  const menitVisit = parseInt(formattedWaktuVisit[1]);

  // Convert menjadi menit visit
  const totalMenitVisit = jamVisit * 60 + menitVisit;
  console.log(totalMenitVisit);

  //* Berikan kondisi untuk menghitung waktu buka dan tutup toko per masing-masing hari nya
  if (hariVisit.toLowerCase() === 'senin') {
    // Jam Menit Buka dan tutup
    const totalMenitTokoBuka = 10 * 60 + 0; // 10.00
    const totalMenitTokoTutup = 22 * 60 + 1; // 22.01

    if (
      totalMenitVisit >= totalMenitTokoBuka &&
      totalMenitVisit <= totalMenitTokoTutup
    ) {
      console.log('Coffee Shop Buka, Silahkan masuk!');
    } else {
      console.log('Maaf Coffee Shop Sudah Tutup!');
    }
  } else if (hariVisit.toLowerCase() === 'rabu') {
    // Jam Menit Buka dan tutup
    const totalMenitTokoBuka = 10 * 60 + 30; // 10.00
    const totalMenitTokoTutup = 22 * 60 + 1; // 22.01

    if (
      totalMenitVisit >= totalMenitTokoBuka &&
      totalMenitVisit <= totalMenitTokoTutup
    ) {
      console.log('Coffee Shop Buka, Silahkan masuk!');
    } else {
      console.log('Maaf Coffee Shop Sudah Tutup!');
    }
  } else {
    // Jam Menit Buka dan tutup
    const totalMenitTokoBuka = 12 * 60 + 30; // 12.00
    const totalMenitTokoTutup = 23 * 60 + 1; // 24.01

    if (
      totalMenitVisit >= totalMenitTokoBuka &&
      totalMenitVisit <= totalMenitTokoTutup
    ) {
      console.log('Coffee Shop Buka, Silahkan masuk!');
    } else {
      console.log('Maaf Coffee Shop Sudah Tutup!');
    }
  }
} else {
  console.log('Maaf, Coffee Shop hanya buka hari Senin, Rabu, dan Sabtu! :)');
}
