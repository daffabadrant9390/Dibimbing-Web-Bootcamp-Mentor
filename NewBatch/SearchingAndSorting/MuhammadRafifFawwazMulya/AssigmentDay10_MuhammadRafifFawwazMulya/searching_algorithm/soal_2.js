// Gunakan array berikut (sudah terurut):
//  [1, 7, 9, 12, 23, 30, 55, 93]
//
// Buat fungsi pencarian menggunakan binary search, boleh menggunakan pendekatan iteratif atau rekursif.
// Fungsi harus mengembalikan nilai boolean.
//
// Lakukan pencarian untuk:
// Nilai pertama: 93
// Nilai kedua: 17

const numbers = [1, 7, 9, 12, 23, 30, 55, 93];

function binarySearch(arrayNums, targetNum){
    let lowIndex = 0;
    let highIndex = arrayNums.length - 1;

    while(lowIndex <= highIndex){
        let middleIndex = Math.floor((lowIndex + highIndex) / 2);

        if(targetNum === arrayNums[middleIndex]){
            return true;
        } else if(targetNum > arrayNums[middleIndex]){
            lowIndex = middleIndex + 1;
        } else {
            highIndex = middleIndex - 1;
        }
    }

    return false;
}

console.log(binarySearch(numbers, 93));
console.log(binarySearch(numbers, 17));