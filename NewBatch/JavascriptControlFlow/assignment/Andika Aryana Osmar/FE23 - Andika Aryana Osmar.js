// lakukan looping dari angka 1 sampai 100

for (let i = 1; i <= 100; i++) {
    // jika angka genap,tampilkan "genap"
    if (i % 2 === 0) {
        console.log(`${i} genap`);
    } else {
        // jika angka ganjil,tampilkan "ganjil"
        console.log(`${i} ganjil`);
    }
}

// bilangan habis dibagi 4 maka tampilkan "habis dibagi 4"
for (let i=1; i <= 100; i++) {
    if (i % 4 === 0) {
        console.log(`${i}habis dibagi 4`);
          
    }
}
// jika bilangan habis di bagi 6 maka tampilkan "habis dibagi 6"
for (let i=1; i <= 100; i++) {
    if (i % 6 === 0) {
        console.log(`${i}habis dibagi 6`);
    
    }
}

//bilangan habis dibagi 4 dan 6 maka tampilkan "habis dibagi 4 dan 6"
for (let i=1; i <= 100; i++) {
    if (i % 4 === 0 && i % 6 === 0) {
        console.log(`${i}habis dibagi 4 && ${i}habis dibagi 6`);
    }
}

//bilangan habis dibagi 3 atau 5 maka tampilkan "habis dibagi 3 atau 5"
for (let i=1; i <= 100; i++) {
    if (i % 3 == 0) {
        console.log(`${i}habis dibagi 3`);
    }else if (i % 5 === 0) {
            console.log(`${i}habis dibagi 5`);
        }
    }


// soal no 2

// nilai semester gabriel untuk 5 semseter

let nilaisemestergabriel =[85, 95.20, 67.75, 78, 75];

// ratarata nilai gabriel 5 semester
const rataratanilaigabriel= nilaisemestergabriel.reduce((acc,nilai) => acc + nilai,0)/nilaisemestergabriel.length;
console.log('rataratanilaigabriel:', rataratanilaigabriel);

//tentukan grade nilai gabriel 5 semester
let gradegabriel;
if (rataratanilaigabriel < 100 && rataratanilaigabriel >=90) {
    gradegabriel = 'A';
}else if (rataratanilaigabriel < 90 && rataratanilaigabriel >=80) {
        gradegabriel = 'B';
}else if(rataratanilaigabriel < 80 && rataratanilaigabriel >70) {
            gradegabriel = 'c';
}else if (rataratanilaigabriel < 70 && rataratanilaigabriel >=60) {
                gradegabriel = 'D';
}else if (rataratanilaigabriel < 60 && rataratanilaigabriel >=0){
                    gradegabriel = 'E';
                }else {
                    console.log('nilai tidak valid');
                }
console.log('grade gabriel:', gradegabriel);

// cetak ratarata nilai dan grade gabriel
console.log('ratarata nilai gabriel:', rataratanilaigabriel, 'grade gabriel:', gradegabriel);


// soal no 3

//membuat outer loop untuk angka 1–5

let outerloop = 1;
for(let i = 1; i <= outerloop; i++) {

}

outerloop = 2;
for (let i = 1; i <= outerloop; i++) {

}

outerloop = 3;
for (let i = 1; i <= outerloop; i++) {

}
    
outerloop = 4;
for (let i = 1; i <= outerloop; i++) {

}

outerloop = 5;
for (let i = 1; i <= outerloop; i++) {

}
 
// membuat inner loop untuk angka 1-3

let innerloop = 1;
for (let i = 1; i <= innerloop; i++) {

}

innerloop = 2;
for (let i = 1; i <= innerloop; i++) {

}
innerloop = 3;
for (let i = 1; i <= innerloop; i++) {

}

// tampilkan hasil perpangkatan dengan format {nilai} pangkat {pangkat} = {hasil}

for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 3; j++) {
        let hasil = i ** j;
        console.log(`${i}pangkat ${j} = ${hasil}`);
        console.log("===================");
    }
}


 


