const value: number = 20;
const handleRender = (input: number): string[] => {
  const arr: string[] = [];
  for (let i = 1; i <= input; i++) {
    if (i % 4 === 0 && i % 6 === 0) {
      arr.push(`${i} habis dibagi dengan angka 4 dan 6`);
    } else if (i % 6 === 0) {
      arr.push(`${i} habis dibagi dengan 6`);
    } else if (i % 3 === 0 || i % 5 === 0) {
      arr.push(`${i} habis dibagi dengan angka 3 atau 5`);
    } else if (i % 4 === 0) {
      arr.push(`${i} habis dibagi dengan 4`);
    } else if (i % 2 === 0) {
      arr.push(`${i} habis dibagi dengan Genap`);
    } else {
      arr.push(`${i} merupakan bilangan Ganjil`);
    }
  }
  return arr;
};

console.log(handleRender(20).join("\n"));
