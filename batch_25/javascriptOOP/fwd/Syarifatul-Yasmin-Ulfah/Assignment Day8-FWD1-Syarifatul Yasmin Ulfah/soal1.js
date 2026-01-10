/*
1.	Buatlah class Hewan yang memiliki property dan method sebagai berikut
a.	property nama
b.	property breed atau ras dari hewan tersebut
c.	property usia
d.	property gender
e.	property jumlahKaki
f.	method makeSound() -> mengeluarkan suara dari masing-masing hewan
g.	Kemudian buatlah children class berupa Kucing, Sapi, dan Anjing
i.	Masing-masing children class akan meng inherit seluruh property, kecuali jumlahKaki dan nama. Hal ini dikarenakan setiap jenis hewan seharusnya memiliki jumlah kaki yang sama.
ii.	Polymorphism part: Masing masing hewan memiliki suara yang berbeda, maka override method makeSound() sehingga masing masing children class memiliki suara nya sendiri. method tersebut akan mengembalikan String berupa suara hewan.
*/

class Hewan {
    constructor ({nama, ras, usia, gender, jumlahKaki}) {
    this.nama = nama;
    this.ras = ras;
    this.usia = usia;
    this.gender = gender;
    this.jumlahKaki = jumlahKaki;
    }

    makeSound() {
        return 'suara hewan';
    }
}

console.log('Berikut adalah daftar hewan-hewan:');

class Kucing extends Hewan {
    nama = 'Kucing';

    constructor ({ras, usia, gender}) {
        super ({ras, usia, gender})
    }

    makeSound() {
        return 'Suara: "meow meow meow"';
    }
}

const kucing1 = new Kucing ({
    nama: `Kucing`,
    ras: 'Persia',
    usia:  '1 tahun',
    gender: 'Jantan'   
})
console.log(`\n1. ${kucing1.nama}`);
console.log(`Ras: ${kucing1.ras}`);
console.log(`Usia: ${kucing1.usia}`);
console.log(`Gender: ${kucing1.gender}`);
console.log(kucing1.makeSound());


class Sapi extends Hewan {
    nama = 'Sapi';

    constructor ({ras, usia, gender}) {
        super ({ras, usia, gender})
    }

    makeSound() {
        return 'Suara: "moo moo moo"';
    }
}

const sapi1 = new Sapi ({
    nama: `Sapi`,
    ras: 'Bali',
    usia:  '5 tahun',
    gender: 'Betina'   
})
console.log(`\n2. ${sapi1.nama}`);
console.log(`Ras: ${sapi1.ras}`);
console.log(`Usia: ${sapi1.usia}`);
console.log(`Gender: ${sapi1.gender}`);
console.log(sapi1.makeSound());

class Anjing extends Hewan {
    nama = 'Anjing';

    constructor ({ras, usia, gender}) {
        super ({ras, usia, gender})
    }

    makeSound() {
        return 'Suara: "guk guk guk"';
    }
}

const anjing1 = new Anjing ({
    nama: `Anjing`,
    ras: 'Cihuahua',
    usia:  '3 tahun',
    gender: 'Jantan'   
})
console.log(`\n3. ${anjing1.nama}`);
console.log(`Ras: ${anjing1.ras}`);
console.log(`Usia: ${anjing1.usia}`);
console.log(`Gender: ${anjing1.gender}`);
console.log(anjing1.makeSound());

