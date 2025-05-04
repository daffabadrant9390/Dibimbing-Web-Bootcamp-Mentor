const nilai = [85, 95.2, 67.75, 78, 75];
let total = 0;

for (let i = 0; i < nilai.length; i++) {
  total += nilai[i];
}

const rataRata = total / nilai.length;
let grade = "";

if (rataRata >= 90) {
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

console.log(`Rata-rata nilai: ${rataRata.toFixed(2)}`);
console.log(`Grade akhir: ${grade}`);
