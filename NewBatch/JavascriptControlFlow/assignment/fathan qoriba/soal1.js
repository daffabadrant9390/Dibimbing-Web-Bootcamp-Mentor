// ! Soal No 1
for(i=1; i<=20; i++){
    if(i%2===0){
        console.log(`${i} merupakan bilangan genap`)
    }if(i%2!==0){
        console.log(`${i} merupakan bilangan ganjil`)
    }if(i%4===0){
        console.log(`${i} habis dibagi dengan 4`)
    }if(i%6===0){
        console.log(`${i} habis dibagi dengan 6`)
    }if(i%4===0 && i%6===0){
        console.log(`${i} habis dibagi angka 4 dan 6`)
    }if(i%3===0 || i%5===0){
        console.log(`${i} habis dibagi dengan 3 atau 5`)
    }
    console.log('--------------------');

}