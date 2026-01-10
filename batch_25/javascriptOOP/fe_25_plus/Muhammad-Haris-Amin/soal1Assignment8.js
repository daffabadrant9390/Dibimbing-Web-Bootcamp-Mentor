/**
 * Soal 1.
Buatlah class Hewan yang memiliki property dan method sebagai berikut
a. property nama
b. property breed atau ras dari hewan tersebut
c. property usia
d. property gender
e. property jumlahKaki
f. method makeSound() -> mengeluarkan suara dari masing-masing hewan
g. Kemudian buatlah children class berupa Kucing, Sapi, dan Anjing:
        1. Masing-masing children class akan meng inherit seluruh property,
        kecuali jumlahKaki dan nama. Hal ini dikarenakan setiap jenis hewan seharusnya memiliki jumlah kaki yang sama.
        2. Polymorphism part: Masing masing hewan memiliki suara yang berbeda,
        maka override method makeSound() sehingga masing masing children class memiliki suara nya sendiri.
        method tersebut akan mengembalikan String berupa suara hewan.
 */

class Hewan {
    constructor(nama, breed, usia, gender, jumlahKaki, sound) {
        this.nama = nama;
        this.breed = breed;
        this.usia = usia;
        this.gender = gender;
        this.jumlahKaki = jumlahKaki;
    
    }

    //Menampilkan informasi hewan
    getInfo() {
        return `
        Nama: ${this.nama}
        Ras: ${this.breed}
        Usia: ${this.usia}
        Gender: ${this.gender}
        Jumlah Kaki: ${this.jumlahKaki}
    
    ;`
    }
    //Mengeluarkan suara
    makeSound() {
        return `${this.nama} mengeluarkan suara...`;
    }
}

class Sapi extends Hewan {
    constructor(nama, breed, usia, gender) {
        super (nama, breed, usia, gender, 4);
    }

    makeSound() {
        return `${this.nama} bersuara "Mooo Mooo" `;
    }
}

class Kucing extends Hewan {
    constructor(nama, breed, usia, gender) {
        super (nama, breed, usia, gender, 4);
    }

    makeSound() {
        return `${this.nama} bersuara "Meong Meong" `;
    }
}

class Anjing extends Hewan {
    constructor(nama, breed, usia, gender) {
        super (nama, breed, usia, gender, 4);
    }

    makeSound() {
        return `${this.nama} bersuara "Guk Guk Guk" `;
    }
}

const kucing = new Kucing("Ipang", "Domestic", 1, "Betina");
const anjing = new Anjing("Udin", "Golden Retriever", 4, "Jantan");
const sapi = new Sapi("Susi", "Simental", 5, "Betina");

console.log(sapi.getInfo());
console.log(sapi.makeSound());

console.log(kucing.getInfo())
console.log(kucing.makeSound())

console.log(anjing.getInfo())
console.log(anjing.makeSound())