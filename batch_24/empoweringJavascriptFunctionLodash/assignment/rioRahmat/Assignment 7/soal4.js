const _ = require('lodash');

const people = [
  { name: 'Joko', age: 30, nationality: 'Indonesia' },
  { name: 'Ridwan Hanif', age: 40, nationality: 'Malaysia' },
  { name: 'Angelina Christie', age: 30, nationality: 'Indonesia' },
  { name: 'Songpatakot', age: 40, nationality: 'Thailand' },
  { name: 'Ryu Osaki', age: 50, nationality: 'Japan' },
  { name: 'Frank Ocean', age: 30, nationality: 'Canada' },
  { name: 'Grace Liu', age: 50, nationality: 'Singapore' },
  { name: 'Hadi Kurniawan', age: 40, nationality: 'Indonesia' },
];

// 1. Filter pekerja usia < 35 tahun
const pekerjaDiBawah35 = _.filter(people, (person) => person.age < 35);

// 2. Group berdasarkan nationality
const hasilGroup = _.groupBy(pekerjaDiBawah35, 'nationality');

console.log(hasilGroup);