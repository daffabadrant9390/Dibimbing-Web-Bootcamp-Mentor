/**
 * Hitung rata-rata dari array of array nilai students.
 * - Setiap array index outer adalah semester
 * - Array inner adalah seluruh nilai pada 1 semester
 * 
 * const arrayNilai = [
 *  [87.5, 90, 92.5],
 *  [76.9, 85.6, 90],
 *  [60, 100, 85.25]
 * ];
 * 
 * - Print rata-rata dari setiap semester
 * - Ambil nilai rata-rata dari semester 1, 2, 3 masukan kedalam variable
 */

const arrayNilaiSiswa = [
  [87.5, 90, 92.5], // Semester 1
  [76.9, 85.6, 90], // Semester 2
  [60, 100, 85.25] // Semester 3
];

let rataRataSemester1 = 0;
let rataRataSemester2 = 0;
let rataRataSemester3 = 0;

//* For Loop untuk outer looping (semester)
for (let i = 0; i < arrayNilaiSiswa.length; i++) {
  // console.log("array semester ke-", i, " : ", arrayNilaiSiswa[i]);

  console.log(`================ Semester ${i + 1} ===============`);
  const arrayNilaiSaatIni = arrayNilaiSiswa[i];
  console.log("arrayNilaiSaatIni: ", arrayNilaiSaatIni);

  let totalNilaiSemesterSaatIni = 0;

  //? Inner Looping untuk menghitung rata-rata nilai pada setiap semester
  for(let j = 0; j < arrayNilaiSaatIni.length; j++) {
    // console.log("Nilai ke-", j, " : ", arrayNilaiSaatIni[j]);
    totalNilaiSemesterSaatIni += arrayNilaiSaatIni[j];
  }

  const rataRataNilaiSemesterSaatIni = totalNilaiSemesterSaatIni / arrayNilaiSaatIni.length;
  console.log(`Total nilai pada semester ${i+1} adalah : ${totalNilaiSemesterSaatIni}`);
  console.log(`Rata-rata nilai pada semester ${i+1} adalah : ${rataRataNilaiSemesterSaatIni}`);
  console.log("============================\n");

  //* Memasukkan rata-rata nilai semester ke-i ke dalam variable yang sesuai
  if((i + 1) === 1) {
    rataRataSemester1 = rataRataNilaiSemesterSaatIni;
  } else if((i + 1) === 2) {
    rataRataSemester2 = rataRataNilaiSemesterSaatIni;
  } else if((i + 1) === 3) {
    rataRataSemester3 = rataRataNilaiSemesterSaatIni;
  }
}

console.log("\n===== Rata-rata Semester =====");
console.log(`Rata-rata Semester 1: ${rataRataSemester1}`);
console.log(`Rata-rata Semester 2: ${rataRataSemester2}`);
console.log(`Rata-rata Semester 3: ${rataRataSemester3}`);
console.log("================================");
console.log("\n===== DONE =====");
console.log("Terima kasih telah mengerjakan soal ini!");
console.log("Semoga sukses dalam belajar JavaScript!");