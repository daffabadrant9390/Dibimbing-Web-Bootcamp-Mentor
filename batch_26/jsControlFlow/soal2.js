/**
 * Menghitung rata-rata dari array nilai students
 * - Menentukan grade siswa dari rata-rata nilai
 * - Grade:
 *   - A: 90-100
 *   - B: 80-89
 *   - C: 70-79
 *   - D: 60-69
 *   - E: 0-59
 *
 * - Print rata-rata dan grade siswa
 * - Jika rata-rata < 60, maka siswa tidak lulus
 */

const arrayNilaiSiswa = [ 90, 85, 75, 77.5, 92.5, 100 ];

let totalNilaiSiswa = 0;

// While looping untuk menghitung total nilai siswa
let i = 0;
while(i < arrayNilaiSiswa.length) {
  totalNilaiSiswa += arrayNilaiSiswa[i]; // totalNilaiSiswa = totalNilaiSiswa + arrayNilaiSiswa[i];
  i++;
}

// Hitung rata-rata nilai siswa
const rataRataNilaiSiswa = totalNilaiSiswa / arrayNilaiSiswa.length;
console.log(`Rata-rata nilai siswa: ${rataRataNilaiSiswa}`);

// Menentukan grade siswa dari rata-rata nilai
let gradeSiswa = "";
if(rataRataNilaiSiswa >= 90 && rataRataNilaiSiswa <= 100) {
  gradeSiswa = "A";
} else if(rataRataNilaiSiswa >= 80) {
  gradeSiswa = "B";
} else if(rataRataNilaiSiswa >= 70) {
  gradeSiswa = "C";
} else if(rataRataNilaiSiswa >= 60) {
  gradeSiswa = "D";
} else {
  gradeSiswa = "E";
}

console.log(`Grade siswa: ${gradeSiswa}`);