// ================= Soal 4 =================
const _ = require("lodash");

function filterDanGroupBy(arr) {
  const usiaDibawah35 = arr.filter((p) => p.age < 35);
  const groupedByNationality = _.groupBy(usiaDibawah35, `nationality`);
  return groupedByNationality;
}

const people = [
  { name: "Joko", age: 30, nationality: "Indonesia" },
  { name: "Ridwan Hanif", age: 40, nationality: "Malaysia" },
  { name: "Angelina Christie", age: 30, nationality: "Indonesia" },
  { name: "Songpatakot", age: 40, nationality: "Thailand" },
  { name: "Ryu Osaki", age: 50, nationality: "Japan" },
  { name: "Frank Ocean", age: 30, nationality: "Canada" },
  { name: "Grace Liu", age: 50, nationality: "Singapore" },
  { name: "Hadi Kurniawan", age: 40, nationality: "Indonesia" },
  { name: "Ivan", age: 30, nationality: "Indonesia" },
  { name: "Abdullah Judy", age: 60, nationality: "Malaysia" },
];

console.log("soal4:", filterDanGroupBy(people));
