class Hewan {
    constructor(nama, breed, usia, gender, jumlahKaki) {
        this.nama = nama;
        this.breed = breed;
        this.usia = usia;
        this.gender = gender;
        this.jumlahKaki;
    }

    makeSound() {
        return "mengeluarkan suara dari masing-masing hewan"
    }
}

class Kucing extends Hewan {
    constructor(nama, breed, usia, gender, jumlahKaki) {
        super(breed, usia, gender);
        this.nama = nama;
        this.jumlahKaki = jumlahKaki;
    }

    makeSound() {
        return "Miaw!"
    }
}

class Sapi extends Hewan {
    constructor(nama, breed, usia, gender, jumlahKaki) {
        super(breed, usia, gender);
        this.nama = nama;
        this.jumlahKaki = jumlahKaki;
    }

    makeSound() {
        return "Moo~"
    }
}

class Anjing extends Hewan {
    constructor(nama, breed, usia, gender, jumlahKaki) {
        super(breed, usia, gender);
        this.nama = nama;
        this.jumlahKaki = jumlahKaki;
    }

    makeSound() {
        return "Guk Guk!"
    }
}

const kucing1 = new Kucing("Kitty", "Persia", 2, "Betina");
const sapi1 = new Sapi("Mimin", "Simental", 5, "Betina");
const anjing1 = new Anjing("Mery", "pudel", 1, "Betina");

console.log(`${kucing1.nama} bersuara: ${kucing1.makeSound()}`);
console.log(`${sapi1.nama} bersuara: ${sapi1.makeSound()}`);
console.log(`${anjing1.nama} bersuara: ${anjing1.makeSound()}`);