// Terdapat sebuah range angka dengan nilai 5. Kemudian terdapat sebuah range
// pangkat dengan nilai 3. Lakukan nested looping untuk menampilkan hasil
// perpangkatan 1, 2, dan 3 dari masing masing nilai (15). Rules nya sebagai berikut
// a. Terdapat 2 looping (nested), dimana outer loop nya adalah range angka 5
// dan inner loop nya adalah range pangkat 3.
// b. Lakukan looping sebanyak 3 kali pada setiap range angka (15), sehingga
// dapat menampilkan hasil dari pangkat1, 2, 3 pada angka 1. Kemudian hasil
// dari pangkat1, 2, 3 pada angka 2 dst.
// c. Print hasil perpangkatan dengan format berikut “{nilai} pangkat
// {pangkat} = {hasil}” dimana hasil didapatkan dari operator pangkat(**)
// d. Setiap selesai melakukan looping pada 1 angka, pisahkan outputnya
// dengan angka selanjutnya menggunakan
// “console.log(“===================”)"

const rangeAngka = 5;
const rangePangkat = 3;

for(let i=1; i<=rangeAngka; i++){
    for(let j=1; j<=rangePangkat; j++){
        let hasil=i**j;
        console.log(`${i} pangkat ${j} = ${hasil}`);
    }
    console.log("===========================")
}