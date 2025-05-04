const semester1 = 85;
const semester2 = 95.20;
const semester3 = 67.75;
const semester4 = 78;
const semester5 = 75;

const totalNilai = semester1 + semester2 + semester3 + semester4 + semester5;
const rataRata = totalNilai / 5;

let grade;

if (rataRata >= 90) {
  grade = 'A';
} else if (rataRata >= 80) {
  grade = 'B';
} else if (rataRata >= 75) {
  grade = 'C';
} else if (rataRata >= 60) {
  grade = 'D';
} else {
  grade = 'E';
}

console.log("Rata-rata nilai: " + rataRata);
console.log("Grade akhir: " + grade);
