const nilaiSiswa = [85, 90, 78.5, 92.25, 67.5, 75.27, 85, 97.25];

let totalGenap = 0,
  totalGanjil = 0;
let countGenap = 0,
  countGanjil = 0;

for (let i = 0; i < nilaiSiswa.length; i++) {
  if ((i + 1) % 2 === 0) {
    // Semester genap
    totalGenap += nilaiSiswa[i];
    countGenap++;
  } else {
    // Semester ganjil
    totalGanjil += nilaiSiswa[i];
    countGanjil++;
  }
}

const rataRataGenap = totalGenap / countGenap;
const rataRataGanjil = totalGanjil / countGanjil;

console.log("Total Nilai Semester Genap:", totalGenap);
console.log("Rata-Rata Semester Genap:", rataRataGenap);
console.log("Total Nilai Semester Ganjil:", totalGanjil);
console.log("Rata-Rata Semester Ganjil:", rataRataGanjil);
