function binarySearchAlogarithm(arrayData, NilaiTarget) {
    let startIndex = 0;
    let endIndex = arrayData.length -1;

    while (startIndex <= endIndex ) {
        let middleIndex = Math.floor((startIndex + endIndex) / 2);
        if (arrayData[middleIndex] === NilaiTarget) {
            return true;
        }

        if (arrayData[middleIndex] < NilaiTarget) {
            startIndex = middleIndex + 1;
        } else {
            endIndex = middleIndex - 1;
        }
    }

    return false;
}

const arrayData = [3, 7, 12, 18, 22, 27, 31, 36, 40, 45];

const NilaiTarget1 = 7;
const NilaiTarget2 = 21;

const isNilaiTarget1Exist = binarySearchAlogarithm(arrayData, NilaiTarget1);
const isNilaiTarget2Exist = binarySearchAlogarithm(arrayData, NilaiTarget2);

console.log (`Nilai ${NilaiTarget1} : ${isNilaiTarget1Exist}`);
console.log (`Nilai ${NilaiTarget2} : ${isNilaiTarget2Exist}`);