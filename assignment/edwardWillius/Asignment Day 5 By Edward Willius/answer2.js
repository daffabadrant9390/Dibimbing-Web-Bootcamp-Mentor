const namaSiswa = 'Gabriel';
const nilaiSemester1 = 85;
const nilaiSemester2 = 95.20;
const nilaiSemester3 = 67.75;
const nilaiSemester4 = 78;
const nilaiSemester5 = 75;

let nilaiAkhir = 0;
const nilaiRataRata = (nilaiSemester1 + nilaiSemester2 + nilaiSemester3 + nilaiSemester4 + nilaiSemester5) / 5;
nilaiAkhir = nilaiRataRata;

console.log(`nilaiAkhir dari ${namaSiswa}: ${nilaiAkhir}`);

if (nilaiAkhir >= 90 && nilaiAkhir < 100) {
    console.log(`${namaSiswa} mendapat grade A`);
} else if (nilaiAkhir >= 80 && nilaiAkhir < 90) {
    console.log(`${namaSiswa} mendapat grade B`);
} else if (nilaiAkhir >= 75 && nilaiAkhir < 80) {
    console.log(`${namaSiswa} mendapat grade C`);
} else if (nilaiAkhir >= 60 && nilaiAkhir < 75) {
    console.log(`${namaSiswa} mendapat grade D`);
} else if (nilaiAkhir < 60) {
    console.log(`${namaSiswa} mendapat grade E`);
}
