//Linear Search
const linearSearch = (arrayData, nilaiTarget) => {
    for (let i = 0; i < arrayData.length; i++) {
        if (arrayData[i] === nilaiTarget) {
            return i;
        }
    }
    return -1;
};

const arrayData = [29, 5, 13, 40, 7, 33, 18, 21, 9, 2];

const nilaiTarget1 = 2;
const soalNilaiTarget1 = linearSearch(arrayData, nilaiTarget1);
console.log(`\nIndex dari nilai ${nilaiTarget1} pada array adalah : ${soalNilaiTarget1}\n`);

const nilaiTarget2 = 99;
const soalNilaiTarget2 = linearSearch(arrayData, nilaiTarget2);
console.log(`\nIndex dari nilai ${nilaiTarget2} pada array adalah : ${soalNilaiTarget2}\n`);



//Binary Search
const binarySearchAlgo = (arrayDataKedua, nilaiTargetArra) => {
    let startIndex = 0;
    let endIndex = arrayDataKedua.length - 1;

    while (startIndex <= endIndex) {
        let middleIndex = Math.floor((startIndex + endIndex) / 2);

        if (arrayDataKedua[middleIndex] === nilaiTargetArra) {
            return true;
        }

        if (arrayDataKedua[middleIndex] < nilaiTargetArra) {
            startIndex = middleIndex + 1;
        } else {
            endIndex = middleIndex - 1;
        }
    }
    return false;
};

const arrayDataKedua = [3, 7, 12, 18, 22, 27, 31, 36, 40, 45];

const nilaiTargetArra = 7;
const isNilaiTarget = binarySearchAlgo(arrayDataKedua, nilaiTargetArra);
console.log(`\nApakah nilai ${nilaiTargetArra} terdapat pada array? ${isNilaiTarget}`);

const nilaiTargetArra2 = 21;
const isNilaiTarget2 = binarySearchAlgo(arrayDataKedua, nilaiTargetArra2);
console.log(`\nApakah nilai ${nilaiTargetArra2} terdapat pada array? ${isNilaiTarget2}`);
