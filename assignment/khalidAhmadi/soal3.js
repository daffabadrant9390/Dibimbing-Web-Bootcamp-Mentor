/*
*Menentukan bilangan pangkat 1, 2, 3 dari range bilangan 1-5:

Terdapat sebuah range angka dengan nilai 5.
Kemudian terdapat sebuah range pangkat dengan nilai 3.
Lakukan nested looping untuk menampilkan hasil perpangkatan 1, 2, dan 3
dari masing masing nilai (1-5).

*Rules nya sebagai berikut:
- Terdapat 2 looping (nested), dimana:
    outer loop nya adalah range angka 5 dan
    inner loop nya adalah range pangkat 3.

- Lakukan looping sebanyak 3 kali pada setiap range angka (1-5),
sehingga dapat menampilkan hasil dari pangkat 1, 2, 3 pada angka 1.
Kemudian hasil dari pangkat 1, 2, 3 pada angka 2 dst.

- Print hasil perpangkatan dengan format berikut “{nilai} pangkat {pangkat} = {hasil}”
dimana hasil didapatkan dari operator pangkat (**).

- Setiap selesai melakukan looping pada 1 angka,
pisahkan outputnya dengan angka selanjutnya menggunakan “console.log(“===================”)"
*/

//ANSWER

let intRange = 5;
let intPower = 3;
for (let i=1; i<=intRange; i++) {
    for (let j=1; j<=intPower; j++) {
        console.log(`${i} pangkat ${j} = ${i**j}`);
    }

    console.log(`===================`); // vs code saya tidak bisa menggunakan ""
}