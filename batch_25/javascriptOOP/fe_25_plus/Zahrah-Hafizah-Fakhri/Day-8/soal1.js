class Hewan {
  constructor(nama, ras, gender, usia, jumlahKaki) {
    this.nama = nama;
    this.ras = ras;
    this.gender = gender;
    this.usia = usia;
    this.jumlahKaki = jumlahKaki;
  }

  makeSound() {
    return "Suara Hewan Tidak Dikenali";
  }
}

class Kucing extends Hewan {
  constructor(nama, ras, gender, usia) {
    super(nama, ras, gender, usia, 4);
  }

  makeSound() {
    return "Meoongg!";
  }
}

class Sapi extends Hewan {
  constructor(nama, ras, gender, usia) {
    super(nama, ras, gender, usia, 4);
  }

  makeSound() {
    return "Mooo!";
  }
}

class Anjing extends Hewan {
  constructor(nama, ras, gender, usia) {
    super(nama, ras, gender, usia, 4);
  }

  makeSound() {
    return "Auuuuu!";
  }
}

//Kucing
const suaraKucing = new Kucing("Kane", "Persia", "Betina", 3);
console.log(suaraKucing.makeSound());

//Sapi
const suaraSapi = new Sapi("Cowy", "Belgian Blue", "Jantan", 5);
console.log(suaraSapi.makeSound());

//Anjing
const suaraAnjing = new Anjing("Kiyuu", "Golden Retriever", "Jantan", 2);
console.log(suaraAnjing.makeSound());
