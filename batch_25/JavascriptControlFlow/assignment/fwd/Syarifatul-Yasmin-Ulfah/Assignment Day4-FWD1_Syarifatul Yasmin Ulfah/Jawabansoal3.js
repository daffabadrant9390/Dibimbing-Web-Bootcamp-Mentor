/* Perpangkatan Menggunakan Nested Loop
●	Buat dua looping: outer loop untuk angka 1–5, dan inner loop untuk pangkat 1–3.
●	Tampilkan hasil perpangkatan dengan format “{nilai} pangkat {pangkat} = {hasil}”.
●	Pisahkan setiap set hasil angka dengan console.log("===================").
*/

const arrayAngka = [1, 2, 3, 4, 5];
const arrayPangkat = [1, 2, 3];

for (let i = 0; i <arrayAngka.length; i++) {
    const nilai = arrayAngka[i];
    console.log(`===================`);

    for (let j = 0; j < arrayPangkat.length; j++) {
        const pangkat = arrayPangkat[j];
        let hasil = nilai ** pangkat;
        console.log(`${nilai} pangkat ${pangkat} = ${hasil}`);
    }
}