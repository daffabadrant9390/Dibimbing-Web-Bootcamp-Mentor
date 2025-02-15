// Seorang siswa bernama Gabriel telah menyelesaikan studi nya selama 5 semester,
// dimana masing-masing semester dia akan menerima 1 nilai akhir. Hitung rata-rata dari 5 semester tersebut,
// kemudian tentukan Grade yang didapatkan Gabriel dengan rules yang telah ditentukan.
// Berikut adalah nilai akhir dari Gabriel untuk masing-masing semesternya:
// Semester 1 : 85
// Semester 2 : 95.20
// Semester 3 : 67.75
// Semester 4 : 78
// Semester 5 : 75
// Berikut adalah rules untuk menentukan Grade dari nilai Gabriel
// A : rata-rata nilai lebih besar sama dengan 90 DAN kurang dari sama dengan 100
// B : rata-rata nilai lebih besar sama dengan 80 DAN kurang dari 90
// C : rata-rata nilai lebih besar sama dengan 75 DAN kurang dari 80
// D : rata-rata nilai lebih besar sama dengan 60 DAN kurang dari 75
// E : rata-rata nilai kurang dari 60

const namaSiswa = "Gabriel";
const nilaiSmt1 = 85;
const nilaiSmt2 = 95.2;
const nilaiSmt3 = 67.75;
const nilaiSmt4 = 78;
const nilaiSmt5 = 75;
let grade = 0;
const nilaiAkhir =
  (nilaiSmt1 + nilaiSmt2 + nilaiSmt3 + nilaiSmt4 + nilaiSmt5) / 5;

// Rata - rata 5 semester
console.log(`nilai akhir Gabriel : ${nilaiAkhir}`);

console.log("===========================================");

switch (true) {
  case nilaiAkhir >= 90 && nilaiAkhir <= 100:
    grade = "A";
    break;
  case nilaiAkhir >= 80 && nilaiAkhir <= 90:
    grade = "B";
    break;
  case nilaiAkhir >= 75 && nilaiAkhir <= 80:
    grade = "C";
    break;
  case nilaiAkhir >= 60 && nilaiAkhir <= 75:
    grade = "D";
    break;
  default:
    grade = "E";
}

// Menentukan grade Gabriel
console.log(
  `Nilai akhir Gabriel adalah ${nilaiAkhir}, dan Grade Gabriel adalah : ${grade}`
);
