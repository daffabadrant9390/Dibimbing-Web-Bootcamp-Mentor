// Soal 3: Perpangkatan Menggunakan Nested Loop

// Buat dua looping: outer loop untuk angka 1–5, dan inner loop untuk pangkat 1–3.
// Tampilkan hasil perpangkatan dengan format “{nilai} pangkat {pangkat} = {hasil}”.
// Pisahkan setiap set hasil angka dengan console.log("===================").

// Solution
// Outer loop untuk angka 1 sampai 5
for (let i = 1; i <= 5; i++) {
    // Inner loop untuk pangkat 1 sampai 3
    for (let j = 1; j <= 3; j++) {
      let hasil = Math.pow(i, j); // Menghitung perpangkatan
      console.log(`${i} pangkat ${j} = ${hasil}`);
    }
    // Pisahkan setiap set hasil dengan tanda "==================="
    console.log("===================");
  }
  