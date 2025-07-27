/**
 * 3. Bubble Sort
 * - Terdapat sebuah array angka tidak terurut sebagai berikut:
 *  [64, 34, 25, 12, 22, 11, 90, 45, 78]
 * - Buatlah fungsi bubbleSort untuk mengurutkan array tersebut menggunakan algoritma Bubble Sort.
 * - Setelah diurutkan, tampilkan array yang sudah terurut.
 */
const bubbleSortAlgorithm = (arrayAngkaOriginal) => {
  //* Tulis kode di sini
  const arrayAngka = [...arrayAngkaOriginal]; // Copy the original array to avoid mutation
  const n = arrayAngka.length;
  let isSwapped;

  for(let i = 0; i < n - 1; i++) {
    isSwapped = false;

    for(let j = 0; j < n - i - 1; j++) {
      if(arrayAngka[j] > arrayAngka[j + 1]) {
        // Swap the elements
        [arrayAngka[j], arrayAngka[j + 1]] = [arrayAngka[j + 1], arrayAngka[j]];
        isSwapped = true;
      }
    }

    if(!isSwapped) {
      break; // If no two elements were swapped, the array is sorted
    }
  }
  return arrayAngka;
}

const arrayDataRandom = [64, 34, 25, 12, 22, 11, 90, 45, 78];
const arrayDataSorted = bubbleSortAlgorithm(arrayDataRandom);
console.log("\n Array Original:", arrayDataRandom, "\n");
console.log("\n Array Sorted:", arrayDataSorted, "\n"); // Output: Array Sorted: [11, 12, 22, 25, 34, 45, 64, 78, 90]