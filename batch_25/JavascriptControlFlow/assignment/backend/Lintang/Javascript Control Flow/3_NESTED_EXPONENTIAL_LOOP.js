/**
 * Buat dua looping: outer loop untuk angka 1–5, dan inner loop untuk pangkat 1–3.
 * Tampilkan hasil perpangkatan dengan format “{nilai} pangkat {pangkat} = {hasil}”.
 * Pisahkan setiap set hasil angka dengan console.log("===================").
 */

for (let nilai = 1; nilai <= 5; nilai++) {
  for (let pangkat = 1; pangkat <= 3; pangkat++) {
    const hasil = nilai ** pangkat;
    console.log(`${nilai} pangkat ${pangkat} = ${hasil}`);
  }

  // Tambahkan garis pemisah setelah inner loop selesai untuk satu angka
  console.log("===================");
}
