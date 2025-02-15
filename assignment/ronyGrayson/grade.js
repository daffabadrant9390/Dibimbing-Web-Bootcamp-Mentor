const namaSiswa="Siska";
const nilaiSiswa=67;

if(nilaiSiswa>=90){
    console.log(`${namaSiswa} mendapat nilai A`)
} else if( nilaiSiswa >=80 && nilaiSiswa<90) {
    if( nilaiSiswa>=85 ){
        console.log(`${namaSiswa} mendapat nilai B+`);
    } else{
        console.log(`${namaSiswa} mendapat nilai B`);
    }
}
else if (nilaiSiswa >=75 && nilaiSiswa< 80) {
        console.log(`${namaSiswa} mendapat nilai C`);
    }
else if (nilaiSiswa >=60 && nilaiSiswa<75){
        console.log(`${namaSiswa} mendapat nilai D`)
     } else{
        console.log(`${namaSiswa} mendapat nilai E`)
     }