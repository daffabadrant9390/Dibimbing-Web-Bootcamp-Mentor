/**
 * Menghitung nilai rata-rata dan grade
 * 
 * - Diketahui nilai siswa (Gabriel) untuk 5 semester: 85, 95, 20, 67, 75, 78, 75.
 * - Hitung rata-rata nilai.
 * - Tentukan grade akhir berdasarkan kriteria berikut:
 *  - A: 90-100
 *  - B: 80-89.99
 *  - C: 70-79.99
 *  - D: 60-74.99
 *  - E: <60
 * - Cetak nilai rata-rata dan grade akhir siswa.
 * - Note: Gunakan array untuk menyimpan seluruh nilai dari 5 semsester kedalam 1 variabel
 */

// Variabel nama siswa dan array nilai siswa
    const namaSiswa = "Gabriel";
    const nilaiSiswa = [85, 95, 20, 67, 75, 78, 75];

// Menghitung total nilai
    const totalNilai = nilaiSiswa.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// Menghitung rata-rata nilai
    const jumlahNilai = nilaiSiswa.length;
    const rataRataNilai = totalNilai / jumlahNilai;

// Menentukan grade berdasarkan rata-rata nilai
    let grade;
// If-else untuk menentukan nilai tertinggi ke terendah
        if (rataRataNilai >= 90) {
            grade = 'A';
        } else if (rataRataNilai >= 80) {
            grade = 'B';
        } else if (rataRataNilai >= 70) {
            grade = 'C';
        } else if (rataRataNilai >= 60) {
            grade = 'D';
        } else {
            grade = 'E';
        } 

// Mencetak hasil
    console.log(`Analisis Nilai Siswa: ${namaSiswa}`);
    console.log(`Nilai yang diperoleh: [${nilaiSiswa.join(', ')}]`);
    console.log(`Jumlah Semester: ${jumlahNilai}`);
    console.log(`Total Nilai: ${totalNilai}`);
    console.log("============================");

    // Mmebatasi hasil rata-rata hingga 2 angka di belakang koma
    console.log(`Rata-rata Nilai: ${rataRataNilai.toFixed(2)}`);
    console.log(`Grade Akhir: ${grade}`);

    return;
    
