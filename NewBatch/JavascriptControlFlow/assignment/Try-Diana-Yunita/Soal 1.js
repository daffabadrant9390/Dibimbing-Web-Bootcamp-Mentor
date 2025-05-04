// Analisis bilangan dalam range tertentu

let angkaAwal = 1;
let angkaAkhir = 30;

for (let i = angkaAwal; i <= angkaAkhir; i++){
    //Bilangan ganjil dan genap
    if (i % 2 === 0){
        console.log(`${i} merupakan bilangan genap`);
    }else{
        console.log(`${i} merupakan bilangan ganjil`);
    }

    //Bilangan habis dibagi 4 dan 6, dibagi 4 saja atau dibagi 6 saja
    if (i % 4 === 0 && i % 6 === 0){
        console.log(`${i} habis dibagi 4 dan 6`);
    }else if (i % 4 === 0){
        console.log(`${i} habis dibagi 4 saja`);
    }else if (i % 6 === 0){
        console.log(`${i} habis dibagi 6 saja`);
    }

    //Bilangan habis dibagi 3 ATAU 5
    if (i % 3 === 0 || i % 5 === 0) {
        console.log(`${i} habis dibagi 3 atau 5`);
    }

    console.log("------------------------------");
}

