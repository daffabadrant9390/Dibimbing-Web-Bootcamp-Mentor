const bubbleSort = (arrayAngka) => {
    const arrayLength = arrayAngka.length;

    // Outer looping
    for (let i = 0; i < arrayLength; i++) {
        isSwapped = false;
        // Inner Looping
        for (let j = 0; j <arrayLength - i; j++) {
            //Check apakah harus dituker
            if(arrayAngka[j] > arrayAngka[j+1]) {
                [arrayAngka[j], arrayAngka[j+1]] = [arrayAngka[j+1], arrayAngka[j]]
                isSwapped = true;
            }
        }

        if (!isSwapped) {
            break;
        }
    }

    return arrayAngka;
}

const arrayAngkaUnsorted = [7, 2, 9, 4, 1]
console.log(bubbleSort(arrayAngkaUnsorted));