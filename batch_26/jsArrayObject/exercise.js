const arrayNilaiNilai = [90, 85, 95, 80, 90, 100, 8, 7, 90, 20];
const panjangArray = arrayNilaiNilai.length;


// Looping untuk menentukan bilangan genap dan ganjil
for(let i = 0; i < panjangArray; i++) {
    // Menentukan bilangan genap dan ganjil
    const isBilanganGenap = arrayNilaiNilai[i] % 2 === 0;

    if(isBilanganGenap) {
        console.log("Bilangan genap: ", arrayNilaiNilai[i]);
    } else {
        console.log("Bilangan ganjil: ", arrayNilaiNilai[i]);
    }
}

const arrayNilaiNested = [ [90, 80, 75], [85, 90, 88] ];

// Looping untuk menghitung rata-rata nilai di semester 2
for(let i = 0; i < arrayNilaiNested.length; i++) {
    let totalNilai = 0;

    // Looping untuk menjumlahkan nilai di semester 2
    if(i === 1) {
        for(let j = 0; j < arrayNilaiNested[i].length; j++) {
            totalNilai += arrayNilaiNested[i][j];
        }

        console.log("Total nilai di semester 2: ", totalNilai);
        console.log("Rata-rata nilai di semester 2: ", totalNilai / arrayNilaiNested[i].length);
    }

}

const arrayNilaiSemester2 = arrayNilaiNested[1];
console.log("Array nilai semester 2: ", arrayNilaiSemester2);

// mengakses nilai 88 di semester 2
const nilai88 = arrayNilaiNested[1][2];
console.log("Nilai 88 di semester 2: ", nilai88);



const namaSiswa = ["Budi", "Yanto"];
console.log("Nama siswa: ", namaSiswa);

console.log("\n================================================\n");

// Splice untuk menambahkan element aja
namaSiswa.splice(1, 1, "Siti", "Andi", "Dewi");
console.log("Nama siswa: ", namaSiswa);


const arrayNilaiRandom = [8, 1, 7, 9, 10, 100];
// sort array
console.log("Array nilai random: ", arrayNilaiRandom);
const sortedArrayNilaiRandom = arrayNilaiRandom.sort(function(a, b) {
    //! Block code function untuk menentukan urutan sorting
    return a - b; // ascending
    // return b - a; // descending
});
console.log("Array nilai random setelah diurutkan: ", sortedArrayNilaiRandom);

const objectSiswa = {
    nama: "Budi",
    usia: 20,
    jurusan: "Sistem Informasi",
    // arrayNilai: [80, 90, 75],
};

const keysObjectSiswa = Object.keys(objectSiswa);
for(let i = 0; i < keysObjectSiswa.length; i++) {
    console.log("Key: ", keysObjectSiswa[i], "Value: ", objectSiswa[keysObjectSiswa[i]]);
}

// CARA AKSES 1
console.log("Nama siswa: ", objectSiswa.nama);
// CARA AKSES 2
console.log("Usia siswa: ", objectSiswa["usia"], "Tahun");

const arrayNilaiSiswa = objectSiswa.arrayNilai;
console.log("nilai 80 siswa: ", arrayNilaiSiswa[0]);
console.log("nilai 90 siswa: ", objectSiswa.arrayNilai[1]);