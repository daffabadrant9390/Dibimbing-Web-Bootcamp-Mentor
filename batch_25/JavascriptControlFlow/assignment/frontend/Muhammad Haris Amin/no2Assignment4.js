//nilai rata-rata (Gabriel) untuk 5 semester: 85, 95.20, 67.75, 78, 75
/** grade: A: 90–100
B: 80–89.99
C: 75–79.99
D: 60–74.99
E: < 60 */


const nilaiGabriel = [85, 95.20, 67.75, 78, 75]
let totalnilaiGabriel = 0
let rataRata = 0
let grade = ""
let i = 0

for (i = 0; i<nilaiGabriel.length; i++){
    totalnilaiGabriel = totalnilaiGabriel + nilaiGabriel[i]
}
// hitung rata-rata nilai gabriel adalah..
rataRata = totalnilaiGabriel/nilaiGabriel.length

// menentukan grade dari rata-rata nilai gabriel..
if (rataRata >= 90){
    grade = "A"
}
else if (rataRata >= 80){
    grade = "B" 
}
else if (rataRata >= 75){
    grade = "C"
}
else if (rataRata >= 60){
    grade = "D"
}
else
    grade = "E"

console.log(`nilai rata rata gabriel adalah ${rataRata} dan grade nilai Gabriel adalah ${grade}`)
