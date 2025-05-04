const rangeVal: number = 5;

const handleFunc = (inputVal: number): void => {
  for (let i = 1; i <= inputVal; i++) {
    for (let j = 1; j <= 3; j++) {
      const pangkat: number = i ** j;
      console.log(`${i} pangkat ${j} = ${pangkat}`);
    }
    console.log("============");
  }
};

handleFunc(rangeVal);
