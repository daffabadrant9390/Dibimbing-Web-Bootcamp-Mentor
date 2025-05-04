// Outer loop untuk range angka (1-5)  
for (let angka = 1; angka <= 5; angka++) {  
    // Inner loop untuk range pangkat (1-3)  
    for (let pangkat = 1; pangkat <= 3; pangkat++) {  
        const hasil = angka ** pangkat;  
        console.log(`${angka} pangkat ${pangkat} = ${hasil}`);  
    }  
    // Tambahkan separator setelah selesai dengan 1 angka  
    console.log("===================");  
}