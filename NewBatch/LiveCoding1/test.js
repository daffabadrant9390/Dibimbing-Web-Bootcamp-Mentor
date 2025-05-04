class Manusia {
  #nama;
  #usia;
  // Constructor function
  constructor(nama, usia) {
    // Property nama dan usia
    this.#nama = nama;
    this.#usia = usia;
  }
  // Method greeting
  greeting() {
    return `Hello guys, 
      perkenalkan nama saya ${this.#nama}. Saya berusia ${this.#usia} tahun`;
  }
}

// Child class extend parent class Manusia
class Pekerja extends Manusia {
  #gaji;
  #email;
  #jabatan;

  constructor(nama, usia, gaji, email, jabatan) {
    super(nama, usia);
    this.#gaji = gaji;
    this.#email = email;
    this.#jabatan = jabatan;
  }

  menghitungGaji(persenPajak) {
    return this.#gaji - this.#gaji * persenPajak;
  }
}

const pekerja1 = new Pekerja(
  'John',
  30,
  40000000,
  'johndoe@gmail.com',
  'senior software engineer'
);

console.log(pekerja1.greeting());
