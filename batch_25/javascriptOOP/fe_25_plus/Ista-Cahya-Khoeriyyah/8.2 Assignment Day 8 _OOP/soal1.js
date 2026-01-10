/*
 Name : Ista Cahya Khoeriyyah
 Date : 01 November 2025


*ASSIGNMENT DAY 8 SOAL 1

*Buatlah class Hewan yang memiliki property dan method sebagai berikut
 - property nama
 - property breed atau ras dari hewan tersebut
 - property usia
 - property gender
 - property jumlahKaki
 - method makeSound() -> mengeluarkan suara dari masing-masing hewan
 - Kemudian buatlah children class berupa Kucing, Sapi, dan Anjing
   /*Masing-masing children class akan meng inherit seluruh property, kecuali jumlahKaki dan nama. Hal ini dikarenakan setiap jenis hewan seharusnya memiliki jumlah kaki yang sama.
   /*Polymorphism part: Masing masing hewan memiliki suara yang berbeda, maka override method makeSound() sehingga masing masing children class memiliki suara nya sendiri. method tersebut akan mengembalikan String berupa suara hewan.
*/

//* ABSTRACTION PARTS
// Parent class animal yang berisi property umum
class animal {
  constructor({ nama, breed, usia, gender, jumlahKaki }) {
    this.nama = nama;
    this.breed = breed;
    this.usia = usia;
    this.gender = gender;
    this.jumlahKaki = jumlahKaki;
  }

  // Method umum yang dimiliki semua hewan
  makeSound() {
    return "memiliki suara";
  }

  getAnimalInfo() {
    return `Nama: ${this.nama}, Ras: ${this.breed}, Usia: ${this.usia} tahun, Jenis Kelamin: ${this.gender}, Jumlah kaki: ${this.jumlahKaki}`;
  }
}

//* INHERITANCE PART
// Child class Cat
class Cat extends animal {
  //* ENCAPSULATION PART
  #techStack;

  constructor({ nama, breed, usia, gender, jumlahKaki, techStack }) {
    super({ nama, breed, usia, gender, jumlahKaki: 4 }); //semua kucing memiliki 4 kaki
    this.#techStack = techStack;
  }
  //* POLYMORPHISM:
  makeSound() {
    return "meow";
  }
  get techStack() {
    return this.#techStack;
  }
}

// Child class sapi
class Sapi extends animal {
  //* ENCAPSULATION PART
  #techStack;

  constructor({ nama, breed, usia, gender, jumlahKaki, techStack }) {
    super({ nama, breed, usia, gender, jumlahKaki: 4 }); //semua sapi memiliki 4 kaki
    this.#techStack = techStack;
  }
  //* POLYMORPHISM:
  makeSound() {
    return "moo";
  }
  get techStack() {
    return this.#techStack;
  }
}

// Child class Dog
class Dog extends animal {
  //* ENCAPSULATION PART
  #techStack;

  constructor({ nama, breed, usia, gender, jumlahKaki, techStack }) {
    super({ nama, breed, usia, gender, jumlahKaki: 4 }); //semua dogi memiliki 4 kaki
    this.#techStack = techStack;
  }

  //* POLYMORPHISM:
  makeSound() {
    return "Guk guk";
  }
  get techStack() {
    return this.#techStack;
  }
}

//* IMPLEMENTASI

const kucing1 = new Cat({
  nama: "Milo",
  breed: "Persia",
  usia: 2,
  gender: "Jantan",
  techStack: ["Bermain", "Tidur"],
});

const sapi1 = new Sapi({
  nama: "Daisy",
  breed: "Simental",
  usia: 3,
  gender: "Betina",
  techStack: ["Menggembala"],
});

const anjing1 = new Dog({
  nama: "theo",
  breed: "Bulldog",
  usia: 5,
  gender: "Jantan",
  techStack: ["Menjaga rumah"],
});

// Output
console.log(kucing1.getAnimalInfo());
console.log("Suara:", kucing1.makeSound());
console.log("Kemampuan:", kucing1.techStack);
console.log("-------------------------");

console.log(sapi1.getAnimalInfo());
console.log("Suara:", sapi1.makeSound());
console.log("Kemampuan:", sapi1.techStack);
console.log("-------------------------");

console.log(anjing1.getAnimalInfo());
console.log("Suara:", anjing1.makeSound());
console.log("Kemampuan:", anjing1.techStack);
