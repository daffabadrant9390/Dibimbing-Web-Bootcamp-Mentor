function hitungStatistikNilai(nilai = []) {
    if (nilai.length === 0) {
        return {
            totalNilaiSemesterGenap: 0,
            totalNilaiSemesterGanjil: 0,
            rataRataNilaiSemesterGenap: 0,
            rataRataNilaiSemesterGanjil: 0
        };
    }

    const hasil = nilai.reduce((acc, val, index) => {
        const semester = index + 1;
        if (semester % 2 === 0) {
            acc.totalGenap += val;
            acc.countGenap++;
        } else {
            acc.totalGanjil += val;
            acc.countGanjil++;
        }
        return acc;
    }, {
        totalGenap: 0,
        countGenap: 0,
        totalGanjil: 0,
        countGanjil: 0
    });

    return {
        totalNilaiSemesterGenap: hasil.totalGenap,
        totalNilaiSemesterGanjil: hasil.totalGanjil,
        rataRataNilaiSemesterGenap: hasil.countGenap ? hasil.totalGenap / hasil.countGenap : 0,
        rataRataNilaiSemesterGanjil: hasil.countGanjil ? hasil.totalGanjil / hasil.countGanjil : 0
    };
}


const nilaiSiswa = [85, 90, 78.5, 92.25, 67.5, 75.27, 85, 97.25];
const hasil = hitungStatistikNilai(nilaiSiswa);
console.log(hasil);
