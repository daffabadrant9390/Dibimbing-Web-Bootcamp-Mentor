// ================= Soal 2 =================

const pisahBilangan = (...angka) => {
  const arrayBilanganGenap = angka.filter((n) => n % 2 === 0);
  const arraybilanganGanjil = angka.filter((n) => n % 2 !== 0);

  return {
    arrayBilanganGenap,
    arraybilanganGanjil,
  };
};

console.log(pisahBilangan(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
