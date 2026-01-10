class Energi {
  constructor(nama, usia, gender, totalEnergi) {
    this.nama = nama;
    this.#usia = usia;
    this.#gender = gender;
    this.#totalEnergi = totalEnergi;
  }
  #usia;
  #gender;
  #totalEnergi;

  //getter
  get usia() {
    return this.#usia;
  }
  get gender() {
    return this.#gender;
  }
  get totalEnergi() {
    return this.#totalEnergi;
  }

  // Jenis aktivitas
  makanMinum() {
    let penambahan = 0;
    if (this.#usia <= 10) penambahan = 6;
    else if (this.#usia <= 25) penambahan = 4;
    else penambahan = 2;

    this.#totalEnergi += penambahan;
    // prettier-ignore
    console.log(`${this.nama} makan & minum, energi bertambah ${penambahan} menjadi ${this.#totalEnergi}`);
  }

  tidur(jam) {
    let penambahan = 0;
    if (this.#usia <= 10) penambahan = jam + 3;
    else if (this.#usia <= 25) penambahan = jam + 2;
    else penambahan = jam + 1;

    this.#totalEnergi += penambahan;
    // prettier-ignore
    console.log(`${this.nama} tidur selama ${jam} jam, energi bertambah ${penambahan} total energi menjadi ${this.#totalEnergi}`);
  }

  sekolahAtaukerja(jam) {
    let pengurangan = 0;
    if (this.#usia <= 10) pengurangan = jam + 3;
    else if (this.#usia <= 25) pengurangan = jam + 5;
    else pengurangan = jam + 7;

    if (this.#totalEnergi >= pengurangan) {
      // prettier-ignore
      console.log(`${this.nama} tidak mendapat cukup energi untuk sekolah / kerja selama ${jam} jam. Mohon istirahat dulu!`);
      return;
    }
    this.#totalEnergi -= pengurangan;
    // prettier-ignore
    console.log(`${this.nama} berolahraga selama ${jam} jam, energi berkurang ${pengurangan} menjadi ${this.#totalEnergi}`);
  }

  olahraga(jam) {
    let pengurangan = 0;
    if (this.#usia <= 10) pengurangan = jam + 2;
    else if (this.#usia <= 25) pengurangan = jam + 3;
    else pengurangan = jam + 5;

    if (this.#totalEnergi >= pengurangan) {
      // prettier-ignore
      console.log(`${this.nama} tidak cukup energi untuk berolahraga selama ${jam} jam. Mohon istirahat dulu!`)
      return;
    }
    this.#totalEnergi -= pengurangan;
    // prettier-ignore
    console.log(`${this.nama} berolahraga selama ${jam} jam, energi berkurang ${pengurangan} menjadi ${this.#totalEnergi}`);
  }
}

const fitri = new Energi("Fitri", 25, "Perempuan", 100);
fitri.makanMinum();
fitri.tidur(5);
fitri.sekolahAtaukerja(7);
fitri.olahraga(2);

console.log(`Total energi ${fitri.nama} adalah ${fitri.totalEnergi}`);
