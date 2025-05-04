/*
Deskripsi Assignment:
2. Menentukan rata-rata nilai seorang siswa selama 5 semester dan menentukan grade akhir yang didapatkan oleh siswa tersebut berdasarkan nilai rata-rata.

Detail Assignment:
2. Seorang siswa bernama Gabriel telah menyelesaikan studi nya selama 5 semester, dimana masing-masing semester dia akan menerima 1 nilai akhir. Hitung rata-rata dari 5 semester tersebut, kemudian tentukan Grade yang didapatkan Gabriel dengan rules yang telah ditentukan.
Berikut adalah nilai akhir dari Gabriel untuk masing-masing semesternya:
- Semester 1 : 85
- Semester 2 : 95.20
- Semester 3 : 67.75
- Semester 4 : 78
- Semester 5 : 75
Berikut adalah rules untuk menentukan Grade dari nilai Gabriel:
- A : rata-rata nilai lebih besar sama dengan 90 DAN kurang dari sama dengan 100
- B : rata-rata nilai lebih besar sama dengan 80 DAN kurang dari 90
- C : rata-rata nilai lebih besar sama dengan 75 DAN kurang dari 80
- D : rata-rata nilai lebih besar sama dengan 60 DAN kurang dari 75
- E : rata-rata nilai kurang dari 60
*/

// Nilai akhir tiap semester
const gabrielScores = [85, 95.20, 67.75, 78, 75];

// Hitung rata-rata
const average = gabrielScores.reduce((acc, val) => acc + val, 0) / gabrielScores.length;

// Tentukan grade berdasarkan rata-rata
const grade = average >= 90 ? 'A' :
    average >= 80 ? 'B' :
        average >= 75 ? 'C' :
            average >= 60 ? 'D' :
                average < 60 ? 'E' : 'Nilai tidak valid';

// Tampilkan hasil
console.log(`Rata-rata nilai Gabriel adalah ${average.toFixed(2)}`);
console.log(`Grade akhir Gabriel adalah ${grade}`);
