//* Bubble Sort
const bubbleSorting = (arr) => {
    let swapped = false;
    const n = arr.length;

    for (let i = 0; i < n; i++) {
        swapped = false;
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j+1]) { //arr[2] > arr[3]
                let temp = arr[j+1]; // temp = arr[3] temp = 4
                arr[j+1] = arr[j]; // arr[3] = arr[2] arr[3] = 9
                arr[j] = temp; // arr[2] = temp // arr[2] = 4
                swapped = true; // 2,7,4,9,1
            }
            // console.log(arr); // Log the array after each swap
        }
        if (!swapped) break;
    }
    return arr;
}

const arraydata = [7, 2, 9, 4, 1];
console.log(`Hasil Bubble Sort : ${bubbleSorting(arraydata)}`); // [1, 2, 4, 7, 9]


//* Selection Sort
const selectionSorting = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for(let j = i+1; j<=arr.length-1; j++){
            if (arr[i] > arr[j])
            {
                // tukar data
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
const arraydata2 = [10, 4, 6, 2, 8];
console.log(`Hasil Selection Sort : ${selectionSorting(arraydata2)}`); // [2, 4, 6, 8, 10]


//* Insertion Sort
const insertionSorting = (arr) => {
    const n = arr.length;
    for (let i = 1; i < n; i++) {
        let target = arr[i];
        let j = i-1

        while(j >= 0 && arr[j] > target){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = target; // Place the target in its correct position
    }
    return arr;
}

const arraydata3 = [5, 3, 8, 6, 2];
console.log(`Hasil Insertion Sort : ${insertionSorting(arraydata3)}`); // [2, 3, 5, 6, 8]