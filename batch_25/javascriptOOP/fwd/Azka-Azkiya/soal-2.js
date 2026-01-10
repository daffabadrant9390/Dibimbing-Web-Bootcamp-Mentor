class Orang {
  constructor(nama, usia, gender, totalEnergi = 10) {
    this.nama = nama;
    this.#usia = usia;
    this.#gender = gender;
    this.#totalEnergi = totalEnergi;
  }

  // --- Private properties ---
  #usia;
  #gender;
  #totalEnergi;

  // --- Getter & Setter ---
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
    this.#totalEnergi = value;
  }

  // --- Helper untuk update energi ---
  #ubahEnergi(jumlah) {
    this.#totalEnergi += jumlah;

    if (this.#totalEnergi < 0) this.#totalEnergi = 0; // tidak boleh negatif
  }

  // --- Aktivitas 1: Makan & Minum ---
  makanMinum() {
    let tambahEnergi = 0;

    if (this.#usia <= 10) tambahEnergi = 6;
    else if (this.#usia <= 25) tambahEnergi = 4;
    else tambahEnergi = 2;

    this.#ubahEnergi(tambahEnergi);
    console.log(`${this.nama} makan & minum, energi bertambah ${tambahEnergi}.`);
  }

  // --- Aktivitas 2: Tidur ---
  tidur(jam) {
    let tambahEnergi = 0;

    if (this.#usia <= 10) tambahEnergi = jam + 3;
    else if (this.#usia <= 25) tambahEnergi = jam + 2;
    else tambahEnergi = jam + 1;

    this.#ubahEnergi(tambahEnergi);
    console.log(`${this.nama} tidur selama ${jam} jam, energi bertambah ${tambahEnergi}.`);
  }

  // --- Aktivitas 3: Sekolah / Kerja ---
  sekolahAtauKerja(jam) {
    let kurangEnergi = 0;

    if (this.#usia <= 10) kurangEnergi = jam + 3;
    else if (this.#usia <= 25) kurangEnergi = jam + 5;
    else kurangEnergi = jam + 7;

    if (this.#totalEnergi < kurangEnergi) {
      console.log(`${this.nama} tidak cukup energi untuk sekolah/kerja. Istirahat dulu geura!`);
      return;
    }

    this.#ubahEnergi(-kurangEnergi);
    console.log(`${this.nama} sekolah/kerja selama ${jam} jam, energi berkurang ${kurangEnergi}.`);
  }

  // --- Aktivitas 4: Olahraga ---
  olahraga(jam) {
    let kurangEnergi = 0;

    if (this.#usia <= 10) kurangEnergi = jam + 2;
    else if (this.#usia <= 25) kurangEnergi = jam + 3;
    else kurangEnergi = jam + 5;

    if (this.#totalEnergi < kurangEnergi) {
      console.log(`${this.nama} tidak cukup energi untuk olahraga. Istirahat dulu geura!`);
      return;
    }

    this.#ubahEnergi(-kurangEnergi);
    console.log(`${this.nama} berolahraga selama ${jam} jam, energi berkurang ${kurangEnergi}.`);
  }

  // --- Info status ---
  info() {
    console.log(
      `Nama: ${this.nama}, Usia: ${this.#usia}, Gender: ${this.#gender}, Energi: ${this.#totalEnergi}`
    );
  }
}

// --- Contoh Penggunaan ---
const orang1 = new Orang("Kakang", 22, "Laki-laki", 20);

orang1.info();
orang1.makanMinum();      // +4 energi
orang1.sekolahAtauKerja(5); // -10 energi
orang1.olahraga(3);       // -6 energi
orang1.tidur(4);          // +6 energi
orang1.info();

// Tes energi tidak cukup
orang1.totalEnergi = 2;
orang1.sekolahAtauKerja(5); // Harus ditolak karena energi kurang