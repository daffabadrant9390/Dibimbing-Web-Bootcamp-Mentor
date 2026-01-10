/**
 * Diketahui nilai siswa (Gabriel) untuk 5 semester: 85, 95.20, 67.75, 78, 75.
 * Hitung rata-rata nilai.
 * Tentukan grade akhir berdasarkan kriteria berikut:
 * A: 90–100
 * B: 80–89.99
 * C: 75–79.99
 * D: 60–74.99
 * E: < 60
 */

const namaSiswa = "Gabriel";
const nilaiSemester1 = 85;
const nilaiSemester2 = 95.20;
const nilaiSemester3 = 67.75;
const nilaiSemester4 = 78;
const nilaiSemester5 = 75;

const rataRataNilai = (nilaiSemester1 + nilaiSemester2 + nilaiSemester3 + nilaiSemester4 + nilaiSemester5) / 5;

let gradeAkhir;
if (rataRataNilai >= 90 && rataRataNilai <= 100) {
    gradeAkhir = 'A';
} else if (rataRataNilai >= 80 && rataRataNilai < 90) {
    gradeAkhir = 'B';
} else if (rataRataNilai >= 75 && rataRataNilai < 80) {
    gradeAkhir = 'C';
} else if (rataRataNilai >= 60 && rataRataNilai < 75) {
    gradeAkhir = 'D';
} else {
    gradeAkhir = 'E';
}

console.log(`Nama Siswa: ${namaSiswa}`);
console.log(`Rata-rata Nilai: ${rataRataNilai}`);
console.log(`Grade Akhir: ${gradeAkhir}`);
console.log('-------------------'); 