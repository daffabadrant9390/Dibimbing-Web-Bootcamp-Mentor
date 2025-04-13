/**
 * Menentukan Kelulusan Seorang Siswa
 * Seorang siswa hanya dianggap lulus jika :
 * 1. Nilai seluruh mata pelajarannya tidak ada yang 0 (lebih dari 0). DAN
 * 2. Rata-rata dari seluruh mata pelajarannya lebih dari 80. DAN
 * 3. Nama siswa tidak kosong (null / undefined) DAN
 * 4. NIP siswa tidak kosong (null / undefined)
 *
 * Menggunakan kombinasi arithmetic, logical dan boolean comparison, buat lah syntax code untuk
 * rules tersebut.
 */

const namaSiswa = 'Yanto';
const nipSiswa = '123456789';

// Mata Pelajaran
const mapelBiologi = 40;
const mapelKimia = 87.5;
let rataRataNilai = 0;

//! Check apakah ada nilai kosong pada mapel
const isAdaMataKuliahKosong = mapelBiologi === 0 || mapelKimia === 0;
console.log('Apakah ada mata kuliah yang kosong? ', isAdaMataKuliahKosong);

//? Menghitung rata-rata nilai
rataRataNilai = (mapelBiologi + mapelKimia) / 2;
console.log('Rata-rata nilai: ', rataRataNilai);

//* Menentukan kelulusan siswa
const isSiswaLulus =
  !isAdaMataKuliahKosong &&
  rataRataNilai > 80 &&
  namaSiswa !== null &&
  nipSiswa !== null;
console.log(
  `Apakah siswa dengan nama ${namaSiswa} dan nip ${nipSiswa} lulus: ${isSiswaLulus}`
);
