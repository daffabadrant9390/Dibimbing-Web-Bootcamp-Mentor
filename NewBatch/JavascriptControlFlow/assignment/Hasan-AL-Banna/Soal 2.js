/*
Soal 2: Menghitung Nilai Rata-rata dan Grade
Diketahui nilai siswa (Gabriel) untuk 5 semester: 85, 95.20, 67.75, 78, 75.
Hitung rata-rata nilai.
Tentukan grade akhir berdasarkan kriteria berikut:
A: 90–100
B: 80–89.99
C: 75–79.99
D: 60–74.99
E: < 60
Cetak nilai rata-rata dan grade akhir siswa.
*/

const nilai = [85, 95.2, 67.75, 78, 75];

let totalNilai = 0;
for (let i = 0; i < nilai.length; i++) {
  totalNilai += nilai[i];
}

console.log(totalNilai);
const avg = totalNilai / nilai.length;
console.log(avg);
let grade = '';

// if (avg > 90 && avg < 100) {
//     grade = "A"
// } else if (avg > 80 && avg < 89.99) {
//     grade = "B"
// } else if (avg > 75 && avg < 79.99) {
//     grade = "C"
// }
// console.log(grade)

// atau menggunakan switch case
switch (true) {
  case avg >= 90 && avg <= 100:
    grade = 'A';
    break;
  case avg >= 80 && avg < 90:
    grade = 'B';
    break;
  case avg >= 75 && avg < 80:
    grade = 'C';
    break;
  case avg >= 60 && avg < 75:
    grade = 'D';
    break;
  case avg < 60:
    grade = 'E';
    break;
  default:
    grade = 'Nilai tidak valid';
}
console.log('Grade Akhir:', grade);
