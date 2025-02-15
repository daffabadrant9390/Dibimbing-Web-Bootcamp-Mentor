// Outer loop untuk angka dari 1 hingga 5
for (let angka = 1; angka <= 5; angka++) {
  // Inner loop untuk pangkat dari 1 hingga 3
  for (let pangkat = 1; pangkat <= 3; pangkat++) {
    // Hitung hasil perpangkatan
    let hasil = angka ** pangkat;
    // Print hasil dengan format yang ditentukan
    console.log(`${angka} pangkat ${pangkat} = ${hasil}`);
  }
  // Pisahkan output dengan garis
  console.log("===================");
}
