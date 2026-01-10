class Hewan {
  #breed;
  #usia;
  #gender;

  constructor(breed, usia, gender) {
    this.#breed = breed;
    this.#usia = usia;
    this.#gender = gender;
  }

  get info() {
    return `Breed: ${this.#breed}, Usia: ${this.#usia} tahun, Gemder: ${
      this.#gender
    }`;
  }
}

// child Kucing
class Kucing extends Hewan {
  constructor(breed, usia, gender) {
    super(breed, usia, gender);
    this.nama = "Kucing";
    this.jumlahKaki = 4;
  }

  makeSound() {
    return "OOO II A I OOO II A I~";
  }
}

// child Sapi
class Sapi extends Hewan {
  constructor(breed, usia, gender) {
    super(breed, usia, gender);
    this.nama = "Sapi";
    this.jumlahKaki = 4;
  }

  makeSound() {
    return "Mooo ~";
  }
}

// child Anjing
class Anjing extends Hewan {
  constructor(breed, usia, gender) {
    super(breed, usia, gender);
    this.nama = "Anjing";
    this.jumlahKaki = 4;
  }

  makeSound() {
    return "Guk guk guk ~";
  }
}

// daftar Hewan
const daftarHewan = [
  new Kucing("Persia", 2, "Betina"),
  new Sapi("Perah", 5, "Jantan"),
  new Anjing("Bulldog", 20, "Jantan"),
];

daftarHewan.forEach((hewan) => {
  console.log(
    `${hewan.nama}, (${
      hewan.info
    }) bersuara: ${hewan.makeSound()}, Jumlah Kakinya: ${hewan.jumlahKaki}`
  );
});