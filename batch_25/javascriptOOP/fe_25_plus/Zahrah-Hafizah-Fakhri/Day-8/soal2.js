class Manusia {
  #usia;
  #gender;
  #totalEnergi;

  constructor(nama, usia, gender, totalEnergi = 10) {
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

  set totalEnergi(nilai) {
    this.#totalEnergi = nilai;
  }

  //Aktivitas
  makan() {
    if (this.#usia <= 10) {
      this.#totalEnergi += 6;
    } else if (this.#usia <= 25) {
      this.#totalEnergi += 4;
    } else {
      this.#totalEnergi += 2;
    }

    console.log(
      `${this.nama} sudah makan, total energi sekarang adalah ${
        this.#totalEnergi
      }`
    );
  }

  tidur(jam) {
    let totalPenambahan;

    if (this.#usia <= 10) {
      totalPenambahan = jam + 3;
    } else if (this.#usia <= 25) {
      totalPenambahan = jam + 2;
    } else {
      totalPenambahan = jam + 1;
    }

    this.#totalEnergi += totalPenambahan;
    console.log(
      `${
        this.nama
      } sudah tidur selama ${jam} jam, total energi sekarang adalah ${
        this.#totalEnergi
      }`
    );
  }

  sekolahAtauKerja(jam) {
    let totalPengurangan;

    if (this.#usia <= 10) {
      totalPengurangan = jam + 3;
    } else if (this.#usia < 25) {
      totalPengurangan = jam + 5;
    } else {
      totalPengurangan = jam + 7;
    }

    if (this.#totalEnergi >= totalPengurangan) {
      this.#totalEnergi -= totalPengurangan;
      console.log(
        `${
          this.nama
        } sudah kerja atau sekolah selama ${jam} jam, total energi sekarang adalah ${
          this.#totalEnergi
        }`
      );
    } else {
      console.log(
        `${this.nama} sedang kelelahan, silahkan istirahat terlebih dahulu sebelum melanjutkan kegiatan!`
      );
    }
  }

  berolahraga(jam) {
    let totalPengurangan;

    if (this.#usia <= 10) {
      totalPengurangan = jam + 2;
    } else if (this.#usia <= 25) {
      totalPengurangan = jam + 3;
    } else {
      totalPengurangan = jam + 5;
    }

    if (this.#totalEnergi >= totalPengurangan) {
      this.#totalEnergi -= totalPengurangan;
      console.log(
        `${this.nama} sudah berolahraga, total energi sekarang adalah ${
          this.#totalEnergi
        }`
      );
    } else {
      console.log(
        `${this.nama} sedang kelelahan, silahkan istirahat terlebih dahulu sebelum melanjutkan kegiatan!`
      );
    }
  }
}

const orangSatu = new Manusia("Zahrah", 22, "Perempuan", 15);
//Kegiatan
orangSatu.berolahraga(1);
orangSatu.makan();
orangSatu.sekolahAtauKerja(5);
orangSatu.tidur(8);
