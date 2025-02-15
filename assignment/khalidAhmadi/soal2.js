/*
*Menentukan rata-rata nilai seorang siswa selama 5 semester dan
*menentukan grade akhir yang didapatkan oleh siswa tersebut
*berdasarkan nilai rata-rata.

*Detail:
Seorang siswa bernama Gabriel telah menyelesaikan studi nya selama 5 semester,
dimana masing-masing semester dia akan menerima 1 nilai akhir.

Hitung rata-rata dari 5 semester tersebut, tentukan Grade yang didapatkan Gabriel
dengan rules yang telah ditentukan.

*Berikut adalah nilai akhir dari Gabriel untuk masing-masing semesternya:
- Semester 1 : 85
- Semester 2 : 95.20
- Semester 3 : 67.75
- Semester 4 : 78
- Semester 5 : 75

*Berikut adalah rules untuk menentukan Grade dari nilai Gabriel:
A : rata-rata nilai lebih besar sama dengan 90 DAN kurang dari sama dengan 100
B : rata-rata nilai lebih besar sama dengan 80 DAN kurang dari 90
C : rata-rata nilai lebih besar sama dengan 75 DAN kurang dari 80
D : rata-rata nilai lebih besar sama dengan 60 DAN kurang dari 75
E : rata-rata nilai kurang dari 60
*/

//ANSWER

let namaSiswa = 'Gabriel';

const term1 = 85;
const term2 = 95.20;
const term3 = 67.75;
const term4 = 78;
const term5 = 75;

let termAvg = (term1+term2+term3+term4+term5) / 5;

//test dummy
//let termAvg = -108312891239012;

if (termAvg < 0) {
    console.log("Error: Nilai rata-rata tidak boleh negatif."); //menghindari input tidak sah
} else if (termAvg < 60) {
    console.log(`Grade yang didapatkan oleh ${namaSiswa} selama 5 semester adalah E`);
} else if (termAvg < 75) {
    console.log(`Grade yang didapatkan oleh ${namaSiswa} selama 5 semester adalah D`);
} else if (termAvg < 80) {
    console.log(`Grade yang didapatkan oleh ${namaSiswa} selama 5 semester adalah C`);
} else if (termAvg < 90) {
    console.log(`Grade yang didapatkan oleh ${namaSiswa} selama 5 semester adalah B`);
} else if (termAvg <= 100) {
    console.log(`Grade yang didapatkan oleh ${namaSiswa} selama 5 semester adalah A`);
} else {
    console.log("Error: Nilai rata-rata tidak boleh lebih dari 100."); //menghindari input tidak sah
}