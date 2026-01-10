/*
Buat dua looping: outer loop untuk angka 1–5, dan inner loop untuk pangkat 1–3.
Tampilkan hasil perpangkatan dengan format “{nilai} pangkat {pangkat} = {hasil}”.
Pisahkan setiap set hasil angka dengan console.log("===================").
*/
for(let outer = 1; outer <=5 ; outer++)
    {
        for(let inner = 1; inner <= 3; inner++)
        console.log(`${outer} pangkat ${inner} = `, outer**inner)
        console.log("===================")
    }
