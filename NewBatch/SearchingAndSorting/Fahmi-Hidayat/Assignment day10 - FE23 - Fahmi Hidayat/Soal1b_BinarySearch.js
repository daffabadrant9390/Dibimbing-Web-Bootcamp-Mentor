// Gunakan array berikut (sudah terurut):
//  [1, 7, 9, 12, 23, 30, 55, 93]
//  Buat fungsi pencarian menggunakan binary search, boleh menggunakan pendekatan iteratif atau rekursif. Fungsi harus mengembalikan nilai boolean.
// Lakukan pencarian untuk:
// Nilai pertama: 93
// Nilai kedua: 17

// ======================== Cara 1 dengan pendekata itearif
let arrayAngka = [1, 7, 9, 12, 23, 30, 55, 93];

const areYouThere = (arr, target) => {
  let start = 0;
  let last = arr.length - 1;

  while (start <= last) {
    let mid = Math.floor((start + last) / 2);

    if (target === arr[mid]) return true;
    else if (target > arr[mid]) start = mid + 1;
    else last = mid - 1;
  }

  return false;
};

console.log(areYouThere(arrayAngka, 93));
console.log(areYouThere(arrayAngka, 17));

// ======================== Cara 2Dengan Rekursif

let start = 0;
let last = arrayAngka.length - 1;

const areYouAvailable = (arr, start, last, target) => {
  if (start > last) return false;

  let mid = Math.floor((start + last) / 2);

  if (target === arr[mid]) return true;
  else if (target > arr[mid]) {
    let updatedStart = mid + 1;
    return areYouAvailable(arr, updatedStart, last, target);
  } else {
    let updatedlast = mid - 1;
    return areYouAvailable(arr, start, updatedlast, target);
  }
};

console.log(areYouAvailable(arrayAngka, start, last, 93));
console.log(areYouAvailable(arrayAngka, start, last, 17));
