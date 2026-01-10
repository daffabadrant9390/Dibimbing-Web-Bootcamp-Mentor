function hitungPangkat() {
  
    for (let nilai = 1; nilai <= 5; nilai++) {
      
      for (let pangkat = 1; pangkat <= 3; pangkat++) {
        
        const hasil = nilai ** pangkat;
        
        console.log(`${nilai} pangkat ${pangkat} = ${hasil}`);
      }
      
      console.log("===================");
    }
  }
  
  hitungPangkat();