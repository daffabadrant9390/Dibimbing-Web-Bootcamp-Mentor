//ASSIGNMENT  DAY 4

/*AUTHOR : Ista Cahya Khoeriyyah
  DUEDATE   : 18 Oktober 2025
  
/*soal_3 Perpangkatan Menggunakan Nested Loop
* Buat dua looping: outer loop untuk angka 1–5, dan inner loop untuk pangkat 1–3.
* Tampilkan hasil perpangkatan dengan format “{nilai} pangkat {pangkat} = {hasil}”.
* Pisahkan setiap set hasil angka dengan console.log("===================").
 */

for (let angka = 1; angka <= 5; angka++) {
  console.log("perpangkatan untuk angka ${angka}");
  console.log("===================");

  for (let pangkat = 1; pangkat <= 3; pangkat++) {
    let hasil = 1;

    //hitung perpangkatan manual
    for (let i = 1; i <= pangkat; i++) {
      hasil *= angka;
    }
    console.log(`${angka} pangkat ${pangkat} = ${hasil}`);
  }

  console.log("");
}
