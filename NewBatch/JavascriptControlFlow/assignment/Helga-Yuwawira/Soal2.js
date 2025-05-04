let nilaiSiswa = [85, 95.20, 67.75, 78, 75];
let total = 0;

for (let i = 0; i < nilaiSiswa.length; i++) {
    total += nilaiSiswa[i];
}

let rataRata = total / nilaiSiswa.length;
let grade = "";

if (rataRata >= 90 && rataRata <= 100) {
    grade = "A";
} else if (rataRata >= 80 && rataRata <= 89.99) {
    grade = "B";
} else if (rataRata >= 75 && rataRata <= 79.99) {
    grade = "C";
} else if (rataRata >= 60 && rataRata <= 74.99) {
    grade = "D";
} else {
    grade = "E";
}

console.log("Rata-rata nilai Gabriel: " + rataRata);
console.log("Grade akhir: " + grade);
