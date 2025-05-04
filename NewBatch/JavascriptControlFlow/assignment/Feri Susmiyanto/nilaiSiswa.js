const nilai = [85, 95.2, 67.75, 78, 75];

function nilaiSiswa(params) {
  let totalNilai = 0;

  for (let i = 0; i < nilai.length; i++) {
    totalNilai += nilai[i];
  }

  let rataRataNilai = totalNilai / params.length;

  if (rataRataNilai >= 90 && rataRataNilai <= 100) {
    console.log(`rata - rata nilai: ${rataRataNilai}, grade: A`);
  } else if (rataRataNilai >= 80 && rataRataNilai < 90) {
    console.log(`rata - rata nilai: ${rataRataNilai}, grade: B`);
  } else if (rataRataNilai >= 75 && rataRataNilai < 80) {
    console.log(`rata - rata nilai: ${rataRataNilai}, grade: C`);
  } else if (rataRataNilai >= 60 && rataRataNilai < 75) {
    console.log(`rata - rata nilai: ${rataRataNilai}, grade: D`);
  } else {
    console.log(`rata - rata nilai: ${rataRataNilai}, grade: E`);
  }
}

nilaiSiswa(nilai);
