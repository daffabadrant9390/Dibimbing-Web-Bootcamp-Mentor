let total = 85 + 95.20 + 67.75 + 78 + 75; 
let rataRata = total / 5;

console.log(`Rata-rata nilai: ${rataRata.toFixed(2)}`);

let grade;
if (rataRata >= 90 && rataRata <= 100) {
    grade = 'A';
} else if (rataRata >= 80 && rataRata < 90) {
    grade = 'B';
} else if (rataRata >= 75 && rataRata < 80) {
    grade = 'C';
} else if (rataRata >= 60 && rataRata < 75) {
    grade = 'D';
} else {
    grade = 'E';
}

console.log(`Grade: ${grade}`);
