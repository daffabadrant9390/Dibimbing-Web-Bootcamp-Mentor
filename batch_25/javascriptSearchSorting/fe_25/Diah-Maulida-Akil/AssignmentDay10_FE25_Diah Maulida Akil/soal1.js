/**
 * Searching Algorithm
 * 1. Gunakan array berikut: [29, 5, 13, 40, 7, 33, 18, 21, 9, 2]
 * Buat fungsi pencarian menggunakan linear search yang menerima array dan nilai
 * target, dan mengembalikan nilai index di posisi mana angka tersebut ditemukan 
 * (Jika tidak ditemukan, kembalikan "-1")
 * - Lakukan pencarian untuk:
 *   - Nilai pertama: 2
 *   - Nilai kedua: 99
 * 2. Gunakan array berikut (sudah terurut): [3, 7, 12, 18, 22, 27, 31, 36, 40, 45]
 * Buat Fungsi pencarian menggunakan binary search, boleh menggunakan pendekatan iteratif atau rekursif. Fungsi harus mengembailkan nilai boolean.
 * - Lakukan pencarian untuk:
 *   - Nilai pertama: 7
 *   - Nilai kedua: 21
 * 
 */


// Function Linear Search
const linearSearch = (arr, target) => {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === target) {
            return i;
        }
    }
    return -1;
}

const arrayRandom = [29, 5, 13, 40, 7, 33, 18, 21, 9, 2];
console.log(`Hasil pencarian angka 2: ${linearSearch(arrayRandom, 2)}`);
console.log(`Hasil pencarian angka 99: ${linearSearch(arrayRandom, 99)}`);

// Function Binary Search
const binarySearch = ({
    arrayData,
    startIndex,
    endIndex,
    target
}) => {
    if(startIndex > endIndex) {
        return false;
    }

    const middleIndex = Math.floor((startIndex + endIndex) / 2);

    // ceheck apakah middleIndex === target
    if(arrayData[middleIndex] === target) {
        return true;
    }

    if(arrayData[middleIndex] < target) {
        return binarySearch({
            arrayData,
            startIndex: middleIndex + 1,
            endIndex,
            target
        });
    } else {
        return binarySearch({
            arrayData,
            startIndex,
            endIndex: middleIndex - 1,
            target
        })
    }
}

const arrayData = [3, 7, 12, 18, 22, 27, 31, 36, 40, 45];
console.log(`Hasil pencarian angka 7: ${binarySearch({
    arrayData,
    startIndex: 0,
    endIndex: arrayData.length -1,
    target: 7
})}`)

console.log(`Hasil pencarian angka 21: ${binarySearch({
    arrayData,
    startIndex: 0,
    endIndex: arrayData.length -1,
    target: 21
})}`)