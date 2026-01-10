/*Menghitung Nilai Rata-rata dan Grade
●	Diketahui nilai siswa (Gabriel) untuk 5 semester: 85, 95.20, 67.75, 78, 75.
●	Hitung rata-rata nilai.
●	Tentukan grade akhir berdasarkan kriteria berikut:
○	A: 90–100
○	B: 80–89.99
○	C: 75–79.99
○	D: 60–74.99
○	E: < 60
●	Cetak nilai rata-rata dan grade akhir siswa.
●	Note: Gunakan array untuk menyimpan seluruh nilai dari 5 semester kedalam 1 variabel
*/

const arrayNilaiGabriel = [85, 95.20, 67.75, 78, 75];

let totalNilai = 0;

let i = 0;
while (i < arrayNilaiGabriel.length) {
    totalNilai += arrayNilaiGabriel[i];
    i++;
}

const rataRataNilaiGabriel = totalNilai / arrayNilaiGabriel.length;
console.log(`Rata-rata nilai Gabriel: ${rataRataNilaiGabriel}`)


let gradeGabriel = "";
if (rataRataNilaiGabriel >= 90 && rataRataNilaiGabriel <= 100) {
    gradeGabriel = "A";
} else if (rataRataNilaiGabriel >= 80) {
    gradeGabriel = "B";
} else if (rataRataNilaiGabriel >= 75) {
    gradegabriel = "C";
} else if (rataRataNilaiGabriel >= 60) {
    gradeGabriel = "D";
} else { gradegabriel = "E";}
console.log(`Grade Nilai Gabriel : ${gradeGabriel}`)
