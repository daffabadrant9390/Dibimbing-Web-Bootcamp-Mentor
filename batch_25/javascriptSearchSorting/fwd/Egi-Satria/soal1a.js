//=======Soal1.A=======

function linearSearch(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i; // kembalikan index jika ditemukan
        }
    }
    return -1; // kembalikan -1 jika tidak ditemukan
}


// Data array
const data = [29, 5, 13, 40, 7, 33, 18, 21, 9, 2];

// Pencarian nilai pertama: 2
const hasil1 = linearSearch(data, 2);
console.log(`Index nilai 2: ${hasil1}`);

// Pencarian nilai kedua: 99
const hasil2 = linearSearch(data, 99);
console.log(`Index nilai 99: ${hasil2}`);

