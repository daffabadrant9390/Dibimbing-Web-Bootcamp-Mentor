const nilaiSemester = [85, 90, 78.5, 92.25, 67.5, 75.27, 85, 97.25];



function menghitungRataRataNilaiMahasiswa(arrayNilai) {
      if (!Array.isArray(arrayNilai) || arrayNilai.length === 0) {
    return {
      totalNilaiSemesterGenap: 0,
      totalNilaiSemesterGanjil: 0,
      rataRataNilaiSemesterGenap: 0,
      rataRataNilaiSemesterGanjil: 0
    };
  }

  const semesterGanjil = arrayNilai.filter((_, index) => index % 2 === 0);
  const semesterGenap = arrayNilai.filter((_, index) => index % 2 !== 0);

  const totalGanjil = semesterGanjil.reduce((total, nilai) => total + nilai, 0);
  const totalGenap = semesterGenap.reduce((total, nilai) => total + nilai, 0);

  return {
    totalNilaiSemesterGenap: totalGenap,
    totalNilaiSemesterGanjil: totalGanjil,
    rataRataNilaiSemesterGenap: semesterGenap.length ? totalGenap / semesterGenap.length : 0,
    rataRataNilaiSemesterGanjil: semesterGanjil.length ? totalGanjil / semesterGanjil.length : 0
  };
    // for (let i = 0; i < arrayNilai.length; i++) {
    //     if (typeof arrayNilai[i] !== 'number') {
    //         throw new Error("Semua nilai harus berupa angka");
    //     }
    // }
    // // total nilai semsestergenap
    // if (arrayNilai.length === 0) {
    //     return 0; // Jika array kosong, kembalikan 0
    // }
    // const totalNilai = arrayNilai.reduce((totalNilai, nilaiSaatIni) => {
    //     return totalNilai += nilaiSaatIni;
    // }, 0);
    // const rataRataNilai = totalNilai / arrayNilai.length;
    // return rataRataNilai;

    // // total nilai semeseter ganjil
    
    // // rata-rata nilai semsestergenap
    // // rata-rata nilai semsester ganjil
    // // const totalNilai = arrayNilai.reduce((totalNilai, nilaiSaatIni) => {
    // //     return totalNilai += nilaiSaatIni;
    // // }, 0);

    // // const rataRataNilai = totalNilai / arrayNilai.length;
    // // return rataRataNilai;
}

console.log(menghitungRataRataNilaiMahasiswa(nilaiSemester));