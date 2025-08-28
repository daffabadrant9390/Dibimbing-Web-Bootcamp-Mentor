const nilai = [85, 90, 78.5, 92.25, 67.5, 75.27, 85, 97.25];

function hitungNilaiSemester(nilaiSemester = []) {
  if (nilaiSemester.length === 0) {
    return {
      totalNilaiSemesterGenap: 0,
      totalNilaiSemesterGanjil: 0,
      rataRataNilaiSemesterGenap: 0,
      rataRataNilaiSemesterGanjil: 0,
    };
  }

  let totalGanjil = 0;
  let totalGenap = 0;
  let countGanjil = 0;
  let countGenap = 0;

  nilaiSemester.forEach((nilai, index) => {
    if ((index + 1) % 2 === 1) {
      totalGanjil += nilai;
      countGanjil++;
    } else {
      totalGenap += nilai;
      countGenap++;
    }
  });

  return {
    totalNilaiSemesterGenap: totalGenap,
    totalNilaiSemesterGanjil: totalGanjil,
    rataRataNilaiSemesterGenap: totalGenap / countGenap,
    rataRataNilaiSemesterGanjil: totalGanjil / countGanjil,
  };
}

const hasil = hitungNilaiSemester(nilai);
console.log(hasil);
