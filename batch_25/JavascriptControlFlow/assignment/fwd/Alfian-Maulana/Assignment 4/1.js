console.log("=====================Blok If Else,Else If pertama=====================");

for (let i=1; i<=20; i++) {
    if (i % 2 === 0)
    console.log(i + " merupakan bilangan Ganjil")
        else
        console.log(i + " merupakan bilangan ganjil")
}

console.log("=====================Blok If Else,Else If Kedua=====================");

for(let j=1; j<=20; j++){
if (j % 4 === 0 && j % 6 === 0){
console.log(j + " habis dibagi dengan angka 4 dan 6");
    }else if (j % 3 === 0 || j % 5 === 0){
    console.log(j + " habis dibagi dengan angka 3 atau 5");
        }else if(j % 4 === 0){
            console.log(j + " habis dibagi dengan 4");
            }else if
                (j % 6 === 0){
                console.log(j + " habis dibagi dengan 6");
                }else{
                    console.log(j)
                }

}