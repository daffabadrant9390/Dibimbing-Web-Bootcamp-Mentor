/**
 * STUDENT EXAMINATION
 * - Terdapat 5 orang student pada suatu kelas dengan data object sebagai berikut
 *    - nama
 *    - array nilai
 *    - studentId
 *
 * Lakukan hal berikut:
 * 1. Pada student pertama, assign value studentId karena studentId awal yang dibuat salah (Object.assign()).
 * 2. Buatlah sebuah array dari kelima object student tersebut.
 * 3. Lakukan looping pada array student tersebut, kemudian
 *    a. hitung total dan rata-rata array nilai student tersebut
 *    b. kemudian buatlah if else condition dimana akan menentukan grade dari student tersebut ("A", "B", "C", "D")
 *    c. assign field baru berupa "gradeSiswa" pada object student berdasarkan hasil dari grading
 * 4. Print masing masing object student dengan format "Student dengan nama {{nama}} dan student id {{studentId}} mendapatkan
 *    grade nilai {{gradeSiswa}}".
 * 5.Print array setelah diganti
 */

//* Put the solution here...

// const arraySiswa = [
//   {
//     nama: 'yanto',
//     nilaiNilai: [90, 90, 100],
//   },
//   {
//     nama: 'yono',
//     nilaiNilai: [70, 90, 65],
//   },
// ];

// for (let i = 0; i < arraySiswa.length; i++) {
//   // Menghitung rata-rata nilai dan total
//   let totalNilai = 0;
//   let rataRataNilai = 0;
//   for (let j = 0; j < arraySiswa[i].nilaiNilai.length; j++) {
//     totalNilai += arraySiswa[i].nilaiNilai[j];
//   }
//   rataRataNilai = totalNilai / arraySiswa[i].nilaiNilai.length;

//   // Menentukan grading
//   let gradeStudent = '';
//   if (rataRataNilai > 90 && rataRataNilai <= 100) {
//     gradeStudent = 'A';
//   } else {
//     gradeStudent = 'B';
//   }

//   // Assign grading student kepada object
//   arraySiswa[i].gradeSiswa = gradeStudent;

//   console.log(
//     `Student dengan nama ${arraySiswa[i].nama} mendapatkan grade nilai ${arraySiswa[i].gradeSiswa}`
//   );
// }

// console.log(arraySiswa);
