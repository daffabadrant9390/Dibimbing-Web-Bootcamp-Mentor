/**
 * Perpangkatan Menggunakan Nested Loop
 * 
 * - Buat dua looping: outer loop untuk angka 1-5, dan inner loop untuk pangkat 1-3.
 * - Tampilkan hasil perpanngkatan dengan format "{nilai} pangkat {pangkat} = {hasil}".
 *   consolee.log("===================").
 * 
 * Ekspektasi Output::
 *  1. Output mencerminkan pemahaman terhadap conditional dan looping.
 *  2. Format output sesuai intruksi.
 *  2. Tidak ada hardcode hasil, student diharapkan memahami logika dan implementasi program.
 */

for (let nilai = 1; nilai <= 5; nilai++) {
    console.log(`Perpangkatan untuk nilai: ${nilai}`);
    for (let pangkat = 1; pangkat <= 3; pangkat++) { // Inner loop untuk pangkat 1-3
        const hasil = nilai ** pangkat; // Menghitung nilai pangkat 

        // Menampilkan hasil dengan format yang diinginkan
        console.log(`${nilai} pangkat ${pangkat} = ${hasil}`);

    }

    console.log("===================");
    console.log("Selesai menghitung perpangkatan");
}