// Soal 2: Menghitung Nilai Rata-rata dan Grade
// Diketahui nilai siswa (Gabriel) untuk 5 semester: 85, 95.20, 67.75, 78, 75.
// Hitung rata-rata nilai.
// Tentukan grade akhir berdasarkan kriteria berikut:
// A: 90–100
// B: 80–89.99
// C: 75–79.99
// D: 60–74.99
// E: < 60
// Cetak nilai rata-rata dan grade akhir siswa.

let nilaiGabriel = [85, 95.2, 67.75, 78, 75];

function findGradeGabriel(rata2) {
  let gradeGabriel = "";
  if (rata2 >= 90 && rata2 <= 100) {
    gradeGabriel = "A";
  } else if (rata2 >= 80 && rata2 <= 89.99) {
    gradeGabriel = "B";
  } else if (rata2 >= 75 && rata2 <= 79.99) {
    gradeGabriel = "C";
  } else if (rata2 >= 60 && rata2 <= 74.99) {
    gradeGabriel = "D";
  } else {
    gradeGabriel = "E";
  }

  return gradeGabriel;
}

const findNilaiRata = (nilai) => {
  let nilaiTotal = 0;
  for (let i = 0; i < nilai.length; i++) {
    nilaiTotal += nilai[i];
  }
  let nilaiRataGabriel = nilaiTotal / nilai.length;
  let grade = findGradeGabriel(nilaiRataGabriel);
  return { nilaiRataGabriel: nilaiRataGabriel.toFixed(2), grade };
};

let result = findNilaiRata(nilaiGabriel);
console.log(result);
