let nama = "gabriel";
let nilai = [85,95.20,67.75,78,75];

console.log("nama siswa :",nama)
console.log("daftar nilai :")

//grade nilai
//A: 90–100
//B: 80–89.99
//C: 75–79.99
//D: 60–74.99
//E: < 60


//nilai rata rata
let  total = 0;
for (let i =0 ; i < nilai.length; i ++){
    total = total + nilai[i];
    console.log(nilai[i]);
}

let ratarata = total / nilai.length;
console.log("rata rata nilainya adalah", ratarata)


if (ratarata >= 90 && ratarata <=100){
    console.log("Gradenya adalah A");
}else if (ratarata >= 80 && ratarata < 90){
    console.log("Gradenya adalah B");
    }else if (ratarata >= 75 && ratarata < 80){
        console.log("Gradenya adalah C");
        }else if (ratarata >= 60 && ratarata < 75){
        console.log("Gradenya adalah D");
         }else
            console.log("Gradenya adalah E")