// Menghitung Nilai Rata-rata dan Grade

const nilaiGabriel = [85, 95, 20, 67.75, 78, 75];

let totalNilaiGabriel = 0;
let nilaiRataRataGabriel = 0;
let gradeAkhirGabriel = '';

for(let i = 0; i < nilaiGabriel.length; i++){
    totalNilaiGabriel += nilaiGabriel[i];
}

nilaiRataRataGabriel = totalNilaiGabriel / nilaiGabriel.length;

if(nilaiRataRataGabriel >= 90 && nilaiRataRataGabriel <= 100){
    gradeAkhirGabriel = 'A';
} else if(nilaiRataRataGabriel >= 80 && nilaiRataRataGabriel <= 89.99){
    gradeAkhirGabriel = 'B';
} else if(nilaiRataRataGabriel >= 75 && nilaiRataRataGabriel <= 79.99){
    gradeAkhirGabriel = 'C';
} else if(nilaiRataRataGabriel >= 60 && nilaiRataRataGabriel <= 74.99){
    gradeAkhirGabriel = 'D';
} else if(nilaiRataRataGabriel < 60){
    gradeAkhirGabriel = 'E';
}

console.log("Nilai Rata-rata Gabriel: " + nilaiRataRataGabriel);
console.log("Grade Akhir Gabriel: " + gradeAkhirGabriel);