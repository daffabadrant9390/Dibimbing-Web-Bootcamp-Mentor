// No 1
const nilai = 20
let i = 1
while(i<=nilai){
    
    if (i % 4 === 0 && i % 6 === 0){
        console.log(`${i} habis dibagi 4 dan 6`);
    } else if (i % 4 === 0 ){
        console.log(`${i} habis dibagi 4`);
    } else if (i % 6 === 0){
        console.log(`${i} habis dibagi 6`);
    } else if (i % 3 === 0 || i % 5 === 0){
        console.log(`${i} habis dibagi 3 atau 5`);
    } else if (i % 2 !== 0){
        console.log(`${i} merupakan bilangan ganjil`);
    } else if (i % 2 === 0){
        console.log(`${i} merupakan bilangan genap`);
    }

    i++
}

// No 2
const namaMhs = "Gabriel";
const s1 = 85
const s2 = 95.20
const s3 = 67.75
const s4 = 78
const s5 = 75
let nilaiSiswa = (s1+s2+s3+s4+s5)/5

if (nilaiSiswa < 60){
    console.log(`${namaMhs} mendapat Grade E`)
} else if (nilaiSiswa >= 60 && nilaiSiswa < 75){
    console.log(`${namaMhs} mendapat Grade D`)
} else if (nilaiSiswa >= 75 && nilaiSiswa < 80){
    console.log(`${namaMhs} mendapat Grade C`)
} else if (nilaiSiswa >= 80 && nilaiSiswa < 90){
    console.log(`${namaMhs} mendapat Grade B`)
} else if (nilaiSiswa >= 90 && nilaiSiswa <= 90){
    console.log(`${namaMhs} mendapat Grade A`)
}

// No 3
const angka = 5
let pangkat = 3

for(i=1; i<=angka; i++){
    for(j=1; j<=pangkat; j++){
        console.log(`${i} pangkat ${j} = ${i**j}`)
    }
    console.log("===================")
}