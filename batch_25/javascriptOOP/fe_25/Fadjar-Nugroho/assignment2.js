class Manusia {
    #usia;
    #gender;
    #totalEnergi;
    constructor(nama, usia, gender, totalEnergi){
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

    set totalEnergi(n) {
        if(n < 0) {
            console.log("Energi tidak boleh negatif");
            this.#totalEnergi = 0;
        } else {
            this.#totalEnergi = n;
        }
    }
    get totalEnergi() {
        return this.#totalEnergi;
    }


    makanMinum() {
        let penambahan = 0;
        if(this.#usia <= 10) penambahan = 6;
        else if (this.#usia <=25) penambahan = 4;
        else penambahan = 2;
        return this.totalEnergi = this.#totalEnergi + penambahan;
    }


    tidur(n) {
       let penambahan = 0;
        if(this.#usia <= 10) penambahan = n+3;
        else if (this.#usia <=25) penambahan = n+2;
        else penambahan = n+1;
        return this.totalEnergi = this.#totalEnergi + penambahan;
    }

    sekolahAtauKerja(n) {
        let pengurangan = 0;
        if(this.#usia <= 10) pengurangan = n+3;
        else if (this.#usia <=25) pengurangan = n+5;
        else pengurangan = n+7;

       if(this.#totalEnergi < pengurangan) {console.log(`${this.nama} tidak punya cukup energi untuk melakukan aktivitas ini. Istirahat dulu ya 😴`);
        return this.#totalEnergi;}
        else return this.totalEnergi = this.#totalEnergi - pengurangan;
    }

    olahRaga(n) {
        let pengurangan = 0;
        if(this.#usia <= 10) pengurangan = n+2;
        else if (this.#usia <=25) pengurangan = n+3;
        else pengurangan = n+5;

        if(this.#totalEnergi < pengurangan) {console.log(`${this.nama} tidak punya cukup energi untuk melakukan aktivitas ini. Istirahat dulu ya 😴`);
        return this.#totalEnergi;}
        else return this.totalEnergi = this.#totalEnergi - pengurangan;
    }

    getInfo() {
        return `Nama: ${this.nama}, Usia: ${this.#usia}, Gender: ${this.#gender}, Total Energi: ${this.#totalEnergi}`;
    }
    
}

const manusia1 = new Manusia("Budi", 20, "Laki-laki", 15);
console.log(manusia1.getInfo());
manusia1.makanMinum();         // +4 energi
manusia1.sekolahAtauKerja(5);  // -10 energi
manusia1.olahRaga(7);          // -10 energi (tidak cukup energi, akan ditolak)
manusia1.tidur(4);             // +6 energi
console.log(manusia1.getInfo());
