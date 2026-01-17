/**
 * Terdapat sebuah array of object yang berisi object mahasiswa
 * - Buatlah sebuah function untuk menentukan mahasiswa yang bisa lulus ujian dan tidak
 * - Mahasiswa dianggap lulus jika memiliki nilai rata-rata >= 80
 * 
 * * Function tersebut menerima parameter berupa 
 * 1. array of object mahasiswa (array of object)
 * 2. nama kelas (string)
 * 3. sorting (boolean) - default value true
 * 
 * Cara kerja function:
 * - Looping setiap object mahasiswa
 * - Hitung nilai rata-rata dari setiap mahasiswa
 * - Modify object mahasiswa dengan menambahkan properti baru "rataRataNilai" dari hasil perhitungan
 * - Filter mahasiswa yang lulus ujian (rata-rata >= 80)
 * - Jika sorting true, urutkan mahasiswa berdasarkan rata-rata nilai dari yang tertinggi ke terendah
 * - Kembalikan array mahasiswa yang lulus ujian
 * 
 * * NOTE: Jika possible, gabungkan seluruh HOF yang digunakan dalam bentuk chaining
 */

const students = [
  {
    name: "Citra Lestari",
    major: "Sistem Komputer",
    gender: "female",
    scores: [80, 75, 85, 78, 82, 77, 84, 50, 79, 83]
  },
  {
    name: "Dewi Anggraini",
    major: "Teknik Informatika",
    gender: "female",
    scores: [88, 90, 85, 89, 87, 91, 86, 88, 90, 89]
  },
  {
    name: "Eko Prabowo",
    major: "Sistem Informasi",
    gender: "male",
    scores: [70, 72, 68, 75, 78, 80, 74, 73, 77, 76]
  },
  {
    name: "Fitri Handayani",
    major: "Sistem Komputer",
    gender: "female",
    scores: [92, 90, 95, 93, 91, 94, 89, 92, 90, 93]
  }
];

const memFormatArrayMahasiswa = (arrayMahasiswa = []) => {
  return arrayMahasiswa.map((objectMahasiswa) => {
    const scoresSiswa = objectMahasiswa.scores || []; // fallback value jika scores null / undefined
    const rataRataNilaiSiswa = scoresSiswa.reduce(function(totalNilaiSaatIni, nilaiSaatIni) {
      return totalNilaiSaatIni += nilaiSaatIni;
    }, 0) / scoresSiswa.length;

    // Membuat struktur object baru dengan menambahkan rata-rata nilai
    return {
      ...objectMahasiswa,
      rataRataNilai: rataRataNilaiSiswa
    };
  });
}

const memfilterArrayMahasiswaLulusUjian = ({
  arrayMahasiswa = [],
  namaKelas,
  isButuhSorting = true
}) => {
  //* 1 Mendapatkan rata-rata nilai dari setiap mahasiswa
  const formattedArrayMahasiswa = memFormatArrayMahasiswa(arrayMahasiswa);

  //* 2 Filter mahasiswa yang lulus ujian
  const filterArrayMahasiswaLulusUjian = formattedArrayMahasiswa.filter(function(objectMahasiswa) {
    return objectMahasiswa.rataRataNilai >= 80;
  });

  //* 3 Sorting mahasiswa berdasarkan rata-rata nilai
  if(isButuhSorting) {
    return filterArrayMahasiswaLulusUjian.sort((a, b) => b.rataRataNilai - a.rataRataNilai);
  }

  return filterArrayMahasiswaLulusUjian;
}


const mahasiswaLulusUjian = memfilterArrayMahasiswaLulusUjian({
  arrayMahasiswa: students,
  namaKelas: "Teknik Informatika",
  isButuhSorting: true
});
console.log(mahasiswaLulusUjian);

// const memfilterArrayMahasiswaLulusUjian = ({
//   arrayMahasiswa = [],
//   namaKelas,
//   isButuhsorting = true
// }) => {
//   //* 1. Format array mahasiswa dengan menambahkan rata-rata nilai
//   const formattedArrayMahasiswa = arrayMahasiswa.map(
//     (objectMahasiswa) => {
//       //? Hitung rata-rata nilai mahasiswa
//       const scoresSiswa = objectMahasiswa.scores;
//       const totalNilaiSiswa = scoresSiswa.reduce((totalNilaiSaatIni, nilaiSaatIni) => {
//         return totalNilaiSaatIni += nilaiSaatIni
//       }, 0);
//       const rataRataNilaiSiswa = totalNilaiSiswa / scoresSiswa.length;

//       return {
//         ...objectMahasiswa,
//         rataRataNilai: rataRataNilaiSiswa
//       }
//     }
//   );
//   const filterArrayMahasiswaLulusUjian = formattedArrayMahasiswa.filter((objectMahasiswa) => {
//     //? Filter mahasiswa jika rata-rata >= 85
//     return objectMahasiswa.rataRataNilai >= 85;
//   });

//   //* Sorting jika isButuhSorting true

//   if(isButuhsorting) {
//     return filterArrayMahasiswaLulusUjian
//       .sort((a, b) => b.ratRataNilai - a.rataRataNilai);
//   }

//   return filterArrayMahasiswaLulusUjian;
// }

// const mahasiswaLulusUjian = memfilterArrayMahasiswaLulusUjian({
//   arrayMahasiswa: students,
//   namaKelas: "Teknik Informatika",
//   isButuhsorting: true
// });
// console.log(mahasiswaLulusUjian);