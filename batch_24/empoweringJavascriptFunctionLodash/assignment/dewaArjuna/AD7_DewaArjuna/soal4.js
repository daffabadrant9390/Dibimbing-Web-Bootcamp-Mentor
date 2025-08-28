const _ = require('lodash');

// Fungsi untuk filter usia
function filterByAge(peopleArray, maxAge) {
  return peopleArray.filter(person => person.age < maxAge);
}

// Fungsi untuk groupBy negara
function groupByNationality(filteredArray) {
  return _.groupBy(filteredArray, 'nationality');
}

// Fungsi utama gabungkan semua langkah
function prosesDataPekerja(data, usiaMaksimum) {
  const pekerjaMuda = filterByAge(data, usiaMaksimum);
  const hasilGroup = groupByNationality(pekerjaMuda);
  return hasilGroup;
}

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

const hasil = prosesDataPekerja(people, 35);
console.log(hasil);
