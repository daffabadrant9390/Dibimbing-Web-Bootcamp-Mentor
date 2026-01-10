class Hewan {
    constructor({nama, breed, usia, gender, jumlahKaki}) {
    this.nama = nama;
    this.breed = breed;
    this.usia = usia;
    this.gender = gender;
    this.jumlahKaki = jumlahKaki;
}

MakeSound() {
    return "suara hewan..."
}
    getHewanInfo() {
    return `Nama: ${this.nama}, Breed: ${this.breed}, Usia: ${this.usia} bulan, Gender: ${this.gender}, Kaki: ${this.jumlahKaki}`;
    }
}

//inheritance part
class Kucing extends Hewan {
    constructor({nama, breed, usia, gender}) {
    //call constructor kelas utama:
    super ({nama, breed, usia, gender, jumlahKaki: 4});
}

MakeSound() {
    return "maw";
}
}

class Anjing extends Hewan {
    constructor({nama, breed, usia, gender}) {
    //call constructor kelas utama:
    super ({nama, breed, usia, gender, jumlahKaki: 4});
}

MakeSound() {
    return "bark bark";
    }
}

class Sapi extends Hewan {
    constructor({nama, breed, usia, gender}) {
    //call constructor kelas utama
    super ({nama, breed, usia, gender, jumlahKaki: 4});
}

MakeSound() {
    return "mooo";
    }
}

const kucing = new Kucing({ nama: "Apung", breed: "Angora", usia: 10, gender: "betina" });
const anjing = new Anjing({ nama: "Popo", bread: "golden retriever", usia: 7, gender: "jantan"});
const sapi = new Sapi({nama: "Oreo", bread: "albino", usia: 8, gender: "betina"});

console.log(kucing.getHewanInfo());
console.log("Suara:", kucing.MakeSound());
console.log("===============")

console.log(anjing.getHewanInfo());
console.log("Suara:", anjing.MakeSound());
console.log("===============")

console.log(sapi.getHewanInfo());
console.log("Suara:", sapi.MakeSound());
console.log("===============")

    