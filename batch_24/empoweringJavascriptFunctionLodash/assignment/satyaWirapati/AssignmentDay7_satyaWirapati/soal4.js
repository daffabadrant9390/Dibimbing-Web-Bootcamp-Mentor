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
    { name: 'Ivan', age: 30, nationality: 'Indonesia' },
    { name: 'Abdullah Judy', age: 60, nationality: 'Malaysia' }
];


const hasil = _.chain(people).filter((p) => p.age < 35).groupBy("nationality").value();

console.log(hasil);