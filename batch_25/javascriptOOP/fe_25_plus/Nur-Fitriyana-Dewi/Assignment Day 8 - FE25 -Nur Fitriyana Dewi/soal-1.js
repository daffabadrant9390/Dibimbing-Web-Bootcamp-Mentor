class Hewan {
  constructor(nama, breed, usia, gender, jumlahKaki) {
    this.nama = nama;
    this.breed = breed;
    this.usia = usia;
    this.gender = gender;
    this.jumlahKaki = jumlahKaki;
  }
  makeSound() {
    return "bersuara";
  }
}

class Kucing extends Hewan {
  constructor(nama, breed, usia, gender, jumlahKaki) {
    super(nama, breed, usia, gender, 4);
  }

  makeSound() {
    return "Meaow";
  }
}

class Sapi extends Hewan {
  constructor(nama, breed, usia, gender, jumlahKaki) {
    super(nama, breed, usia, gender, 4);
  }

  makeSound() {
    return "Mooo";
  }
}

class Anjing extends Hewan {
  constructor(nama, breed, usia, gender, jumlahKaki) {
    super(nama, breed, usia, gender, 4);
  }

  makeSound() {
    return "Guk Guk";
  }
}

const kucing = new Kucing("Momo", "Anggora", "3", "Jantan");
const sapi = new Sapi("Afro", "Bali", "5", "Jantan");
const anjing = new Anjing("Speed", "Pudel", "10", "Jantan");

console.log(`${kucing.nama} bersuara ${kucing.makeSound()}`);
console.log(`${sapi.nama} bersuara ${sapi.makeSound()}`);
console.log(`${anjing.nama} bersuara ${anjing.makeSound()}`);
