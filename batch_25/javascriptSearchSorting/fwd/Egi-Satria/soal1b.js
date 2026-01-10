function binarySearch(array, target) {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (array[mid] === target) {
            return true; // ditemukan
        } else if (array[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return false; // tidak ditemukan
}

// Data array (sudah terurut)
const data = [3, 7, 12, 18, 22, 27, 31, 36, 40, 45];

// Pencarian nilai pertama: 7
const hasil1 = binarySearch(data, 7);
console.log(`Apakah 7 ditemukan? ${hasil1}`);

// Pencarian nilai kedua: 21
const hasil2 = binarySearch(data, 21);
console.log(`Apakah 21 ditemukan? ${hasil2}`);
