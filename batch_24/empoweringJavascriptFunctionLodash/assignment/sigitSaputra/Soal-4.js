const lodash = require('lodash');

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

function filterByAge(peopleArray, maxAge) {
  return lodash.filter(peopleArray, (person) => person.age < maxAge);
}

function groupByNationality(peopleArray) {
  return lodash.groupBy(peopleArray, 'nationality');
}

function filterAndGroupPeople(peopleArray, maxAge) {
  const filtered = filterByAge(peopleArray, maxAge);
  const grouped = groupByNationality(filtered);
  return grouped;
}

const result = filterAndGroupPeople(people, 35);
console.log(result);
