class Orang {
  // Private properties
  #usia;
  #gender;
  #totalEnergi;

  // Constructor
  constructor(nama, usia, gender, totalEnergi = 10) {
    this.nama = nama; // public property
    this.#usia = usia;
    this.#gender = gender;
    this.#totalEnergi = totalEnergi;
  }

  // ====================

  get usia() {
    return this.#usia;
  }

  get gender() {
    return this.#gender;
  }

  get totalEnergi() {
    return this.#totalEnergi;
  }

  set totalEnergi(energiBaru) {
    if (energiBaru < 0) energiBaru = 0; // biar gak minus
    this.#totalEnergi = energiBaru;
  }

  //   aktivitas

  makanMinum() {
    let tambahan = 0;
    if (this.#usia <= 10) tambahan = 6;
    else if (this.#usia <= 25) tambahan = 4;
    else tambahan = 2;

    this.totalEnergi += tambahan;
    console.log(
      `${this.nama} makan/minum -> Energi bertambah ${tambahan}. Total energi sekarang: ${this.totalEnergi}`
    );
  }

  tidur(jam) {
    let tambahan = 0;
    if (this.#usia <= 10) tambahan = jam + 3;
    else if (this.#usia <= 25) tambahan = jam + 2;
    else tambahan = jam + 1;

    this.totalEnergi += tambahan;
    console.log(
      `${this.nama} tidur selama ${jam} jam -> Energi bertambah ${tambahan}. Total energi sekarang: ${this.totalEnergi}`
    );
  }

  sekolahAtauKerja(jam) {
    let pengurang = 0;
    if (this.#usia <= 10) pengurang = jam + 3;
    else if (this.#usia <= 25) pengurang = jam + 5;
    else pengurang = jam + 7;

    if (this.totalEnergi < pengurang) {
      console.log(
        `${this.nama} terlalu lelah, energi tidak cukup untuk sekolah/kerja ${jam} jam. HArus istirahat dulu.`
      );
      return;
    }

    this.totalEnergi -= pengurang;
    console.log(
      `${this.nama} sekolah/kerja selama ${jam} jam -> Energi berkurang ${pengurang}. Total energi sekarang: ${this.totalEnergi}`
    );
  }

  berolahraga(jam) {
    let pengurang = 0;
    if (this.#usia <= 10) pengurang = jam + 2;
    else if (this.#usia <= 25) pengurang = jam + 3;
    else pengurang = jam + 5;

    if (this.totalEnergi < pengurang) {
      console.log(
        `${this.nama} kehabisan energi, gak bisa olahraga ${jam} jam. Istirahat dulu ya.`
      );
      return;
    }

    this.totalEnergi -= pengurang;
    console.log(
      `${this.nama} olahraga selama ${jam} jam -> Energi berkurang ${pengurang}. Total energi sekarang: ${this.totalEnergi}`
    );
  }
}

const arvis = new Orang("Arvis", 22, "Laki-laki", 15);

console.log(`Nama: ${arvis.nama}`);
console.log(`Usia: ${arvis.usia}`);
console.log(`Gender: ${arvis.gender}`);
console.log(`Energi awal: ${arvis.totalEnergi}`);
console.log("================================");

arvis.makanMinum(); // +4
arvis.sekolahAtauKerja(3); // -8
arvis.berolahraga(2); // -5
arvis.tidur(4); // +6
arvis.sekolahAtauKerja(10); // Energi mungkin gak cukup
