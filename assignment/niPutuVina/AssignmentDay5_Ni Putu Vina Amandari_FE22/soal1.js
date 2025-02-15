/*
Terdapat sebuah variabel dengan nilai 20. Lakukan perulangan (looping) pada variabel tersebut dimulai dari angka 1. 
Kemudian untuk setiap angka dari (1-20), berikan kondisi berdasarkan rules berikut :
a.  Bilangan Ganjil
    i.  Bilangan Ganjil adalah bilangan yang tidak habis dibagi 2 (menyisakan sisa bagi)
    ii. Tampilkan / print dengan format “{bilangan} merupakan bilangan Ganjil”
b. Bilangan Genap
    i.  Bilangan Genap adalah bilangan yang habis dibagi 2 (tidak menyisakan sisa bagi)
    ii. Tampilkan / print dengan format “{bilangan} merupakan bilangan Genap”
c. Bilangan habis dibagi 4
    i.  Bilangan yang habis dibagi 4 (tidak menyisakan sisa bagi)
    ii. Tampilkan / print dengan format “{bilangan} habis dibagi dengan 4”
d. Bilangan habis dibagi 6
    i.  Bilangan yang habis dibagi 6 (tidak menyisakan sisa bagi)
    ii. Tampilkan / print dengan format “{bilangan} habis dibagi dengan 6”
e. Bilangan habis dibagi 4 DAN 6
    i.  Bilangan yang habis dibagi dengan angka 4 DAN 6 (tidak menyisakan sisa bagi) jika dibagi oleh kedua angka tersebut.
    ii. Tampilkan / print dengan format “{bilangan} habis dibagi dengan angka 4 dan 6”
f. Bilangan habis dibagi 3 ATAU 5
    i.  Bilangan yang habis dibagi dengan angka 3 ATAU 5 (tidak menyisakan sisa bagi) jika dibagi oleh kedua angka tersebut.
    ii. Tampilkan / print dengan format “{bilangan} habis dibagi dengan angka 3 atau 5”
*/

const bilangan = 20;
for(let i = 1; i <= bilangan; i++){
    if(i % 2 === 0){
        if(i % 4 === 0 && i % 6 === 0){
            console.log(`${i} habis dibagi dengan angka 4 dan 6`);
        } else if(i % 4 === 0){
            console.log(`${i} habis dibagi dengan 4`);
        } else if(i % 6 === 0){
            console.log(`${i} habis dibagi dengan angka 6`);
        } else {
            console.log(`${i} merupakan bilangan Genap`);
        }
    } else if (i % 2 !== 0){
        if(i % 3 === 0 || i % 5 === 0){
            console.log(`${i} habis dibagi dengan angka 3 atau 5`);
        } else {
            console.log(`${i} merupakan bilangan Ganjil`);
        }
    }
}