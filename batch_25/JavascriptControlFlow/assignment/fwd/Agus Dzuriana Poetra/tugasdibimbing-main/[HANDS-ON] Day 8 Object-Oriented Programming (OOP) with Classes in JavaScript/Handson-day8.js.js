class Pekerja {
  constructor({nama, usia, pekerjaan}) {
    this.nama = nama;
    this.usia = usia;
    this.pekerjaan = pekerjaan;
  }

  getPekerjaInfo() {
    return `Nama: ${this.nama}, Usia: ${this.usia} tahun, Pekerjaan: ${this.pekerjaan}`;
  }
}

class Programmer extends Pekerja {
  #techStack;
  #gaji;

  constructor({nama, usia, pekerjaan, techStack, gaji}) {
    super({ nama, usia, pekerjaan });
    this.#techStack = techStack;
    this.#gaji = gaji;
  }

  #menghitungBonus(jumlahBulan) {
    const jumlahBonusSatuBulan = this.#gaji * 0.3;
    const totalBonus = jumlahBonusSatuBulan * jumlahBulan;
    return totalBonus;
  }

  menghitungTotalGaji(jumlahBulan) {
    return this.#gaji * jumlahBulan;
  }

  menghitungRataRataGaji(jumlahBulan) {
    const totalBonus = this.#menghitungBonus(jumlahBulan);

    const totalGaji = this.menghitungTotalGaji(jumlahBulan);

    const rataRataGaji = (totalGaji + totalBonus) / jumlahBulan;
    return rataRataGaji;
  }

  getPekerjaInfo() {
    return `Halo saya ${this.nama}, seorang programmer yang menggunakan teknologi ${this.#techStack}`
  }

  set setTechStack(newTechStack) {
    this.#techStack = newTechStack;
  }

  get getTechStack() {
    return this.#techStack;
  }
}

const programmer1 = new Programmer({
  nama: "Agus Dzuriana",
  usia: 25,
  pekerjaan: "Programmer",
  techStack: "JavaScript",
  gaji: 20000000
});
console.log(programmer1.getPekerjaInfo());
const rataRataGajiProgrammer6Bulan = programmer1.menghitungRataRataGaji(6);
console.log(`Rata-rata gaji Saya sebagai programmer selama 6 bulan bernilai Rp.${rataRataGajiProgrammer6Bulan}`);

const totalGajiProgrammer6Bulan = programmer1.menghitungTotalGaji(6);
console.log(`Total gaji Saya sebagai programmer selama 6 bulan adalah Rp.${totalGajiProgrammer6Bulan}`);


programmer1.setTechStack = "React.js";
console.log(`Tech stack yang saya gunakan sekarang adalah ${programmer1.getTechStack}`);