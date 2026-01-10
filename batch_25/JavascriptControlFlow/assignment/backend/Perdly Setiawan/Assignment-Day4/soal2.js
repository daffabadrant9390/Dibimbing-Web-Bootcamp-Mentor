nilaiSiswaGabriel = [85, 95.20, 67.75, 78, 75];
totalNilai = 0;
grade = "";

for (let i = 0; i < nilaiSiswaGabriel.length; i++) {
    totalNilai += nilaiSiswaGabriel[i];
}

const nilaiRataRata = totalNilai / nilaiSiswaGabriel.length;

if (nilaiRataRata >= 90 && nilaiRataRata <= 100) {
    grade = "A";
} else if (nilaiRataRata >= 80) {
    grade = "B";
} else if (nilaiRataRata >= 75) {
    grade = "C";
} else if (nilaiRataRata >= 60) {
    grade = "D";
} else {
    grade = "E";
}

console.log(`Nilai rata-rata Gabriel: ${nilaiRataRata}`);
console.log(`Grade akhir Gabriel: ${grade}`);