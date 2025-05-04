// Diketahui nilai siswa (Gabriel) untuk 5 semester: 85, 95.20, 67.75, 78, 75.
// Hitung rata-rata nilai.
// Tentukan grade akhir berdasarkan kriteria berikut:
// A: 90–100
// B: 80–89.99
// C: 75–79.99
// D: 60–74.99
// E: < 60
// Cetak nilai rata-rata dan grade akhir siswa.

const siswa= "Gabriel";
let nilai = [85, 95.20, 67.75, 78, 75];
let totalNilai = 0;
for (let i = 0; i <nilai.length; i++) {
    totalNilai += nilai[i];
}
console.log("Jumlah Nilai", totalNilai)


let rataRata = totalNilai/nilai.length;
// console.log("Rata Nilai Gabriel",rataRata);

let grade;

if (rataRata >= 90 && rataRata === 100) {
    grade = "A";
} else if (rataRata >= 80 && rataRata <=89.9) {
    grade = "B";
} else if (rataRata >= 75 && rataRata <= 79.9){
    grade = "C";
} else if (rataRata >= 60 && rataRata <= 74.9){
    grade = "D"
}
else{
    grade = "E";
}

console.log("Nilai Siswa Bernama",siswa);
console.log("Nilai Rata - Rata",rataRata);
console.log("Mendapatkan Grade", grade);