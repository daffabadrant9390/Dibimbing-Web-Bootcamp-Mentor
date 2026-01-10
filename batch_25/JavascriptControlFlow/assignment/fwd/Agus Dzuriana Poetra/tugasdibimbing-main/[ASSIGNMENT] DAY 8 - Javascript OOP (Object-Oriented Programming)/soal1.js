class Hewan {
    #jumlahKaki

    constructor (nama, breed, usia, gender, jumlahKaki) {
        this.nama = nama;
        this.breed = breed;
        this.usia = usia;
        this.gender = gender;
        this.#jumlahKaki = jumlahKaki
    }

    get jumlahKaki () {
        return this.#jumlahKaki
    }

        makeSound() {
        return "Hewan ini bersuara ...." // ditulis agar ingat method apa saja yang akan di override
    }

}


class Kucing extends Hewan {
    constructor(nama, breed, usia, gender) {
        super(nama, breed, usia, gender, 4)
    }

    makeSound() {
        return "Meong!"
    }
}

class Sapi extends Hewan {
    constructor(nama, breed, usia, gender) {
        super(nama, breed, usia, gender, 4)
    }

    makeSound() {
        return "Mooo!"
    }
}

class Anjing extends Hewan {
    constructor(nama, breed, usia, gender) {
        super(nama, breed, usia, gender, 4)
    }

    makeSound() {
        return "Guk Guk!"
    }
}

const tom = new Kucing ("Tom", "Persia", 5, "jantan");
const wisanggeni = new Sapi ("Wisanggeni",  "Limosin", 10, "Jantan");
const shiro = new Anjing ("Shiro", "Kishu", 4, "Jantan")

console.log(`${tom.nama} adalah seeokor kucing ${tom.breed} ${tom.gender} yang memiliki ${tom.jumlahKaki} kaki dan bersuara ${tom.makeSound()}`)
console.log(`${wisanggeni.nama} adalah seeokor sapi ${wisanggeni.breed} ${wisanggeni.gender} yang memiliki ${wisanggeni.jumlahKaki} kaki dan bersuara ${wisanggeni.makeSound()}`)
console.log(`${shiro.nama} adalah seekor anjing ${shiro.breed} ${shiro.gender} yang memiliki ${shiro.jumlahKaki} kaki dan bersuara ${shiro.makeSound()}`)
