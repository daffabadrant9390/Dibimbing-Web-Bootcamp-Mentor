// Soal 1: Analisis Bilangan 1 - 20
console.log("=== Soal 1: Analisis Bilangan 1 - 20 ===");
for (let i = 1; i <= 20; i++) {
    // Cek apakah bilangan genap atau ganjil
    if (i % 2 === 0) {
        console.log(`${i} merupakan bilangan Genap`);
    } else {
        console.log(`${i} merupakan bilangan Ganjil`);
    }
    
    // Cek apakah habis dibagi 4
    if (i % 4 === 0) {
        console.log(`${i} habis dibagi dengan 4`);
    }
    
    // Cek apakah habis dibagi 6
    if (i % 6 === 0) {
        console.log(`${i} habis dibagi dengan 6`);
    }
    
    // Cek apakah habis dibagi 4 dan 6
    if (i % 4 === 0 && i % 6 === 0) {
        console.log(`${i} habis dibagi dengan angka 4 dan 6`);
    }
    
    // Cek apakah habis dibagi 3 atau 5
    if (i % 3 === 0 || i % 5 === 0) {
        console.log(`${i} habis dibagi dengan angka 3 atau 5`);
    }
    
    console.log("====================");
}


// Soal 2: Menghitung Nilai Rata-rata dan Grade
console.log("=== Soal 2: Menghitung Nilai Rata-rata dan Grade ===");
const nilaiSiswa = [85, 95.20, 67.75, 78, 75];

// Menghitung rata-rata nilai
let totalNilai = 0;
for (let i = 0; i < nilaiSiswa.length; i++) {
    totalNilai += nilaiSiswa[i];
}
let rataRata = totalNilai / nilaiSiswa.length;

// Menentukan grade
let grade;
if (rataRata >= 90) {
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

// Output
console.log(`Rata-rata Nilai: ${rataRata.toFixed(2)}`);
console.log(`Grade Akhir: ${grade}`);


// Soal 3: Perpangkatan Menggunakan Nested Loop
console.log("=== Soal 3: Perpangkatan Menggunakan Nested Loop ===");
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 3; j++) {
        let hasil = Math.pow(i, j);
        console.log(`${i} pangkat ${j} = ${hasil}`);
    }
    console.log("===================");
}
