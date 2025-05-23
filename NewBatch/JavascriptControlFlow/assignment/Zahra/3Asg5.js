// * Terdapat sebuah range angka dengan nilai 5. 
// Kemudian terdapat sebuah range pangkat dengan nilai 3. 
// Lakukan nested looping untuk menampilkan hasil perpangkatan 1, 2, dan 3 dari masing masing nilai (1-5). 
// * Rules nya sebagai berikut
// 1. Terdapat 2 looping (nested), dimana outer loop nya adalah range angka 5 dan inner loop nya adalah range pangkat 3.
// 2. Lakukan looping sebanyak 3 kali pada setiap range angka (1-5), 
// sehingga dapat menampilkan hasil dari pangkat 1, 2, 3 pada angka 1. Kemudian hasil dari pangkat 1, 2, 3 pada angka 2 dst.
// 3. Print hasil perpangkatan dengan format berikut “{nilai} pangkat {pangkat} = {hasil}” dimana hasil didapatkan dari operator pangkat (**)
// 4. Setiap selesai melakukan looping pada 1 angka, pisahkan outputnya dengan angka selanjutnya menggunakan “console.log(“===================”)"

//Jawaban:
//1. Define batasan buat looping
const rangeAngka = 5;
const rangePangkat = 3;

//2. Looping untuk angka base/yang mau dipangkatkan
for (let i = 1; i <= rangeAngka; i++) {
    //3. Looping nested untuk pangkat
    for (let j = 1; j <= rangePangkat; j++) {
        const hasil = i ** j;
        console.log(`${i} pangkat ${j} = ${hasil}`);
    }
    //4. Pisahkan output dengan angka selanjutnya
    console.log("===================");
}
