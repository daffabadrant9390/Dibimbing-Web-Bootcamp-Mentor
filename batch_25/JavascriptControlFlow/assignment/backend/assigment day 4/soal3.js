// Soal 3: Perpangkatan Menggunakan Nested Loop

// Buat dua looping: outer loop untuk angka 1–5, dan inner loop untuk pangkat 1–3.
// Tampilkan hasil perpangkatan dengan format “{nilai} pangkat {pangkat} = {hasil}”.
// Pisahkan setiap set hasil angka dengan console.log("===================").



for (let angka=1; angka <= 5; angka++){
    for (let pangkat = 1; pangkat <= 3; pangkat++){
        hasil = angka ** pangkat
        console.log(`${angka} pangkat ${pangkat} = ${hasil}`)
    }
    console.log(`===================`)
}