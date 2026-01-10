function perpangkatanDenganNestedLoop() {
  for (let i = 1; i <= 5; i++) {
    console.log("===================");
    for (let x = 1; x <= 3; x++) {
      let hasil = i ** x;
      console.log(`${i} pangkat ${x} = ${hasil}`);
    }
  }
}

perpangkatanDenganNestedLoop();
