/**
 * Buatlah sebuah class yang merepresentasikan Perubahan energi seseorang berdasarkan dari aktivitas yang mereka lakukan. 
Masing-masing aktivitas dapat menambah / mengurangi jumlah energi seseorang.
Penambahan dan pengurangan jumlah energi akan bergantung pada usia orang tersebut.
Masing-masing orang memiliki property berikut
nama -> public property
usia -> private property
gender -> private property
totalEnergi -> private property
Terdapat 4 jenis aktivitas dengan rules sebagai berikut
makan & minum
usia <= 10 (menambah energi 6)
usia <= 25 (menambah energi  4)
usia > 25 (menambah energi 2)
tidur (istirahat) 
Terdapat parameter n jam -> tidur(3) untuk 3 jam tidur
usia <= 10 (menambah energi n + 3)
usia <= 25 (menambah energi n + 2)
usia > 25 (menambah energi n + 1)
sekolahAtauKerja
Terdapat parameter n jam -> sekolahAtauKerja(3) untuk 3 jam sekolah atau kerja
usia <= 10 (mengurangi energi n + 3)
usia <= 25 (mengurangi energi n + 5)
usia > 25 (mengurangi energi n + 7)
berolahraga
Terdapat parameter n jam -> olahraga(4) untuk 4 jam olahraga
usia <= 10 (mengurangi energi n + 2)
usia <= 25 (mengurangi energi n + 3)
usia > 25 (mengurangi energi n + 5)
Untuk mendapatkan informasi pada private properties, buatlah setter dan getter untuk masing-masing property.
usia -> hanya getter
gender -> hanya getter
totalEnergi -> setter dan getter
Untuk aktivitas yang memerlukan energi, lakukan validasi terlebih dahulu apakah totalEnergi yang dimiliki sekarang cukup untuk melakukan aktivitas-aktivitas tersebut.
Jika tidak cukup, maka jangan biarkan user melakukan aktivitas dan minta untuk istirahat

 */

class Person {
  // Private property menggunakan #
  #usia;
  #gender;
  #totalEnergi;

  constructor(nama, usia, gender, totalEnergiAwal = 0) {
    // Energi awal = 0
    this.nama = nama;
    this.#usia = usia;
    this.#gender = gender;
    this.#totalEnergi = totalEnergiAwal;
  }

  // Getter & Setter
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
    // set energi awalnya 0
    if (value < 0) {
      this.#totalEnergi = 0;
    } else {
      this.#totalEnergi = value;
    }
  }

  makanMinum() {
    if (this.#usia <= 10) this.#totalEnergi += 6;
    else if (this.#usia <= 25) this.#totalEnergi += 4;
    else this.#totalEnergi += 2;

    console.log(
      `${this.nama} makan/minum → energi sekarang: ${this.#totalEnergi}`,
    );
  }

  // n = jam
  tidur(jam) {
    let tambahan = 0;
    if (this.#usia <= 10) tambahan = jam + 3;
    else if (this.#usia <= 25) tambahan = jam + 2;
    else tambahan = jam + 1;

    this.#totalEnergi += tambahan;
    console.log(
      `${this.nama} tidur ${jam} jam → energi sekarang: ${this.#totalEnergi}`,
    );
  }

  makanMinum() {
    if (this.#usia <= 10) this.#totalEnergi += 6;
    else if (this.#usia <= 25) this.#totalEnergi += 4;
    else this.#totalEnergi += 2;

    console.log(
      `${this.nama} makan/minum → energi sekarang: ${this.#totalEnergi}`,
    );
  }

  // n = jam

  tidur(jam) {
    let tambahan = 0;
    if (this.#usia <= 10) tambahan = jam + 3;
    else if (this.#usia <= 25) tambahan = jam + 2;
    else tambahan = jam + 1;

    this.#totalEnergi += tambahan;
    console.log(
      `${this.nama} tidur ${jam} jam → energi sekarang: ${this.#totalEnergi}`,
    );
  }

  sekolahAtauKerja(jam) {
    let pengurang = 0;
    if (this.#usia <= 10) pengurang = jam + 3;
    else if (this.#usia <= 25) pengurang = jam + 5;
    else pengurang = jam + 7;

    if (this.#totalEnergi < pengurang) {
      console.log(`${this.nama} Energi tidak cukup untuk bekerja/sekolah.`);
      return;
    }

    this.#totalEnergi -= pengurang;
    console.log(
      `${this.nama} sekolah/kerja ${jam} jam → energi sekarang: ${this.#totalEnergi}`,
    );
  }

  olahraga(jam) {
    let pengurang = 0;
    if (this.#usia <= 10) pengurang = jam + 2;
    else if (this.#usia <= 25) pengurang = jam + 3;
    else pengurang = jam + 5;

    if (this.#totalEnergi < pengurang) {
      console.log(`${this.nama} Energi tidak cukup untuk olahraga.`);
      return;
    }

    this.#totalEnergi -= pengurang;
    console.log(
      `${this.nama} olahraga ${jam} jam → energi sekarang: ${this.#totalEnergi}`,
    );
  }
}

// Output
const orang = new Person("Febrika", 25, "Perempuan");
orang.makanMinum();
orang.tidur(3);
orang.sekolahAtauKerja(4);
orang.olahraga(2);
console.log(`Energi akhir: ${orang.totalEnergi}`);
