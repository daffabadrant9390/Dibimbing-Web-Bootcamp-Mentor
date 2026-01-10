//ASSIGNMENT  DAY 4

/*AUTHOR : Ista Cahya Khoeriyyah
  DUEDATE   : 18 Oktober 2025

/*soal_2 Menghitung Nilai Rata-rata dan Grade
 * - Diketahui nilai siswa (Gabriel)untuk 5 semester: 85, 95.20, 67.75, 78, 75.
 * - Hitung rata-rata nilai.
 * Tentukan grade akhir berdasarkan kriteria berikut:
   *  A: 90–100
   *  B: 80–89.99
   *  C: 75–79.99
   *  D: 60–74.99
   *  E: < 60
 * Cetak nilai rata-rata dan grade akhir siswa.Cetak nilai rata-rata dan grade akhir siswa.
 * Note: Gunakan array untuk menyimpan seluruh nilai dari 5 semester kedalam 1 variabel
 */

//VARIABLE
let nilai = [85, 95.2, 67.75, 78, 75];
let total = 0;
let rataRata = 0;
let grade = "";

//proses
for (let i = 0; i < nilai.length; i++) {
  total += nilai[i];
}
rataRata = total / nilai.length;

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

//output
console.log(`Nilai rata-rata: ${rataRata.toFixed(2)}`);
console.log(`Grade akhir: ${grade}`);
console.log(`Total nilai: ${total}`);
console.log(`nilai 5 semester: ${nilai}`);
