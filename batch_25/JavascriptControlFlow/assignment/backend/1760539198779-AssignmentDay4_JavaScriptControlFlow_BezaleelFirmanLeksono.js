//Bezaleel Firman Leksono (bezaleel.firman@gmail.com)

// soal 1
console.log("\n=== Soal 1: Analisis Bilangan 1 - 20 ===");
for (let n = 1; n <= 20; n++) {
  // (ganjil / genap)
  if (n % 2 !== 0) {
    console.log(`${n} merupakan bilangan Ganjil`);
  } else {
    console.log(`${n} merupakan bilangan Genap`);
  }
  // (aturan pembagian)
  if (n % 4 === 0 && n % 6 === 0) {
    console.log(`${n} habis dibagi dengan angka 4 dan 6`);
  } else if (n % 4 === 0) {
    console.log(`${n} habis dibagi dengan 4`);
  } else if (n % 6 === 0) {
    console.log(`${n} habis dibagi dengan 6`);
  } else if (n % 3 === 0 || n % 5 === 0) {
    console.log(`${n} habis dibagi dengan angka 3 atau 5`);
  } else {
    console.log(n);
  }
  // pemisah antar angka
  console.log("--------------------");
}

// soal 2
console.log("\n=== Soal 2: Menghitung Nilai Rata-rata dan Grade ===");
const nilaiGabriel = [85, 95.20, 67.75, 78, 75];
// hitung rata-rata
const total = nilaiGabriel.reduce((acc, v) => acc + v, 0);
const rata2 = total / nilaiGabriel.length;
// tentukan grade
let grade = ""; 
if (rata2 >= 90 && rata2 <= 100) {
  grade = "A";
} else if (rata2 >= 80 && rata2 < 90) {
  grade = "B";
} else if (rata2 >= 75 && rata2 < 80) {
  grade = "C";
} else if (rata2 >= 60 && rata2 < 75) {
  grade = "D";
} else if (rata2 < 60) {
  grade = "E";
}
// hasil (pembulatan dua desimal)
console.log(`Nilai per semester: [${nilaiGabriel.join(", ")}]`);
console.log(`Rata-rata: ${rata2.toFixed(2)}`);
console.log(`Grade akhir: ${grade}`);

// soal 3
console.log("\n=== Soal 3: Perpangkatan Menggunakan Nested Loop ===");
for (let base = 1; base <= 5; base++) {
  for (let exp = 1; exp <= 3; exp++) {
    const hasil = base ** exp; 
    console.log(`${base} pangkat ${exp} = ${hasil}`);
  }
  console.log("===================");
}
