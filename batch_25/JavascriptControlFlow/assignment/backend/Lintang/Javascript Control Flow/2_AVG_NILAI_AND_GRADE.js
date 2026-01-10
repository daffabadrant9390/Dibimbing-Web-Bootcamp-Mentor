/**
    Diketahui nilai siswa (Gabriel) untuk 5 semester: 85, 95.20, 67.75, 78, 75.
    Hitung rata-rata nilai.
    Tentukan grade akhir berdasarkan kriteria berikut:
    A: 90–100
    B: 80–89.99
    C: 75–79.99
    D: 60–74.99
    E: < 60
    Cetak nilai rata-rata dan grade akhir siswa.
    Note: Gunakan array untuk menyimpan seluruh nilai dari 5 semester kedalam 1 variabel
 */

function cekGrade(nilai) {
  if (nilai > 90 && nilai < 100) {
    return "A";
  } else if (nilai > 80 && nilai < 89.99) {
    return "B";
  } else if (nilai > 75 && nilai < 79.99) {
    return "C";
  } else if (nilai > 60 && nilai < 74.99) {
    return "D";
  } else {
    return "E";
  }
}

const nilaiGabriel = [85, 95.2, 67.75, 78, 75];
const dataNilaiGabriel = {
  grade: "E",
  avg: 0,
};

// Masukan avg nilai
dataNilaiGabriel.avg =
  nilaiGabriel.reduce((prev, curr) => prev + curr) / nilaiGabriel.length;
// Ambil grade
dataNilaiGabriel.grade = cekGrade(dataNilaiGabriel.avg);

console.log(
  `Nilai Rata Rata Gabriel : ${dataNilaiGabriel.avg} \nGrade: ${dataNilaiGabriel.grade}`
);
