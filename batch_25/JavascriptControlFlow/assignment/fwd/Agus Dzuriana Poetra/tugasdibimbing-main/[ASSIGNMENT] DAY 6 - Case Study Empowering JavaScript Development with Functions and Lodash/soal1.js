
// Soal 1: Manipulasi Array Nilai Siswa
//     1. Buat array berisi nilai selama 8 semester: [85, 90, 78.5, 92.25, 67.5, 75.27, 85, 97.25]. 
//        Buat function yang dapat melakukan perulangan untuk menghitung:
//         a. Total nilai semester ganjil dan genap.
//         b. Rata-rata nilai semester ganjil dan genap.
// Notes: 
//     • Gunakan Higher Order Function seperti forEach  atau reduce untuk menghitung keduanya. 
//     • Karena yang dikembalikan 4 buah nilai, lakukan return dengan object. return object dengan key
//         ◦ totalNilaiSemesterGenap
//         ◦ totalNilaiSemesterGanjil
//         ◦ rataRataNilaiSemesterGenap
//         ◦ rataRataNilaiSemesterGanjil
//     • Lakukan pengecekan jika array nya kosong, kembalikan semua nilai dengan nilai 0. Gunakan default value array kosong

const nilaiArray = [85, 90, 78.5, 92.25, 67.5, 75.27, 85, 97.25]
function hitungNilaiSemester(nilaiArray = []) {
    if (nilaiArray.length === 0) {
        return {
            totalNilaiSemesterGenap: 0,
            totalNilaiSemesterGanjil: 0,
            rataRataNilaiSemesterGenap: 0,
            rataRataNilaiSemesterGanjil: 0
        }
    }

    const hasil = nilaiArray.reduce((acc, nilai, index) => {
        if (index % 2 === 0) {
            acc.totalGanjil += nilai
            acc.hitungGanjil++
        } else {
            acc.totalGenap += nilai
            acc.hitungGenap++
        }
        return acc
    }, 
    {
        totalGanjil: 0,
        totalGenap: 0,
        hitungGanjil : 0,
        hitungGenap: 0
    })
    return {
        totalNilaiSemesterGenap: hasil.totalGenap,
        totalNilaiSemesterGanjil: hasil.totalGanjil,
        rataRataNilaiSemesterGenap: Number((hasil.totalGenap / hasil.hitungGenap)),
        rataRataNilaiSemesterGanjil: Number((hasil.totalGanjil / hasil.hitungGanjil))
    }
}

console.log (`Input: ${nilaiArray}`)
console.log (`Output: `, hitungNilaiSemester(nilaiArray))