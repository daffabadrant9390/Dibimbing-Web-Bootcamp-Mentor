const soalNo2 = (...bilangan) => {
    const arrayBilanganGenap = [];
    const arrayBilanganGanjil = [];
    bilangan.map((element) => {
        if (element % 2 === 0) {
            arrayBilanganGenap.push(element);
        } else {
            arrayBilanganGanjil.push(element);
        }
    });

    return {arrayBilanganGanjil, arrayBilanganGenap};
}

const {arrayBilanganGanjil, arrayBilanganGenap} = soalNo2(23,43,1,90,69,420,100,13,14,31);

console.log("Array ganjil: ", arrayBilanganGanjil);
console.log("Array genap: ", arrayBilanganGenap);