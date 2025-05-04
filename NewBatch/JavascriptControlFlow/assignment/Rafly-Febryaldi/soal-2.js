// Nilai Gabriel untuk 5 semester
const nilaiGabriel = [85, 95.20, 67.75, 78, 75];

// Hitung total
let total = 0;
for (let i = 0; i < nilaiGabriel.length; i++) {
    total += nilaiGabriel[i];
}

// Hitung rata-rata
let rataRata = total / nilaiGabriel.length;

// Tentukan grade akhir
let grade = '';

if (rataRata >= 90 && rataRata <= 100) {
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

// Cetak hasil
console.log(`Nilai rata-rata Gabriel adalah: ${rataRata.toFixed(2)}`);
console.log(`Grade akhir: ${grade}`);
