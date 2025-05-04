//Menampilkan bilangan pangkat menggunakan Nested Loop

const angka = 2;
const pangkat = 10;
let hasil = 1;

if (pangkat === 0){
    hasil = 1;
}else{
    let pangkatPositif = Math.abs (pangkat);

    for (let i = 1; i <= pangkatPositif; i++){ //jumlah perkalian berdasarkan pangkat
        let temp = 0;
        for (let j = 1; j <= angka; j++){ //mengalikan angka dengan penjumlahan berulang
            temp += hasil;
        }
        hasil = temp;
    }

    //jika pangkat negatif
    if (pangkat < 0){ 
        hasil = 1/hasil;
    }
}
console.log(`Hasil dari ${angka} pangkat ${pangkat} = ${hasil}`);
