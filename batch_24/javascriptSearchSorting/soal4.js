/**
 * Insertion Sort
 * Terdapat sebuah array angka tidak terurut sebagai berikut:
 * [77, 12, 22, 11, 90, 34, 64, 25, 1, 8, 81]
 * 
 * - Buatlah fungsi selectionSort untuk mengurutkan array tersebut menggunakan algoritma Selection Sort.
 * - Setelah diurutkan, tampilkan array yang sudah terurut.
 */

const insertionSortAlgorithm = (arrayAngkaOriginal = []) => {
  const arrayAngka = [...arrayAngkaOriginal]; // Copy the original array to avoid mutation
  
  //* 1. Penjagaan jika array kosong
  if (arrayAngka.length === 0) {
    return [];
  }

  const arrayLength = arrayAngka.length;
  for(let i = 1; i < arrayLength; i++) {
    //* 2. Ambil keyTarget dan index j
    let j = i - 1;
    const keyTarget = arrayAngka[i];

    while(j >= 0 && arrayAngka[j] > keyTarget) {
      //* 3. Geser element yang lebih besar ke kanan
      arrayAngka[j+1] = arrayAngka[j];
      j--;
    }

    //* 4. Tukar element j terakhir dengan keyTarget
    arrayAngka[j + 1] = keyTarget;
  }

  //* 5. Mengembalikan array yang sudah terurut
  return arrayAngka; // Mengembalikan array yang sudah terurut
}

const arrayDataRandom = [77, 12, 22, 11, 90, 34, 64, 25, 1, 8, 81];
const arrayDataSorted = insertionSortAlgorithm(arrayDataRandom);
console.log("\n Array Original:", arrayDataRandom, "\n");
console.log("\n Array Sorted:", arrayDataSorted, "\n"); // Output: Array Sorted: [1,


// function insertionSortAlgorithm(arrayAngkaOriginal) {
//   //* Tulis kode di sini
//   const arrayAngka = [...arrayAngkaOriginal]; // Copy the original array to avoid mutation
//   const n = arrayAngka.length;

//   for (let i = 1; i < n; i++) {
//     const key = arrayAngka[i];
//     let j = i - 1;

//     // Move elements of arrayAngka[0..i-1], that are greater than key,
//     // to one position ahead of their current position
//     while (j >= 0 && arrayAngka[j] > key) {
//       arrayAngka[j + 1] = arrayAngka[j];
//       j = j - 1;
//     }
//     arrayAngka[j + 1] = key;
//   }
//   return arrayAngka;
// }