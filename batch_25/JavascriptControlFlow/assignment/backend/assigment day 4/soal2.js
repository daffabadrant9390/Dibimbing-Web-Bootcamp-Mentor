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

let nilai_5_semester = [85, 95.20, 67.75, 78, 75]

let totalNilai = 0;
let rataRataNilai = 0;

for (let i = 0; i < nilai_5_semester.length; i++){
    totalNilai += nilai_5_semester[i];
}

rataRataNilai = totalNilai / nilai_5_semester.length
console.log(`Rata - rata nilai = ${rataRataNilai}`)

if (rataRataNilai >= 90 && rataRataNilai <= 100){
    console.log(`Grade A`)
}else if (rataRataNilai >= 80){
    console.log(`Grade B`)
}else if (rataRataNilai >= 75) {
    console.log(`Grade C`)
}else if (rataRataNilai >= 60) {
    console.log(`Grade D`)
}else{
    console.log(`Grade E`)
}