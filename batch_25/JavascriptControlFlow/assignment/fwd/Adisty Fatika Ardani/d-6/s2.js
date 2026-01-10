const nilaiSiswa = [85, 95.20, 67.75, 78, 75];

let totalNilai = 0;

for (let i = 0; i < nilaiSiswa.length; i++) {
    totalNilai += nilaiSiswa[i];
}

const rataRata = totalNilai / nilaiSiswa.length;

let gradeAkhir;

if (rataRata >= 90 && rataRata <= 100) {
    gradeAkhir = "A";
} else if (rataRata >= 80 && rataRata < 90) {
    gradeAkhir = "B";
} else if (rataRata >= 75 && rataRata < 80) {
    gradeAkhir = "C";
} else if (rataRata >= 60 && rataRata < 75) {
    gradeAkhir = "D";
} else if (rataRata < 60) {
    gradeAkhir = "E";
}

console.log("=== Rekapitulasi Nilai Siswa ===");
console.log(`Nama Siswa: Gabriel`);
console.log(`Nilai per Semester: ${nilaiSiswa.join(", ")}`);
console.log(`Rata-rata Nilai: ${rataRata.toFixed(2)}`);
console.log(`Grade Akhir: ${gradeAkhir}`);
console.log("================================");