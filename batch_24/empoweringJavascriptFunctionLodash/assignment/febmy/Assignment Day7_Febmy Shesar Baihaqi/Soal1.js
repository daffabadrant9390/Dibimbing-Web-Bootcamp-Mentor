// ================= Soal 1 =================

const datanilaiSemester = [85, 90, 78.5, 92.25, 67.5, 75.25, 85, 97.25];
function hitungTotalNilai(nilai = []) {
  let totalGenap = 0;
  let totalGanjil = 0;
  let countgenap = 0;
  let countGanjil = 0;

  nilai.forEach((nilai, index) => {
    const semester = index + 1;
    if (semester % 2 === 0) {
      totalGenap += nilai;
      countgenap++;
    } else {
      totalGanjil += nilai;
      countGanjil++;
    }
  });

  const rataRataGenap = countgenap > 0 ? totalGenap / countgenap : 0;
  const rataRataGanjil = countGanjil > 0 ? totalGanjil / countGanjil : 0;
  return {
    totalNilaiSemesterGenap: totalGenap,
    totalNilaiSemesterGanjil: totalGanjil,
    rataRataNilaiSemesterGenap: rataRataGenap,
    rataRataNilaiSemesterGanjil: rataRataGanjil,
  };
}

console.log(hitungTotalNilai(datanilaiSemester));
