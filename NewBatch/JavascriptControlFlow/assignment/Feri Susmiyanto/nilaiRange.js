const data = 20;

function ganjilGenap(params) {
  for (let i = 1; i <= params; i++) {
    if (i % 2 === 1) {
      console.log(`${i} = ganjil`);
    } else {
      console.log(`${i} = genap`);
    }

    if (i % 4 === 0) {
      console.log(`${i} habis dibagi 4`);
    } else if (i % 6 === 0) {
      console.log(`${i} habis dibagi 6`);
    }

    if (i % 4 === 0 && i % 6 === 0) {
      console.log(`${i} habis dibagi 4 dan 6`);
    } else if (i % 3 === 0 || i % 5 === 0) {
      console.log(`${i} habis dibagi 3 atau 5`);
    }

    console.log("--------------------");
  }
  
}

ganjilGenap(data);
