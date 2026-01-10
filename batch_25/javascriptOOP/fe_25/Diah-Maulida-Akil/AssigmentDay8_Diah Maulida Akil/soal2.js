/**
 * Buatlah sebuah class yang merepresentasikan Perubahan energi seseorang 
 *  berdasarkan dari aktivitas yang mereka lakukan. 
 * Buatlah sebuah class yang merepresentasikan Perubahan energi seseorang berdasarkan dari aktivitas yang mereka lakukan. 
 * - Masing-masing aktivitas dapat menambah / mengurangi jumlah energi seseorang.
 * - Penambahan dan pengurangan jumlah energi akan bergantung pada usia orang tersebut.
 * - Masing-masing orang memiliki property berikut
 *   nama -> public property
 *   usia -> private property
 *   gender -> private property
 *   totalEnergi -> private property
 * - Terdapat 4 jenis aktivitas dengan rules sebagai berikut:
 *    - makan & minum
 *    1. usia <= 10 (menambah energi 6)
 *    2. usia <= 25 (menambah energi  4)
 *    3. usia > 25 (menambah energi 2)
 *    - tidur(istirahat)
 *    1. Terdapat parameter n jam -> tidur(3) untuk 3 jam tidur
 *    2. usia <= 10 (menambah energi n + 3)
 *    3. usia <= 25 (menambah energi n + 2)
 *    4. usia > 25 (menambah energi n + 1) 
 *    - sekolahAtauKerja
 *    1. Terdapat parameter n jam -> sekolahAtauKerja(3) untuk 3 jam sekolah atau kerja
 *    2. usia <= 10 (mengurangi energi n + 3)
 *    3. usia <= 25 (mengurangi energi n + 5)
 *    4. usia > 25 (mengurangi energi n + 7)
 *    - berolahraga
 *    1. Terdapat parameter n jam -> olahraga(4) untuk 4 jam olahraga
 *    2. usia <= 10 (mengurangi energi n + 2)
 *    3. usia <= 25 (mengurangi energi n + 3)
 *    4. usia > 25 (mengurangi energi n + 5)
 * - Untuk mendapatkan informasi pada private properties, buatlah setter dan getter 
 *   untuk masing-masing property.  
 *   1. usia -> hanya getter
 *   2. gender -> hanya getter
 *   3. totalEnergi -> setter dan getter
 * - Untuk aktivitas yang memerlukan energi, lakukan validasi terlebih dahulu
 *   apakah totalEnergi yang dimiliki sekarang cukup untuk melakukan aktivitas-aktivitas tersebut. 
 *   Jika tidak cukup, maka jangan biarkan user melakukan aktivitas dan minta untuk istirahat
 */

class PerubahanEnergi {
   // private property
   #usia;
   #gender;
   #totalEnergi;

   // public property
   nama;
   constructor(nama, usia, gender, totalEnergy = 100) {
      this.nama = nama;
      this.#usia = usia;
      this.#gender = gender;
      this.#totalEnergi = totalEnergy;
      console.log(`[INIT] ${this.nama} berhasil dibuat. Energi awal: ${this.#totalEnergi}`);  
   }

   // getter dan setter untuk private property
   get Usia() {
    return this.#usia;
   }

   get Gender() {
    return this.#gender;
   }

   get TotalEnergi() {
    return this.#totalEnergi;
   }

   set totalEnergi(newEnergy) {
    if (newEnergy < 0) {
        this.#totalEnergi = 0;
        console.log(`[INFO] Energi ${this.nama} mencapai batas minimum (0).`);
    } else {
        this.#totalEnergi = newEnergy;
    }
  }

  makanMinum() {
    let penambahan;
    const usia = this.#usia;
    if (usia <= 10) {
        penambahan = 6;
    } else if (usia <= 25) {
        penambahan = 4;
    } else { // usia > 25
        penambahan = 2;
    }
    this.#totalEnergi += penambahan;
    console.log(`[MAKAN] ${this.nama} Energi bertambah: ${penambahan}. Total Energi: ${this.#totalEnergi}`);
    }

    tidur(nJam) {
        let penambahan;
        const usia = this.#usia;
        if (usia <= 10) {
            penambahan = nJam + 3;
        } else if (usia <= 25) {
            penambahan = nJam + 2;
        } else {
            penambahan = nJam + 1;
        }

        this.totalEnergi += penambahan;
        console.log(`[TIDUR] ${this.nama} tidur: ${nJam} Energi tambahan: ${penambahan}. Total Energi: ${this.#totalEnergi}`);
    }

    sekolahAtauKerja(nJam) {
        let pengurangan;
        const usia = this.#usia;
        if (usia <= 10) {
            pengurangan = nJam + 3;
        } else if (usia <= 25) {
            pengurangan = nJam + 5;
        } else {
            pengurangan = nJam + 7;
        
    }
    if (this.#totalEnergi > pengurangan) {
       console.log(`[KERJA/SEKOLAH] Energi ${this.nama} (${this.#totalEnergi}) tidak cukup untuk bekerja/sekolah (${pengurangan} dibutuhkan). Mohon Istirahat!`);
       return false;
    }
    this.#totalEnergi -= pengurangan;
    console.log(`[KERJA/SEKOLAH] ${this.nama} bekerja/sekolah: ${nJam} Energi dikurangi: ${pengurangan}. Total Energi: ${this.#totalEnergi}`);
    return true;
    }
    
    berolahraga(nJam) {
        let pengurangan;
        const usia = this.#usia;
        if (usia <= 10) {
            pengurangan = nJam + 2;
        } else if (usia <= 25) {
            pengurangan = nJam + 3;
        } else {
            pengurangan = nJam + 5;
    }
    if (this.#totalEnergi > pengurangan) {
        console.log(`[OLAHRAGA - GAGAL] Energi ${this.nama} (${this.#totalEnergi}) tidak cukup untuk berolahraga (${pengurangan} dibutuhkan). Mohon Istirahat!`);
        return false;
    }
    this.#totalEnergi -= pengurangan;       
    console.log(`[OLAHRAGA] ${this.nama} berolahraga: ${nJam} jam. Energi berkurang ${pengurangan}. Total Energi: ${this.#totalEnergi}`);
    return true;
  }
}

console.log("===========================================");
console.log("--- Skenario 1: Ank (Usia 8 Tahun) ---");
console.log("============================================");
const anak = new PerubahanEnergi("Andi", 8, "Laki-laki");
anak.makanMinum();
anak.sekolahAtauKerja(4);
anak.tidur(10);

console.log("\n--- Info Andi ---");
console.log(`Nama: ${anak.nama}`);
console.log(`Usia: (via getter) ${anak.Usia}`);
console.log(`Gender: (via getter)${anak.Gender}`);
console.log(`Total Energi: ${anak.TotalEnergi}`);

const ujiEnergi = new PerubahanEnergi("Rizky", 20, "Laki-laki", 10);
ujiEnergi.sekolahAtauKerja(3); // Cek output: GAGAL, butuh istirahat!
ujiEnergi.tidur(5);