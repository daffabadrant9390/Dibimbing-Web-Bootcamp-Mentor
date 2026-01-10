// Nested Loop

// Outer
let i = 1;
while (i <= 5) {
  // Inner
  let j = 1;
  while (j <= 3) {
    let hasil = i ** j;
    console.log(`${i} pangkat ${j} adalah ${hasil}`);
    console.log("===========");
    j++; // penambahan Inner
  }
  i++; // penambahan Outer
}
