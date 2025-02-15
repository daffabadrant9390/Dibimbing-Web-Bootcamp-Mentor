const namaSiswa = "Gabriel";
const semester1 = 85;
const semester2 = 95.2;
const semester3 = 67.75;
const semester4 = 78;
const semester5 = 75;
let grade = "";
const nilaiRatarata =
  (semester1 + semester2 + semester3 + semester4 + semester5) / 5;

console.log(nilaiRatarata);

console.log(
  `============================================================================`
);

if (nilaiRatarata >= 90 && nilaiRatarata <= 100) {
  console.log(`Nama Siswa : ${namaSiswa} mendapatkan grade ${(grade = "A")}`);
} else if (nilaiRatarata >= 80 && nilaiRatarata < 90) {
  console.log(`Nama Siswa : ${namaSiswa} mendapatkan grade ${(grade = "B")}`);
} else if (nilaiRatarata >= 75 && nilaiRatarata < 80) {
  console.log(`Nama Siswa : ${namaSiswa} mendapatkan grade ${(grade = "C")}`);
} else if (nilaiRatarata >= 60 && nilaiRatarata < 75) {
  console.log(`Nama Siswa : ${namaSiswa} mendapatkan grade ${(grade = "D")}`);
  // rata-rata nilai > 60 otomatis menjadi else
} else {
  console.log(`Nama Siswa : ${namaSiswa} mendapatkan grade ${(grade = "E")}`);
}
