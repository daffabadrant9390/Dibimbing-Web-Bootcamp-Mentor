/**Soal 2: Sorting Algorithm
Gunakan array berikut yang belum terurut:
 [19, 7, 1, 23, 2, 15, 4, 20, 12, 30, 27]
Buat tiga buah fungsi berbeda, masing-masing untuk satu metode sorting:
Bubble Sort
Selection Sort
Insertion Sort
Masing-masing fungsi menerima array sebagai input dan mengembalikan array yang sudah terurut secara ascending.
Tampilkan hasil array yang sudah diurutkan dari masing-masing metode ke console.
*/


function bubbleSort(arr) {
    let sorted = [...arr]; 
    let n = sorted.length;
  
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - 1 - i; j++) {
        if (sorted[j] > sorted[j + 1]) {
          [sorted[j], sorted[j + 1]] = [sorted[j + 1], sorted[j]];
        }
      }
    }
  
    return sorted;
  }
  
  
  function selectionSort(arr) {
    let sorted = [...arr];
    let n = sorted.length;
  
    for (let i = 0; i < n; i++) {
      let minIndex = i;
  
      for (let j = i + 1; j < n; j++) {
        if (sorted[j] < sorted[minIndex]) {
          minIndex = j;
        }
      }
  
      if (minIndex !== i) {
        [sorted[i], sorted[minIndex]] = [sorted[minIndex], sorted[i]];
      }
    }
  
    return sorted;
  }
  
  
  function insertionSort(arr) {
    let sorted = [...arr];
    let n = sorted.length;
  
    for (let i = 1; i < n; i++) {
      let key = sorted[i];
      let j = i - 1;
  
      while (j >= 0 && sorted[j] > key) {
        sorted[j + 1] = sorted[j];
        j--;
      }
  
      sorted[j + 1] = key;
    }
  
    return sorted;
  }
  
  
  const unsortedArray = [19, 7, 1, 23, 2, 15, 4, 20, 12, 30, 27];
  
  
  console.log("Bubble Sort:", bubbleSort(unsortedArray));
  console.log("Selection Sort:", selectionSort(unsortedArray));
  console.log("Insertion Sort:", insertionSort(unsortedArray));
  
