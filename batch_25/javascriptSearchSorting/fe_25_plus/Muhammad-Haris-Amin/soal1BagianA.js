const linearSearch = (arrayData = [], nilaiTarget) => {
    for (let i = 0; i < arrayData.length; i++){
        if (arrayData[i] === nilaiTarget) {
            return i;
        }
    }

    return -1;
}



const arrayData = [29, 5, 13, 40, 7, 33, 18, 21, 9, 2]

//case1
const nilaiTarget1 = 2
const indexNilaiTarget1 = linearSearch(arrayData, nilaiTarget1)
console.log(`Indeks dari nilai ${nilaiTarget1} pada array adalah ${indexNilaiTarget1} `)

//case2
const nilaiTarget2 = 99
const indexNilaiTarget2 = linearSearch(arrayData, nilaiTarget2)
console.log(`Indeks dari nilai ${nilaiTarget2} pada array adalah ${indexNilaiTarget2} `)