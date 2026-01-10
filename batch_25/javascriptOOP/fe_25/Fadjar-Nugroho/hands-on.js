class Pekerja {
    constructor(nama, usia, pekerjaan) {
        this.nama = nama;
        this.usia = usia;
        this.pekerjaan = pekerjaan;
    }
    getPekerjaInfo() {
        return `Nama: ${this.nama}, Usia: ${this.usia}, Pekerjaan: ${this.pekerjaan}`;
    }
}

class Programmer extends Pekerja {
    #techStack;
    #gaji;
    constructor(nama, usia, pekerjaan, techStack, gaji) {
        super(nama, usia, pekerjaan);
        this.#techStack = techStack;
        this.#gaji = gaji;
    }

    #menghitungBonus(jumlahBulan) {
        const jumlahBonusSatuBulan = this.#gaji * 0.3
        const totalBonus = jumlahBonusSatuBulan * jumlahBulan;
        return totalBonus;
    }
    
    #menghitungTotalGaji(jumlahBulan) {
        return this.#gaji * jumlahBulan;
    }

    menghitungRataRataGaji(jumlahBulan) {
        const totalBonus = this.#menghitungBonus(jumlahBulan);
        const totalGaji = this.#menghitungTotalGaji(jumlahBulan);
        const rataRataGaji = (totalGaji + totalBonus) / jumlahBulan;
        return rataRataGaji;
    }

   getPekerjaInfo() {
       return `Halo saya ${this.nama}, programmer yang menggunakan teknologi ${this.#techStack}`
  }
}

const programmer1 = new Programmer( 
    "John Doe",
    25,
    "Programmer",
    "JavaScript",
    2000000
); 
console.log(programmer1.getPekerjaInfo());
