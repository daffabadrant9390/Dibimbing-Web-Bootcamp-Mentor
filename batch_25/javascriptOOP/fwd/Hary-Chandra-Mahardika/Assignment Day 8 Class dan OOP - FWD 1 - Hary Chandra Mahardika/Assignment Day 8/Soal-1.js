// Buatlah class Hewan yang memiliki property dan method sebagai berikut
// a. property nama
// b. property breed atau ras dari hewan tersebut
// c. property usia
// d. property gender
// e. property jumlahKaki
// f. method makeSound() -> mengeluarkan suara dari masing-masing hewan
// g. Kemudian buatlah children class berupa Kucing, Sapi, dan Anjing
// i. Masing-masing children class akan meng inherit seluruh property,
// kecuali jumlahKaki dan nama. Hal ini dikarenakan setiap jenis
// hewan seharusnya memiliki jumlah kaki yang sama.
// ii. Polymorphism part: Masing masing hewan memiliki suara yang
// berbeda, maka override method makeSound() sehingga masing
// masing children class memiliki suara nya sendiri. method tersebut
// akan mengembalikan String berupa suara hewan.

class Hewan {
  constructor({nama, usia, breed, gender, jumlahKaki}) {
    this.nama = nama;
    this.usia = usia;
    this.breed = breed;
    this.gender = gender;
    this.jumlahKaki = jumlahKaki;
  } 
  makeSound () {
    return `${this.breed} mengeluarkan suara : Suara hewan`;
  } 
}

class Kucing extends Hewan {
    
  constructor({ usia, breed, gender}) {
    super({ usia, breed, gender});
  }

  makeSound() {
   return `${this.breed} mengeluarkan suara : Meow!`;
  }

}

class Sapi extends Hewan {
    
  constructor({ usia, breed, gender}) {
    super({ usia, breed, gender});    
  }
    makeSound() {
        return `${this.breed} mengeluarkan suara : Mooo!` ;
    }
}

class Anjing extends Hewan {
    constructor({ usia, breed, gender}) {
    super({ usia, breed, gender});
    }
    makeSound() {
        return `${this.breed} mengeluarkan suara : Guk guk! ` ;
    }   
    }

const kucing1 = new Kucing({
  usia : 2,
  breed : "Persia",
  gender : 'Female',
});

console.log(kucing1.makeSound());

const sapi1 = new Sapi({
  usia : 5,
  breed : "Holstein",
  gender : 'Female',
});

console.log(sapi1.makeSound());   

const anjing1 = new Anjing({
  usia : 10,
  breed : "Siberian Husky",
  gender : 'Male',
});

console.log(anjing1.makeSound()); 