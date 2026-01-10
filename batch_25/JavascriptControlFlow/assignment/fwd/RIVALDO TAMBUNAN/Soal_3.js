for (let i = 1; i <= 5; i++) { // ← outer loop (angka)
  for (let j = 1; j <= 3; j++) { // ← inner loop (pangkat)
    let hasil = i ** j; 
    console.log(`${i} pangkat ${j} = ${hasil}`);
  }
  console.log("===================");
}
