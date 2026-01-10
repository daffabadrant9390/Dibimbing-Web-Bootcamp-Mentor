const arrayAngkaSorted = [3, 7, 12, 18, 22, 27, 31, 36, 40, 45];
const nilaiTarget1 = 7;
const nilaiTarget2 = 21;

const binarySearchAlgorithm = (arrayAngka, nilaiTarget) => {
    let startIndex = 0;
    let endIndex = arrayAngka.length - 1;

    // loop while
    while(startIndex <= endIndex) {
        let middleIndex = Math.floor((startIndex + endIndex) / 2);
        if(arrayAngka[middleIndex] === nilaiTarget) {
            console.log(`${nilaiTarget} ditemukan pada index ke ${middleIndex}`)
            return middleIndex;
        }

        if(arrayAngka[middleIndex] < nilaiTarget) {
            startIndex = middleIndex + 1;
        } else {
            endIndex = middleIndex - 1;
        }
    }

    console.log(`${nilaiTarget} tidak ditemukan`)
    return -1;
}


binarySearchAlgorithm(arrayAngkaSorted, nilaiTarget1);
binarySearchAlgorithm(arrayAngkaSorted, nilaiTarget2);