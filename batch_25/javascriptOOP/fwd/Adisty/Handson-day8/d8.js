%%javascript
// PART 1: CLASS HEWAN (ANIMAL HIERARCHY)

// Parent Class: Hewan
class Hewan {
  constructor(breed, usia, gender) {
    this.breed = breed;
    this.usia = usia;
    this.gender = gender;
  }

  // Method yang akan di-override oleh child classes (Polymorphism)
  makeSound() {
    return "Suara hewan";
  }

  // Method untuk menampilkan info hewan
  getInfo() {
    return `${this.nama} (${this.breed}) - Usia: ${this.usia} tahun, Gender: ${this.gender}, Kaki: ${this.jumlahKaki}`;
  }
}

// Child Class: Kucing
class Kucing extends Hewan {
  constructor(nama, breed, usia, gender) {
    super(breed, usia, gender);
    this.nama = nama;
    this.jumlahKaki = 4; // Semua kucing punya 4 kaki
  }

  // Override method makeSound (Polymorphism)
  makeSound() {
    return "Meong meong!";
  }
}

// Child Class: Sapi
class Sapi extends Hewan {
  constructor(nama, breed, usia, gender) {
    super(breed, usia, gender);
    this.nama = nama;
    this.jumlahKaki = 4; // Semua sapi punya 4 kaki
  }

  // Override method makeSound (Polymorphism)
  makeSound() {
    return "Mooo!";
  }
}

// Child Class: Anjing
class Anjing extends Hewan {
  constructor(nama, breed, usia, gender) {
    super(breed, usia, gender);
    this.nama = nama;
    this.jumlahKaki = 4; // Semua anjing punya 4 kaki
  }

  // Override method makeSound (Polymorphism)
  makeSound() {
    return "Guk guk!";
  }
}

// PART 2: CLASS MANUSIA (ENERGY MANAGEMENT)

class Manusia {
  // Private properties menggunakan #
  #usia;
  #gender;
  #totalEnergi;

  constructor(nama, usia, gender, energiAwal = 100) {
    this.nama = nama; // Public property
    this.#usia = usia; // Private property
    this.#gender = gender; // Private property
    this.#totalEnergi = energiAwal; // Private property
  }

  // Getter untuk usia (read-only)
  get usia() {
    return this.#usia;
  }

  // Getter untuk gender (read-only)
  get gender() {
    return this.#gender;
  }

  // Getter untuk totalEnergi
  get totalEnergi() {
    return this.#totalEnergi;
  }

  // Setter untuk totalEnergi
  set totalEnergi(nilai) {
    if (nilai < 0) {
      console.log("Energi tidak bisa negatif!");
      this.#totalEnergi = 0;
    } else {
      this.#totalEnergi = nilai;
    }
  }

  // Private method untuk menghitung penambahan/pengurangan energi
  #hitungPerubahanEnergi(baseValue, tipeAktivitas) {
    let perubahan = baseValue;

    if (this.#usia <= 10) {
      if (tipeAktivitas === 'makan') perubahan = 6;
      else if (tipeAktivitas === 'tidur') perubahan = baseValue + 3;
      else if (tipeAktivitas === 'sekolah') perubahan = -(baseValue + 3);
      else if (tipeAktivitas === 'olahraga') perubahan = -(baseValue + 2);
    } else if (this.#usia <= 25) {
      if (tipeAktivitas === 'makan') perubahan = 4;
      else if (tipeAktivitas === 'tidur') perubahan = baseValue + 2;
      else if (tipeAktivitas === 'sekolah') perubahan = -(baseValue + 5);
      else if (tipeAktivitas === 'olahraga') perubahan = -(baseValue + 3);
    } else {
      if (tipeAktivitas === 'makan') perubahan = 2;
      else if (tipeAktivitas === 'tidur') perubahan = baseValue + 1;
      else if (tipeAktivitas === 'sekolah') perubahan = -(baseValue + 7);
      else if (tipeAktivitas === 'olahraga') perubahan = -(baseValue + 5);
    }

