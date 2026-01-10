/*
Soal 3: Perpangkatan Menggunakan Nested Loop

Buat dua looping: outer loop untuk angka 1–5, dan inner loop untuk pangkat 1–3.
Tampilkan hasil perpangkatan dengan format “{nilai} pangkat {pangkat} = {hasil}”.
Pisahkan setiap set hasil angka dengan console.log("===================").
*/

const rangeAngka = [1,2,3,4,5];
const rangePangkat = [1,2,3];

function perpangkatan(rangeAngka, rangePangkat) {

console.log('=== Program Looping dimulai ===')
    
    for (let i = 0; i < rangeAngka.length; i++) {
        const angka = rangeAngka[i]
            for (let j = 0; j < rangePangkat.length; j++) {
                const pangkat = rangePangkat[j]
                let hasilPangkat = i ** j;
            console.log(`${angka} pangkat ${pangkat} = ${hasilPangkat}`);
        }

console.log('===================')
        }

return rangeAngka, rangePangkat;
}

console.log(perpangkatan(rangeAngka, rangePangkat))
console.log('=== Program Looping berakhir ===')