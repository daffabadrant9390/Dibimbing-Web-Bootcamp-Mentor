/*
Soal 3: Perpangkatan Menggunakan Nested Loop
Buat dua looping: outer loop untuk angka 1–5, dan inner loop untuk pangkat 1–3.
Tampilkan hasil perpangkatan dengan format “{nilai} pangkat {pangkat} = {hasil}”.
Pisahkan setiap set hasil angka dengan console.log("===================").
*/

for (let i = 1 ; i <= 5 ; i++) {
    for (let j = 1 ; j <= 3 ; j++) {
        console.log(`${i} pangkat ${j} = ${i**j}`)   
    }

   
        console.log("===================");
}