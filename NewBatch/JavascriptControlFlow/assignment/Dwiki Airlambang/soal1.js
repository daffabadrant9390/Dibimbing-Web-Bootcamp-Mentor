// Lakukan looping dari angka 1 hingga 20.
// Untuk setiap angka, berikan kondisi dan cetak output jika angka tersebut:
// Bilangan ganjil: tampilkan “{bilangan} merupakan bilangan Ganjil”.
// Bilangan genap: tampilkan “{bilangan} merupakan bilangan Genap”.
// Habis dibagi 4: tampilkan “{bilangan} habis dibagi dengan 4”.
// Habis dibagi 6: tampilkan “{bilangan} habis dibagi dengan 6”.
// Habis dibagi 4 dan 6: tampilkan “{bilangan} habis dibagi dengan angka 4 dan 6”.
// Habis dibagi 3 atau 5: tampilkan “{bilangan} habis dibagi dengan angka 3 atau 5”.


for (let i = 0; i <= 20; i++) {
   if (i % 2 === 0 ) {
    console.log(i,"Merupakan Bilangan Genap")    
   } else {
    console.log(i,"Merupakan Bilangan Ganjil")
   }
   
   if (i % 4 === 0 && i % 6 === 0 ) {
    console.log(i,"Habis dibagi dengan 4 dan 6")
   } else {
    if (i % 4 === 0) {
        console.log(i,"Habis dibagi 4")
    }
    if (i % 6 === 0) {
        console.log(i,"Habis dibagi 6")
    }    
   }
   if (i % 3 === 0 || i % 5 === 0 ) {
    console.log(i,"Habis dibagi dengan 3 atau 5")
   }
}