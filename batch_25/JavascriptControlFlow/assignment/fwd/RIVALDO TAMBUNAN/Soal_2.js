let nilaiGabriel = [85, 95, 20, 67, 75, 78, 75];

let total = 0;

// Loop untuk menjumlahkan semua nilai
for (let i = 0; i < nilaiGabriel.length; i++) {
  total += nilaiGabriel[i];
}

// Hitung rata-rata
let rataRata = total / nilaiGabriel.length;

let nilai
if(rataRata>= 90 && rataRata <= 100){
    nilai = "A";
}else if(rataRata >= 80 && rataRata <= 89.99){
    nilai = "B";
}else if(rataRata >= 75 && rataRata <= 79.99){
    nilai = "C";
}else if(rataRata >= 60 && rataRata <= 74.99){
    nilai = "D";
}else{
    nilai = "E";
}

console.log("Rata-rata :",rataRata, "Nilai :",nilai);