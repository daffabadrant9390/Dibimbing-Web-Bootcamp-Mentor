// Parent class
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
}

// Child class: Kucing
class Kucing extends Hewan {
  constructor(nama, breed, usia, gender) {
    super(nama, breed, usia, gender, 4);
  }

  makeSound() {
    return "Meong~";
  }
}

// Child class: Sapi
class Sapi extends Hewan {
  constructor(nama, breed, usia, gender) {
    super(nama, breed, usia, gender, 4);
  }

  makeSound() {
    return "Moooo~";
  }
}

// Child class: Anjing
class Anjing extends Hewan {
  constructor(nama, breed, usia, gender) {
    super(nama, breed, usia, gender, 4);
  }

  makeSound() {
    return "Guk guk!";
  }
}

const kucing1 = new Kucing("Luca", "Persia", 2, "Betina");
const sapi1 = new Sapi("Seppi", "Simental", 5, "Jantan");
const anjing1 = new Anjing("Rushel", "Golden Retriever", 3, "Jantan");

// Array hewan
const daftarHewan = [kucing1, sapi1, anjing1];

daftarHewan.forEach((hewan) => {
  console.log(
    `${hewan.nama} (${hewan.constructor.name}) bersuara: ${hewan.makeSound()}`
  );
});
