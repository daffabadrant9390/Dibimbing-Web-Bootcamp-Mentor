constBinarySearch = (arrayData, nilaiTarget) => {
    let startIndex = 0;
    let endIndex = arrayData.length - 1;

    while (startIndex <= endIndex) {
        let middleIndex = Math.floor((startIndex + endIndex) / 2);
        // console.log(`Index dari nilai ${nilaiTarget} adalah ${middleIndex}`)

        if (arrayData[middleIndex] === nilaiTarget) {
            return middleIndex;
        }

        if (arrayData[middleIndex] < nilaiTarget) {
            startIndex = middleIndex + 1;
        } else {
            endIndex = middleIndex - 1;
        
        }
    }

    return -1
}

const arrayData = [3, 7, 12, 18, 22, 27, 31, 36, 40, 45]

//case1
const nilaiTarget1 = 7
const result1 = constBinarySearch(arrayData, nilaiTarget1)
console.log(`Indeks dari nilai ${nilaiTarget1} adalah ${result1}`)

//case2
const nilaiTarget2 = 21
const result2 = constBinarySearch(arrayData, nilaiTarget2)
console.log(`Indeks dari nilai ${nilaiTarget2} adalah ${result2}`)

//case3
const nilaiTarget3 = 36
const result3 = constBinarySearch(arrayData, nilaiTarget3)
console.log(`Indeks dari nilai ${nilaiTarget3} adalah ${result3}`)