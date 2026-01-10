// Function linear search
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++)
    {
        if (arr[i] === target) {
            return i; // Kembalikan indek kalau ketemu
        }
    }
    return -1; // Kembalikan -1 kalau tidak ketemu
}

// Data Array
const data = [29, 5, 13, 40, 7, 33, 18, 21, 9, 2];

// Pencarian nilai pertama = 2
const hasil1 = linearSearch(data, 2);
console.log(`Index nilai 2: ${hasil1}`);

// Pencarian nilai kedua = 99
const hasil2 = linearSearch(data, 99);
console.log(`Index nilai 99: ${hasil2}`);