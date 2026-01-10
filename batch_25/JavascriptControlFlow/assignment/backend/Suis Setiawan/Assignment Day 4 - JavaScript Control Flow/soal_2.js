/* Soal 2: Menghitung Nilai Rata-rata dan Grade
Diketahui nilai siswa (Gabriel) untuk 5 semester: 85, 95.20, 67.75, 78, 75.
Hitung rata-rata nilai.
Tentukan grade akhir berdasarkan kriteria berikut:
    A: 90–100
    B: 80–89.99
    C: 75–79.99
    D: 60–74.99
    E: < 60
Cetak nilai rata-rata dan grade akhir siswa.
Note: Gunakan array untuk menyimpan seluruh nilai dari 5 semester kedalam 1 variabel
*/

const nilaiSiswa = [85, 95.2, 67.75, 78, 75];
let totalNilai = 0;
let grade = "";

for (let i = 0; i < nilaiSiswa.length; i++) {
  totalNilai += nilaiSiswa[i];
}

const rataRata = totalNilai / nilaiSiswa.length;

if (rataRata >= 90 && rataRata <= 100) {
  grade = "A";
} else if (rataRata >= 80) {
  grade = "B";
} else if (rataRata >= 75) {
  grade = "C";
} else if (rataRata >= 60) {
  grade = "D";
} else {
  grade = "E";
}

console.log(`Nilai rata-rata siswa (Gabriel): ${rataRata}`);
console.log(`Grade akhir: ${grade}`);
