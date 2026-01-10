const insertionSort = (arrayData) => {
    const n = arrayData.length;

    for (let i = 1; i < n; i++) {
        //* Step 1. Set nilai dari keyTarget dan j
        let keyTarget = arrayData[i]
        let j = i - 1;

        // * Step 2. Lakukan looping ke belakang untuk compare j dan keyTarget
        while (j >= 0 && arrayData[j] > keyTarget) {
            // * Step 3. Jika memenuhi kondisi, swap nilai [j + 1] dengan j
            arrayData[j + 1] = arrayData[j];
            j--;
        }

        //* Step 4. Ubah nilai j + 1 dengan keyTarget
        arrayData[j + 1] = keyTarget;
    }

    return arrayData;
};


const arrayAngkaUnsorted = [5, 3, 8, 6, 2];
console.log(insertionSort(arrayAngkaUnsorted));