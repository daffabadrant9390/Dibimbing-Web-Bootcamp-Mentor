function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return true; // ditemukan
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return false; // tidak ditemukan
}

const data = [3, 7, 12, 18, 22, 27, 31, 36, 40, 45];

const cariPertama = binarySearch(data, 7);   // true
const cariKedua = binarySearch(data, 21);    // false

console.log("Apakah 7 ditemukan? ", cariPertama);
console.log("Apakah 21 ditemukan? ", cariKedua);