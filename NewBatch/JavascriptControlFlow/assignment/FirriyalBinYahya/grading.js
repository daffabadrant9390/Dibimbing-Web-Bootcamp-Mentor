let nilaiSemester = [85, 95.2, 67.75, 78, 75]; //input awal
let jumlahNilai = 0;

for (let i=0; i<nilaiSemester.length; i++){
    jumlahNilai += nilaiSemester[i];
}

let rataRataNilai = jumlahNilai/nilaiSemester.length;
let grade = "";

if (rataRataNilai > 100) {
    console.log("Nilai tidak valid.");
}else if (rataRataNilai >= 90 && rataRataNilai <= 100) {
    grade = "A";
}else if (rataRataNilai >= 80 && rataRataNilai < 90) {
    grade = "B";
}else if (rataRataNilai >= 75 && rataRataNilai < 80) {
    grade = "C";
}else if (rataRataNilai >= 60 && rataRataNilai < 75) {
    grade = "D";
}else {
    grade = "E";
}

console.log(`Grade dari nilai Gabriel adalah ${grade}`);