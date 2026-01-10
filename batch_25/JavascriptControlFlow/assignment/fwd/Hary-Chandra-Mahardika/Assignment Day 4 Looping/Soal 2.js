// Soal 2: Menghitung Nilai Rata-rata dan Grade
// ●	Diketahui nilai siswa (Gabriel) untuk 5 semester: 85, 95.20, 67.75, 78, 75.
// ●	Hitung rata-rata nilai.
// ●	Tentukan grade akhir berdasarkan kriteria berikut:
// ○	A: 90–100
// ○	B: 80–89.99
// ○	C: 75–79.99
// ○	D: 60–74.99
// ○	E: < 60
// ●	Cetak nilai rata-rata dan grade akhir siswa.
// ●	Note: Gunakan array untuk menyimpan seluruh nilai dari 5 semester kedalam 1 variabel
const arrayNilaiSiswa = [85, 95.20, 67.75, 78, 75];
let totalNilaiSiswa = 0;

for (i = 0; i < arrayNilaiSiswa.length; i++){   
    totalNilaiSiswa += arrayNilaiSiswa[i]; //totalNilaiSiswa = totaNilaiSiswa + arrayNilaiSiswa[i];
}   
    const nilaiRataRata = totalNilaiSiswa / arrayNilaiSiswa.length;
    console.log(`Rata-rata nilai siswa: ${nilaiRataRata}`);

//Menentukan grade siswa berdasarkan nilai rata-rata
    let gradeSiswa = "" ;
    if (nilaiRataRata >= 90 && nilaiRataRata <= 100){
        gradeSiswa = "A";
    } else if (nilaiRataRata >= 80){
        gradeSiswa = "B";
    } else if (nilaiRataRata >= 70){
        gradeSiswa = "C";
    } else if (nilaiRataRata >= 60){
        gradeSiswa = "D";
    } else {
        gradeSiswa = "E";
    }

console.log(`Grade Siswa: ${gradeSiswa}`);