    return perubahan;
  }

  // Private method untuk validasi energi
  #cekEnergiCukup(energiDibutuhkan) {
    return this.#totalEnergi >= energiDibutuhkan;
  }

  // Method: Makan & Minum
  makanMinum() {
    const tambahEnergi = this.#hitungPerubahanEnergi(0, 'makan');
    this.#totalEnergi += tambahEnergi;
    console.log(`${this.nama} makan & minum. Energi +${tambahEnergi}. Total energi: ${this.#totalEnergi}`);
  }

  // Method: Tidur (Istirahat)
  tidur(jam) {
    const tambahEnergi = this.#hitungPerubahanEnergi(jam, 'tidur');
    this.#totalEnergi += tambahEnergi;
    console.log(`${this.nama} tidur selama ${jam} jam. Energi +${tambahEnergi}. Total energi: ${this.#totalEnergi}`);
  }

  // Method: Sekolah atau Kerja
  sekolahAtauKerja(jam) {
    const kurangEnergi = Math.abs(this.#hitungPerubahanEnergi(jam, 'sekolah'));

    if (!this.#cekEnergiCukup(kurangEnergi)) {
      console.log(`${this.nama} terlalu lelah! Energi tidak cukup (butuh ${kurangEnergi}, punya ${this.#totalEnergi}). Silakan istirahat dulu!`);
      return;
    }

    this.#totalEnergi -= kurangEnergi;
    console.log(`${this.nama} sekolah/kerja selama ${jam} jam. Energi -${kurangEnergi}. Total energi: ${this.#totalEnergi}`);
  }

  // Method: Berolahraga
  berolahraga(jam) {
    const kurangEnergi = Math.abs(this.#hitungPerubahanEnergi(jam, 'olahraga'));

    if (!this.#cekEnergiCukup(kurangEnergi)) {
      console.log(`${this.nama} terlalu lelah! Energi tidak cukup (butuh ${kurangEnergi}, punya ${this.#totalEnergi}). Silakan istirahat dulu!`);
      return;
    }

    this.#totalEnergi -= kurangEnergi;
    console.log(`${this.nama} berolahraga selama ${jam} jam. Energi -${kurangEnergi}. Total energi: ${this.#totalEnergi}`);
  }

  // Method untuk menampilkan status
  tampilkanStatus() {
    console.log(`\nStatus ${this.nama}:`);
    console.log(`   Usia: ${this.#usia} tahun`);
    console.log(`   Gender: ${this.#gender}`);
    console.log(`   Total Energi: ${this.#totalEnergi}`);
  }
}

// TESTING & DEMO

// Buat output container
const outputDiv = document.createElement('div');
outputDiv.style.fontFamily = 'monospace';
outputDiv.style.background = '#1e1e1e';
outputDiv.style.color = '#00ff00';
outputDiv.style.padding = '20px';
outputDiv.style.border = '2px solid #00ff00';
outputDiv.style.borderRadius = '10px';
outputDiv.style.margin = '10px';
outputDiv.style.maxHeight = '600px';
outputDiv.style.overflow = 'auto';

// Override console.log untuk menampilkan di HTML
const originalConsoleLog = console.log;
console.log = function(...args) {
  originalConsoleLog.apply(console, args);
  const line = document.createElement('div');
  line.textContent = args.join(' ');
  line.style.padding = '2px 0';
  line.style.borderBottom = '1px solid #333';
  outputDiv.appendChild(line);
};

// Jalankan testing
console.log("=".repeat(50));
console.log("PART 1: TESTING CLASS HEWAN");
console.log("=".repeat(50));

// Membuat instance hewan
const kucing1 = new Kucing("Pussy", "Persian", 3, "Betina");
const sapi1 = new Sapi("Moo-Moo", "Sapi Bali", 5, "Jantan");
const anjing1 = new Anjing("Buddy", "Golden Retriever", 2, "Jantan");

console.log("\nKucing:");
console.log(kucing1.getInfo());
console.log(`Suara: ${kucing1.makeSound()}`);

console.log("\nSapi:");
console.log(sapi1.getInfo());
console.log(`Suara: ${sapi1.makeSound()}`);

console.log("\nAnjing:");
console.log(anjing1.getInfo());
console.log(`Suara: ${anjing1.makeSound()}`);

console.log("\n" + "=".repeat(50));
console.log("PART 2: TESTING CLASS MANUSIA");
console.log("=".repeat(50));

// Membuat instance manusia dengan usia berbeda
const anak = new Manusia("Budi", 8, "Laki-laki", 50);
const remaja = new Manusia("Siti", 20, "Perempuan", 80);
const dewasa = new Manusia("Ahmad", 35, "Laki-laki", 60);

console.log("\n--- TESTING ANAK (Usia 8 tahun) ---");
anak.tampilkanStatus();
anak.makanMinum();
anak.tidur(3);
anak.sekolahAtauKerja(4);
anak.berolahraga(2);
anak.berolahraga(10); // Akan gagal karena energi tidak cukup
anak.tidur(5); // Istirahat
anak.berolahraga(2); // Sekarang bisa

console.log("\n--- TESTING REMAJA (Usia 20 tahun) ---");
remaja.tampilkanStatus();
remaja.makanMinum();
remaja.sekolahAtauKerja(8);
remaja.berolahraga(3);
remaja.makanMinum();

console.log("\n--- TESTING DEWASA (Usia 35 tahun) ---");
dewasa.tampilkanStatus();
dewasa.makanMinum();
dewasa.sekolahAtauKerja(8);
dewasa.berolahraga(2);
dewasa.sekolahAtauKerja(5); // Akan gagal karena energi tidak cukup
dewasa.tidur(6); // Istirahat dulu
dewasa.sekolahAtauKerja(5); // Sekarang bisa

console.log("\n--- TESTING GETTER/SETTER ---");
console.log(`\nInfo ${remaja.nama}:`);
console.log(`   Usia (getter): ${remaja.usia}`);
console.log(`   Gender (getter): ${remaja.gender}`);
console.log(`   Total Energi (getter): ${remaja.totalEnergi}`);

console.log(`\nMengubah energi ${remaja.nama} menjadi 100...`);
remaja.totalEnergi = 100;
console.log(`   Total Energi sekarang: ${remaja.totalEnergi}`);

console.log("\n=".repeat(50));
console.log("SEMUA TEST SELESAI!");
console.log("=".repeat(50));

// Tambahkan output ke halaman
document.body.appendChild(outputDiv);

// Restore console.log
console.log = originalConsoleLog;