// ====== CLASS HEWAN (Parent Class) ======
class Hewan {
  constructor(nama, breed, usia, gender, jumlahKaki) {
    this.nama = nama;
    this.breed = breed;
    this.usia = usia;
    this.gender = gender;
    this.jumlahKaki = jumlahKaki;
  }

  makeSound() {
    return "Hewan ini mengeluarkan suara.";
  }

  info() {
    return `${this.nama} adalah seekor ${this.constructor.name} berjenis ${this.gender}, ras ${this.breed}, berusia ${this.usia} tahun dan memiliki ${this.jumlahKaki} kaki.`;
  }
}

// ====== CLASS ANAK (Inheritance + Polymorphism) ======
class Kucing extends Hewan {
  constructor(nama, breed, usia, gender) {
    super(nama, breed, usia, gender, 4);
  }

  makeSound() {
    return "Meong~";
  }
}

class Sapi extends Hewan {
  constructor(nama, breed, usia, gender) {
    super(nama, breed, usia, gender, 4);
  }

  makeSound() {
    return "Moo~";
  }
}

class Anjing extends Hewan {
  constructor(nama, breed, usia, gender) {
    super(nama, breed, usia, gender, 4);
  }

  makeSound() {
    return "Guk Guk!";
  }
}

// ====== CONTOH PENGGUNAAN ======
const kucing1 = new Kucing("Miko", "Persia", 2, "jantan");
console.log(kucing1.info());
console.log("Suara:", kucing1.makeSound());

const sapi1 = new Sapi("Si Putih", "Limosin", 5, "betina");
console.log(sapi1.info());
console.log("Suara:", sapi1.makeSound());

console.log("===================================");

// ====== CLASS ORANG (ENCAPSULATION + VALIDASI) ======
class Orang {
  #usia;
  #gender;
  #totalEnergi;

  constructor(nama, usia, gender, totalEnergi = 10) {
    this.nama = nama; // public
    this.#usia = usia;
    this.#gender = gender;
    this.#totalEnergi = totalEnergi;
  }

  // Getter dan Setter
  get usia() {
    return this.#usia;
  }

  get gender() {
    return this.#gender;
  }

  get totalEnergi() {
    return this.#totalEnergi;
  }

  set totalEnergi(value) {
    this.#totalEnergi = value;
  }

  // ====== Metode Aktivitas ======
  makanMinum() {
    let tambahEnergi = 0;
    if (this.#usia <= 10) tambahEnergi = 6;
    else if (this.#usia <= 25) tambahEnergi = 4;
    else tambahEnergi = 2;

    this.#totalEnergi += tambahEnergi;
    console.log(`${this.nama} makan & minum, energi bertambah ${tambahEnergi}. Total energi: ${this.#totalEnergi}`);
  }

  tidur(jam) {
    let tambahEnergi = 0;
    if (this.#usia <= 10) tambahEnergi = jam + 3;
    else if (this.#usia <= 25) tambahEnergi = jam + 2;
    else tambahEnergi = jam + 1;

    this.#totalEnergi += tambahEnergi;
    console.log(`${this.nama} tidur selama ${jam} jam, energi bertambah ${tambahEnergi}. Total energi: ${this.#totalEnergi}`);
  }

  sekolahAtauKerja(jam) {
    let kurangEnergi = 0;
    if (this.#usia <= 10) kurangEnergi = jam + 3;
    else if (this.#usia <= 25) kurangEnergi = jam + 5;
    else kurangEnergi = jam + 7;

    if (this.#totalEnergi < kurangEnergi) {
      console.log(`${this.nama} terlalu lelah untuk bekerja/sekolah. Harus istirahat dulu!`);
      return;
    }

    this.#totalEnergi -= kurangEnergi;
    console.log(`${this.nama} bekerja/sekolah selama ${jam} jam, energi berkurang ${kurangEnergi}. Total energi: ${this.#totalEnergi}`);
  }

  olahraga(jam) {
    let kurangEnergi = 0;
    if (this.#usia <= 10) kurangEnergi = jam + 2;
    else if (this.#usia <= 25) kurangEnergi = jam + 3;
    else kurangEnergi = jam + 5;

    if (this.#totalEnergi < kurangEnergi) {
      console.log(`${this.nama} tidak cukup energi untuk olahraga. Coba istirahat dulu!`);
      return;
    }

    this.#totalEnergi -= kurangEnergi;
    console.log(`${this.nama} olahraga selama ${jam} jam, energi berkurang ${kurangEnergi}. Total energi: ${this.#totalEnergi}`);
  }
}

// ====== CONTOH PENGGUNAAN CLASS ORANG ======
const orang1 = new Orang("Andi", 20, "laki-laki", 15);
console.log(`Nama: ${orang1.nama}, Usia: ${orang1.usia}, Gender: ${orang1.gender}, Energi: ${orang1.totalEnergi}`);

orang1.makanMinum();
orang1.sekolahAtauKerja(4);
orang1.olahraga(3);
orang1.tidur(5);
orang1.olahraga(10); // contoh energi tidak cukup
