/**
 * Analasis bilangan 1-20
 * 
 * - Lakukan loooping dari angka 1 hingga 20
 * - Untuk setiap angka, berikan kondisi dan cetak output jika angka tersebut:
 *  - Blok IF, ELSE, ELSE IF pertama:
 *   - Bilangan ganjil: tampilkan "{bilangan} merupakan bilangan ganjil".
 *   - Bilangan genap: tampilkan "{bilangan} merupakan bilangan genap".
 *  - Blok IF, ELSE, ELSE IF kedua:
 *   - Habis dibagi 4: tampilkan "{bilangan} habis dibagi 4".
 *   - Habis dibagi 6: tampilkan "{bilangan} habis dibagi 6".
 *   - Habis dibagi 4 dan 6: tampilkan "{bilangan} habis dibagi dengan angka 4 dan 6".
 *   - Habis dibagi 3 atau 5: tampilkan "{bilangan habis dibagi dengan angka 3 atau 5".
 *   - Jika bilangan tidak habis dibagi 4, 6, 3, dan 5 maka tampilkan bilangan nya saja
 */

for (let bilangan = 1; bilangan <= 20; bilangan++) {
    console.log(`Analisis bilangan: ${bilangan}`);

    // Blok IF, ELSE, ELSE IF pertama
    if (bilangan % 2 !== 0) {
        console.log(`${bilangan} merupakan bilangan ganjil`);
    } else {
        console.log(`${bilangan} merupakan bilangan genap`);
    }

    // Blok IF, ELSE, ELSE IF kedua
    if (bilangan % 4 === 0 && bilangan % 6 === 0) {
        console.log(`${bilangan} habis dibagi dengan angka 4 dan 6`);
    } else if (bilangan % 4 === 0) {
        console.log(`${bilangan} habis dibagi 4`); // Cek habis dibagi 4
    } else if (bilangan % 6 === 0) {
        console.log(`${bilangan} habis dibagi 6`); // Cek habis dibagi 6
    } else if (bilangan % 3 === 0 || bilangan % 5 === 0) {
        console.log(`${bilangan} habis dibagi angka 3 atau 5`); // Cek habis dibagi 3 atau 5
    } else {
        console.log(bilangan); // Jika kondisi di atas tidak terpenuhi, tampilkan bilangan saja 
    }
     
}

    return;