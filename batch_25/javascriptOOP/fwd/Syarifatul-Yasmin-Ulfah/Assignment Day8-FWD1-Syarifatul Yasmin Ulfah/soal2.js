/* 2.	Buatlah sebuah class yang merepresentasikan Perubahan energi seseorang berdasarkan dari aktivitas yang mereka lakukan. 
a.	Masing-masing aktivitas dapat menambah / mengurangi jumlah energi seseorang.
b.	Penambahan dan pengurangan jumlah energi akan bergantung pada usia orang tersebut.
c.	Masing-masing orang memiliki property berikut
i.	nama -> public property
ii.	usia -> private property
iii.	gender -> private property
iv.	totalEnergi -> private property
d.	Terdapat 4 jenis aktivitas dengan rules sebagai berikut
i.	makan & minum
1.	usia <= 10 (menambah energi 6)
2.	usia <= 25 (menambah energi  4)
3.	usia > 25 (menambah energi 2)
ii.	tidur (istirahat) 
1.	Terdapat parameter n jam -> tidur(3) untuk 3 jam tidur
2.	usia <= 10 (menambah energi n + 3)
3.	usia <= 25 (menambah energi n + 2)
4.	usia > 25 (menambah energi n + 1)
iii.	sekolahAtauKerja
1.	Terdapat parameter n jam -> sekolahAtauKerja(3) untuk 3 jam sekolah atau kerja
2.	usia <= 10 (mengurangi energi n + 3)
3.	usia <= 25 (mengurangi energi n + 5)
4.	usia > 25 (mengurangi energi n + 7)
iv.	berolahraga
1.	Terdapat parameter n jam -> olahraga(4) untuk 4 jam olahraga
2.	usia <= 10 (mengurangi energi n + 2)
3.	usia <= 25 (mengurangi energi n + 3)
4.	usia > 25 (mengurangi energi n + 5)
e.	Untuk mendapatkan informasi pada private properties, buatlah setter dan getter untuk masing-masing property.
i.	usia -> hanya getter
ii.	gender -> hanya getter
iii.	totalEnergi -> setter dan getter
f.	Untuk aktivitas yang memerlukan energi, lakukan validasi terlebih dahulu apakah totalEnergi yang dimiliki sekarang cukup untuk melakukan aktivitas-aktivitas tersebut. Jika tidak cukup, maka jangan biarkan user melakukan aktivitas dan minta untuk istirahat
*/

class Energi {
    #usia;
    #gender;
    #totalEnergi;   

    constructor ({ nama, usia, gender, totalEnergiAwal = 100}) {
    this.nama = nama;
    this.#usia = usia;
    this.#gender = gender;
    this.#totalEnergi = totalEnergiAwal;
    }

    get getUsia() {
        return this.#usia;
    }
    get getGender() {
        return this.#gender;
    }
    get getTotalEnergiAwal() {
        return this.#totalEnergi;
    }
    set setTotalEnergiAwal(newTotalEnergi) {
        if (typeof newTotalEnergi !== 'number' || newTotalEnergi < 0) {
            console.log('Energi tidak mencukupi, silahkan istirahat');
            return;
        } else {
            this.#totalEnergi = newTotalEnergi;
        }    
    }

    #getBesaranEnergi(totalEnergi1, totalEnergi2, totalEnergi3) {
        if (this.#usia <= 10) {
            return totalEnergi1;
        } else if (this.#usia <= 25) {
            return totalEnergi2;
        } else {
            return totalEnergi3;
        }
    }

    makanDanMinum() {
        const besaranEnergi = this.#getBesaranEnergi(6, 4, 2);
        this.#totalEnergi += besaranEnergi;
        console.log(`Total energi setelah makan dan minum: ${energiOrang1.getTotalEnergiAwal}`);
    }

    tidur(nJam) {
        if (nJam <= 0) {
            console.log('Durasi tidur tidak valid');
        }
        const besaranEnergi = this.#getBesaranEnergi(3, 2, 1);
        this.#totalEnergi += besaranEnergi * nJam
        console.log(`Total energi setelah tidur: ${energiOrang1.getTotalEnergiAwal}`);
    }

    sekolahAtauKerja(nJam) {
        if (nJam <= 0) {
            console.log('Durasi sekolah atau kerja tidak valid');
        }
        const besaranEnergi = this.#getBesaranEnergi(3, 5, 7);
        const energiDibutuhkan = nJam + besaranEnergi;
        if (this.#totalEnergi < energiDibutuhkan) {
            console.log('Energi tidak mencukupi, silahkan istirahat');
            return;
        }
        this.#totalEnergi -= energiDibutuhkan;
        console.log(`Total energi setelah sekolah atau kerja: ${energiOrang1.getTotalEnergiAwal}`);
    }

    berolahraga(nJam) {
        if (nJam <= 0) {
            console.log('Durasi olahraga tidak valid');
        }
        const besaranEnergi = this.#getBesaranEnergi(2, 3, 5);
        const energiDibutuhkan = nJam + besaranEnergi;
        if (this.#totalEnergi < energiDibutuhkan) {
            console.log('Energi tidak mencukupi, silahkan istirahat');
            return;
        }
        this.#totalEnergi -= energiDibutuhkan;
        console.log(`Total energi setelah olahraga: ${energiOrang1.getTotalEnergiAwal}`);
    }
}

const energiOrang1 = new Energi ({
    nama: 'Yasmin',
    usia: 27,
    gender: 'Perempuan',
    totalEnergiAwal: 10
});
console.log(`Nama: ${energiOrang1.nama} \nUsia: ${energiOrang1.getUsia} tahun \nGender: ${energiOrang1.getGender} \nEnergi yang dimiliki: ${energiOrang1.getTotalEnergiAwal}`);
energiOrang1.makanDanMinum();
energiOrang1.tidur(4);
energiOrang1.sekolahAtauKerja(3);
energiOrang1.berolahraga(4);



