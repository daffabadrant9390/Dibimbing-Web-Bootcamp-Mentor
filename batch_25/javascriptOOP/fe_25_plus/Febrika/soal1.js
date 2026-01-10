/**
 * Buatlah class Hewan yang memiliki property dan method sebagai berikut
property nama
property breed atau ras dari hewan tersebut
property usia
property gender
property jumlahKaki
method makeSound() -> mengeluarkan suara dari masing-masing hewan
Kemudian buatlah children class berupa Kucing, Sapi, dan Anjing
Masing-masing children class akan meng inherit seluruh property, 
kecuali jumlahKaki dan nama. Hal ini dikarenakan setiap jenis hewan seharusnya memiliki jumlah kaki yang sama.
Polymorphism part: Masing masing hewan memiliki suara yang berbeda, maka override method makeSound() 
sehingga masing masing children class memiliki suara nya sendiri. method tersebut akan mengembalikan String berupa suara hewan.

 */

class Hewan {
  constructor(nama, ras, usia, gender, jumlahKaki) {
    this.nama = nama;
    this.ras = ras;
    this.usia = usia;
    this.gender = gender;
    this.jumlahKaki = jumlahKaki;
  }
  makeSound() {
    return "Suara Hewan";
  }
}

// Class Kucing - child Class
class Kucing extends Hewan {
  constructor(nama, ras, usia, gender) {
    // Jumlah kaki kucing selalu 4
    super(nama, ras, usia, gender, 4); // ini akan menjalankan constructor di class Hewan
  }

  makeSound() {
    return "Meong~";
  }
}

class Sapi extends Hewan {
  constructor(nama, ras, usia, gender) {
    // Jumlah kaki sapi selalu 4
    super(nama, ras, usia, gender, 4);
  }

  makeSound() {
    return "Mooooo~~";
  }
}

class Anjing extends Hewan {
  constructor(nama, ras, usia, gender) {
    // Jumlah kaki anjing selalu 4
    super(nama, ras, usia, gender, 4);
  }
  makeSound() {
    return "Guk..Guk..";
  }
}

// Contoh penggunaan
const kucing = new Kucing("Mimi", "Anggora", 3, "Betina");
const sapi = new Sapi("Momo", "Wagyu", 5, "Jantan");
const anjing = new Anjing("Doggy", "Bulldog", 4, "Jantan");

console.log(`${kucing.nama} bersuara: ${kucing.makeSound()}`);
console.log(`${sapi.nama} bersuara: ${sapi.makeSound()}`);
console.log(`${anjing.nama} bersuara: ${anjing.makeSound()}`);
