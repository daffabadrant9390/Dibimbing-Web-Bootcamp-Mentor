//Menentukan nilai dari range numbertertentu dengan rules sebagai berikut
// a. Bilangan Ganjil
// b. Bilangan Genap
// c. Bilangan dapat habis dibagi dengan 4
// d. Bilangan dapat habis dibagi dengan 6
// e. Bilangan dapat habis dibagi dengan 4 DAN 6
// f. Bilangan dapat habis dibagi dengan 3 ATAU 5


const angka=20;
for(let i=1 ; i<=angka ; i++){
    if(i%2 !== 0){
        if(i%4 === 0){
            if(i%6 === 0){
                if(i%3===0 || i%5===0){
                    console.log(`${i} merupakan bilangan Ganjil`);          //merupakan bilangan Ganjil
                    console.log(`${i} habis dibagi dengan angka 4 dan 6`);  //habis dibagi 4 dan 6
                    console.log(`${i} habis dibagi dengan angka 3 atau 5`); //habis dibagi dengan angka 3 atau 5
                }
                else{
                    console.log(`${i} merupakan bilangan Ganjil`);                  //merupakan bilangan Ganjil
                    console.log(`${i} habis dibagi dengan angka 4 dan 6`);          //habis dibagi 4 dan 6
                }
            }
            else if(i%3===0 || i%5===0){
                console.log(`${i} merupakan bilangan Ganjil`);          //merupakan bilangan Ganjil
                console.log(`${i} habis dibagi dengan 4`);          //habis dibagi dengan 4
                console.log(`${i} habis dibagi dengan angka 3 atau 5`); //habis dibagi dengan angka 3 atau 5
            }
            else{
                console.log(`${i} merupakan bilangan Ganjil`);      //merupakan bilangan Ganjil
                console.log(`${i} habis dibagi dengan 4`);          //habis dibagi dengan 4
            }
        }
        else if(i%6 === 0){
            if(i%3===0 || i%5===0){
                console.log(`${i} merupakan bilangan Ganjil`);          //merupakan bilangan Ganjil
                console.log(`${i} habis dibagi 6`);                     //habis dibagi 4 dan 6
                console.log(`${i} habis dibagi dengan angka 3 atau 5`); //habis dibagi dengan angka 3 atau 5
            }
            else{
                console.log(`${i} merupakan bilangan Ganjil`);                  //merupakan bilangan Ganjil
                console.log(`${i} habis dibagi 6`);          //habis dibagi 4 dan 6
            }
        }
        else if(i%3===0 || i%5===0){
            console.log(`${i} merupakan bilangan Ganjil`);          //merupakan bilangan Ganjil
            console.log(`${i} habis dibagi dengan angka 3 atau 5`); //habis dibagi dengan angka 3 atau 5
        }
        else{
            console.log(`${i} merupakan bilangan Ganjil`);          //merupakan bilangan Ganjil
        }
    }
    else{ //Genap
        if(i%4 === 0){
            if(i%6 === 0){
                if(i%3===0 || i%5===0){
                    console.log(`${i} merupakan bilangan Genap`);           //merupakan bilangan genap
                    console.log(`${i} habis dibagi dengan 4 dan 6`);        //habis dibagi 4 dan 6
                    console.log(`${i} habis dibagi dengan angka 3 atau 5`); //habis dibagi dengan angka 3 atau 5
                }
                else{
                    console.log(`${i} merupakan bilangan Genap`);               //merupakan bilangan genap
                    console.log(`${i} habis dibagi dengan 4 dan 6`);             //habis dibagi 4 dan 6
                }
            }
            else if(i%3===0 || i%5===0){
                    console.log(`${i} merupakan bilangan Genap`);           //merupakan bilangan ganjil
                    console.log(`${i} habis dibagi dengan 4`);              //habis dibagi dengan 4
                    console.log(`${i} habis dibagi dengan angka 3 atau 5`); //habis dibagi dengan angka 3 atau 5
            }
            else{
                console.log(`${i} merupakan bilangan Genap`);       //merupakan bilangan genap
                console.log(`${i} habis dibagi dengan 4`);          //habis dibagi dengan 4
            }
        }
        else if(i%6 === 0){
            if(i%3===0 || i%5===0){
                console.log(`${i} merupakan bilangan Genap`);           //merupakan bilangan genap
                console.log(`${i} habis dibagi 6`);                     //habis dibagi 6
                console.log(`${i} habis dibagi dengan angka 3 atau 5`); //habis dibagi dengan angka 3 atau 5
            }
            else{
                console.log(`${i} merupakan bilangan Genap`);       //merupakan bilangan genap
                console.log(`${i} habis dibagi 6`);                 //habis dibagi 6
            }
        }
        else if(i%3===0 || i%5===0){
            console.log(`${i} merupakan bilangan Genap`);           //merupakan bilangan genap
            console.log(`${i} habis dibagi dengan angka 3 atau 5`); //habis dibagi dengan angka 3 atau 5
        }
        else{
            console.log(`${i} merupakan bilangan Genap`);           //merupakan bilangan genap
        }
    }
}