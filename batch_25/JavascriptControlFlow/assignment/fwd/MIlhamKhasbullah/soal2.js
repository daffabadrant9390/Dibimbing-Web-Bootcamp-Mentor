// Data detail untuk Siswa bernama Gabriel menggunakan object
const namaSiswa = {
  nama: "Gabriel",
  semester: 5,
  nilai: [85, 95, 20, 67, 75, 78, 75],
};

let totalNilai = 0;
for (let i = 0; i < namaSiswa.nilai.length; i++) {
  totalNilai += namaSiswa.nilai[i];
}

let rataRata = totalNilai / namaSiswa.nilai.length;

let gradeSiswa = "";
if (rataRata >= 90) {
  gradeSiswa = "A";
} else if (rataRata >= 80 && rataRata <= 89.99) {
  gradeSiswa = "B";
} else if (rataRata >= 70 && rataRata <= 79.99) {
  gradeSiswa = "C";
} else if (rataRata >= 60 && rataRata <= 74.99) {
  gradeSiswa = "D";
} else {
  gradeSiswa = "E";
}

console.log(
  `Nilai rata-rata ${namaSiswa.nama} adalah ${rataRata.toFixed(
    2
  )} dengan grade ${gradeSiswa}`
);
