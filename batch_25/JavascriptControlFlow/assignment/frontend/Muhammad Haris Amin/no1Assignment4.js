//looping angka dari 1-20
//cetak angka dan kondisi jika genap atau ganjil
//cetak angka jika habis dibagi 4, habis dibagi 6, habis dibagi 4 dan 6, habis dibagi 3 atau 5, dan jika tidak habis dibagi 4,6,3, dan 5 tampilkan bilangan saja

for (let i = 1; i <= 20; i++){
    let keterangan = `bilangan ${i} adalah bilangan ${i % 2 ==0 ? "genap" : "ganjil"}`;

    if (i % 4 == 0 && i % 6 == 0){
        keterangan += " danhabis dibagi 4 dan 6"
    }
    else if (i % 4 == 0){
        keterangan += " dan habis dibagi 4"
    }
    else if (i % 6 == 0){
        keterangan += " dan habis dibagi 6"
    }
    else if (i % 3 == 0 || i % 5 == 0){
        keterangan += " dan habis dibagi 3 atau 5"
    }
    else {
        keterangan += " dan tidak habis dibagi 4, 6, 3, dan 5"
    }
    console.log(keterangan);

}