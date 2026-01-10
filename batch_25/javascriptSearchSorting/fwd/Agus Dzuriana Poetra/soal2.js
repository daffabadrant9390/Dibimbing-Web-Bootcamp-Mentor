function bubbleSort(array) {
    let arr = [...array] 
    let n = arr.length

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
            let temp = arr[j]
            arr[j] = arr[j + 1]
            arr[j + 1] = temp
            }
        }
    }

    return arr
}


function selectionSort(array) {
    let arr = [...array]
    let n = arr.length

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
            minIndex = j 
            }
        }
        let temp = arr[i]
        arr[i] = arr[minIndex]
        arr[minIndex] = temp
    }

    return arr
}


function insertionSort(array) {
    let arr = [...array]
    let n = arr.length

    for (let i = 1; i < n; i++) {
        let key = arr[i]
        let j = i - 1

        while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j]
        j--
        }

        arr[j + 1] = key
    }

    return arr
}


let dataSort = [29, 5, 13, 40, 7, 33, 18, 21, 9, 2]


console.log("\n=== SORTING ALGORITHMS ===")
console.log("Data Asli:", dataSort)                       // Expected Output: [2,  5,  7,  9, 13, 18, 21, 29, 33, 40]
console.log("Bubble Sort:", bubbleSort(dataSort))         // Expected Output: [2,  5,  7,  9, 13, 18, 21, 29, 33, 40]
console.log("Selection Sort:", selectionSort(dataSort))   // Expected Output: [2,  5,  7,  9, 13, 18, 21, 29, 33, 40]
console.log("Insertion Sort:", insertionSort(dataSort))   // Expected Output: [2,  5,  7,  9, 13, 18, 21, 29, 33, 40]
