class Orang {
  nama;
  #usia;
  #gender;
  #totalEnergi;

  constructor(nama, usia, gender, totalEnergi = 20) {
    this.nama = nama;
    this.#usia = usia;
    this.#gender = gender;
    this.#totalEnergi = totalEnergi;
  }

  get usia() {
    return this.#usia;
  }

  get gender() {
    return this.#gender;
  }

  get totalEnergi() {
    return this.#totalEnergi;
  }

  set totalEnergi(value) {
    if (value < 0) {
      this.#totalEnergi = 0;
    } else {
      this.#totalEnergi = value;
    }
  }

  // Aktivitas makan & minum
  makanDanMinum() {
    let tambahan;
    if (this.#usia <= 10) {
      tambahan = 6;
    } else if (this.#usia <= 25) {
      tambahan = 4;
    } else {
      tambahan = 2;
    }
    this.#totalEnergi += tambahan;
    return `${
      this.nama
    } makan dan minum, energi bertambah ${tambahan}. Total energi: ${
      this.#totalEnergi
    }`;
  }

  // Aktivitas tidur
  tidur(jam) {
    let tambahan;
    if (this.#usia <= 10) {
      tambahan = jam + 3;
    } else if (this.#usia <= 25) {
      tambahan = jam + 2;
    } else {
      tambahan = jam + 1;
    }
    this.#totalEnergi += tambahan;
    return `${
      this.nama
    } tidur ${jam}, energi bertambah ${tambahan}. Total energi: ${
      this.#totalEnergi
    }`;
  }

  // Aktivitas Sekolah atau kerja
  sekolahAtauKerja(jam) {
    let tambahan;
    if (this.#usia <= 10) {
      pengurangan = jam + 3;
    } else if (this.#usia <= 25) {
      pengurangan = jam + 5;
    } else {
      pengurangan = jam + 7;
    }

    if (this.#totalEnergi < pengurangan) {
      return `${this.nama} terlalu lelah untuk melakukan sekolah/kerja. Silahkan istirahat dulu.`;
    } else {
      this.#totalEnergi -= pengurangan;
      return `${
        this.nama
      } sekolah/ kerja ${jam} jam, energi berkurang ${pengurangan}. Total energi: ${
        this.#totalEnergi
      }`;
    }
  }

  // Aktivitas olahraga
  olahraga(jam) {
    let pengurangan;
    if (this.#usia <= 10) {
      pengurangan = jam + 2;
    } else if (this.#usia <= 25) {
      pengurangan = jam + 3;
    } else {
      pengurangan = jam + 5;
    }

    if (this.#totalEnergi < pengurangan) {
      return `${this.nama} terlalu lelah untuk berolahraga. Silahkan istirahat dulu.`;
    } else {
      this.#totalEnergi -= pengurangan;
      return `${
        this.nama
      } olahraga ${jam} jam, energi berkurang ${pengurangan}. Total energi: ${
        this.#totalEnergi
      }`;
    }
  }
}

// 3 objek karakternya
const orang1 = new Orang("Farhan", 10, "Laki-laki");
const orang2 = new Orang("Mirza", 25, "Laki-laki");
const orang3 = new Orang("Intan", 25, "Perempuan");

// Console log sesuai keinginan.
console.log(orang1.olahraga(1));
console.log(orang2.makanDanMinum());
