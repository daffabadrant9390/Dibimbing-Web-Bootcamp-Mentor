const arr = [85, 95.2, 67.75, 78, 75];

const handleAverageFunc = (arrInput: number[]): string => {
  // cara 1 : looping
  let totalVal: number = 0;
  for (let i = 0; i < arrInput.length; i++) {
    totalVal += arrInput[i];
  }
  // cara 2 : arr method
  // const totalVal: number = arrInput.reduce((acc, curr) => acc + curr, 0);

  const average: number = totalVal / arrInput.length;
  const formattedAverage: string = average.toFixed(2);

  if (average >= 90 && average <= 100) {
    return `Nilai rata-rata kamu ${formattedAverage}, maka nilai kamu adalah A`;
  } else if (average >= 80 && average < 90) {
    return `Nilai rata-rata kamu ${formattedAverage}, maka nilai kamu adalah B`;
  } else if (average >= 75 && average < 80) {
    return `Nilai rata-rata kamu ${formattedAverage}, maka nilai kamu adalah C`;
  } else if (average >= 60 && average < 75) {
    return `Nilai rata-rata kamu ${formattedAverage}, maka nilai kamu adalah D`;
  } else {
    return `Nilai rata-rata kamu ${formattedAverage}, maka nilai kamu adalah E`;
  }
};
console.log(handleAverageFunc(arr));
