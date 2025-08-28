const linearSearch = (arr, target)=>{
    for(let [index,value] of arr.entries()){
        if(value===target){
            return index;
        }
    }
    return -1;
}

const angka = [29, 5, 13, 40, 7, 33, 18, 21, 9, 2];


const cariPertama = linearSearch(angka, 2);
const cariKedua = linearSearch(angka, 99);

console.log("Index dari 2:", cariPertama); 
console.log("Index dari 99:", cariKedua); 