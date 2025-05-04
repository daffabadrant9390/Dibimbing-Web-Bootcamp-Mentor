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

// Solution 
// Nilai siswa untuk 5 semester
let nilai = [85, 95.20, 67.75, 78, 75];

// Menghitung rata-rata nilai
let total = nilai.reduce((acc, val) => acc + val, 0); // Menjumlahkan semua nilai
let rataRata = total / nilai.length; // Membagi total dengan jumlah semester

// Menentukan grade berdasarkan rata-rata nilai
let grade;
if (rataRata >= 90) {
  grade = 'A';
} else if (rataRata >= 80) {
  grade = 'B';
} else if (rataRata >= 75) {
  grade = 'C';
} else if (rataRata >= 60) {
  grade = 'D';
} else {
  grade = 'E';
}

// Menampilkan hasil
console.log(`Rata-rata nilai: ${rataRata.toFixed(2)}`);
console.log(`Grade akhir: ${grade}`);

