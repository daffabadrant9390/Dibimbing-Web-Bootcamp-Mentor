// Soal 1: Analisis Bilangan 1 - 20
// Lakukan looping dari angka 1 hingga 20.
// Untuk setiap angka, berikan kondisi dan cetak output jika angka tersebut:
//  Blok IF, ELSE, ELSE IF  pertama:
// 	•	Bilangan ganjil: tampilkan “{bilangan} merupakan bilangan Ganjil”.
// 	•	Bilangan genap: tampilkan “{bilangan} merupakan bilangan Genap”.
// 	Blok IF, ELSE, ELSE IF kedua:
// 	•	Habis dibagi 4: tampilkan “{bilangan} habis dibagi dengan 4”.
// 	•	Habis dibagi 6: tampilkan “{bilangan} habis dibagi dengan 6”.
// 	•	Habis dibagi 4 dan 6: tampilkan “{bilangan} habis dibagi dengan angka 4 dan 6”.
// 	•	Habis dibagi 3 atau 5: tampilkan “{bilangan} habis dibagi dengan angka 3 atau 5”.
// 	•	Jika bilangan tidak habis dibagi 4, 6, 3, dan 5 maka tampilkan bilangan nya saja

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(`${i} merupakan bilangan genap.`);
    } else {
        console.log(`${i} merupakan bilangan ganjil.`);
    }
}
 
console.log('====================================')

for (let i = 1; i <= 20; i++) {
    if (i % 4 === 0 && i % 6 === 0) {
        console.log(`${i} habis dibagi dengan angka 4 dan 6.`);
    } else if (i % 4 === 0) {
        console.log(`${i} habis dibagi dengan angka 4.`);
    } else if (i % 6 === 0) {
        console.log(`${i} habis dibagi dengan angka 6.`);
    } else if (i % 3 === 0 || i % 5 === 0) {
        console.log (`${i} habis dibagi dengan angka 3 atau 5.`)
    } else {
        console.log(i);
    }
}




// Soal 2: Menghitung Nilai Rata-rata dan Grade
// 	Diketahui nilai siswa (Gabriel) untuk 5 semester: 85, 95.20, 67.75, 78, 75.
// 	Hitung rata-rata nilai.
// 	Tentukan grade akhir berdasarkan kriteria berikut:
// 	•	A: 90–100
// 	•	B: 80–89.99
// 	•	C: 75–79.99
// 	•	D: 60–74.99
// 	•	E: < 60
// 	Cetak nilai rata-rata dan grade akhir siswa.
// 	Note: Gunakan array untuk menyimpan seluruh nilai dari 5 semester kedalam 1 variabel

let namaSiswa = 'Gabriel';
let nilaiSiswa = [85, 95.20, 67.75, 78, 75];
let nilaiRataRata = 0;

for (let i = 0; i < nilaiSiswa.length; i++) {
    nilaiRataRata += nilaiSiswa[i];
}

nilaiRataRata /= nilaiSiswa.length;

if (nilaiRataRata >= 90 && nilaiRataRata <= 100) {
    console.log(`${namaSiswa} mendapatkan grade A dengan nilai rata-rata ${nilaiRataRata}`);
} else if (nilaiRataRata >= 80) {
    console.log(`${namaSiswa} mendapatkan grade B dengan nilai rata-rata ${nilaiRataRata}`);
} else if (nilaiRataRata >= 75) {
    console.log(`${namaSiswa} mendapatkan grade C dengan nilai rata-rata ${nilaiRataRata}`);
} else if (nilaiRataRata >= 60) {
    console.log(`${namaSiswa} mendapatkan grade D dengan nilai rata-rata ${nilaiRataRata}`);
} else {
    console.log(`${namaSiswa} mendapatkan grade E dengan nilai rata-rata ${nilaiRataRata}`);
}






// Soal 3: Perpangkatan Menggunakan Nested Loop
// 	•	Buat dua looping: outer loop untuk angka 1–5, dan inner loop untuk pangkat 1–3.
// 	•	Tampilkan hasil perpangkatan dengan format “{nilai} pangkat {pangkat} = {hasil}”.
// 	•	Pisahkan setiap set hasil angka dengan console.log("===================").

let hasilPangkat = 1;

for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 3; j++) {
    hasilPangkat = i ** j;

    console.log(`${i} pangkat ${j} = ${hasilPangkat}`);
    }
    console.log('====================');
}