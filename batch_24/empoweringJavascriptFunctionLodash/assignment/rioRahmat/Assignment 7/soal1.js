function hitungNilaiSemester(nilai = []) {
    if (nilai.length === 0) {
        return {
            totalNilaiSemesterGenap: 0,
            totalNilaiSemesterGanjil: 0,
            rataRataNilaiSemesterGenap: 0,
            rataRataNilaiSemesterGanjil: 0
        };
    }

    let ganjil = [];
    let genap = [];

    nilai.forEach((val, index) => {
        // index + 1 agar sesuai dengan semester (1-based)
        if ((index + 1) % 2 === 0) {
            genap.push(val);
        } else {
            ganjil.push(val);
        }
    });

    const totalGanjil = ganjil.reduce((acc, val) => acc + val, 0);
    const totalGenap = genap.reduce((acc, val) => acc + val, 0);

    return {
        totalNilaiSemesterGenap: totalGenap,
        totalNilaiSemesterGanjil: totalGanjil,
        rataRataNilaiSemesterGenap: genap.length ? totalGenap / genap.length : 0,
        rataRataNilaiSemesterGanjil: ganjil.length ? totalGanjil / ganjil.length : 0
    };
}

// Contoh penggunaan:
const nilaiSemester = [85, 90, 78.5, 92.25, 67.5, 75.27, 85, 97.25];
const hasil = hitungNilaiSemester(nilaiSemester);
console.log(hasil);