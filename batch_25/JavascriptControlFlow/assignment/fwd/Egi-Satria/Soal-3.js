/* 
Soal 3: Perpangkatan Menggunakan Nested Loop
●	Buat dua looping: outer loop untuk angka 1–5, dan inner loop untuk pangkat 1–3.
●	Tampilkan hasil perpangkatan dengan format “{nilai} pangkat {pangkat} = {hasil}”.
●	Pisahkan setiap set hasil angka dengan console.log("===================").

*/

let angka = [1, 2, 3, 4, 5];
let pangkat = [1, 2, 3];

for (let i = 0; i < angka.length; i++) {
    console.log(`Set angka ${angka[i]}`);
    console.log(`==================`);
    for (let j = 0; j < pangkat.length; j++) {
        console.log(`${angka[i]} pangkat ${pangkat[j]} = ${angka[i] ** pangkat[j]}`);
    }
    console.log(`==================`);
    console.log(``);
}
