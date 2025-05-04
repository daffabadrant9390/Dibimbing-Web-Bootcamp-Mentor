// Soal 1: Analisis Bilangan 1 - 20
function analisaBilangan() {
  for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
      console.log(`${i} merupakan bilangan Ganjil`);
    } else {
      console.log(`${i} merupakan bilangan Genap`);
    }

    if (i % 4 === 0 && i % 6 === 0) {
      console.log(`${i} habis dibagi dengan angka 4 dan 6`);
    } else if (i % 4 === 0) {
      console.log(`${i} habis dibagi dengan 4`);
    } else if (i % 6 === 0) {
      console.log(`${i} habis dibagi dengan 6`);
    }

    if (i % 3 === 0 || i % 5 === 0) {
      console.log(`${i} habis dibagi dengan angka 3 atau 5`);
    }
  }
}

// Soal 2: Menghitung Nilai Rata-rata dan Grade
function hitungNilaiRata() {
  const nilai = [85, 95.2, 67.75, 78, 75];
  let total = 0;

  for (let i = 0; i < nilai.length; i++) {
    total += nilai[i];
  }

  const rataRata = total / nilai.length;
  let grade;

  if (rataRata >= 90 && rataRata <= 100) {
    grade = 'A';
  } else if (rataRata >= 80 && rataRata < 90) {
    grade = 'B';
  } else if (rataRata >= 75 && rataRata < 80) {
    grade = 'C';
  } else if (rataRata >= 60 && rataRata < 75) {
    grade = 'D';
  } else {
    grade = 'E';
  }

  console.log(`Nilai rata-rata Gabriel: ${rataRata.toFixed(2)}`);
  console.log(`Grade akhir: ${grade}`);
}

// Soal 3: Perpangkatan Menggunakan Nested Loop
function perpangkatan() {
  for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 3; j++) {
      const hasil = Math.pow(i, j);
      console.log(`${i} pangkat ${j} = ${hasil}`);
    }
    console.log('===================');
  }
}

// Bismillah Benar
console.log('SOAL 1: ANALISIS BILANGAN');
analisaBilangan();

console.log('\nSOAL 2: MENGHITUNG NILAI RATA-RATA');
hitungNilaiRata();

console.log('\nSOAL 3: PERPANGKATAN');
perpangkatan();
