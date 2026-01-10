class Person{
    #age;
    #gender;
    #totalEnergy;
    // Constructor
    constructor({name,age,gender,awalEnergy=0}){
        this.name = name;
        this.#age = age;
        this.#gender = gender;
        this.#totalEnergy = awalEnergy;
    }
    // Setter & Getter
    set setEnergy(energy){
        if (typeof energy !== 'number') {
            console.log(`Set Energi Gagal: Input harus berupa angka!`);
            return; 
        }
        if (energy < 0) {
            console.log(`Set Energi Gagal: Energi angka minus!`);
            return; 
        }
        this.#totalEnergy = energy;
        console.log(`Berhasil! Set Energi Awal Menjadi ${energy}`)
    }
    get getEnergy(){
        return this.#totalEnergy;
    }
    get getAge(){
        return this.#age;
    }
    get getGender(){
        return this.#gender;
    }
    // Check Energi jika 0
    checkEnergyAwal(){
        if(this.#totalEnergy === 0){
            return true
        } else {
            return false
        }
    }
    // Check Pengurangan Energy
    checkPenguranganEnergy(aktivitas,jam,energiDiperlukan,totalEnergy){
        if(energiDiperlukan > totalEnergy){
            return console.log(`Energi tidak cukup! ${this.name} memerlukan energi sebesar ${energiDiperlukan} energi untuk melakukan ${aktivitas}! Energi saat ini adalah ${totalEnergy}`);
        } else {
            totalEnergy -= energiDiperlukan;
            console.log(`${this.name} melakukan aktivitas ${aktivitas} selama ${jam} jam, Energi yang tersisa adalah ${totalEnergy}`)
            return totalEnergy
        }
    }
    // Aktivitas Menambah Energi
    MakanMinum(){
        let energiDidapat = 0;
        if(this.#age <= 10){
            energiDidapat = 6;
        } else if (this.#age <= 25){
            energiDidapat = 4;
        } else if (this.#age > 25){
            energiDidapat = 2;
        }
        this.#totalEnergy += energiDidapat;
        console.log(`${this.name} makan & minum. Energi bertambah ${energiDidapat}. Total energi sekarang: ${this.#totalEnergy}`);
    }
    Tidur(jam){
        let energiDidapat = 0;
        if(this.#age <= 10){
            energiDidapat = jam + 3
        } else if (this.#age <= 25){
            energiDidapat = jam + 2
        } else if (this.#age > 25){
            energiDidapat = jam + 1
        }
        this.#totalEnergy += energiDidapat;
        console.log(`${this.name} Tidur selama ${jam} jam. Energi bertambah ${energiDidapat}. Total energi sekarang: ${this.#totalEnergy}`);
    }
    // Aktifivtas Mengurangi Stamina
    SekolahKerja(jam){
        if(this.checkEnergyAwal()){
            return console.log(`Tidak Bisa Sekolah atau Bekrja karena Energi kamu Kosong!`)
        }
        let energiDiperlukan = 0;
        if(this.#age <= 10){
            energiDiperlukan = jam + 3
        } else if (this.#age <= 25){
            energiDiperlukan = jam + 5
        } else if (this.#age > 25){
            energiDiperlukan = jam + 7
        }
        let totalEnergy = this.#totalEnergy;
        let aktivitas = `Sekolah & Kerja`
        this.checkPenguranganEnergy(aktivitas,jam,energiDiperlukan,totalEnergy)
    }
    Olahraga(jam){
        if(this.checkEnergyAwal()){
            return console.log(`Tidak Bisa Olahraga karena Energi kamu Kosong!`)
        }
        let energiDiperlukan = 0;
        if(this.#age <= 10){
            energiDiperlukan = jam + 2
        } else if (this.#age <= 25){
            energiDiperlukan = jam + 3
        } else if (this.#age > 25){
            energiDiperlukan = jam + 5
        }
        // if(energiDiperlukan > this.#totalEnergy){
        //     console.log(`Energi tidak cukup! ${this.name} memerlukan energi sebesar ${energiDiperlukan} untuk melakukan Olahraga! Energi saat ini adalah ${this.#totalEnergy}`);
        // } else {
        //     this.#totalEnergy -= energiDiperlukan;
        //     console.log(`${this.name} melakukan aktivitas Olahraga, Energi yang tersisa adalah ${this.#totalEnergy}`)
        // }
        let totalEnergy = this.#totalEnergy;
        let aktivitas = `Olahraga`
        this.checkPenguranganEnergy(aktivitas,jam,energiDiperlukan,totalEnergy)
    }
}

const fatih = new Person ({name : `Fatih`, age:20, gender : `Laki-Laki`})
console.log(`===== Aktifitas Fatih =====`)
fatih.setEnergy = 10; // Set Energi Awal = 10
fatih.MakanMinum() // Makan dan Minum (sarapan) di pagi hari
fatih.SekolahKerja(6) // Sekolah dan kerja di setelah sarapan
fatih.Olahraga(4) // Olahraga di Sore Hari
fatih.Tidur(5) // Tidur di malam
fatih.getEnergy // cek sisa energi

console.log(`\n==== Pengecekan Energi Kosong ====`)
fatih.setEnergy = 0; // Set Energi Awal = 0
fatih.SekolahKerja(1) // cek kalau energi 0 apakah masih bisa sekolah?
fatih.Olahraga(1) // cek kalau energi 0 apakah masih bisa olahraga?

console.log(`\n===== Pengecekan Energi Jika Kurang =====`)
fatih.setEnergy = 5; // Set Energi Awal = 5
fatih.SekolahKerja(8);
fatih.Olahraga(8);