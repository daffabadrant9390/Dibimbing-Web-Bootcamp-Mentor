// Soal 3: Perpangkatan Menggunakan Nested Loop
// Buat dua looping: outer loop untuk angka 1–5, dan inner loop untuk pangkat 1–3.
// Tampilkan hasil perpangkatan dengan format “{nilai} pangkat {pangkat} = {hasil}”.
// Pisahkan setiap set hasil angka dengan console.log("===================").

let angkaTerakhir = 5;
let pangkat = 3;

const perpangkatan = (batas, pangkat) => {
  for (let i = 1; i <= batas; i++) {
    for (let j = 1; j <= pangkat; j++) {
      let hasil = i ** j;
      console.log(`${i} pangkat ${j} = ${hasil}`);
    }
    console.log("===================");
  }
};

perpangkatan(angkaTerakhir, pangkat);
