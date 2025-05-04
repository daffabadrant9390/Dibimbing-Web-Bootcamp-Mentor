for (let bilangan = 1; bilangan <= 20; bilangan++) {
    console.log(`\nAnalisis untuk bilangan ${bilangan}:`);

    // cek bilangan genap atau ganjil
    if (bilangan % 2 === 0) {
        console.log(`${bilangan} adalah bilangan genap`);
    } else {
        console.log(`${bilangan} adalah bilangan ganjil`);
    }
    // cek habis dibagi 4 dan 6
    if (bilangan % 4 === 0 && bilangan % 6 === 0) {
        console.log(`${bilangan} habis dibagi 4 dan 6`);
    } else if (bilangan % 4 === 0) {
        console.log(`${bilangan} habis dibagi 4`);
    } else if (bilangan % 6 === 0) {
        console.log(`${bilangan} habis dibagi 6`);
    } else {
        console.log(`${bilangan} tidak habis dibagi 4 atau 6`);
    }

    // cek habis dibagi 3 atau 5
    if (bilangan % 3 === 0 || bilangan % 5 === 0) {
        console.log(`${bilangan} habis dibagi 3 atau 5`);
    }   

    
}