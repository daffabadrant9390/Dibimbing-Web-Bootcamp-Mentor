// Outer loop untuk angka 1 hingga 5

for (let i = 1; i <= 5; i++) {
    console.log("==========================");

    // Inner loop untuk pangkat 1 hingga 3
    for (let j = 1; j <= 3; j++) {
        // Menghitung hasil pangkat
        let hasil = Math.pow(i, j);
        console.log(`${i} pangkat ${j} = ${hasil}`);
    }

}