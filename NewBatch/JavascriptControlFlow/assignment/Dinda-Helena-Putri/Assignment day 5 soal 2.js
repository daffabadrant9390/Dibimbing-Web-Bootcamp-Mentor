// Data nilai siswa
const siswa = "Gabriel";
const nilai = [85, 95.20, 67.75, 78, 75];

//Menghitung total dan rata-rata nilai
let total = 0;
for (let i = 0; i < nilai.length; i++) {
    total += nilai[i];
}
const rataRata = total / nilai.length;

//Menentukan grade
let grade = "";
if (rataRata >= 90 && rataRata <= 100) {
    grade = "A";
} else if (rataRata >= 80 && rataRata < 90) {  
    grade = "B";
}
else if (rataRata >= 70 && rataRata < 80) {
    grade = "C";
}
else if (rataRata >= 60 && rataRata < 70) {
    grade = "D";
}
else if (rataRata >= 0 && rataRata < 60) {
    grade = "E";
}

//Menampilkan hasil
console.log(`Nama Siswa: ${siswa}`);
console.log(`Rata-rata nilai: ${rataRata.toFixed(2)}`);
console.log(`Grade akhir: ${grade}`);
