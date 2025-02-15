/*
Seorang siswa bernama Gabriel telah menyelesaikan studi nya selama 5 semester,
dimana masing-masing semester dia akan menerima 1 nilai akhir. Hitung rata-rata 
dari 5 semester tersebut, kemudian tentukan Grade yang didapatkan Gabriel dengan 
rules yang telah ditentukan.
a. Berikut adalah nilai akhir dari Gabriel untuk masing-masing semesternya:
    i.   Semester 1 : 85
    ii.  Semester 2 : 95.20
    iii. Semester 3 : 67.75
    iV.  Semester 4 : 78
    v.   Semester 5 : 75
b. Berikut adalah rules untuk menentukan Grade dari nilai Gabriel
    i.   A : rata-rata nilai lebih besar sama dengan 90 DAN kurang dari sama dengan 100
    ii.  B : rata-rata nilai lebih besar sama dengan 80 DAN kurang dari 90
    iii. C : rata-rata nilai lebih besar sama dengan 75 DAN kurang dari 80
    iv.  D : rata-rata nilai lebih besar sama dengan 60 DAN kurang dari 75
    v.   E : rata-rata nilai kurang dari 60
*/

const namaSiswa = "Gabriel";
const nilaiSemester1 = 85;
const nilaiSemester2 = 95.20;
const nilaiSemester3 = 67.75;
const nilaiSemester4 = 78;
const nilaiSemester5 = 75;

let nilaiRataRata = (nilaiSemester1 + nilaiSemester2 + nilaiSemester3 + nilaiSemester4 + nilaiSemester5) / 5;

if(nilaiRataRata >= 90 && nilaiRataRata <= 100){
    console.log(`Rata-rata nilai ${namaSiswa} adalah ${nilaiRataRata} dan mendapat grade A`);
} else if ( nilaiRataRata  >= 80){
    console.log(`Rata-rata nilai ${namaSiswa} adalah ${nilaiRataRata} dan mendapat grade B`);
} else if (nilaiRataRata >= 75){
    console.log(`Rata-rata nilai ${namaSiswa} adalah ${nilaiRataRata} dan mendapat grade C`);
} else if (nilaiRataRata >= 60){
    console.log(`Rata-rata nilai ${namaSiswa} adalah ${nilaiRataRata} dan mendapat grade D`);
} else {
    console.log(`Rata-rata nilai ${namaSiswa} adalah ${nilaiRataRata} dan mendapat grade E`);
}
