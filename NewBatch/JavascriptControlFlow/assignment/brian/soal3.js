const rangeAngka = 5;
const rangePangkat = 3;

for (let angka = 1; angka <= rangeAngka; angka++) {
  for (let pangkat = 1; pangkat <= rangePangkat; pangkat++) {
    const hasil = angka ** pangkat;
    console.log(angka + " pangkat " + pangkat + " = " + hasil);
  }
  console.log("===================");
}
