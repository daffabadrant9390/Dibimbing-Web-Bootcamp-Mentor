/*Soal 1: Searching Algorithm
//1. Gunakan array berikut:
[29,5,13,40,7,33,18,21,9,2]
Buat fungsi pencarian menggunakan linear search yang menerima nilai dan array target dan mengembalikan 
nilai index di posisi mana angka tersebut ditemukan
(jika tidak ditemukan, kembalikan "-1")
Lakukan pencarian untuk:
nilai pertama:2 dan nilai kedua: 99

2. Gunakan array berikut (sudah terurut):
[3,7,12,18,22,27,31,36,40,45]
 Buat fungsi pencarian menggunakan binary search, boleh menggunakan 
pendekatan iteratif atau rekursif. Fungsi harus mengembalikan nilai boolean.
Lakukan pencarian untuk:
Nilai pertama: 7
 Nilai Kedua: 21
*/


//* Soal 1

const linearSearch = (arrayData, target) => {
    for(let i = 0; i < arrayData.length; i++) {
        if(arrayData[i] === target) {
            return i;
        }
    
    } 
    return -1;
}

const arrayRandom = [29,5,13,40,7,33,18,21,9,2];
console.log('Soal 1: Linear Search')
console.log(`Hasil pencarian angka 2: ${linearSearch(arrayRandom,2)}`);
console.log(`Hasil pencarian angka 99: ${linearSearch(arrayRandom,99)}`);
console.log('=============================================')
console.log('\n');


//* Soal 2
//* Pendekatan Iterative
const binarySearchIterative = (arrayData, target) => {
    let startIndex = 0;
    let endIndex = arrayData.length - 1;

    while(startIndex <= endIndex) {
        let middleIndex = Math.floor((startIndex + endIndex) / 2);
     if(arrayData[middleIndex] === target) {
        return true;
    } 

    if(arrayData[middleIndex] < target) {
        startIndex = middleIndex + 1;
    } else {
        endIndex = middleIndex - 1;
    }
    
    }
   return false;

    };

const arrayUrut = [3,7,12,18,22,27,31,36,40,45];

console.log('Soal 2: Binary Search')
console.log('Iterative Approach')
const nilaiTarget1 = 7;
const isTarget1Exist = binarySearchIterative(arrayUrut, nilaiTarget1);
console.log(`Apakah nilai ${nilaiTarget1} terdapat pada array: ${isTarget1Exist}`);

const nilaiTarget2 = 21;
const isTarget2Exist = binarySearchIterative(arrayUrut, nilaiTarget2);
console.log(`Apakah nilai ${nilaiTarget2} terdapat pada array: ${isTarget2Exist}`);
console.log('===============================')

//* Pendekatan Recursive
const binarySearchRecursive = ({
    arrayData,
    startIndex,
    endIndex,
    target
}) => {

    if(startIndex > endIndex) {
        return - 1;
    }

    let middleIndex = Math.floor((startIndex + endIndex) / 2);

    if(arrayData[middleIndex] === target) {
        return middleIndex;
    }


    if(arrayData[middleIndex] < target) {
        return binarySearchRecursive ({
            arrayData,
            startIndex: middleIndex + 1,
            endIndex,
            target
        })
    } else {
        return binarySearchRecursive ({
            arrayData,
            startIndex,
            endIndex: middleIndex - 1,
            target
        })
    }
}


const arrayData = [3,7,12,18,22,27,31,36,40,45];

console.log('Recursive Approach')
console.log(`Hasil pencarian angka 7: ${binarySearchRecursive({
  arrayData,
  startIndex: 0,
  endIndex: arrayData.length - 1,
  target: 7
})}`);

console.log(`Hasil pencarian angka 21: ${binarySearchRecursive({
  arrayData,
  startIndex: 0,
  endIndex: arrayData.length - 1,
  target: 21
})}`);
console.log('\n');