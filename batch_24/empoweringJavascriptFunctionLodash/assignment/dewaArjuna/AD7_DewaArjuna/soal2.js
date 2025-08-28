function pisahkanBilangan(...angka) {
    const arrayBilanganGenap = angka.filter(num => num % 2 === 0);
    const arrayBilanganGanjil = angka.filter(num => num % 2 !== 0);

    return {
        arrayBilanganGenap,
        arrayBilanganGanjil
    };
}

const hasil = pisahkanBilangan(12, 3, 7, 10, 15, 8, 5, 20, 13, 2, 9, 6);
console.log(hasil);
