class Manusia {
    #usia;
    #gender;
    #totalEnergy;
    constructor({ nama, usia, gender, totalEnergy }) {
        this.nama = nama;
        this.#gender = gender;
        this.#usia = usia;
        this.#totalEnergy = totalEnergy;
    }

    getGender() { return this.#gender; }
    getUsia() { return this.#usia; }
    getTotalEnergy() {return this.#totalEnergy;}

    set setTotalEnergy(newTotalEnergy) {
        if (newTotalEnergy < 0) 
            this.#totalEnergy = 0;
        else this.#totalEnergy = newTotalEnergy;
    }

#cekEnergyCukup(kebutuhanEnergy) {
    if (this.#totalEnergy < kebutuhanEnergy) {
      console.log(`${this.nama} kelelahan. Istirahat lagi yaa sebelum melakukan aktivitas lain.`);
      return false;
    }
    return true;
  }

makanMinum() {
    let tambah = 0;
    if (this.#usia <= 10) tambah = 6;
    else if (this.#usia > 25) tambah = 4;
    else tambah = 2;

    this.#totalEnergy += tambah;
    console.log(`${this.nama} makan & minum. Energy: bertambah ${tambah} menjadi ${this.#totalEnergy}`);
    }

tidur(jam) {
    let tambah = 0;
    if (this.#usia <= 10) tambah = jam + 3;
    else if (this.#usia <= 25) tambah = jam + 2;
    else tambah = jam + 1;

    this.#totalEnergy += tambah;
    console.log(`${this.nama} tidur selama ${jam} jam. Energi bertambah ${tambah} menjadi ${this.#totalEnergy}`);
    }

  sekolahAtauKerja(jam) {
    let kurang = 0;
    if (this.#usia <= 10) kurang = jam + 3;
    else if (this.#usia <= 25) kurang = jam + 5;
    else kurang = jam + 7;

    if (!this.#cekEnergyCukup(kurang)) return;

    this.#totalEnergy -= kurang;
    console.log(`${this.nama} sekolah atau kerja selama ${jam} jam. Energi berkurang ${kurang} menjadi ${this.#totalEnergy}`);
}

 olahraga(jam) {
 let kurang = 0;
    if (this.#usia <= 10) kurang = jam + 2;
    else if (this.#usia <= 25) kurang = jam + 3;
    else kurang = jam + 5;

    if (!this.#cekEnergyCukup(kurang)) return;

    this.#totalEnergy -= kurang;
    console.log(`${this.nama} berolahraga selama ${jam} jam. Energi berkurang ${kurang} menjadi ${this.#totalEnergy}`);
}
}

const afrah = new Manusia({ nama: "Afrah", usia: 22, gender: "Perempuan", totalEnergy: 12 });

afrah.sekolahAtauKerja(3);
afrah.makanMinum();
afrah.olahraga(2);
afrah.sekolahAtauKerja(8);
afrah.tidur(5);
