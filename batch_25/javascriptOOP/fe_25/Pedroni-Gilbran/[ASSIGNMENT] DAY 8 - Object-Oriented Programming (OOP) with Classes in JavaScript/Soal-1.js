class Hewan {
  constructor(breed, usia, gender) {
    this.nama = null;
    this.breed = breed;
    this.usia = usia;
    this.gender = gender;
    this.jumlahkaki = null;
  }
  makeSound() {
    return "Hewan ini berbunyi...";
  }
}

class Kucing extends Hewan {
  constructor(nama, breed, usia, gender) {
    super(breed, usia, gender);
    this.nama = nama;
    this.jumlahkaki = 4;
  }
  makeSound() {
    return "meong";
  }
}

class Sapi extends Hewan {
  constructor(nama,breed,usia,gender){
    super(breed, usia, gender)
    this.nama = nama;
    this.jumlahkaki = 4
  }
  makeSound(){
    return "mooooo"
  }
}

class Anjing extends Hewan {
  constructor(nama,breed,usia,gender){
    super(breed, usia, gender)
    this.nama = nama;
    this.jumlahkaki = 4
  }
  makeSound(){
    return "gukgukguk"
  }
}

const kucing1 = new Kucing("Krik", "Kampung", 4, "Jantan");
const sapi1 = new Sapi("Tifa", "Hereford", 4, "Betina");
const anjing1 = new Anjing("Ramirez", "Retriever", 4, "Jantan");

console.log(`\n${kucing1.nama} bersuara: ${kucing1.makeSound()}`);
console.log(`\n${sapi1.nama} bersuara: ${sapi1.makeSound()}`);
console.log(`\n${anjing1.nama} bersuara: ${anjing1.makeSound()}`);


