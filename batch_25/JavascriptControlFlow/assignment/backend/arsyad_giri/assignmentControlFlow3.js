/**
 * Buat dua looping: outer loop untuk angka 1–5, dan inner loop untuk pangkat 1–3.
 * Tampilkan hasil perpangkatan dengan format “{nilai} pangkat {pangkat} = {hasil}”.
 * Pisahkan setiap set hasil angka dengan console.log("===================")
 */

for (let i = 1; i <= 5; i++) {
    for (let x = 1; x <= 3; x++) {
        const hasil = i ** x;
        console.log(`${i} pangkat ${x} = ${hasil}`);
    }
    console.log("===================");
}
console.log('-------------------');