// Gunakan array berikut:
// [50, 7, 5, 20, 8, 23, 17, 19]
//
// Buat fungsi pencarian menggunakan linear search yang menerima array dan nilai target,
// dan mengembalikan nilai boolean (true jika ditemukan, false jika tidak).
//
// Lakukan pencarian untuk:
// Nilai pertama: 17
// Nilai kedua: 77

const numbers = [50, 7, 5, 20, 8, 23, 17, 19];

function linearSearch(arrayNums, targetNum){
    for (let num of arrayNums){
        if(num === targetNum){
            return true;
        }
    }
    return false;
}

console.log(linearSearch(numbers, 17));
console.log(linearSearch(numbers, 77));