class EnergiManusia {

  #usia;
  #gender;
  #totalEnergi = 20;

  constructor(nama, usia, gender) {
    this.nama = nama; 
    this.#usia = usia;
    this.#gender = gender;
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

  set totalEnergi(energiBaru) {
    if (energiBaru < 0) {
      console.log("Energi tidak boleh negatif, diset ke 0.");
      this.#totalEnergi = 0;
    } else {
      this.#totalEnergi = energiBaru;
    }
  }



  makanMinum() {
    let tambahan = 0;
    if (this.#usia <= 10) tambahan = 6;
    else if (this.#usia <= 25) tambahan = 4;
    else tambahan = 2;

    this.totalEnergi = this.#totalEnergi + tambahan;
    console.log(`${this.nama} makan & minum, energi bertambah ${tambahan}, total energi sekarang ${this.#totalEnergi}`);
  }

  tidur(jam) {
    let tambahan = 0;
    if (this.#usia <= 10) tambahan = jam + 3;
    else if (this.#usia <= 25) tambahan = jam + 2;
    else tambahan = jam + 1;

    this.totalEnergi = this.#totalEnergi + tambahan;
    console.log(`${this.nama} tidur selama ${jam} jam, energi bertambah ${tambahan}, total energi sekarang ${this.#totalEnergi}`);
  }

  #validasiEnergi(kebutuhan) {
    if (this.#totalEnergi < kebutuhan) {
      console.log(`${this.nama} tidak memiliki cukup energi (${this.#totalEnergi}) untuk aktivitas ini. Silakan istirahat.`);
      return false;
    }
    return true;
  }

  sekolahAtauKerja(jam) {
    let pengurangan = 0;
    if (this.#usia <= 10) pengurangan = jam + 3;
    else if (this.#usia <= 25) pengurangan = jam + 5;
    else pengurangan = jam + 7;

    if (!this.#validasiEnergi(pengurangan)) return;

    this.totalEnergi = this.#totalEnergi - pengurangan;
    console.log(`${this.nama} sekolah/kerja selama ${jam} jam, energi berkurang ${pengurangan}, total energi sekarang ${this.#totalEnergi}`);
  }

  olahraga(jam) {
    let pengurangan = 0;
    if (this.#usia <= 10) pengurangan = jam + 2;
    else if (this.#usia <= 25) pengurangan = jam + 3;
    else pengurangan = jam + 5;

    if (!this.#validasiEnergi(pengurangan)) return;

    this.totalEnergi = this.#totalEnergi - pengurangan;
    console.log(`${this.nama} olahraga selama ${jam} jam, energi berkurang ${pengurangan}, total energi sekarang ${this.#totalEnergi}`);
  }
}


const orang1 = new EnergiManusia("Budi", 24, "laki-laki");
console.log(`Energi awal: ${orang1.totalEnergi}`);
orang1.makanMinum();
orang1.sekolahAtauKerja(3);
orang1.olahraga(2);
orang1.tidur(4);
