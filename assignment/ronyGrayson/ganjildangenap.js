const nilaiMaximum=20;

for( let i=1; i<=nilaiMaximum; i++){

const bilanganGanjil= i%2 !==0;

if(bilanganGanjil){
    console.log(`${i} adalah bilangan ganjil`);
} else {
    console.log(`${i} adalah bilangan genap`);
}
}