const _ = require('lodash');

/**
 * LODASH
 * 7. Buatlah sebuah function untuk memfilter sebuah array of object 
 * - Filterlah array dimana usia harus lebih dari 20 tahun dan kurang dari 30 tahun.
 * - Groupping array yang telah di filter berdasarkan city / pekerjaan.
 * 
 */

const filterArrayObjectAndGroup = function (array, groupBy) {
  const filteredArray = _.filter(array, (person) => {
    return person.age >= 20 && person.age <= 30;
  });

  const groupedFilteredArray = _.groupBy(filteredArray, groupBy);

  return groupedFilteredArray;
}

const arrayPerson = [
  { name: 'Alice', age: 25, city: 'New York' },
  { name: 'Bob', age: 30, city: 'San Francisco' },
  { name: 'Charlie', age: 35, city: 'New York' },
  { name: 'David', age: 28, city: 'Chicago' },
  { name: 'Eve', age: 21, city: 'San Francisco' },
];

const arrayPersonFiltered = filterArrayObjectAndGroup(arrayPerson, 'city');
console.log(arrayPersonFiltered);