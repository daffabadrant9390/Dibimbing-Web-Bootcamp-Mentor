/**Nilai Rata-Rata dan Grade Siswa */

const nilai = [85, 95, 20, 67, 75, 78, 75]//Array

let total = 0
for (let i = 0; i<nilai.length; i++){
    total +=nilai[i];
}//Mengtotalkan nilai

const avg = total/nilai.length//rata-rata nilai

if (avg >=90 && avg <=100){
    console.log("Nilai Siswa Adalah A")
}else if (avg >=80 && avg <=89.99){
    console.log("Nilai Siswa Adalah B")
}else if (avg >=70 && avg <=79.99 ){
    console.log("Nilai Siswa Adalah C")
}else if (avg >=60 && avg <=74.99){
    console.log("Nilai Siswa Adalah D")
}else{
    console.log("Nilai Siswa Adalah E")
}//hasil/grade berdasarkan nilai rata-rata