//* 1. Introduction to destructuring object
//* 2. Introduction to test if var not applicable in block scope

const array1 = ['pisang', 'mangga', 'apel'];
const array2 = ['manggis', ...array1];
// console.log('\n', array1);
// console.log('\n', ...array1, '\n');
// console.log(array2);

/**
 * Ketika membuat variable, javascript membuat memori untuk arrayNilai1
 * - memori tersebut memiliki key / reference
 * - arrayNilai2 mengambil key / reference dari memori si arrayNilai1
 * - arrayNilai1 dan arrayNilai2 merujuk pada MEMORI yang sama.
 *
 *
 * Tetapi kalau pakai [...], dia membuat MEMORI baru untuk arrayNilai2
 */
const arrayNilai1 = [1, 2, 3, 4, 5];
const arrayNilai2 = [...arrayNilai1];

arrayNilai2.push(99);
arrayNilai2.shift();

// console.log('\n arrayNilai1: ', arrayNilai1);
// console.log('\n arrayNilai2: ', arrayNilai2, '\n');

const arrayNilai3 = [5, 10, 4, 99, 100];
const menghitungVolumeBalok = (
  panjang = 10,
  lebar = 50,
  tinggi = 20,
  ...restParameter
) => {
  console.log('\n panjang: ', panjang);
  console.log('\n lebar: ', lebar);
  console.log('\n tinggi: ', tinggi);
  console.log('\n rest parameter: ', restParameter);
};

// const volumeBalok2 = menghitungVolumeBalok(...arrayNilai3);

// Bisa pakai slice, filter
const arrayContoh = [1, 2, 3, 4, 5];
const arrayContohDiFilter = arrayContoh.filter((arrayContohElement) => {
  return arrayContohElement !== 4;
});

const arrayBaru = [90, 100, ...arrayContohDiFilter];
console.log(arrayBaru);
