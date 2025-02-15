//nama siswa dan nilai semester
const namaSiswa = 'Gabriel';
const nilaiSemester1 = 85;
const nilaiSemester2 = 95.20;
const nilaiSemester3 = 67.75;
const nilaiSemester4 = 78;
const nilaiSemester5 = 75;

//menghitung nilai rata rata
const nilaiRataRata = (nilaiSemester1 + nilaiSemester2 + nilaiSemester3 + nilaiSemester4 + nilaiSemester5) / 5;

//menentukan grade
let grade;

if (nilaiRataRata >= 90 && nilaiRataRata <= 100) {
    grade = "A";
} else if (nilaiRataRata >= 80 && nilaiRataRata < 90) {
    grade = "B";
} else if (nilaiRataRata >= 75 && nilaiRataRata < 80) {
    grade = "C";
} else if (nilaiRataRata >= 60 && nilaiRataRata < 75) {
    grade = "D";
} else {
    grade = "E";
}

console.log(`Nilai Rata-Rata Gabriel: ${nilaiRataRata.toFixed(2)}`);
console.log(`Grade Gabriel ${grade}`);