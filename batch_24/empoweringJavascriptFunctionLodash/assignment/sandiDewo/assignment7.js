const _ = require('lodash');

//* Soal 1 

const nilaiPerSemester = [85, 90, 78.5, 92.25, 67.5, 75.27, 85, 97.25];

const totalDanRataRata = nilaiPerSemester.reduce(
  (acc, nilaiSekarang, index) => {
    if (index.length === 0) {
      acc.semesterGanjil = 0;
      acc.semesterGenap = 0;
      return acc;
    } else if (index % 2 === 0) {
      // Ganjil: indeks 0, 2, 4, ...
      acc.semesterGanjil += nilaiSekarang;
      acc.rataRataGanjil = acc.semesterGanjil / (index / 2 + 1); // Rata-rata ganjil
    } else {
      acc.semesterGenap += nilaiSekarang;
      acc.rataRataGenap = acc.semesterGenap / (index / 2 + 1); // Rata-rata genap
    //   console.log(index);
    }
    return acc;
  },
  { semesterGanjil: 0, semesterGenap: 0 }
);
console.log(totalDanRataRata); // Output: { ganjil: 256.5, genap: 0 }

console.log('\n=================SOAL2===================\n');


//* Soal 2

const contohRestparameter = (...params) => {
  const arrayBilanganGenap = [];
  const arrayBilanganGanjil = [];

  params.forEach((num) => {
    if (num % 2 === 0) {
      arrayBilanganGenap.push(num);
    } else {
      arrayBilanganGanjil.push(num);
    }
  });
  return {
    bilanganGenap: arrayBilanganGenap,
    bilanganGanjil: arrayBilanganGanjil
  };
};

console.log(contohRestparameter(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

console.log('\n=================SOAL3===================\n');

//* Soal 3
const iniFunction = (...arr) => {
  const hasil = arr.map((siswa) => {
    const totalNilai = siswa.nilaiNilai.reduce((acc, nilai) => acc + nilai, 0);
    const rataRataNilai = totalNilai / siswa.nilaiNilai.length;
    const newName = siswa.nama.toUpperCase();
    siswa.nama = newName; // Mengubah nama siswa menjadi huruf kapital
    return { ...siswa, rataRataNilai };
  });
  const nilaiLebihDariRataRata = hasil.filter((siswa) => siswa.rataRataNilai > 85);
  nilaiLebihDariRataRata.sort((a, b) => b.id - a.id);
    return nilaiLebihDariRataRata;
};

const arrayObjectSiswa = [
  { id: 1100, nama: "Budi", jurusan: "Sistem Komputer", nilaiNilai: [80, 90, 75] },
  { id: 1210, nama: "Siti", jurusan: "Teknik Informatika", nilaiNilai: [90, 100, 67] },
  { id: 1232, nama: "Andi", jurusan: "Sistem Informasi", nilaiNilai: [78, 80, 100] },
  { id: 4324, nama: "Dewi", jurusan: "Teknik Komputer", nilaiNilai: [88, 60, 50] },
  { id: 5612, nama: "Rina", jurusan: "Sistem Komputer", nilaiNilai: [92, 75, 78] },
  { id: 1645, nama: "Joko", jurusan: "Teknik Informatika", nilaiNilai: [80, 60, 90] },
  { id: 972, nama: "Sari", jurusan: "Sistem Informasi", nilaiNilai: [95, 100, 100] },
];
console.log(iniFunction(...arrayObjectSiswa));

console.log('\n=================SOAL4===================\n');

const people = [
  { name: 'Joko', age: 30, nationality: 'Indonesia' },
  { name: 'Ridwan Hanif', age: 40, nationality: 'Malaysia' },
  { name: 'Angelina Christie', age: 30, nationality: 'Indonesia' },
  { name: 'Songpatakot', age: 40, nationality: 'Thailand' },
  { name: 'Ryu Osaki', age: 50, nationality: 'Japan' },
  { name: 'Frank Ocean', age: 30, nationality: 'Canada' },
  { name: 'Grace Liu', age: 50, nationality: 'Singapore' },
  { name: 'Hadi Kurniawan', age: 40, nationality: 'Indonesia' },
  { name: 'Ivan', age: 30, nationality: 'Indonesia' },
  { name: 'Abdullah Judy', age: 60, nationality: 'Malaysia' }
];

const usiaBawah35 = people.filter((person) => person.age < 35);
const groupedByNationality = _.groupBy(usiaBawah35, 'nationality');
// console.log('Usia di bawah 35 tahun:', usiaBawah35);
console.log('Dikelompokkan berdasarkan kewarganegaraan:', groupedByNationality);