// Tipe 1 

const arr = [29, 5, 13, 40, 7, 33, 18, 21, 9, 2]
// linear search
function linearSearch(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return `angka ditemukan pada index ke = ${i}`
        }
    }
    return -1
}
console.log(`============ Linear Search ============`)
console.log(`Array = `, arr)
console.log(linearSearch(arr, 2));
console.log(linearSearch(arr,99));

// Tipe 2

const arr2 = [3, 7, 12, 18,  22, 27, 31, 36, 40, 45]
// binary search
function binarySearch(array, target) {
    let kiri = 0;
    let kanan = array.length - 1;
    for (let i = 0; i < array.length; i++) {
        let tengah = Math.floor((kiri + kanan) / 2);
        if (array[tengah] === target) {
            return `angka ditemukan pada index ke = ${tengah}`;
        } else if (array[tengah] < target) {
            kiri = tengah +1;
        } else {
            kanan = tengah -1;
        }
    }
    return -1;
}
console.log(`============ Binary Search ============`)
console.log(`Array = `, arr2)
console.log(binarySearch(arr2, 7));
console.log(binarySearch(arr2, 21));