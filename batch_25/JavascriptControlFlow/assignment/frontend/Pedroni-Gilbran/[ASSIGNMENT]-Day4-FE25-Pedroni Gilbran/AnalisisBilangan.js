/**Looping dari Angka 1 - 20 */

for (let i = 1; i <=20; i++){
    //Blok Pertama untuk menampilkan bilangan ganjil atau genap
    if (i % 2 !== 0){
        console.log(`Angka ${i} Adalah Bilangan Ganjil`)
    }else {
        console.log(`Angka ${i} Adalah Bilangan Genap`)
    }


if (i % 4 === 0 && i % 6 === 0){
    console.log(`Angka ${i} Adalah Angka Habis Dibagi 4 dan 6`)
}else if (i % 4 === 0){
    console.log(`Angka ${i} Adalah Angka Habis Dibagi 4`)
}else if (i % 6 === 0){
    console.log(`Angka ${i} Adalah Angka Habis Dibagi 6`)
}else if (i % 3 === 0 || i % 5 === 0){
    (`Angka ${i} Adalah Angka Habis Dibagi 3 atau 5`)
}else{
    console.log(i);
}
console.log("------------------------");

}
