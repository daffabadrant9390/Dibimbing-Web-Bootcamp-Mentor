// Soal 3: Manipulasi array of object
//     • Buat sebuah function yang menerima array of object berikut.
//     • Gunakan method map dan reduce untuk 
//         ◦ menghitung nilai rata-rata dari setiap student berdasarkan data nilaiNilai, lalu masukkan kedalam property baru bernama rataRataNilai.
//         ◦ Membuat nama setiap student menjadi kapital (toUpperCase())
//     • Gunakan method filter untuk memfilter data student sehingga hanya terdapat data student dengan rata-rata > 85
//     • Kembalikan array of object siswa yang memenuhi seluruh kondisi tersebut dengan ter sort secara descending berdasarkan id nya (gunakan b.id - a.id)
//     • Data array of object

const arrayObjectSiswa = [
  { id: 1100, nama: "Budi", jurusan: "Sistem Komputer", nilaiNilai: [80, 90, 75] },
  { id: 1210, nama: "Siti", jurusan: "Teknik Informatika", nilaiNilai: [90, 100, 67] },
  { id: 1232, nama: "Andi", jurusan: "Sistem Informasi", nilaiNilai: [78, 80, 100] },
  { id: 4324, nama: "Dewi", jurusan: "Teknik Komputer", nilaiNilai: [88, 60, 50] },
  { id: 5612, nama: "Rina", jurusan: "Sistem Komputer", nilaiNilai: [92, 75, 78] },
  { id: 1645, nama: "Joko", jurusan: "Teknik Informatika", nilaiNilai: [80, 60, 90] },
  { id: 972, nama: "Sari", jurusan: "Sistem Informasi", nilaiNilai: [95, 100, 100] },
];

function prosesDataSiswa(arraySiswa) {
    return arraySiswa
        .map (siswa => {
            const rataRataNilai = siswa.nilaiNilai.reduce((total, nilai) => total + nilai, 0)
                                    /siswa.nilaiNilai.length
            return {
                ...siswa,
                nama: siswa.nama.toUpperCase(),
                rataRataNilai: rataRataNilai
            }
        })

        .filter(siswa => siswa.rataRataNilai > 85)

        .sort((a,b) => b.id - a.id)
}

console.log("Output: ", prosesDataSiswa(arrayObjectSiswa)) 