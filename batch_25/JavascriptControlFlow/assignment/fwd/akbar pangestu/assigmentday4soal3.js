for (let i = 1; i <= 5; i++) {
  //Outer loop buat angka 1–5
  console.log("Angka: " + i);

  for (let j = 1; j <= 3; j++) {
    //Inner loop buat pangkat 1–3
    let hasil = i ** j; // operator ** (perpangkatan)
    console.log(i + " pangkat " + j + " = " + hasil);
  }

  //Pemisah antar angka
  console.log("===================");
}
