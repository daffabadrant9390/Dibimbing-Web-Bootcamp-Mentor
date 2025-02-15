let rangeAngka = 5;
let rangePangkat = 3;

for (let i = 1; i <= rangeAngka; i++) {
  if (i === 1) {
    console.log(`=======================================`);
  }
  for (let j = 1; j <= rangePangkat; j++) {
    console.log(`Nilai dari ${i} dipangkatkan ${j} adalah ${i ** j}`);
  }
  console.log(`=======================================`);
}
