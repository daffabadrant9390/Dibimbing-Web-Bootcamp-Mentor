/**
 * 8. Buatlah sebuah function yang dapat melakukan
 * - Filter sebuah array of object sehingga hanya mengembalikan semester ganjil DAN mataKuliah 'Kalkulus'
 * - Map sebuah array of object sehingga hanya mengembalikan salah satu property saja -> nilai
 * - Sort sebuah array yang telah di map tadi berdasarkan parameter, ascending atau descending
 */

const sortingNilaiMahasiswa = (arr, sortType) => {
  const arrayNilai = arr
    .filter((objectMahasiswa) => {
      return (
        objectMahasiswa?.semester % 2 !== 0 &&
        objectMahasiswa?.mataKuliah?.toLowerCase() === 'kalkulus'
      );
    })
    .map((objectMahasiswa) => objectMahasiswa?.nilai);

  return arrayNilai.sort((a, b) => {
    if (sortType === 'asc') {
      return a - b;
    } else {
      return b - a;
    }
  });
};

const arrMahasiswa1 = [
  { mataKuliah: 'Kalkulus', semester: 1, nilai: 90 },
  { mataKuliah: 'Kalkulus', semester: 2, nilai: 80 },
  { mataKuliah: 'Fisika', semester: 3, nilai: 70 },
  { mataKuliah: 'Kalkulus', semester: 4, nilai: 60 },
  { mataKuliah: 'Kalkulus', semester: 5, nilai: 50 },
  { mataKuliah: 'Kalkulus', semester: 6, nilai: 40 },
  { mataKuliah: 'Kalkulus', semester: 7, nilai: 30 },
  { mataKuliah: 'Kalkulus', semester: 8, nilai: 20 },
];
const hasilSorting = sortingNilaiMahasiswa(arrMahasiswa1, 'asc');
console.log(hasilSorting);
