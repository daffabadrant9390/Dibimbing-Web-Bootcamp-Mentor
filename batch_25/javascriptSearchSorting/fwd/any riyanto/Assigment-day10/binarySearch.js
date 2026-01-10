// Fungsi binary search (versi iteratif)
function binarySearch(arr, target) {
    let kiri = 0;
    let kanan = arr.length -1;

    while (kiri <= kanan) {
        let tengah = Math.floor((kiri + kanan) / 2);

        if (arr[tengah] === target) {
            return true; // ditemukan
        } else if (arr[tengah] < target) {
            kiri = tengah + 1;
        } else {
            kanan = tengah - 1;
        }
    }
    return false;
}

// Data array
const data = [3, 7, 12, 18, 22, 27, 31, 36, 40, 45];

// Pencarian nilai pertama (7)
const hasil1 = binarySearch(data, 7);
console.log(`Apakah nilai 7 ditemukan? ${hasil1}`);

// Pencarian nilai kedua (21)
const hasil2 = binarySearch(data, 21);
console.log(`Apakah nilai 21 ditemukan? ${hasil2}`);