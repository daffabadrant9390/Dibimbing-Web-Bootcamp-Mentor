// Kelas induk Hewan
class Hewan {
    private String nama;
    private String breed;
    private int usia;
    private String gender;
    private int jumlahKaki;

    public Hewan(String nama, String breed, int usia, String gender, int jumlahKaki) {
        this.nama = nama;
        this.breed = breed;
        this.usia = usia;
        this.gender = gender;
        this.jumlahKaki = jumlahKaki;
    }

    public String getNama() {
        return nama;
    }

    public String getBreed() {
        return breed;
    }

    public int getUsia() {
        return usia;
    }

    public String getGender() {
        return gender;
    }

    public int getJumlahKaki() {
        return jumlahKaki;
    }

    public String makeSound() {
        return "Hewan ini mengeluarkan suara...";
    }
}

// Kelas turunan Kucing
class Kucing extends Hewan {
    public Kucing(String breed, int usia, String gender) {
        super("Kucing", breed, usia, gender, 4);
    }

    @Override
    public String makeSound() {
        return "Meong!";
    }
}

// Kelas turunan Sapi
class Sapi extends Hewan {
    public Sapi(String breed, int usia, String gender) {
        super("Sapi", breed, usia, gender, 4);
    }

    @Override
    public String makeSound() {
        return "Moooo!";
    }
}

// Kelas turunan Anjing
class Anjing extends Hewan {
    public Anjing(String breed, int usia, String gender) {
        super("Anjing", breed, usia, gender, 4);
    }

    @Override
    public String makeSound() {
        return "Guk guk!";
    }
}

public class Main {
    public static void main(String[] args) {
        Kucing kucing = new Kucing("Anggora", 2, "Betina");
        Sapi sapi = new Sapi("Simental", 4, "Jantan");
        Anjing anjing = new Anjing("Bulldog", 3, "Jantan");

        Hewan[] daftarHewan = { kucing, sapi, anjing };

        System.out.println("=== Data Hewan dan Suaranya ===");

        for (Hewan hewan : daftarHewan) {
            System.out.println("\nNama Hewan   : " + hewan.getNama());
            System.out.println("Ras / Breed  : " + hewan.getBreed());
            System.out.println("Usia         : " + hewan.getUsia() + " tahun");
            System.out.println("Jenis Kelamin: " + hewan.getGender());
            System.out.println("Jumlah Kaki  : " + hewan.getJumlahKaki());
            System.out.println("Suara        : " + hewan.makeSound());
        }
    }
}
