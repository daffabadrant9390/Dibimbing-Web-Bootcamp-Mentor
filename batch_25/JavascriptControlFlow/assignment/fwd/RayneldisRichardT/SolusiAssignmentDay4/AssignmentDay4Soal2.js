const nilaiGabriel = [85, 95.20, 67.75, 78, 75];


let totalNilai = 0;
for (let i = 0; i < nilaiGabriel.length; i++) {
  totalNilai += nilaiGabriel[i]; 
}

const rataRata = totalNilai / nilaiGabriel.length;

let gradeAkhir;

if (rataRata >= 90) {
  gradeAkhir = 'A';
} else if (rataRata >= 80) {
  gradeAkhir = 'B';
} else if (rataRata >= 75) {
  gradeAkhir = 'C';
} else if (rataRata >= 60) {
  gradeAkhir = 'D';
} else {
  gradeAkhir = 'E';
}

console.log(`--- Hasil Akhir Nilai Gabriel ---`);
console.log(`Nilai rata-rata: ${rataRata.toFixed(2)}`);
console.log(`Grade akhir: ${gradeAkhir}`);