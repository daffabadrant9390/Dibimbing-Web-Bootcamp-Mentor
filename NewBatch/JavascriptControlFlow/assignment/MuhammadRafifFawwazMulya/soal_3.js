// Perpangkatan Menggunakan Nested Loop

for (let i = 1; i <= 5; i++) {
  let result = 1;
  for (let j = 1; j <= 3; j++) {
    console.log('*** result-before: ', result, i);
    result *= i;
    console.log('*** result-after: ', result, i);
    console.log(`${i}^${j} = ${result}`);
  }
  console.log('===================');
}
