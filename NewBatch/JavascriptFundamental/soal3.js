/**
 * System Grading Nilai Mahasiswa selama 1 semester
 * - kalkulus -> 3.45
 * - alpro (algoritma pemrograman) -> 3.575
 * - jaringan -> 2.30
 * - artificial intelligence -> 3.75
 * - komunikasi data -> 2.75
 * - Design Arsitektur -> 3.90
 *
 * Hitunglah total dari seluruh nilai pada masing-masing mata kuliah, lalu hitung rata-rata nya.
 * - Tentukan apakah siswa bisa lulus atau tidak ke semester selanjutnya
 *  1. Hanya ketika tidak ada satu pun mata kuliah yang < 2.75 DAN
 *  2. Mendapatkan rata rata nilai > 2.80
 * [NOTE]: walaupun rata rata nilai > 2.80 tapi terdapat nilai < 2.75 maka tetap tidak lulus
 */

// Mata Kuliah
const kalkulus = 3.45;
const alpro = 3.575;
const jaringan = 2.8;
const artificialIntelligence = 3.75;
let totalNilai = 0;
let rataRataNilai = 0;

//? Menghitung total dari seluruh mata kuliah
totalNilai = kalkulus + alpro + jaringan + artificialIntelligence;
console.log('Total nilai siswa adalah : ', totalNilai);

//? Menghitung rata-rata nilai dari seluruh mata kuliah
rataRataNilai = totalNilai / 4;
console.log('Rata rata nilai siswa adalah : ', rataRataNilai);

//* Menentukan kelulusan siswa tersebut
const isAdaMataKuliahDibawahStandard =
  kalkulus < 2.75 ||
  alpro < 2.75 ||
  jaringan < 2.75 ||
  artificialIntelligence < 2.75;
const isRataRataNilaiDibawahStandard = rataRataNilai < 2.8;
// NOTE: Penggunaan ! berarti bahwa isLulus hanya bernilai true jika isAdaMataKuliahDibawahStandard = false;
const isLulus =
  !isAdaMataKuliahDibawahStandard && !isRataRataNilaiDibawahStandard;
console.log('Apakah siswa lulus semester: ', isLulus);
