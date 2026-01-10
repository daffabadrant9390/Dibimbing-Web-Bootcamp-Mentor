/**
 * Buatlah class Hewan yang memiliki property dan method sebagai berikut
 * a. property nama
 * b. property breed atau ras dari hewan tersebut
 * c. property usia
 * d. property gender 
 * e. property jumlahKaki
 * f. method makeSound() -> mengeluarkan suara dari masing-masing hewan.
 * g. Kemudian buatlah childern class berupa Kucing, Sapi, dan Anjing
 *  i.Masing-masing children class akan meng inherit seluruh property, 
 *    kecuali jumlahKaki dan nama. Hal ini dikarenakan setiap jenis hewan seharusnya memiliki jumlah kaki yang sama.
 *  ii. Polymorphism part: Masing masing hewan memiliki suara yang berbeda, 
 *      maka override method makeSound() sehingga masing masing children class memiliki suara nya sendiri.
 */

class Hewan {
    constructor(nama, breed, usia, gender, jumlahKaki) {
        this.nama = nama;
        this.breed = breed;
        this.usia = usia;
        this.gender = gender;
        this.jumlahKaki = jumlahKaki;
    }
    makeSound(){
        console.log(`${this.nama} membuat suara: ...`);
    }
}

// childern class dari Kucing, Sapi, dan Anjing
class Kucing extends Hewan {
    constructor(nama, breed, usia, gender) {
        super(nama, breed, usia, gender, 4);
    }
    makeSound() {
        console.log(`${this.nama} membuat suara: Meong`);
    }
}

class Sapi extends Hewan {
    constructor(nama, breed, usia, gender) {
        super(nama, breed, usia, gender, 4);
    }
    makeSound() {
        console.log(`${this.nama} membuat suara: Moo`);
    }
}

class Anjing extends Hewan {
    constructor(nama, breed, usia, gender) {
        super(nama, breed, usia, gender, 4);
    }
    makeSound() {
        console.log(`${this.nama} membuat suara: Guk guk`);
    }
}

const siPus = new Kucing("Meong", "Prsia", 2, "Betina");
const siMoo = new Sapi("Moo", "Holstein", 2, "Jantan");
const siGuk = new Anjing("Guk", "Golden", 2, "Jantan");

console.log("--- Data hewan---");
console.log(`Nama: ${siPus.nama}, Ras: ${siPus.breed}, Usia: ${siPus.usia}, Gender: ${siPus.gender},`);
console.log(`Nama: ${siMoo.nama}, Ras: ${siMoo.breed}, Usia: ${siMoo.usia}, Gender: ${siMoo.gender},`);
console.log(`Nama: ${siGuk.nama}, Ras: ${siGuk.breed}, Usia: ${siGuk.usia}, Gender: ${siGuk.gender},`);

console.log("--- Suara hewan---");
siPus.makeSound();
siMoo.makeSound();
siGuk.makeSound();