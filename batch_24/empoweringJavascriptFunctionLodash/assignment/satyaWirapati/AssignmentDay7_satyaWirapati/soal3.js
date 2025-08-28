arrayObjectSiswa = [
    { id: 1100, nama: "Budi", jurusan: "Sistem Komputer", nilaiNilai: [80, 90, 75] },
    { id: 1210, nama: "Siti", jurusan: "Teknik Informatika", nilaiNilai: [90, 100, 67] },
    { id: 1232, nama: "Andi", jurusan: "Sistem Informasi", nilaiNilai: [78, 80, 100] },
    { id: 4324, nama: "Dewi", jurusan: "Teknik Komputer", nilaiNilai: [88, 60, 50] },
    { id: 5612, nama: "Rina", jurusan: "Sistem Komputer", nilaiNilai: [92, 75, 78] },
    { id: 1645, nama: "Joko", jurusan: "Teknik Informatika", nilaiNilai: [80, 60, 90] },
    { id: 972, nama: "Sari", jurusan: "Sistem Informasi", nilaiNilai: [95, 100, 100] },
];

const soalNo3 = (siswa) => {
    const siswaMap = siswa.map((elemen, index) => {
        elemen.rataRataNilai = (elemen.nilaiNilai.reduce((acc, val) => acc + val, 0)) / elemen.nilaiNilai.length;
        elemen.rataRataNilai = Number(elemen.rataRataNilai.toFixed(2));
        elemen.nama = elemen.nama.toUpperCase();
        return { ...elemen };
    })
    return siswaMap.filter((siswa) => siswa.rataRataNilai > 85).sort((a, b) => b.id - a.id);

}

console.log(soalNo3(arrayObjectSiswa));