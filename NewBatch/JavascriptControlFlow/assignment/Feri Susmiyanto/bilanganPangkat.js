const a = [1, 2, 3, 4, 5];

function bilanganPangkat(data) {
  for (let angka = 0; angka < data.length; angka++) {
    let saveAngka = data[angka];

    for (let pangkat = 1; pangkat <= 3; pangkat++) {
      let hasil = saveAngka ** pangkat;
      console.log(`angka: ${saveAngka} pangkat ${pangkat} = ${hasil}`);
    }

    console.log("=================================");
  }
}

bilanganPangkat(a);
