// 2.	Buatlah sebuah class yang merepresentasikan Perubahan energi seseorang berdasarkan dari aktivitas yang mereka lakukan.
// a.	Masing-masing aktivitas dapat menambah / mengurangi jumlah energi seseorang.
// b.	Penambahan dan pengurangan jumlah energi akan bergantung pada usia orang tersebut.
// c.	Masing-masing orang memiliki property berikut
// i.	nama -> public property
// ii.	usia -> private property
// iii.	gender -> private property
// iv.	totalEnergi -> private property
// d.	Terdapat 4 jenis aktivitas dengan rules sebagai berikut
// i.	makan & minum
// 1.	usia <= 10 (menambah energi 6)
// 2.	usia <= 25 (menambah energi  4)
// 3.	usia > 25 (menambah energi 2)
// ii.	tidur (istirahat)
// 1.	Terdapat parameter n jam -> tidur(3) untuk 3 jam tidur
// 2.	usia <= 10 (menambah energi n + 3)
// 3.	usia <= 25 (menambah energi n + 2)
// 4.	usia > 25 (menambah energi n + 1)
// iii.	sekolahAtauKerja
// 1.	Terdapat parameter n jam -> sekolahAtauKerja(3) untuk 3 jam sekolah atau kerja
// 2.	usia <= 10 (mengurangi energi n + 3)
// 3.	usia <= 25 (mengurangi energi n + 5)
// 4.	usia > 25 (mengurangi energi n + 7)
// iv.	berolahraga
// 1.	Terdapat parameter n jam -> olahraga(4) untuk 4 jam olahraga
// 2.	usia <= 10 (mengurangi energi n + 2)
// 3.	usia <= 25 (mengurangi energi n + 3)
// 4.	usia > 25 (mengurangi energi n + 5)
// e.	Untuk mendapatkan informasi pada private properties, buatlah setter dan getter untuk masing-masing property.
// i.	usia -> hanya getter
// ii.	gender -> hanya getter
// iii.	totalEnergi -> setter dan getter
// f.	Untuk aktivitas yang memerlukan energi, lakukan validasi terlebih dahulu apakah totalEnergi yang dimiliki sekarang cukup untuk melakukan aktivitas-aktivitas tersebut. Jika tidak cukup, maka jangan biarkan user melakukan aktivitas dan minta untuk istirahat


class PengelolaEnergi {

    nama;
    #usia;
    #gender;
    #totalEnergi;

    constructor(nama, usia, gender, initialEnergi = 10) {
        this.nama = nama;
        this.#usia = usia;
        this.#gender = gender;
        this.#totalEnergi = initialEnergi;

        console.log(`Selamat datang, ${this.nama}! Energi awal Anda: ${this.#totalEnergi}`);
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

    set totalEnergi(nilaiBaru) {
        if (typeof nilaiBaru === 'number' && nilaiBaru >= 0) {
            this.#totalEnergi = nilaiBaru;
        } else {
            console.error("Kesalahan: Nilai totalEnergi harus berupa angka positif.");
        }
    }

    makanDanMinum() {
        let penambahanEnergi = 0;

        if (this.#usia <= 10) {
            penambahanEnergi = 6;
        } else if (this.#usia <= 25) {
            penambahanEnergi = 4;
        } else {
            penambahanEnergi = 2;
        }

        this.#totalEnergi += penambahanEnergi;
        console.log(` ${this.nama} makan & minum. Energi bertambah: +${penambahanEnergi}. Energi saat ini: ${this.#totalEnergi}`);
    }

    tidur(nJam) {
        let penambahanEnergi = 0;

        if (this.#usia <= 10) {
            penambahanEnergi = nJam + 3;
        } else if (this.#usia <= 25) {
            penambahanEnergi = nJam + 2;
        } else {
            penambahanEnergi = nJam + 1;
        }

        this.#totalEnergi += penambahanEnergi;
        console.log(` ${this.nama} tidur selama ${nJam} jam. Energi bertambah: +${penambahanEnergi}. Energi saat ini: ${this.#totalEnergi}`);
    }

    sekolahAtauKerja(nJam) {
        let penguranganEnergi = 0;

        if (this.#usia <= 10) {
            penguranganEnergi = nJam + 3;
        } else if (this.#usia <= 25) {
            penguranganEnergi = nJam + 5;
        } else {
            penguranganEnergi = nJam + 7;
        }


        if (this.#totalEnergi >= penguranganEnergi) {
            this.#totalEnergi -= penguranganEnergi;
            console.log(` ${this.nama} sekolah/kerja selama ${nJam} jam. Energi berkurang: -${penguranganEnergi}. Energi saat ini: ${this.#totalEnergi}`);
        } else {
            console.warn(` Gagal! Energi ${this.nama} (${this.#totalEnergi}) tidak cukup untuk sekolah/kerja yang membutuhkan ${penguranganEnergi}. Mohon istirahat atau makan.`);
        }
    }

    berolahraga(nJam) {
        let penguranganEnergi = 0;

        if (this.#usia <= 10) {
            penguranganEnergi = nJam + 2;
        } else if (this.#usia <= 25) {
            penguranganEnergi = nJam + 3;
        } else {
            penguranganEnergi = nJam + 5;
        }

        if (this.#totalEnergi >= penguranganEnergi) {
            this.#totalEnergi -= penguranganEnergi;
            console.log(` ${this.nama} berolahraga selama ${nJam} jam. Energi berkurang: -${penguranganEnergi}. Energi saat ini: ${this.#totalEnergi}`);
        } else {
            console.warn(` Gagal! Energi ${this.nama} (${this.#totalEnergi}) tidak cukup untuk berolahraga yang membutuhkan ${penguranganEnergi}. Mohon istirahat atau makan.`);
        }
    }
}


const upin = new PengelolaEnergi("upin", 8, "Laki-laki", 15);


console.log(`\n--- Info ${upin.nama} ---`);
console.log(`Usia: ${upin.usia} | Gender: ${upin.gender} | Energi Awal: ${upin.totalEnergi}`);
console.log("\n--- Aktivitas upin ---");

upin.makanDanMinum();
upin.sekolahAtauKerja(3);
upin.tidur(2);

console.log("===============================================")
const ipin = new PengelolaEnergi("ipin", 22, "Laki-laki", 25);

console.log(`\n--- Info ${ipin.nama} ---`);
console.log(`Usia: ${ipin.usia} | Energi Awal: ${ipin.totalEnergi}`);


console.log("\n--- Aktivitas ipin ---");
ipin.berolahraga(4);
ipin.sekolahAtauKerja(8);
ipin.berolahraga(2);
ipin.berolahraga(1);
ipin.tidur(4);

console.log(`\nEnergi akhir ${ipin.nama}: ${ipin.totalEnergi}`);