const nilaiGabriel = [85, 95.2, 67.75, 78, 75];
let totalNilai = 0;
let grade = "";

for (const n of nilaiGabriel) {
  totalNilai += n;
}

const rataRataNilaiGabriel = totalNilai / nilaiGabriel.length;

if (rataRataNilaiGabriel >= 90 && rataRataNilaiGabriel <= 100) {
  grade = "A";
} else if (rataRataNilaiGabriel >= 80 && rataRataNilaiGabriel <= 89.99) {
  grade = "B";
} else if (rataRataNilaiGabriel >= 75 && rataRataNilaiGabriel <= 79.99) {
  grade = "C";
} else if (rataRataNilaiGabriel >= 60 && rataRataNilaiGabriel <= 74.99) {
  grade = "D";
} else if (rataRataNilaiGabriel < 60) {
  grade = "E";
} else {
  grade = "Nilai tidak valid";
}

console.log(
  `Nilai rata-rata dari Gabriel adalah ${rataRataNilaiGabriel} dan mendapatkan Grade ${grade}`
);
