const nilaiGabriel = [85, 95.2, 67.75, 78, 75];
let total = 0;
let grade;
// Menentukan nilai rata-rata
for (i = 0; i < nilaiGabriel.length; i++) {
  total += nilaiGabriel[i];
}
const nilaiRataRata = total / nilaiGabriel.length;

// Menentukan grade
if (nilaiRataRata >= 90 && nilaiRataRata <= 100) {
  grade = "A";
} else if (nilaiRataRata >= 80 && nilaiRataRata <= 89.99) {
  grade = "B";
} else if (nilaiRataRata >= 70 && nilaiRataRata <= 79.99) {
  grade = "C";
} else if (nilaiRataRata >= 60 && nilaiRataRata <= 69.99) {
  grade = "D";
} else {
  grade = "E";
}

console.log(`Nilai rata-rata: ${nilaiRataRata}`);
console.log(`Grade: ${grade}`);
