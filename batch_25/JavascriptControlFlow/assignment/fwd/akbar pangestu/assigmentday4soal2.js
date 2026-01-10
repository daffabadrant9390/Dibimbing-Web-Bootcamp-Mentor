// let siswa = {
//     nama: "Akbar",
//     nilai5Semester: [85, 95.20, 67.75, 78, 75]
//     total = 0,
//     grade = " "

let siswa = {
  nama: "Akbar",
  nilai5Semester: [85, 95.2, 67.75, 78, 75],
  total: 0,
  grade: "",
};

//Looping untuk menghitung total dan rata rata
for (let i = 0; i < siswa.nilai5Semester.length; i++) {
  siswa.total += siswa.nilai5Semester[i];
}

let rataRata = siswa.total / siswa.nilai5Semester.length;

// menentukan grade nya
if (rataRata >= 90 && rataRata <= 100) {
  siswa.grade = "A";
} else if (rataRata >= 80 && rataRata <= 89.99) {
  siswa.grade = "B";
} else if (rataRata >= 75 && rataRata <= 74.99) {
  siswa.grade = "C";
} else if (rataRata >= 60 - 74.99) {
  siswa.grade = "D";
} else {
  siswa.grade = "E";
}

console.log("grade siswa: " + siswa.grade);
console.log("Rata-rata: " + rataRata);
