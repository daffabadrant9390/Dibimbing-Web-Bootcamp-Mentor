const filterBilanganGenap = (array) => {
  const bilanganGenap = array.filter((num) => num % 2 === 0);
  return bilanganGenap;
};

const angkaArray = [1, 4, 7, 10, 15, 20, 22, 35, 40, 50];
const hasilGenap = filterBilanganGenap(angkaArray);
console.log("Bilangan Genap:", hasilGenap);
