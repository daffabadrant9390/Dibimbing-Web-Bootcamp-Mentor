// Belajar Javascript Fundamental

/**
 * Soal Hands On
 * 
 * Kondisi untuk Cumlaude:
 * - Semester nya harus antara 5-7
 * - Ipk harus diatas 3.75
 * - Nilai akhir harus diatas 90
 * 
 * Kondisi untuk Lulus Biasa:
 * - Semester nya harus antara 5-10
 * - Ipk harus diatas 2.75
 * - Nilai akhir harus diatas 85
 * 
 * CASE SISWA 1
 * nama: "Budi Santoso"
 * jurusan: "Teknik Informatika"
 * semester: 6
 * ipk: 3.8
 *  - nilai1 = 80
 *  - nilai2 = 95
 *  - nilai3 = 77.25
 *  - nilai4 = 92.5
 *  - nilai5 = 75
 * nilaiNilai = [80, 95, 77.25, 92.5, 75]
 */

//* Requirement soal
const namaSiswa = "Budi Santoso";
const jurusanSiswa = "Teknik Informatika";
const semesterSiswa = 6;
const ipkSiswa = 3.8;
const nilai1 = 80;
const nilai2 = 95;
const nilai3 = 87.25;
const nilai4 = 92.5;
const nilai5 = 75;

// //* Solution soal
// 1. Menghitung rata-rata nilai
const rataRataNilai = (nilai1 + nilai2 + nilai3 + nilai4 + nilai5) / 5;
console.log(`Rata-rata nilai: ${rataRataNilai}`);

// 2. Menentukan kondisi cumlaude
const isCumlaude = 
    (semesterSiswa >= 5 && semesterSiswa <= 7) && (ipkSiswa > 3.75) && (rataRataNilai > 90);

// 3. Menentukan kondisi lulus biasa
const isLulusBiasa = 
    (semesterSiswa >= 5 && semesterSiswa <= 10) && (ipkSiswa > 2.75) && (rataRataNilai > 85);

// 4. Menentukan apakah lulus biasa atau cumlaude
console.log(`Apakah ${namaSiswa} dari jurusan ${jurusanSiswa} lulus cumlaude? ${isCumlaude}`);
console.log(`Apakah ${namaSiswa} dari jurusan ${jurusanSiswa} lulus biasa? ${isLulusBiasa}`);