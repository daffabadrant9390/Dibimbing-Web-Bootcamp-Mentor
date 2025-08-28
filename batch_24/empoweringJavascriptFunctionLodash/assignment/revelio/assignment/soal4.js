import _ from 'lodash';

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

const pekerjaMuda = people.filter(person => person.age < 35);
const groupByNationality = _.groupBy(pekerjaMuda, 'nationality');

console.log('Soal 4:', groupByNationality);
