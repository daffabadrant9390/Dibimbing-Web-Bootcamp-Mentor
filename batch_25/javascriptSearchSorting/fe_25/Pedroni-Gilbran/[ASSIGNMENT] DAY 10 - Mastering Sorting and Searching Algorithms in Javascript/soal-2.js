// Bubble Sort
const bubbleSort = (arrayData) => {
  let swapped = false;
  const n = arrayData.length;

  for (let i = 0; i < n; i++) {
    swapped = false;
    for (let j = 0; j < n - i; j++) {
      if (arrayData[j] > arrayData[j + 1]) {
        let tempdata = arrayData[j + 1];
        arrayData[j + 1] = arrayData[j];
        arrayData[j] = tempdata;
        swapped = true;
      }
      if (swapped === false) break;
    }
    return arrayData;
  }
};

let arrBubble = [7, 2, 9, 4, 1];
let arrBubbleEarly = [...arrBubble];
console.log("\n========Bubble Sort========");
console.log("Array Before Sorting: ", arrBubble);
console.log("Array After Bubble Sorting:", bubbleSort(arrBubbleEarly));
console.log("\n");

//Selection Sort
const selectionSort = (arrayData) => {
    const n = arrayData.length;

    for (let i = 0; i < n - 1; i++) {  
        let minIndex = i;  

        for (let j = i + 1; j < n; j++) {
            if (arrayData[j] < arrayData[minIndex]) {
                minIndex = j;  
            }
        }

        if (minIndex !== i) {  
            let tempdata = arrayData[i];
            arrayData[i] = arrayData[minIndex];
            arrayData[minIndex] = tempdata;
        }
    }

    return arrayData;  
}

let arrSelection = [10, 4, 6, 2, 8];
let arrSelectionEarly = [...arrSelection];  

console.log("\n========Selection Sort========");
console.log("Array Before Sorting: ", arrSelection);
console.log("Array After Selection Sorting:", selectionSort(arrSelectionEarly));
console.log("\n");

//Insertion Sort
const insertionSort = (arrayData) => {
    const n = arrayData.length

    for (let i = 1; i < n; i++){
        let keyTarget = arrayData[i]
        let j = i - 1

        while (j >= 0 && arrayData[j] > keyTarget){
            arrayData[j + 1] = arrayData[j]

            j--
        }
        arrayData[j + 1] = keyTarget
    }
    return arrayData;
}

let arrInsertion = [5, 3, 8, 6, 2];
let arrInsertionEarly = [...arrInsertion];  

console.log("\n========Selection Sort========");
console.log("Array Before Sorting: ", arrInsertion);
console.log("Array After Selection Sorting:", selectionSort(arrInsertionEarly));
console.log("\n");