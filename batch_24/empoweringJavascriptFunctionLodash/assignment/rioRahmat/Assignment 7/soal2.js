function pisahBilangan(...angka) {
    if (angka.length < 10) {
        throw new Error("Minimal harus memasukkan 10 angka.");
        
    }

    const arrayBilanganGenap = angka.filter(num => num % 2 === 0);
    const arrayBilanganGanjil = angka.filter(num => num % 2 !== 0);

    return {
        arrayBilanganGenap,
        arrayBilanganGanjil
    };
}

// Contoh penggunaan:
try{
const hasil = pisahBilangan( 12,80,64,72, 81, 90, 13, 5, 4, 8,82);
console.log(hasil);
}
catch (err){
    (console.error(err.message));
}