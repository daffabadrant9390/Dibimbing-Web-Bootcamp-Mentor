const nilai = 20;

console.log(`Bilangan yang habis dibagi 3 atau 5 hingga ${nilai}:`);
for (let i = 1; i <= nilai; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        console.log(i);
    }
}
