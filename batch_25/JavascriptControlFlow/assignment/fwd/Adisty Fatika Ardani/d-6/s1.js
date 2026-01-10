for (let bilangan = 1; bilangan <= 20; bilangan++) {
    
    // BLOK PERTAMA: Cek Ganjil atau Genap
    if (bilangan % 2 == 1) {
        console.log(`${bilangan} merupakan bilangan Ganjil`);
    } else if (bilangan % 2 == 0) {
        console.log(`${bilangan} merupakan bilangan Genap`);
    }
    
    // BLOK KEDUA: Cek Pembagi (4, 6, 3, 5)
    if (bilangan % 4 == 0 && bilangan % 6 == 0) {
        console.log(`${bilangan} habis dibagi dengan angka 4 dan 6`);
    } else if (bilangan % 4 == 0) {
        console.log(`${bilangan} habis dibagi dengan 4`);
    } else if (bilangan % 6 == 0) {
        console.log(`${bilangan} habis dibagi dengan 6`);
    } else if (bilangan % 3 == 0 || bilangan % 5 == 0) {
        console.log(`${bilangan} habis dibagi dengan angka 3 atau 5`);
    } else {
        console.log(bilangan);
    }
    
    console.log(""); 
}