/**
 * hitung rata rata nilai array
 * 
 * tentukan grade:
 *  A = 90 hingga 100
 *  B = 80 hingga 89
 *  C = 75 hingga 79
 *  D = 60 hingga 74
 *  E = kurang dari 60
 * 
 *  print nilai rata-rata dan grade akhir siswa
 */

const siswa = "Gabriel";
const semester = 5;
const nilaiSiswa = [85, 95.20, 67.75, 78, 75];

let rataRataNilai = 0;
let grade = '';

for (let a = 0; a < semester; a++) {
    rataRataNilai += nilaiSiswa[a];
}

rataRataNilai /= semester;

if (rataRataNilai >= 90 && rataRataNilai <= 100) {
    grade = 'A';
}else if (rataRataNilai >= 80) {
    grade = 'B';
}else if (rataRataNilai >= 75) {
    grade = 'C';
}else if (rataRataNilai >= 60) {
    grade = 'D';
}else {
    grade = 'E';
}

console.log(`nilai rata-rata ${siswa} adalah ${rataRataNilai} dengan Grade ${grade}`);