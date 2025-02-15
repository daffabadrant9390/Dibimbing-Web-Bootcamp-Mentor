const nilaiMaximum=20;
for(let i=1; i <=nilaiMaximum; i++) {
    const habisDibagi6= i % 6===0;

    if(habisDibagi6){
        console.log(`${i} habis dibagi 6`);
    } else {
        console.log(i);
    }
}