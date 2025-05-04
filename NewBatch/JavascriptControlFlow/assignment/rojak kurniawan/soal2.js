const semester1 = 85;
const semester2 = 95.2;
const semester3 = 67.75;
const semester4 = 78;
const semester5 = 75;

let gradeNilai = "";
const totalNilai = semester1 + semester2 + semester3 + semester4 + semester5;
const rataRataNilai = totalNilai / 5;
console.log("Rata-rata Nilai", rataRataNilai);

if (rataRataNilai >= 90 && rataRataNilai <= 100) {
  gradeNilai = "A";
} else if (rataRataNilai >= 80 && rataRataNilai < 90) {
  gradeNilai = "B";
} else if (rataRataNilai >= 75 && rataRataNilai < 80) {
  gradeNilai = "C";
} else if (rataRataNilai >= 60 && rataRataNilai < 75) {
  gradeNilai = "D";
} else {
  gradeNilai = "E";
}

console.log("Grade Nilai", gradeNilai);
