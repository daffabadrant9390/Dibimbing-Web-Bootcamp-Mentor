//Outer loop range angka 1 hingga 5
for (let i = 1; i <= 5; i++) {
    //inner loop untuk pangkat 1 sampai 3
    for (let j = 1; j <= 3; j++) {
        //menghitung hasil perpangkatan
        let hasil = i ** j;

        //menampilkan hasil sesuai format yang diminta
        console.log(`${i} pangkat ${j} = ${hasil}`);
    }

    //pisahkan output dengan garis setelah setiap angka
    console.log("=================") 
}