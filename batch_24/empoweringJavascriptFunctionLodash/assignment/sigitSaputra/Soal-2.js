function pisahBilangan(...angka) {
  // Validasi: pastikan input minimal 10 angka
  if (angka.length < 10) {
    return {
      arrayBilanganGenap: [],
      arrayBilanganGanjil: [],
    };
  }

  // Menggunakan .filter() untuk membuat array baru
  const arrayBilanganGenap = angka.filter((num) => num % 2 === 0);
  const arrayBilanganGanjil = angka.filter((num) => num % 2 !== 0);

  return {
    arrayBilanganGenap,
    arrayBilanganGanjil,
  };
}
const hasil = pisahBilangan(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12);
console.log(hasil);

const hasil2 = pisahBilangan(1, 2, 3, 4, 5);
console.log(hasil2);
