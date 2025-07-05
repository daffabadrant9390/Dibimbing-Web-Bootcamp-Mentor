// function bubleSort(arr){
//     for(let i = 0; i < arr.length - 1; i++){
//         for(let j = 0; j < arr.length; j++){
//             if(arr[j] > arr[j+1]){
//                 [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
//             } 
//         }
//     }
//     return arr;
// }


// function sectionSort(arr1){
//     for(let i = 0; i < arr1.length -1; i++){
//         let minIndex = i;
//         for(let j = i + 1; j < arr1.length; j++){
//             if(arr1[j] < arr1[minIndex]){
//                 minIndex = j;
//             }
//         }
//         [arr1[i],arr1[minIndex]] = [arr1[minIndex], arr1[i]]
//     }
//     return arr1;
// }


function insertionSort(arr2){
    for(let i = 1; i < arr2.length; i++){
        let numberToInsert = arr2[i];
        let j = i - 1;
        while(j >= 0 && arr2[j] > numberToInsert){
            arr2[j+1] = arr2[j];
            j = j-1
        }
        arr2[j+1] = numberToInsert;
    }
    return arr2;
}





const array = [19, 7, 1, 23, 2, 15, 4, 20, 12, 30, 27];
console.log(insertionSort(array));