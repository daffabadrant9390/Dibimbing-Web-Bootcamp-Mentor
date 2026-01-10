/* 
1.1. Gunakan array [29, 5, 13, 40, 7, 33, 18, 21, 9, 2].
    Buat fungsi mencari menggunakan linear search yang menerima array
    dan nilai target, dan mengembalikan nilai index di posisi mana angka
    tersebut ditemukan. (jika tidak ditemukan return '-1')

1.2. Gunakan array [3, 7, 12, 18, 22, 27, 31, 40, 45].
    Buat fungsi pencariam menggunakan binary search, boleh menggunakan 
    pendekatan interatif atau rekursif. Fungsi harus mengembalikan nilai
    boolean.

2.1. Buat tiga buah fungsi berbeda, masing-masing untuk satu metode sorting:
    Bubble Sort -> array data [7, 2, 9, 4, 1]
    Selection Sort -> array data [10, 4, 6, 2, 8]
    Insertion Sort -> array data [5, 3, 8, 6, 2]

2.2. Masing-masing fungsi menerima array sebagai input dan mengembalikan array
    yang sudah terurut secara ascending.

2.3. Tampilkan hasil array yang sudah diurutkan dari masing-masing metode ke
    console
*/


const linearSearch = (arrayOfNumber, targetNumber) =>   //Linear search
{
    let result;

    for (let i = 0; i < arrayOfNumber.length; i++)
    {
        if (arrayOfNumber[i] === targetNumber) 
        {
            return i;
        }
    }

    return -1;
}


const binarySearch = (arrayOfNumber, targetNumber) =>   //Binary search
{
    const middele = Math.floor((arrayOfNumber.length - 1)  / 2);

    if (arrayOfNumber[middele] === targetNumber)
    {
        return true;
    }
    else if (arrayOfNumber[middele] > targetNumber)
    {
        return binarySearch((arrayOfNumber.slice(0, middele)), targetNumber);
    }
    else if (arrayOfNumber[middele] < targetNumber)
    {
        return binarySearch((arrayOfNumber.slice(middele, -1)), targetNumber);     
    }
    else
    {
        return false;
    }
}


const bubbleSort = (arrayOfNumber) =>   //Bubble Sort
{
    let isTrue = false;

    for (let i = 0; i <= arrayOfNumber.length; i++)
    {
        if (arrayOfNumber[i] > arrayOfNumber[i + 1])
        {
            const tmp = arrayOfNumber[i + 1];
            arrayOfNumber[i + 1] = arrayOfNumber[i];
            arrayOfNumber[i] = tmp;

            isTrue = true;
        }
    }

    if (isTrue)
    {
        return bubbleSort(arrayOfNumber);
    }
    else
    {
        return arrayOfNumber;
    }
}


const selectionSort = (arrayOfNumber) =>    //Selection Sort
{
    if (arrayOfNumber.length === 1) return arrayOfNumber[0];

    for (let i = 1; i < arrayOfNumber.length; i++)
    {
        if (arrayOfNumber[i] < arrayOfNumber[0])
        {
            const tmp = arrayOfNumber[i];
            arrayOfNumber[i] = arrayOfNumber[0];
            arrayOfNumber[0] = tmp;       
        }
    }

    return [arrayOfNumber[0], selectionSort(arrayOfNumber.slice(1))];
}


const insertionSort = (arrayOfNumber) =>    //Insertion Sort
{
    for (let i = 1; i < arrayOfNumber.length; i++)
    {
        for (let j = (i - 1); j >= 0; j--)
        {
            if (arrayOfNumber[j] > arrayOfNumber[j + 1])
            {
                const tmp = arrayOfNumber[j];
                arrayOfNumber[j] = arrayOfNumber[j + 1];
                arrayOfNumber[j + 1] = tmp;
            }
        }
    }

    return arrayOfNumber;
}



console.log("==========Linear Search==========");
const data1 = [29, 5, 13, 40, 7, 33, 18, 21, 9, 2];
console.log(`Array : ${data1}`);
console.log(`Nilai 2 ada pada posisi index : ${linearSearch(data1, 2)}`);
console.log(`Nilai 99 ada pada posisi index : ${linearSearch(data1, 99)}`);


console.log("\n==========Binary Search==========");
const data2 = [3, 7, 12, 18, 22, 27, 31, 36, 40, 45];
console.log(`Array : ${data2}`);
console.log(`Apakah nilai 7 ada pada array : ${binarySearch(data2, 7)}`);
console.log(`Apakah nilai 21 ada pada array : ${binarySearch(data2, 21)}`);



console.log("\n============Bubble Sort============");
const data3 = [7, 2, 9, 4, 1];
console.log(`Sebelum disortir : ${data3}`);
console.log(`Setelah disortir : ${bubbleSort(data3)}`);


console.log("\n==========Selection Sort===========");
const data4 = [10, 4, 6, 2, 8];
console.log(`Sebelum disortir : ${data4}`);
console.log(`Setelah disortir : ${selectionSort(data4)}`);


console.log("\n==========Insertion Sort===========");
const data5 = [5, 3, 8, 6, 2];
console.log(`Sebelum disortir : ${data5}`);
console.log(`Setelah disortir : ${insertionSort(data5)}`);