/*
 Name : Ista Cahya Khoeriyyah
  Date : 01 November 2025


*ASSIGNMENT DAY 8 SOAL 2

*Buatlah sebuah class yang merepresentasikan Perubahan energi seseorang berdasarkan dari aktivitas yang mereka lakukan. 
 - Masing-masing aktivitas dapat menambah / mengurangi jumlah energi seseorang.
 - Penambahan dan pengurangan jumlah energi akan bergantung pada usia orang tersebut.
 - Masing-masing orang memiliki property berikut
   nama        = public property
   usia        = private property
   gender      = private property
   totalEnergi = private property
 - Terdapat 4 jenis aktivitas dengan rules sebagai berikut
   * makan & minum:
     usia <= 10 (menambah energi 6)
     usia <= 25 (menambah energi  4)
     usia > 25 (menambah energi 2)
   * tidur (istirahat) 
     Terdapat parameter n jam -> tidur(3) untuk 3 jam tidur:
       usia <= 10 (menambah energi n + 3)
       usia <= 25 (menambah energi n + 2)
       usia > 25 (menambah energi n + 1)
  * sekolahAtauKerja
    Terdapat parameter n jam -> sekolahAtauKerja(3) untuk 3 jam sekolah atau kerja:
      usia <= 10 (mengurangi energi n + 3)
      usia <= 25 (mengurangi energi n + 5)
      usia > 25 (mengurangi energi n + 7)
  * berolahraga
   Terdapat parameter n jam -> olahraga(4) untuk 4 jam olahraga:
     usia <= 10 (mengurangi energi n + 2)
     usia <= 25 (mengurangi energi n + 3)
     usia > 25 (mengurangi energi n + 5)
 - Untuk mendapatkan informasi pada private properties, buatlah setter dan getter untuk masing-masing property.
   usia        = hanya getter
   gender      = hanya getter
   totalEnergi = setter dan getter
 - Untuk aktivitas yang memerlukan energi, lakukan validasi terlebih dahulu apakah totalEnergi yang dimiliki sekarang cukup untuk melakukan aktivitas-aktivitas tersebut. Jika tidak cukup, maka jangan biarkan user melakukan aktivitas dan minta untuk istirahat


*/

//* ABSTRACT PART
// Class utama untuk mewakili konsep umum "Manusia" dan aktivitasnya
class people {
  constructor(nama, usia, gender) {
    this.nama = nama; // public property
    this.#usia = usia; //tanda (#)private property
    this.#gender = gender;
    this.#totalEnergi = 10; // default energi awal
  }

  //* ENCAPSULATION PART
  #usia;
  #gender;
  #totalEnergi;

  // getter dan setter untuk properti privat
  get usia() {
    return this.#usia;
  }

  get gender() {
    return this.#gender;
  }

  get totalEnergi() {
    return this.#totalEnergi;
  }

  set totalEnergi(newValue) {
    if (newValue >= 0) {
      this.#totalEnergi = newValue;
    } else {
      console.log("Energi tidak boleh negativ");
    }
  }

  infoPeople() {
    return `Nama: ${this.nama}, Usia: ${this.#usia} tahun, Gender: ${
      this.#gender
    }, Total Energi: ${this.#totalEnergi}`;
  }

  makanDanMinum() {
    let tambahan = 0;
    if (this.#usia <= 10) tambahan = 6;
    else if (this.#usia <= 25) tambahan = 4;
    else tambahan = 2;

    this.#totalEnergi += tambahan;
    console.log(`${this.nama} makan & minum, energi bertambah ${tambahan}`);
  }

  tidur(jam) {
    let tambahan = 0;
    if (this.#usia <= 10) tambahan = jam + 3;
    else if (this.#usia <= 25) tambahan = jam + 2;
    else tambahan = jam + 1;

    this.#totalEnergi += tambahan;
    console.log(
      `${this.nama} tidur selama ${jam} jam, energi naik ${tambahan}`
    );
  }

  sekolahAtauKerja(jam) {
    let pengurang = 0;
    if (this.#usia <= 10) pengurang = jam + 3;
    else if (this.#usia <= 25) pengurang = jam + 5;
    else pengurang = jam + 7;

    if (this.#totalEnergi >= pengurang) {
      this.#totalEnergi -= pengurang;
      console.log(
        `${this.nama} sekolah/kerja ${jam} jam, energi berkurang ${pengurang}`
      );
    } else {
      console.log(
        `${this.nama} kelelahan, energi tidak cukup untuk sekolah/kerja!`
      );
    }
  }

  berolahraga(jam) {
    let pengurang = 0;
    if (this.#usia <= 10) pengurang = jam + 2;
    else if (this.#usia <= 25) pengurang = jam + 3;
    else pengurang = jam + 5;

    if (this.#totalEnergi >= pengurang) {
      this.#totalEnergi -= pengurang;
      console.log(
        `${this.nama} olahraga ${jam} jam, energi berkurang ${pengurang}`
      );
    } else {
      console.log(`${this.nama} tidak punya cukup energi untuk olahraga!`);
    }
  }
}

//* INHERITANCE PART
// Class khusus berdasarkan gender, untuk menunjukkan turunan dengan perilaku yang sama
class LakiLaki extends people {
  constructor(nama, usia) {
    super(nama, usia, "Laki-laki");
  }

  //* POLYMORPHISM PART
  // override sedikit gaya bicara
  makanDanMinum() {
    console.log(`${this.nama} (cowok) sedang makan besar `);
    super.makanDanMinum();
  }
}

class Perempuan extends people {
  constructor(nama, usia) {
    super(nama, usia, "Perempuan");
  }

  //* POLYMORPHISM PART
  tidur(jam) {
    console.log(`${this.nama} (cewek) lagi tidur nyenyak.`);
    super.tidur(jam);
  }
}

//* IMPLEMENTASI / TESTING

const budi = new LakiLaki("Budi", 22);
const ana = new Perempuan("Ana", 9);

console.log("=== DATA AWAL ===");
console.log(budi.infoPeople());
console.log(ana.infoPeople());

console.log("\n=== AKTIVITAS ===");
budi.makanDanMinum();
budi.berolahraga(2);
budi.sekolahAtauKerja(4);
budi.tidur(5);

ana.makanDanMinum();
ana.sekolahAtauKerja(3);
ana.berolahraga(1);
ana.tidur(4);

console.log("\n=== KONDISI AKHIR ===");
console.log(budi.infoPeople());
console.log(ana.infoPeople());
