// 1.	Buatlah class Hewan yang memiliki property dan method sebagai berikut
// a.	property nama
// b.	property breed atau ras dari hewan tersebut
// c.	property usia
// d.	property gender
// e.	property jumlahKaki
// f.	method makeSound() -> mengeluarkan suara dari masing-masing hewan
// g.	Kemudian buatlah children class berupa Kucing, Sapi, dan Anjing
// i.	Masing-masing children class akan meng inherit seluruh property, kecuali jumlahKaki dan nama. Hal ini dikarenakan setiap jenis hewan seharusnya memiliki jumlah kaki yang sama.
// ii.	Polymorphism part: Masing masing hewan memiliki suara yang berbeda, maka override method makeSound() sehingga masing masing children class memiliki suara nya sendiri. method tersebut akan mengembalikan String berupa suara hewan.


class Hewan {
    jumlahKaki = 4;


    constructor(nama, breed, usia, gender) {
        this.nama = nama;
        this.breed = breed;
        this.usia = usia;
        this.gender = gender;
    }
    makeSound() {
        return "Suara hewan tak teridentifikasi.";
    }
    getDetails() {
        return `${this.nama} (${this.breed}), Usia: ${this.usia} tahun, Gender: ${this.gender}, Kaki: ${this.jumlahKaki}`;
    }
}

class Kucing extends Hewan {
    constructor(nama, breed, usia, gender) {
        super(nama, breed, usia, gender);
    }
    makeSound() {
        return "Meong! Meong!";
    }
}

class Sapi extends Hewan {
    constructor(nama, breed, usia, gender) {
        super(nama, breed, usia, gender);
    }
    makeSound() {
        return "Mooooo!";
    }
}

class Anjing extends Hewan {
    constructor(nama, breed, usia, gender) {
        super(nama, breed, usia, gender);
    }
    makeSound() {
        return "Guk! Guk! Wuff!";
    }
}




const siMeong = new Kucing("Kitty", "Persia", 3, "Betina");
const siMoo = new Sapi("Banteng", "Limousin", 5, "Jantan");
const siGuk = new Anjing("Bolt", "Golden", 7, "Jantan");
const hewanUmum = new Hewan("Misteri", "Tidak Jelas", 10, "Tidak Tahu");


console.log("--- Detail Hewan (Pewarisan Properti) ---");
console.log(`Kucing: ${siMeong.getDetails()}`);
console.log(`Sapi: ${siMoo.getDetails()}`);
console.log(`Anjing: ${siGuk.getDetails()}`);


console.log("\n--- Suara Hewan (Polymorphism) ---");
console.log(`Suara ${siMeong.nama}: ${siMeong.makeSound()}`);
console.log(`Suara ${siMoo.nama}: ${siMoo.makeSound()}`);
console.log(`Suara ${siGuk.nama}: ${siGuk.makeSound()}`);
console.log(`Suara ${hewanUmum.nama}: ${hewanUmum.makeSound()}`);
