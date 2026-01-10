// Buatlah sebuah class yang merepresentasikan Perubahan energi seseorang berdasarkan dari aktivitas yang mereka lakukan. 
// Masing-masing aktivitas dapat menambah / mengurangi jumlah energi seseorang.
// Penambahan dan pengurangan jumlah energi akan bergantung pada usia orang tersebut.
// Masing-masing orang memiliki property berikut
// nama -> public property
// usia -> private property
// gender -> private property
// totalEnergi -> private property //nilai awal 20
// Terdapat 4 jenis aktivitas dengan rules sebagai berikut
// makan & minum
// usia <= 10 (menambah energi 6)
// usia <= 25 (menambah energi  4)
// usia > 25 (menambah energi 2)
// tidur (istirahat) 
// Terdapat parameter n jam -> tidur(3) untuk 3 jam tidur
// usia <= 10 (menambah energi n + 3)
// usia <= 25 (menambah energi n + 2)
// usia > 25 (menambah energi n + 1)
// sekolahAtauKerja
// Terdapat parameter n jam -> sekolahAtauKerja(3) untuk 3 jam sekolah atau kerja
// usia <= 10 (mengurangi energi n + 3)
// usia <= 25 (mengurangi energi n + 5)
// usia > 25 (mengurangi energi n + 7)
// berolahraga
// Terdapat parameter n jam -> olahraga(4) untuk 4 jam olahraga
// usia <= 10 (mengurangi energi n + 2)
// usia <= 25 (mengurangi energi n + 3)
// usia > 25 (mengurangi energi n + 5)
// Untuk mendapatkan informasi pada private properties, buatlah setter dan getter untuk masing-masing property.
// usia -> hanya getter
// gender -> hanya getter
// totalEnergi -> setter dan getter
// Untuk aktivitas yang memerlukan energi, lakukan validasi terlebih dahulu apakah totalEnergi yang dimiliki sekarang cukup untuk melakukan aktivitas-aktivitas tersebut. Jika tidak cukup, maka jangan biarkan user melakukan aktivitas dan minta untuk istirahat

class Human {
    nama;
    #usia;
    #gender;
    #totalEnergi;


    constructor({nama, usia, gender, totalEnergi}) {
    this.nama = nama;
    this.#usia = usia;
    this.#gender = gender;
    this.#totalEnergi = totalEnergi;
    }


    get getUsia () {
        return this.#usia;
    }

    get getGender () {
        return this.#gender;
    }

    get getTotalEnergi () {
        return this.#totalEnergi;
    }

    set setTotalEnergi (newTotalEnergi) {
        this.#totalEnergi = newTotalEnergi;
    }

    makanMinum = (jumlahJam) => {
        let penambahanEnergi = 0;
            if (this.#usia <= 10) {
                penambahanEnergi = 6;}
            else if(this.#usia <= 25) {
               penambahanEnergi = 4;
            } else {
                penambahanEnergi = 2;
            }
        this.#totalEnergi += penambahanEnergi;
        console.log(`${this.nama} makan dan minum, energi bertambah ${penambahanEnergi}, total energi saat ini adalah ${this.#totalEnergi}`)
        }

    sekolahAtauKerja = (jumlahJam) => {
        let penguranganEnergi = 0;
            if (this.#usia <= 10) {
                penguranganEnergi = jumlahJam + 3;}
            else if (this.#usia <= 25) {
                penguranganEnergi = jumlahJam + 5;
            } else {
                penguranganEnergi = jumlahJam + 7;
            }
            if (this.#totalEnergi < penguranganEnergi) {
            console.log('Energi tidak cukup, silakan beristirahat terlebih dahulu')
        } else {
            this.#totalEnergi -= penguranganEnergi;
            console.log(`${this.nama} bersekolah/bekerja selama ${jumlahJam} jam, energi berkurang sebanyak ${penguranganEnergi}, total energi saat ini adalah ${this.#totalEnergi}`)
        }
        }
    
    tidur = (jumlahJam) => {
            let penambahanEnergi = 0;
            if (this.#usia <= 10) {
                penambahanEnergi = 3  + jumlahJam; }
            else if (this.#usia <= 25) {
                penambahanEnergi = 2 + jumlahJam;
            } else {
                penambahanEnergi = 1 + jumlahJam;
            }
            this.#totalEnergi += penambahanEnergi;
        console.log(`${this.nama} tidur selama ${jumlahJam} jam, energi bertambah sebanyak ${penambahanEnergi}, total energi saat ini adalah ${this.#totalEnergi}`)
        }
    
   olahraga = (jumlahJam) => {
            let penguranganEnergi = 0;
            if (this.#usia <= 10) {
                penguranganEnergi = jumlahJam + 2;}
            else if (this.#usia <= 25) {
                penguranganEnergi = jumlahJam + 3;
            } else {
                penguranganEnergi = jumlahJam + 5;
            }
            if (this.#totalEnergi < penguranganEnergi) {
            console.log('Energi tidak cukup, silakan beristirahat terlebih dahulu')
        } else {
            this.#totalEnergi -= penguranganEnergi;
            console.log(`${this.nama} berolahraga selama ${jumlahJam} jam, energi berkurang sebanyak ${penguranganEnergi}, sisa energi saat ini adalah ${this.#totalEnergi}`)
        }
        } 
    
 }
const human1 = new Human ({
    nama : 'Bambang',
    usia : 20,
    gender : 'Male',
    totalEnergi : 20,
})
console.log('==========================================================================')
console.log('Human 1')
console.log(`Aktivitas ${human1.nama} selama satu hari dan jumlah energi yang digunakan\n`)
human1.makanMinum();
human1.sekolahAtauKerja(8);
human1.tidur(2);
human1.olahraga(3);
console.log('==========================================================================\n')

const human2 = new Human ({
    nama : 'Asih',
    usia : 9,
    gender : 'Female',
    totalEnergi : 20,
})
console.log('==========================================================================')
console.log('Human 2')
console.log(`Aktivitas ${human2.nama} selama satu hari dan jumlah energi yang digunakan\n`)
human2.makanMinum();
human2.sekolahAtauKerja(7);
human2.tidur(2);
human2.olahraga(4);
console.log('==========================================================================\n')

const human3 = new Human ({
    nama : 'Diana',
    usia : 25,
    gender : 'Female',
    totalEnergi : 20,
})
console.log('==========================================================================')
console.log('Human 3')
console.log(`Aktivitas ${human3.nama} selama satu hari dan jumlah energi yang digunakan\n`)
human3.makanMinum();
human3.sekolahAtauKerja(9);
human3.tidur(1);
human3.olahraga(3);
console.log('===========================================================================\n')


const human4 = new Human ({
    nama : 'Yanto',
    usia : 30,
    gender : 'Male',
    totalEnergi : 20,
})

console.log('==========================================================================')
console.log('Human 4')
console.log(`Aktivitas ${human4.nama} selama satu hari dan jumlah energi yang digunakan\n`)
human4.makanMinum();
human4.sekolahAtauKerja(9);
human4.tidur(1);
human4.olahraga(4);
console.log('==========================================================================\n')
