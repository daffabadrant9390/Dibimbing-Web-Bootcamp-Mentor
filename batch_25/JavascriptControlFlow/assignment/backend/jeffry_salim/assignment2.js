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
// Note: Gunakan array untuk menyimpan seluruh nilai dari 5 semester kedalam 1 variabel


//inisialisasi variable
const nilaiSiswaGabriel = [85, 95.20, 67.75, 78, 75];
let totalNilai = 0;
let nilaiRataRata = 0;
let grade = " ";

//loop untuk hitung nilai rata-rata
for (let i = 0; i < nilaiSiswaGabriel.length; i++) {
    totalNilai += nilaiSiswaGabriel[i];
}

nilaiRataRata = totalNilai/(nilaiSiswaGabriel.length);

//menentukan grade berdasarkan kriteria
if (nilaiRataRata >= 90 && nilaiRataRata <= 100) {
    grade = "A";
} else if (nilaiRataRata >= 80) {
    grade = "B";
} else if (nilaiRataRata >= 75) {
    grade = "C";
} else if (nilaiRataRata >= 60) {
    grade = "D";
} else {
    grade = "E";
}

//tampil nilai rata-rata dan grade 
console.log(`Nilai rata-rata siswa Gabriel : ${nilaiRataRata} dan Gradenya adalah ${grade}`);