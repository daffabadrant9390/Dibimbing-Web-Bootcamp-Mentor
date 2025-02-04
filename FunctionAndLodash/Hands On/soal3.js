/**
 * 3. Terdapat sebuah array of object dimana masing masing object memiliki property
 * - nama
 * - umur
 * - pekerjaan
 * - gaji
 *
 * Buatlah sebuah function yang menerima array of object tersebut, kemudian filter array tersebut
 * - Filter array sehingga hanya mengembalikan object dengan
 *  - gaji lebih dari 10.000.000
 *  - umur kurang dari 30 tahun
 *
 * Sehingga akan mengembalikan array dengan object person yang memenuhi kriteria tersebut (kaya dan muda)
 */

const filterArrayByUmurDanGaji = function (arrayData, isNeedSort = false) {
  const arraySudahDifilter = arrayData.filter(function (objectArrayData) {
    return objectArrayData.umur < 30 && objectArrayData.gaji > 10000000;
  });

  if (isNeedSort) {
    return arraySudahDifilter.sort((a, b) => a.gaji - b.gaji);
  } else {
    return arraySudahDifilter;
  }
};

const arrayData = [
  {
    nama: 'Meuthia',
    umur: 23,
    pekerjaan: 'Software Enginner',
    gaji: 15000000,
  },
  {
    nama: 'Budi',
    umur: 21,
    pekerjaan: 'Junior Network Engineer',
    gaji: 8500000,
  },
  {
    nama: 'John Doe',
    umur: 31,
    pekerjaan: 'Lead Apps Developer',
    gaji: 50000000,
  },
  {
    nama: 'Cynthia Abigail',
    umur: 28,
    pekerjaan: 'Cusomer Care Service Specialist',
    gaji: 10500000,
  },
];

const arrayDiFilter = filterArrayByUmurDanGaji(arrayData, true);
console.log('array baru: ', arrayDiFilter);
