// Variabel
const nama = "Gabriel";
const nilaiSem = [85, 95.2, 67.75, 78, 75];

// Nilai rata-rata
let totalNilai = 0;
for (let i = 0; i < nilaiSem.length; i++) {
  totalNilai += nilaiSem[i];
}

let rataRata = totalNilai / nilaiSem.length;

// Grade siswa
let gradeNilai = "";
if (rataRata >= 90 && rataRata <= 100) {
  gradeNilai = "A";
} else if (rataRata >= 80) {
  gradeNilai = "B";
} else if (rataRata >= 70) {
  gradeNilai = "C";
} else if (rataRata >= 60) {
  gradeNilai = "D";
} else {
  gradeNilai = "E";
}

// Hasil output
console.log(
  `Siswa bernama ${nama} memiliki nilai ${gradeNilai} dengan rata-rata ${rataRata}`
);
