/*
Soal 1: Analisis Bilangan 1 - 20

Lakukan looping dari angka 1 hingga 20.
Untuk setiap angka, berikan kondisi dan cetak output jika angka tersebut:
Blok IF, ELSE, ELSE IF  pertama:
Bilangan ganjil: tampilkan “{bilangan} merupakan bilangan Ganjil”.
Bilangan genap: tampilkan “{bilangan} merupakan bilangan Genap”.
Blok IF, ELSE, ELSE IF kedua:
Habis dibagi 4: tampilkan “{bilangan} habis dibagi dengan 4”.
Habis dibagi 6: tampilkan “{bilangan} habis dibagi dengan 6”.
Habis dibagi 4 dan 6: tampilkan “{bilangan} habis dibagi dengan angka 4 dan 6”.
Habis dibagi 3 atau 5: tampilkan “{bilangan} habis dibagi dengan angka 3 atau 5”.
Jika bilangan tidak habis dibagi 4, 6, 3, dan 5 maka tampilkan bilangan nya saja
*/
angka = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

function analisisBilangan(angka) {
 for (let i = 0; i < angka.length; i++) {
// versi logika pertama
        if (angka[i] % 2 === 0) {
            console.log(angka[i] + " merupakan bilangan Genap");
        } else { console.log(angka[i] + " merupakan bilangan Ganjil")}

// versi logika kedua
        if (angka[i] % 4 === 0) {
            console.log(angka[i] + " habis dibagi dengan 4")
        } else if (angka[i] % 6 === 0) {
            console.log(angka[i] + " habis dibagi dengan 6")
        } else if (angka[i] % 4 === 0 && angka[i] % 6 === 0) {
            console.log(angka[i] + " habis dibagi dengan angka 4 dan 6")
        } else if (angka[i] % 3 === 0 || angka[i] % 5 === 0) {
            console.log(angka[i] + " habis dibagi dengan angka 3 atau 5")
        } else {
            console.log(angka[i])
        }
    console.log("====================") // agar rapih tiap barisnya
    }
    return angka;
}

console.log(analisisBilangan(angka))
