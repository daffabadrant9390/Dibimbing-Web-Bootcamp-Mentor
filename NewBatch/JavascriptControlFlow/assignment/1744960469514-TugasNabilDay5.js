//kode untuk menulis setiap bentuk acak dari kata dengan 5 huruf
let Inputkata = "123ssh";
let jumlah = 0;
let batas = Inputkata.length;


if(batas !== 5 ){
    console.log("CUMAN BISA KALO STRINGNYA 5 :'V")
}

else{
    for(let i = 0; i < batas; i++){
        for(let j = 0; j < batas; j++){
            if(j !== i){
                for(let k = 0; k < batas; k++){
                    if(k !== j && k !==i){
                        for(let l = 0; l < batas; l++){
                            if(l !== i && l !== k && l !== j){
                                for(let m = 0; m < batas; m++){
                                    if(m !== i && m !== j && m !== k && m !== l){
                                        console.log(Inputkata[i]+Inputkata[j]+Inputkata[k]+Inputkata[l]+Inputkata[m]);
                                        jumlah++
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    console.log("Total:" + jumlah)
}

