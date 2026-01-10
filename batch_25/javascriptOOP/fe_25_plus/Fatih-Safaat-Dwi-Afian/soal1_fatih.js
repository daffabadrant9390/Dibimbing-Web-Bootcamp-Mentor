class Hewan{
    constructor({
        nama,
        breed,
        usia,
        gender,
        jumlahKaki
})  {
        this.nama = nama;
        this.breed = breed;
        this.usia = usia;
        this.gender = gender;
        this.jumlahKaki = jumlahKaki;
    }

    makeSound(){
        return 0;
    }
}

class Kucing extends Hewan{
    constructor({
        breed,
        usia,
        gender
    }){
        super({breed, usia, gender}),
        this.nama = `Kucing`,
        this.jumlahKaki = 4;
    }

    makeSound(){
        return `${this.nama} adalah hewan berkaki ${this.jumlahKaki} dia memliki bunyi suara "meow"!`;
    }
}
class Sapi extends Hewan{
    constructor({
        breed,
        usia,
        gender
    }){
        super({breed, usia, gender}),
        this.nama = `Sapi`,
        this.jumlahKaki = 4;
    }

    makeSound(){
        return `${this.nama} adalah hewan berkaki ${this.jumlahKaki} dia memliki bunyi suara "MoOOOoOOOoo"!`;
    }
}
class Anjing extends Hewan{
    constructor({
        breed,
        usia,
        gender
    }){
        super({breed, usia, gender}),
        this.nama = `Anjing`,
        this.jumlahKaki = 4;
    }

    makeSound(){
        return `${this.nama} adalah hewan berkaki ${this.jumlahKaki} dia memliki bunyi suara "Guk Guk"!`;
    }
}

const kucingOren = new Kucing({breed:`Domestik`,usia:2,gender:`Jantan`});
console.log(kucingOren);
console.log(kucingOren.makeSound());

const SapiBiru = new Sapi({breed:`Dalam Negeri`,usia:3,gender:`Betina`});
console.log(SapiBiru);
console.log(SapiBiru.makeSound());

const AnjingHitam = new Anjing({breed:`Dalam Negeri`,usia:1,gender:`Jantan`});
console.log(AnjingHitam);
console.log(AnjingHitam.makeSound());