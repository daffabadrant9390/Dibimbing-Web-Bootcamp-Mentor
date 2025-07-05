// Gunakan array berikut yang belum terurut:
//  [19, 7, 1, 23, 2, 15, 4, 20, 12, 30, 27]

// Buat tiga buah fungsi berbeda, masing-masing untuk satu metode sorting:
// Bubble Sort
// Selection Sort
// Insertion Sort

// Masing-masing fungsi menerima array sebagai input dan mengembalikan array yang sudah terurut secara ascending.
// Tampilkan hasil array yang sudah diurutkan dari masing-masing metode ke console.

const numbers = [19, 7, 1, 23, 2, 15, 4, 20, 12, 30, 27];

function bubbleSort(arrNums){
    let temp = 0;
    for (let i = 0; i < arrNums.length; i++) {
        let swapped = false;
        for (let j = 0; j < arrNums.length - 1; j++) {
            if(arrNums[j] > arrNums[j + 1]){
                temp = arrNums[j];
                arrNums[j] = arrNums[j + 1];
                arrNums[j + 1] = temp;
                swapped = true;
            }
        }
        if(swapped === false){
            return arrNums;
        }
    }
}

console.log(bubbleSort(numbers));

///////////////////////////////////////////////////////////////////////////////

function selectionSort(arrNums){

    for (let i = 0; i < arrNums.length - 1; i++) {
        let temp = 0;
        let minIdx = i;
        for (let j = i + 1; j < arrNums.length; j++) {
            if(arrNums[minIdx] > arrNums[j]){
                minIdx = j;
            }
        }
        if(minIdx !== i){
            temp = arrNums[i];
            arrNums[i] = arrNums[minIdx];
            arrNums[minIdx] = temp;
        }
    }

    return arrNums;
}

console.log(selectionSort(numbers));

///////////////////////////////////////////////////////////////////////////////


function insertionSort(arrNums){
    
    for (let i = 1; i < arrNums.length; i++) {
        let currNum = arrNums[i];
        let j = i;
        while(j > 0 && currNum < arrNums[j - 1]){
            arrNums[j] = arrNums[j - 1];
            j--;
        }
        arrNums[j] = currNum;
    }

    return arrNums;
}

console.log(insertionSort(numbers));