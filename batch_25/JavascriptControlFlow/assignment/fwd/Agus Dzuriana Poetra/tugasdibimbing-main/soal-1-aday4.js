console.log 
("\n\n======================CARA 1 - Per Angka==========================\n\n")

for (let n = 1; n <=20; n += 1) {
    console.log("--------n = " + n +"----------");
    
    //Blok A
    if (n % 2 === 0)
        {console.log (n + " merupakan bilangan genap")}
    else
        {console.log (n + " merupakan bilangan ganjil")}

    //Blok B
    
    if (n % 4 === 0 && n % 6 === 0)
        {console.log (n + " habis dibagi dengan angka 4 dan 6")}
    else if (n % 4 === 0)
        {console.log (n + " habis dibagi dengan angka 4")}
    else if (n % 6 === 0)
        {console.log (n + " habis dibagi dengan angka 6")}
    else if (n % 3 === 0 || n % 5 === 0)
        {console.log (n + " habis dibagi dengan angka 3 atau 5")}
    else 
        {console.log(n)}
}


console.log 
("\n\n======================CARA 2 - Per Blok==========================\n\n")

//Blok A
console.log("\n===BLOK A===\n")
for (let n = 1; n <=20; n += 1) {    
    if (n % 2 === 0)
        {console.log (n + " merupakan bilangan genap")}
    else
        {console.log (n + " merupakan bilangan ganjil")}
}
//Blok B
console.log("\n===BLOK B===\n")
for (let n = 1; n <=20; n += 1) {
    if (n % 4 === 0 && n % 6 === 0)
        {console.log (n + " habis dibagi dengan angka 4 dan 6")}
    else if (n % 4 === 0)
        {console.log (n + " habis dibagi dengan angka 4")}
    else if (n % 6 === 0)
        {console.log (n + " habis dibagi dengan angka 6")}
    else if (n % 3 === 0 || n % 5 === 0)
        {console.log (n + " habis dibagi dengan angka 3 atau 5")}
    else 
        {console.log(n)}
}

