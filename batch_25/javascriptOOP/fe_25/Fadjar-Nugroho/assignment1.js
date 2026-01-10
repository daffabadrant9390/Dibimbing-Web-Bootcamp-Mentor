class Hewan {
    constructor(nama, breed, usia, gender, jumlahKaki) {
        this.nama = nama;
        this.breed = breed; 
        this.usia = usia;
        this.gender = gender;
        this.jumlahKaki = jumlahKaki;        
    }
    makeSound() {
        return "Suara hewan";
    }
}

class Kucing extends Hewan {
    constructor(nama, breed, usia, gender) {
        super("Kucing", breed, usia, gender, 4);
    }
    makeSound() {
        return "Meong";
    }
}

class Sapi extends Hewan {
    constructor(nama, breed, usia, gender) {
        super("Sapi", breed, usia, gender, 4);
    }
    makeSound() {
        return "Moooooo";
    }
}

class Anjing extends Hewan {
    constructor(nama, breed, usia, gender) {
        super("Anjing", breed, usia, gender, 4);
    }
    makeSound() {
        return "Guk";
    }
}

