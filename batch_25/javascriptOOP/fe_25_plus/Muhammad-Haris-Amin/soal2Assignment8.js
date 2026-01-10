/**
Buatlah sebuah class yang merepresentasikan Perubahan energi seseorang berdasarkan dari aktivitas yang mereka lakukan. 
a. Masing-masing aktivitas dapat menambah / mengurangi jumlah energi seseorang.
b. Penambahan dan pengurangan jumlah energi akan bergantung pada usia orang tersebut.
c. Masing-masing orang memiliki property berikut
    1. nama -> public property
    2. usia -> private property
    3. gender -> private property
    4. totalEnergi -> private property
d. Terdapat 4 jenis aktivitas dengan rules sebagai berikut
    I. makan & minum
        1. usia <= 10 (menambah energi 6)
        2. usia <= 25 (menambah energi  4)
        3. usia > 25 (menambah energi 2)
    II. tidur (istirahat) 
        1. Terdapat parameter n jam -> tidur(3) untuk 3 jam tidur
        2. usia <= 10 (menambah energi n + 3)
        3. usia <= 25 (menambah energi n + 2)
        4. usia > 25 (menambah energi n + 1)
    III. sekolahAtauKerja
        1. Terdapat parameter n jam -> sekolahAtauKerja(3) untuk 3 jam sekolah atau kerja
        2. usia <= 10 (mengurangi energi n + 3)
        3. usia <= 25 (mengurangi energi n + 5)
        4. usia > 25 (mengurangi energi n + 7)
    IV. berolahraga
        1. Terdapat parameter n jam -> olahraga(4) untuk 4 jam olahraga
        2. usia <= 10 (mengurangi energi n + 2)
        3. usia <= 25 (mengurangi energi n + 3)
        4. usia > 25 (mengurangi energi n + 5)
e. Untuk mendapatkan informasi pada private properties, buatlah setter dan getter untuk masing-masing property.
    I. usia -> hanya getter
    II. gender -> hanya getter
    III. totalEnergi -> setter dan getter
f. Untuk aktivitas yang memerlukan energi, lakukan validasi terlebih dahulu apakah totalEnergi yang
dimiliki sekarang cukup untuk melakukan aktivitas-aktivitas tersebut. Jika tidak cukup, maka jangan biarkan
user melakukan aktivitas dan minta untuk istirahat
 */

class Orang {
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

    set totalEnergi(energiBaru) {
        this.#totalEnergi = energiBaru;
    }

    //Method makan dan minum
    makanMinum() {
        let tambah = 0;
        if (this.#usia <= 10) tambah = 6;
        else if (this.#usia <= 25) tambah = 4;
        else tambah = 2;

        this.#totalEnergi += tambah;
        console.log(`${this.nama} Makan dan Minum + energi bertambah ${tambah}, total energi sekarang: ${this.#totalEnergi}`)
    }

    //Method tidur
    tidur(jamTidur) {
        let tambah = 0;
        if (this.#usia <= 10) tambah = jamTidur + 3;
        else if (this.#usia <= 25) tambah = jamTidur + 2;
        else tambah = jamTidur + 1;

        this.#totalEnergi += tambah;
        console.log(`${this.nama} tidur selama ${jamTidur} jam + energi bertambah ${tambah}, total energi sekarang: ${this.#totalEnergi}`);
    }
    //Method sekolah atau Kerja
    sekolahAtauKerja(jamKerja) {
        let kurang = 0;
        if (this.#usia <= 10) kurang = jamKerja + 3;
        else if (this.#usia <= 25) kurang = jamKerja + 2;
        else kurang = jamKerja + 1;

        if (this.#totalEnergi < kurang) {
            console.log(`${this.nama} tidak punya cukup energi untuk kerja atau sekolah selama ${jamKerja} jam, disarankan untuk istirahat.`);
            return;
        }

        this.#totalEnergi -= kurang;
        console.log(`${this.nama} bekerja/sekolah selama ${jamKerja} jam, energi berkurang ${kurang}. Total energi sekarang: ${this.#totalEnergi}`);
        
    }
    //Method olahraga
    berolahraga(jamOlahraga) {
        let kurang = 0;
        if (this.#usia <= 10) kurang = jamOlahraga + 2;
        else if (this.#usia <= 25) kurang = jamOlahraga + 3;
        else kurang = jamOlahraga + 5;

        if (this.#totalEnergi < kurang) {
            console.log(`${this.nama} terlalu lelah untuk olahraga ${jamOlahraga} jam. Harus istirahat dulu.`);
            return;
        }

        this.#totalEnergi -= kurang;
        console.log(`${this.nama} berolahraga selama ${jamOlahraga} jam, energi berkurang ${kurang}. Total energi sekarang: ${this.#totalEnergi}`);
    }

    getInfo() {
        return `
        Nama: ${this.nama}
        Usia: ${this.#usia}
        Gender: ${this.#gender}
        Total Energi: ${this.#totalEnergi}
        `;
    }
}

const haris = new Orang("Haris", 24, "Laki-laki");
console.log(haris.getInfo());

haris.sekolahAtauKerja(3);
haris.berolahraga(2);
haris.makanMinum();
haris.tidur(5);
haris.sekolahAtauKerja(6);

console.log(haris.getInfo());
    