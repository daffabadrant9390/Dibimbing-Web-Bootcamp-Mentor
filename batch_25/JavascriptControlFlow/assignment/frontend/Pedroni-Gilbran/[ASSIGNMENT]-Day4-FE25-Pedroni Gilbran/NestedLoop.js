/**Perpangkatan Nested Loop */
   
//untuk outer loop
for (let i = 1; i <= 5; i++){
    //untuk inner loop
    for (let j = 1; j <=3; j++){
        //mempangkatkan
        const hasil = i ** j
        console.log(`\n${i} Pangkat ${j} = ${hasil}`)
    }
    console.log("===================")
}