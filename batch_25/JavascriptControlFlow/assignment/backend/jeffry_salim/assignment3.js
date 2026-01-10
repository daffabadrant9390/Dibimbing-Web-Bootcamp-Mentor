// Soal 3: Perpangkatan Menggunakan Nested Loop

// Buat dua looping: outer loop untuk angka 1–5, dan inner loop untuk pangkat 1–3.
// Tampilkan hasil perpangkatan dengan format “{nilai} pangkat {pangkat} = {hasil}”.
// Pisahkan setiap set hasil angka dengan console.log("===================").


console.log("=======================================");

//outer loop 1-5
let hasilPangkat = 0;       //inisialisasi variable
for (let i = 1; i <= 5; i++){

    //inner loop 1-3
    for (let j = 1; j <= 3; j++) {
        hasilPangkat = i ** j;
        console.log(`${i} pangkat ${j} = ${hasilPangkat}`)  //smenghitung pangkat outer loop terhadap inner loop
    }

    //pemisah
    console.log("=========================================")
}