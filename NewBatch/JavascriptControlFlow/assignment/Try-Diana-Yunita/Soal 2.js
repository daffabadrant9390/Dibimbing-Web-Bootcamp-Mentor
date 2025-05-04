// Perhitungan rata-rata nilai siswa

let nilai = [65, 100, 98, 80, 89, 90];
let total = 0;

for (let i = 0; i < nilai.length; i++){
    total += nilai[i];
}
let rataRata = total/nilai.length;
console.log(`Rata-rata dari nilai tersebut adalah = ${rataRata}`);
