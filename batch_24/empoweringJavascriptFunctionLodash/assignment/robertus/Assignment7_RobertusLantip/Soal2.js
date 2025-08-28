const bilanganGanjilGenap = (...arr) => {
    let bilangan = {
        arrayBilanganGenap : [],
        arrayBilanganGanjil : []
    }

    let arrBilangan = [...arr];

    bilangan.arrayBilanganGanjil = arrBilangan.filter(bilangan => bilangan % 2 != 0);
    bilangan.arrayBilanganGenap = arrBilangan.filter(bilangan => bilangan % 2 == 0);

    return bilangan;
}

console.log(bilanganGanjilGenap(1,2,3,4,5,6,7,8,9,10));