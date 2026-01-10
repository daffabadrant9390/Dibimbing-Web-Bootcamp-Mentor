// Soal 4: Manipulasi Array Menggunakan Lodash
//     • Terdapat sebuah array of object data pekerja di suatu perusahaan
//     • Filter lah array of object tersebut berdasarkan usia, sehingga hanya terdapat pekerja dengan usia dibawah 35 tahun.
//     • Kemudian groupBy array tersebut berdasarkan negara asal mereka menggunakan lodash (_.groupBy(array, “nationality”));
//     • Data array of object

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

import _ from "lodash" 

function filterAndGroupPeople(arrayPeople) {
  const youngPeople = arrayPeople.filter(person => person.age <35)
  return _.groupBy(youngPeople, 'nationality')
}

console.log(filterAndGroupPeople(people))
