const nilaiMaximum=20;

for(let i=1; i <=nilaiMaximum; i++) {

    const habisDibagi4 = i %4 ===0;
    const habisDibagi6 = i %6 ===0;
    if(habisDibagi4 && habisDibagi6) {
        console.log(`${i} habis dibagi 4 dan 6`);
    } 
    else if(habisDibagi4) {
        console.log(`${i} habis dibagi 4`);
    } 
    else if(habisDibagi6){
        console.log(`${i} habis dibagi 6`)
    }else {
        console.log(i);
    }
}