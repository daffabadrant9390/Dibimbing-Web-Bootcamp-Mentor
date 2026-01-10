/**
 * outer loop 1 hingga 5
 * inner loop 1 hingga 3
 * 
 * tampilkan setiap set hasil angka 
 */

console.log("=====================\n");

for (let a=1; a<=5; a++) {

    for (let b=1; b<=3; b++) {
        console.log(`${a} pangkat ${b} = ${a**b}`);
    }

    console.log("\n=====================\n");
}