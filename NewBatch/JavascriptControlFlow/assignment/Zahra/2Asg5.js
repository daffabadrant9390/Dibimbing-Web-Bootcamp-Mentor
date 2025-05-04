// 2. Seorang siswa bernama Gabriel telah menyelesaikan studi nya selama 5 semester, 
// dimana masing-masing semester dia akan menerima 1 nilai akhir. 
// Hitung rata-rata dari 5 semester tersebut, 
// kemudian tentukan Grade yang didapatkan Gabriel dengan rules yang telah ditentukan.
// * Berikut adalah nilai akhir dari Gabriel untuk masing-masing semesternya:
// Semester 1 : 85
// Semester 2 : 95.20
// Semester 3 : 67.75
// Semester 4 : 78
// Semester 5 : 75
// 
// * Berikut adalah rules untuk menentukan Grade dari nilai Gabriel
// A : rata-rata nilai lebih besar sama dengan 90 DAN kurang dari sama dengan 100
// B : rata-rata nilai lebih besar sama dengan 80 DAN kurang dari 90
// C : rata-rata nilai lebih besar sama dengan 75 DAN kurang dari 80
// D : rata-rata nilai lebih besar sama dengan 60 DAN kurang dari 75
// E : rata-rata nilai kurang dari 60

//Jawaban:

//1. define variabel
let nama = `Gabriel`
let nilai = [85, 95.20, 67.75, 78, 75]
let totalNilai = 0
let rataRataNilai = 0

//2. Menghitung total nilai
for (let i = 0; i < nilai.length; i++) {
    totalNilai += nilai[i];
}
//3. Menghitung rata rata
rataRataNilai = totalNilai / nilai.length;

//4. Menentukan grade
if (rataRataNilai >= 90 && rataRataNilai <= 100) {
    grade = "A";
} else if (rataRataNilai >= 80 && rataRataNilai < 90) {
    grade = "B";
} else if (rataRataNilai >= 75 && rataRataNilai < 80) {
    grade = "C";
} else if (rataRataNilai >= 60 && rataRataNilai < 75) {
    grade = "D";
} else {
    grade = "E";
}
//5. Menampilkan hasil
console.log(`Siswa ${nama} mendapatkan rata-rata nilai ${rataRataNilai} dan Grade ${grade}`);
