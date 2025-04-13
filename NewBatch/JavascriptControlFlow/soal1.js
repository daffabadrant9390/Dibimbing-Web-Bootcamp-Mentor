/**
 * Grading seorang karyawan untuk promosi berdasarkan nilai selama satu tahun (4 kuartal)
 * - Kuartal 1 2025 -> 3.45
 * - Kuartal 2 2025 -> 3.575
 * - Kuartal 3 2025 -> 2.30
 * - Kuartal 4 2025 -> 3.75
 *
 * - Kuartal 1 2024 -> 3.45
 * - Kuartal 2 2024 -> 3.575
 * - Kuartal 3 2024 -> 2.30
 * - Kuartal 4 2024 -> 3.75
 *
 * Buatlah grading karyawan tersebut untuk 2025, dimana rules sebagai berikut
 * - A -> 3.45 - 4.00
 * - B+ -> 3.00 - 3.45
 * - B -> 2.80 - 3.00
 * - C -> < 2.80
 * - D (SP) -> < 2.00
 *
 * Seorang karyawan hanya bisa promosi jika
 * - Total masa waktu kerja minimal 2 tahun (8 kuartal) / 24 bulan dengan rata-rata nilai minimal B. "ATAU"
 * - Total masa waktu kerja 1 tahun (4 kuartal pada 2025) dengan rata-rata nilai minimal A
 *
 * Buatlah kondisi untuk menentukan apakah karyawan tersebut dapat mendapatkan promosi atau tidak (Gunakan If Else)
 */

//NOTE: Masing masing element pada array merepresentasikan nilai pada setiap kuartalnya
const arrayNilaiSelamaBekerja = [3.45, 1.75, 2.3, 1.75, 3.45, 1.75, 2.75, 3.9];

//* Hitung total nilai selama bekerja dan rata-rata nya
let totalNilaiSelamaBekerja = 0;
let rataRataNilaiSelamaBekerja = 0;

//* Menghitung rata-rata kerja di kantor
for (let i = 0; i < arrayNilaiSelamaBekerja.length; i++) {
  totalNilaiSelamaBekerja += arrayNilaiSelamaBekerja[i];
}
rataRataNilaiSelamaBekerja =
  totalNilaiSelamaBekerja / arrayNilaiSelamaBekerja.length;

//* 2. Menghitung Grade Karyawan
let gradeKaryawan = '';
if (rataRataNilaiSelamaBekerja >= 3.45 && rataRataNilaiSelamaBekerja <= 4.0) {
  gradeKaryawan = 'A';
} else if (rataRataNilaiSelamaBekerja >= 3.0) {
  gradeKaryawan = 'B+';
} else if (rataRataNilaiSelamaBekerja >= 2.8) {
  gradeKaryawan = 'B';
} else if (
  rataRataNilaiSelamaBekerja < 2.8 &&
  rataRataNilaiSelamaBekerja >= 2.0
) {
  gradeKaryawan = 'C';
} else {
  gradeKaryawan = 'D';
}

//* 3. Check apakah karyawan mendapat promosi
const masaKerjaKaryawan = arrayNilaiSelamaBekerja.length;

const isKaryawanDapatPromosi =
  (gradeKaryawan === 'A' && masaKerjaKaryawan >= 4) ||
  ((gradeKaryawan === 'B' || gradeKaryawan === 'B+' || gradeKaryawan === 'A') &&
    masaKerjaKaryawan >= 8);

console.log(`Grade Karyawan => ${gradeKaryawan}`);
console.log(`Masa kerja karyawan => ${masaKerjaKaryawan} bulan`);
console.log(`Karyawan dapat promosi? => ${isKaryawanDapatPromosi}`);
