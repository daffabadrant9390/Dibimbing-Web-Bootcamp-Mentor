/**
 * looping 1-20
 * 
 *  jika bilangan ganjil print "{bilangan} merupakan bilangan Ganjil"
 *  jika bilangan genap print "{bilangan} merupakan bilangan Genap"
 * 
 *  bila bilangan bisa di bagi 4 print "{bilangan} habis dibagi 4"
 *  bila bilangan bisa di bagi 6 print "{bilangan} habis dibagi 6"
 *  bila bisa dibagi 4 dan 6 print "{bilangan} habis dibagi dengan angka 4 dan 6"
 *  bila bisa dibagi 3 dan 5 print "{bilangan} habis dibagi dengan angka 3 dan 5"
 *  jika tidak bisa dibagi 4, 6, 3, dan 5 tampilkan bilangan saja
 * 
 *  
 */

for (let bilangan = 1; bilangan <= 20; bilangan++) {
    if (bilangan%2 === 0) {
        console.log(`${bilangan} merupakan bilangan Genap`);
    } else {
        console.log(`${bilangan} merupakan bilangan Ganjil`);
    } 

    if (bilangan%4 === 0 && bilangan%6 === 0) {
        console.log(`${bilangan} habis dibagi dengan angka 4 dan 6`);
    }else if (bilangan%4 === 0) {
        console.log(`${bilangan} habis dibagi dengan 4`);
    }else if (bilangan%6 === 0) {
        console.log(`${bilangan} habis dibagi dengan 6`);
    }else if (bilangan%3 === 0 && bilangan%5 === 0) {
        console.log(`${bilangan} habis dibagi dengan angka 3 dan 5`);
    }else {
        console.log(`${bilangan} tidak bisa dibagi habis`);
    }
    
    console.log("\n==============================\n");
}