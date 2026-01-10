/**
 * Melakukan pencarian linear pada array.
 * @param {number[]} arr - Array data.
 * @param {number} target - Nilai yang dicari.
 * @returns {boolean} - true jika target ditemukan, false jika tidak.
 */
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        // Mencetak langkah: membandingkan elemen saat ini dengan target
        console.log(`Linear Search: Membandingkan ${arr[i]} dengan ${target}`); 
        if (arr[i] === target) {
            return true;
        }
    }
    return false;
}

// Data Array untuk Linear Search
const arrLinear = [95, 40, 3, 33, 21, 6, 9, 2];
const targetLinear1 = 21; // Nilai Pertama
const targetLinear2 = 99; // Nilai Kedua

console.log("\n--- Linear Search ---");
console.log(`Array: [${arrLinear}]`);
console.log(`Mencari: ${targetLinear1}`);
let hasilLinear1 = linearSearch(arrLinear, targetLinear1);
console.log(`Hasil pencarian: ${hasilLinear1}`); // Output: true

console.log(`\nMencari: ${targetLinear2}`);
let hasilLinear2 = linearSearch(arrLinear, targetLinear2);
console.log(`Hasil pencarian: ${hasilLinear2}`); // Output: false


/**
 * Melakukan pencarian biner pada array yang sudah terurut.
 * @param {number[]} arr - Array data yang sudah terurut.
 * @param {number} target - Nilai yang dicari.
 * @returns {boolean} - true jika target ditemukan, false jika tidak.
 */
function binarySearch(arr, target) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        
        // Mencetak langkah: elemen tengah saat ini
        console.log(`Binary Search: Start=${start}, End=${end}, Mid=${mid}, Nilai Mid=${arr[mid]}`); 

        if (arr[mid] === target) {
            return true; // Ditemukan
        } else if (arr[mid] < target) {
            start = mid + 1; // Cari di bagian kanan
        } else {
            end = mid - 1; // Cari di bagian kiri
        }
    }
    return false; // Tidak ditemukan
}




/**
 * Melakukan pencarian biner pada array yang sudah terurut.
 * @param {number[]} arr - Array data yang sudah terurut.
 * @param {number} target - Nilai yang dicari.
 * @returns {boolean} - true jika target ditemukan, false jika tidak.
 */
function binarySearch(arr, target) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        
        // Mencetak langkah: elemen tengah saat ini
        console.log(`Binary Search: Start=${start}, End=${end}, Mid=${mid}, Nilai Mid=${arr[mid]}`); 

        if (arr[mid] === target) {
            return true; // Ditemukan
        } else if (arr[mid] < target) {
            start = mid + 1; // Cari di bagian kanan
        } else {
            end = mid - 1; // Cari di bagian kiri
        }
    }
    return false; // Tidak ditemukan
}

// Data Array untuk Binary Search (Harus terurut!)
const arrBinary = [7, 12, 16, 23, 37, 40, 45, 54, 66, 70];
const targetBinary1 = 7;  // Nilai Pertama
const targetBinary2 = 23; // Nilai Kedua
const targetBinary3 = 41; // Nilai Ketiga

console.log("\n--- Binary Search ---");
console.log(`Array: [${arrBinary}]`);

console.log(`Mencari: ${targetBinary1}`);
let hasilBinary1 = binarySearch(arrBinary, targetBinary1);
console.log(`Hasil pencarian: ${hasilBinary1}`); // Output: true

console.log(`\nMencari: ${targetBinary2}`);
let hasilBinary2 = binarySearch(arrBinary, targetBinary2);
console.log(`Hasil pencarian: ${hasilBinary2}`); // Output: true

console.log(`\nMencari: ${targetBinary3}`);
let hasilBinary3 = binarySearch(arrBinary, targetBinary3);
console.log(`Hasil pencarian: ${hasilBinary3}`); // Output: false