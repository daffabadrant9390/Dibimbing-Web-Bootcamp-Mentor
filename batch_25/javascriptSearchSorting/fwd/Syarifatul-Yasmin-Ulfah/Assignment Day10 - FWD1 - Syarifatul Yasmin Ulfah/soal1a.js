// Linear Search

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

const dataArray = [29, 5, 13, 40, 7, 33, 18, 21, 9, 2];
const targetA = 2;
const targetB = 99;
console.log(`Nilai ${targetA} ditemukan pada indeks ${linearSearch(dataArray, 2)}`);
console.log(`Nilai ${targetB} ditemukan pada indeks ${linearSearch(dataArray, 99)}`);
