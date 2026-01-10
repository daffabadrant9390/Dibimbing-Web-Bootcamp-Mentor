/*
Soal 2: Menghitung Nilai Rata-rata dan Grade

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

const namaSiswa = `Gabriel`
// 5 semester: 85, 95.20, 67.75, 78, 75.
let nilaiSemester = [85, 95.20, 67.75, 78, 75]
let totalNilai = 0
let rataRataNilai = 0
let gradeNilai = ``
//menghitung Total Nilai dan Rata Rata Nilai
for (let i = 0; i < nilaiSemester.length; i++){
    totalNilai += nilaiSemester[i]
}
rataRataNilai = totalNilai / nilaiSemester.length
//Grade Rata Rata Nilai
if (rataRataNilai > 100 && rataRataNilai < 0){
    console.log(`Rata - Rata Nilai Tidak Valid`)
}else if (rataRataNilai >= 90){
    gradeNilai = `A`
}else if (rataRataNilai >= 80){
    gradeNilai = `B`
}else if (rataRataNilai >= 75){
    gradeNilai = `C`
}else if (rataRataNilai >= 60){
    gradeNilai = `D`
}else{
    gradeNilai = `E`
}

console.log (`${namaSiswa} mendapatkan nilai rata rata ${rataRataNilai} dan mendapatkan grade ${gradeNilai}`)