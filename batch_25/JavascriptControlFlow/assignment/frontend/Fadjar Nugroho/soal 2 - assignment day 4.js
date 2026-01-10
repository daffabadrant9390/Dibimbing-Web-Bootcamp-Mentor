/*Diketahui nilai siswa (Gabriel) untuk 5 semester: 85, 95.20, 67.75, 78, 75.
Hitung rata-rata nilai.
Tentukan grade akhir berdasarkan kriteria berikut:
A: 90–100
B: 80–89.99
C: 75–79.99
D: 60–74.99
E: < 60
Cetak nilai rata-rata dan grade akhir siswa.
Note: Gunakan array untuk menyimpan seluruh nilai dari 5 semester kedalam 1 variabel
*/
let nilaiGabriel = [85, 95.20, 67.75, 78, 75];
let total = 0, rataRata = 0;
for(let i = 0; i < nilaiGabriel.length; i++)
{
    total += nilaiGabriel[i];
}
rataRata = total/nilaiGabriel.length;
console.log(`Nilai rata-rata Gabriel adalah ${rataRata}`);
if(rataRata >= 90) console.log("Grade A") 
    else if(rataRata >= 80) console.log("Grade B")
    else if(rataRata >= 70) console.log("Grade C")
    else if(rataRata >= 60) console.log("Grade D")
    else console.log("Grade E")