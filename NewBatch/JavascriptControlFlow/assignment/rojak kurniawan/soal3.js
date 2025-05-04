const nilaiA = 5;
const nilaiB = 3;

for (let i = 1; i <= nilaiA; i++) {
  for (let j = 1; j <= nilaiB; j++) {
    const hasilPangkat = i ** j;
    console.log(`${i} pangkat ${j} = ${hasilPangkat}`);
  }
  console.log("===================");
}
