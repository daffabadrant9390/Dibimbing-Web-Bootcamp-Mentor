// Seorang siswa bernama Gabriel telah menyelesaikan studi nya selama 5 semester, dimana masing-masing semester dia akan menerima 1 nilai akhir. Hitung rata-rata dari 5 semester tersebut, kemudian tentukan Grade yang didapatkan Gabriel dengan rules yang telah ditentukan.
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

const nama="Gabriel";
const nilaiSemester1=85;
const nilaiSemester2=95.20;
const nilaiSemester3=67.75;
const nilaiSemester4=78;
const nilaiSemester5=75;

let rataRata=(nilaiSemester1+nilaiSemester2+nilaiSemester3+nilaiSemester4+nilaiSemester5)/5;
const isA = rataRata >= 90 && rataRata <= 100;
const isB = rataRata >= 80 && rataRata < 90;
const isC = rataRata >= 75 && rataRata < 80;
const isD = rataRata >= 60 && rataRata <75;
const isE = rataRata < 60;

if(isA){
    console.log(`${nama} mendapat Grade A dengan rata-rata ${rataRata}`);
}
else if(isB){
    console.log(`${nama} mendapat Grade B dengan rata-rata ${rataRata}`);
}
else if(isC){
    console.log(`${nama} mendapat Grade C dengan rata-rata ${rataRata}`);
}
else if(isD){
    console.log(`${nama} mendapat Grade D dengan rata-rata ${rataRata}`);
}
else{
    console.log(`${nama} mendapat Grade E dengan rata-rata ${rataRata}`);
}
