// Diketahui nilai siswa (Gabriel) untuk 5 semester: 85, 95.20, 67.75, 78, 75.
// Hitung rata-rata nilai.
// Tentukan grade akhir berdasarkan kriteria berikut:
// A: 90–100
// B: 80–89.99
// C: 75–79.99
// D: 60–74.99
// E: < 60
// Cetak nilai rata-rata dan grade akhir siswa.

let nilaiSmester = [85,95,20,67.75,78,75]
let nilaiAwal = 0;
let nilaiRata = '';

for(i in nilaiSmester){
    nilaiAwal+= nilaiSmester[i]
}
    nilaiRata = nilaiAwal/nilaiSmester.length
    console.log(`nilai Rata rata Gabriel untuk semester 5 = ${nilaiRata}`)

if(nilaiRata>=90 && nilaiRata<=100){
    console.log(`grade akhir Gabriel = A`)
}else if(nilaiRata>=80 && nilaiRata<=89.99){
    console.log(`grade akhir Gabriel = B`)
}else if(nilaiRata>=75 && nilaiRata<=79.99){
    console.log(`grade akhir Gabriel = C`)
}else if(nilaiRata>=60 && nilaiRata<=74.99){
    console.log(`grade akhir Gabriel = D`)
}else{
    console.log(`grade akhir Gabriel = E`)
}