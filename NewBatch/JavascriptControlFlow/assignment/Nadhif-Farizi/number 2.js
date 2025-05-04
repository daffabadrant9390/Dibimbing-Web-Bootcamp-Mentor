// Question
// Seorang siswa bernama Gabriel telah menyelesaikan studi nya selama 5 semester, dimana masing - masing semester dia akan menerima 1 nilai akhir.Hitung rata - rata dari 5 semester tersebut, kemudian tentukan Grade yang didapatkan Gabriel dengan rules yang telah ditentukan.
// Berikut adalah nilai akhir dari Gabriel untuk masing - masing semesternya:
// Semester 1 : 85
// Semester 2 : 95.20
// Semester 3 : 67.75
// Semester 4 : 78
// Semester 5 : 75
// Berikut adalah rules untuk menentukan Grade dari nilai Gabriel
// A: rata - rata nilai lebih besar sama dengan 90 DAN kurang dari sama dengan 100
// B: rata - rata nilai lebih besar sama dengan 80 DAN kurang dari 90
// C: rata - rata nilai lebih besar sama dengan 75 DAN kurang dari 80
// D: rata - rata nilai lebih besar sama dengan 60 DAN kurang dari 75
// E: rata - rata nilai kurang dari 60

const gabrielGrades = [85, 95.2, 67.75, 78, 75];
const average = gabrielGrades.reduce((a, b) => a + b, 0) / gabrielGrades.length;
console.log(average);

if (average >= 90 && average <= 100) {
  console.log('A');
} else if (average >= 80 && average < 90) {
  console.log('B');
} else if (average >= 75 && average < 80) {
  console.log('C');
} else if (average >= 60 && average < 75) {
  console.log('D');
} else {
  console.log('E');
}

// switch (average) {
//   case average >= 90 && average <= 100:
//     console.log(`Grade E`);
//     break;
//   case average >= 80:
//     console.log(`Grade D`);
//     break;
//   case average >= 75:
//     console.log(`Grade C`);
//     break;
//   case average >= 60:
//     console.log(`Grade B`);
//     break;
//   default:
//     console.log('average invalid');
//     break;
// }
// switch (average) {
//   case average < 60:
//     console.log(`Grade E`);
//     break;
//   case average < 75:
//     console.log(`Grade D`);
//     break;
//   case average < 80:
//     console.log(`Grade C`);
//     break;
//   case average < 90:
//     console.log(`Grade B`);
//     break;
//   case average >= 90 && average <= 100:
//     console.log(`Grade A`);
//     break;
//   default:
//     console.log('average invalid');
//     break;
// }
