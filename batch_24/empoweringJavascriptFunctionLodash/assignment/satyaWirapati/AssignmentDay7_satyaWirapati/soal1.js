const nilai = [85, 90, 78.5, 92.25, 67.5, 75.27, 85, 97.25];

const manipulasiNilai = (nilai) => {
    const nilaiGanjil = [];
    const nilaiGenap = [];
    nilai.forEach((nilai, index) => {
        if (index % 2 === 0) {
            nilaiGenap.push(nilai);
        }
        else {
            nilaiGanjil.push(nilai);
        }
    });
    console.log(nilaiGenap);
    const totalNilaiSemesterGenap = nilaiGenap.reduce((acc, curr) => acc + curr, 0);
    console.log(totalNilaiSemesterGenap);
    const totalNilaiSemesterGanjil = nilaiGanjil.reduce((acc, curr) => acc + curr, 0);
    const rataRataNilaiSemesterGenap = Number((totalNilaiSemesterGenap / nilaiGenap.length).toFixed(2));
    const rataRataNilaiSemesterGanjil = Number((totalNilaiSemesterGanjil / nilaiGanjil.length).toFixed(2));

    return {
        totalNilaiSemesterGanjil, totalNilaiSemesterGenap,
        rataRataNilaiSemesterGanjil, rataRataNilaiSemesterGenap
    }
}

const { totalNilaiSemesterGanjil, totalNilaiSemesterGenap
    , rataRataNilaiSemesterGanjil, rataRataNilaiSemesterGenap } = manipulasiNilai(nilai);

console.log(`Total nilai semester ganjil: ${totalNilaiSemesterGanjil}\n
Total nilai semester genap: ${totalNilaiSemesterGenap}\n
Rata-rata nilai semester ganjil: ${rataRataNilaiSemesterGanjil}\n
Rata-rata nilai semester genap: ${rataRataNilaiSemesterGenap}`)