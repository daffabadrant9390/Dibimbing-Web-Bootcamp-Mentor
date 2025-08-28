// const nilaiSiswa = [85, 90, 78.5, 92.25, 67.5, 75.27, 85, 97.25];
const nilaiSiswa = [];

const hitungNilaiSiswa = (arrNilai) => {
  let totalRataRataNilai = {
    totalNilaiSemesterGenap: 0,
    totalNilaiSemesterGanjil: 0,
    rataRataNilaiSemesterGenap: 0,
    rataRataNilaiSemesterGanjil: 0,
  };

  if (arrNilai.length > 0) {
    let totalSemesterGenap = 1;
    let totalSemesterGanjil = 1;
    for (let i = 0; i < arrNilai.length; i++) {
      if ((i + 1) % 2 == 0) {
        totalRataRataNilai.totalNilaiSemesterGenap += arrNilai[i];
        totalSemesterGenap++;
        totalRataRataNilai.rataRataNilaiSemesterGenap =
          totalRataRataNilai.totalNilaiSemesterGenap / (arrNilai.length / 2);
      } else {
        totalRataRataNilai.totalNilaiSemesterGanjil += arrNilai[i];
        totalSemesterGanjil++;
      }
    }
    totalRataRataNilai.rataRataNilaiSemesterGanjil =
      totalRataRataNilai.totalNilaiSemesterGanjil / totalSemesterGanjil;
    totalRataRataNilai.totalNilaiSemesterGenap =
      totalRataRataNilai.totalNilaiSemesterGenap / totalSemesterGenap;
  }

  return totalRataRataNilai;
};

console.log(hitungNilaiSiswa(nilaiSiswa));
