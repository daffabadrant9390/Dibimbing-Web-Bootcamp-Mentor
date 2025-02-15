/**
 * 
 * Soal 1
 * 
 * Terdapat sebuah variabel dengan nilai 20. Lakukan perulangan (looping) pada variabel tersebut dimulai dari angka 1. Kemudian untuk setiap angka dari (1-20), 
 * berikan kondisi berdasarkan rules berikut :
Bilangan Ganjil
    Bilangan Ganjil adalah bilangan yang tidak habis dibagi 2 (menyisakan sisa bagi)
    Tampilkan / print dengan format “{bilangan} merupakan bilangan Ganjil”
Bilangan Genap
    Bilangan Genap adalah bilangan yang habis dibagi 2 (tidak menyisakan sisa bagi)
    Tampilkan / print dengan format “{bilangan} merupakan bilangan Genap”
Bilangan habis dibagi 4
    Bilangan yang habis dibagi 4 (tidak menyisakan sisa bagi)
    Tampilkan / print dengan format “{bilangan} habis dibagi dengan 4”
Bilangan habis dibagi 6
    Bilangan yang habis dibagi 6 (tidak menyisakan sisa bagi)
    Tampilkan / print dengan format “{bilangan} habis dibagi dengan 6”
Bilangan habis dibagi 4 DAN 6
    Bilangan yang habis dibagi dengan angka 4 DAN 6 (tidak menyisakan sisa bagi) jika dibagi oleh kedua angka tersebut.
    Tampilkan / print dengan format “{bilangan} habis dibagi dengan angka 4 dan 6”
Bilangan habis dibagi 3 ATAU 5
    Bilangan yang habis dibagi dengan angka 3 ATAU 5 (tidak menyisakan sisa bagi) jika dibagi oleh kedua angka tersebut.
    Tampilkan / print dengan format “{bilangan} habis dibagi dengan angka 3 atau 5”
 */


for (let i = 1; i < 20; i++) {
    //print bil ganjil
    if(i % 2 !== 0) {
        console.log(i, "merupakan bilangan ganjil")
    }

    if(i % 2 === 0) {
        console.log(i, "merupakan bilangan genap")
    }

    if((i % 4 === 0) && (i % 6 === 0)) {
        console.log(i, "habis dibagi dengan angka 4 & 6")
    }

    if((i % 3 === 0) || (i % 5 === 0)) {
        console.log(i, "habis dibagi dengan angka 3 atau 5")
    }
    
}

console.log('--------------------------------------------------');

/**
 * 
 * Seorang siswa bernama Gabriel telah menyelesaikan studi nya selama 5 semester, dimana masing-masing semester dia akan menerima 1 nilai akhir. 
 * Hitung rata-rata dari 5 semester tersebut, kemudian tentukan Grade yang didapatkan Gabriel dengan rules yang telah ditentukan.
Berikut adalah nilai akhir dari Gabriel untuk masing-masing semesternya:
Semester 1 : 85
Semester 2 : 95.20
Semester 3 : 67.75
Semester 4 : 78
Semester 5 : 75
Berikut adalah rules untuk menentukan Grade dari nilai Gabriel
A : rata-rata nilai lebih besar sama dengan 90 DAN kurang dari sama dengan 100
B : rata-rata nilai lebih besar sama dengan 80 DAN kurang dari 90
C : rata-rata nilai lebih besar sama dengan 75 DAN kurang dari 80
D : rata-rata nilai lebih besar sama dengan 60 DAN kurang dari 75
E : rata-rata nilai kurang dari 60
 */

let Semester1 = 85
let Semester2 = 95.20
let Semester3 = 67.75
let Semester4 = 78
let Semester5 = 75

const rata2Nilai = (Semester1 + Semester2 + Semester3 + Semester4 + Semester5) / 5;
console.log(rata2Nilai)
if(rata2Nilai >= 90 >=100) {
    console.log ("Selamat nilai A)")
}
else if (rata2Nilai >= 80 && rata2Nilai <= 90) {
    console.log ("Selamat nilai B)")
}
else if (rata2Nilai >= 75 && rata2Nilai <= 80) {
    console.log ("Selamat nilai C)")
}
else if (rata2Nilai >= 60 && rata2Nilai <= 75) {
    console.log ("Selamat nilai D)")
}
else {
    console.log ("Selamat nilai E)")
}


console.log('--------------------------------------------------');
/**
 * 
Terdapat sebuah range angka dengan nilai 5. Kemudian terdapat sebuah range pangkat dengan nilai 3. 
Lakukan nested looping untuk menampilkan hasil perpangkatan 1, 2, dan 3 dari masing masing nilai (1-5). 
Rules nya sebagai berikut
-Terdapat 2 looping (nested), dimana outer loop nya adalah range angka 5 dan inner loop nya adalah range pangkat 3.
-Lakukan looping sebanyak 3 kali pada setiap range angka (1-5), sehingga dapat menampilkan hasil dari pangkat 1, 2, 3 pada angka 1. 
Kemudian hasil dari pangkat 1, 2, 3 pada angka 2 dst. 
-Print hasil perpangkatan dengan format berikut “{nilai} pangkat {pangkat} = {hasil}” dimana hasil didapatkan dari operator pangkat (**)
-Setiap selesai melakukan looping pada 1 angka, pisahkan outputnya dengan angka selanjutnya menggunakan “console.log(“===================”)" 

 */

for ( let i = 1; i <=5; i++) {

    for ( let j =1;j <= i ;j++ ) {
        console.log(`${i} pangkat ${j} = ${i ** j}`)
    }
    console.log("===================");
}