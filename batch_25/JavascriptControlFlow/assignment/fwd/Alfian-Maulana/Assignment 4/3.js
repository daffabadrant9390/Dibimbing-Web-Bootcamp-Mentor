for (let angka = 1; angka <= 5; angka++) {        // Outer loop
  
  for (let pangkat = 1; pangkat <= 3; pangkat++) {      // Inner loop
      let hasil = Math.pow(angka, pangkat);
    console.log(`${angka} pangkat ${pangkat} = ${hasil}`);
  }

  // Pemisah antar angka
  console.log("===================");
}