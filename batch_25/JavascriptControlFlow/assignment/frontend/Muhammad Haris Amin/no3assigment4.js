//soal 3

//deklarasi variable
hasil = 0
i=0
j=0

//membuat nested loop angka 1-5 dengan pangkat 1-3
for (i = 1; i <= 5; i++) {
    for (j = 1; j <= 3; j++) {
        hasil = i**j
        console.log(`${i} pangkat ${j} = ${hasil}`)
        
    }
    console.log("=================================")
}