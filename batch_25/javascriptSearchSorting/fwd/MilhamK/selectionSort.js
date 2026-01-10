const selectionSort = (arrayAngka) => {
    let minIndex;
    const arrayLength = arrayAngka.length;

    // Outer loop (POINTER)
    for(let i = 0; i < arrayLength - 1; i++) {
        minIndex = i;

        // Inner Looping untuk menemukan minimum index
        for(let j = i + 1; j < arrayLength; j++) {
            if(arrayAngka[j] < arrayAngka[minIndex]) {
                minIndex = j;
            }
        }

        // Jika minIndex nya bukan i, maka ada pertukaran
        if(minIndex !== i) {
            let tempData = arrayAngka[i];
            arrayAngka[i] = arrayAngka[minIndex];
            arrayAngka[minIndex] = tempData;
        }
    }

    return arrayAngka;
}

const arrayAngkaUnsorted = [10, 4, 6, 2, 8];
console.log(selectionSort(arrayAngkaUnsorted));