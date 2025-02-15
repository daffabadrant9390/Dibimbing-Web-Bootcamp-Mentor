const nilaiMaximum=20;
for(let i=1; i <= nilaiMaximum; i++) {

const isHabisDibagiEmpat = i % 4 === 0;

if(isHabisDibagiEmpat) {
    console.log(`${i} habis dibagi 4`);
} else {
    console.log(i);
}
}