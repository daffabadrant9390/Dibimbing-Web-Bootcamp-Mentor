class Pengguna {
    #usia;
    #gender;
    #totalEnergi    

    constructor (nama, usia, gender, totalEnergi) {
        this.nama = nama;
        this.#usia = usia;
        this.#gender = gender;
        this.#totalEnergi = totalEnergi
    }

    get usia() {
        return this.#usia
    }

    get gender() {
        return this.#gender
    }

    get totalEnergi() {
        return this.#totalEnergi
    }

    set totalEnergi(value) {
        this.#totalEnergi = value
    }

    makanMinum() {
        const usia = this.#usia
        let tambahEnergi = 0

        if (usia <= 10) {
            tambahEnergi = 6;
        } else if (usia <= 25) {
            tambahEnergi = 4;
        } else {
            tambahEnergi = 2
        }

        this.#totalEnergi = this.#totalEnergi + tambahEnergi

        console.log(`${this.nama} makan & minum, energi bertambah ${tambahEnergi}. Total energi sekarang: ${this.totalEnergi}`)
    }

    tidur(n) {
        const usia = this.usia;
        let tambahEnergi = 0

        if (usia <= 10) {
            tambahEnergi = n + 3;
        } else if (usia <= 25) {
            tambahEnergi = n + 5;
        } else {
            tambahEnergi = n + 7;
        }

        this.totalEnergi = this.totalEnergi + tambahEnergi
        
        console.log(`${this.nama} tidur selama ${n} jam, energi bertambah ${tambahEnergi}. Total energi sekarang: ${this.totalEnergi}`);

    }

    sekolahAtauKerja(n) {
        const usia = this.usia;
        let kurangEnergi = 0

        if (usia <= 10) {
            kurangEnergi = n + 3;
        } else if (usia <= 25) {
            kurangEnergi = n + 5;
        } else {
            kurangEnergi = n + 7;
        }

        if (this.totalEnergi < kurangEnergi) {
            console.log(`${this.nama} kelelahan! Energi tidak cukup, total energi sebesar (${this.totalEnergi}), perlu istirahat.`)
        return;
        }

        this.totalEnergi = this.totalEnergi - kurangEnergi
        
        console.log(`${this.nama} bekerja selama ${n} jam, energi berkurang ${kurangEnergi}. Total energi sekarang: ${this.totalEnergi}`);
    }

    berolahraga(n) {
        const usia = this.usia;
        let kurangEnergi = 0

        if (usia <= 10) {
            kurangEnergi = n + 3;
        } else if (usia <= 25) {
            kurangEnergi = n + 5;
        } else {
            kurangEnergi = n + 7;
        }

        if (this.totalEnergi < kurangEnergi) {
            console.log(`${this.nama} kelelahan! Energi tidak cukup, total energi sebesar (${this.totalEnergi}), perlu istirahat.`)
        return;
        }

        this.totalEnergi = this.totalEnergi - kurangEnergi
        
        console.log(`${this.nama} berolahraga selama ${n} jam, energi berkurang ${kurangEnergi}. Total energi sekarang: ${this.totalEnergi}`);
    }
}

const agus = new Pengguna ("Agus", 27, "Laki-laki", 10)

console.log(`Pengguna bernama ${agus.nama} berusia ${agus.usia} tahun dan berjenis kelamin ${agus.gender} berhasil dibuat.\nEnergi yang dimiliki saat ini adalah ${agus.totalEnergi} `)
console.log(`${agus.nama} memiliki ${agus.totalEnergi} energi.`)
agus.berolahraga(3)
agus.makanMinum()
agus.sekolahAtauKerja(5)
agus.tidur(2)