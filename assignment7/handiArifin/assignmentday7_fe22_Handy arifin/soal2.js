const siswa = {
  nama: "Meuthia",
  umur: 25,
  email: "meuthia@gmail.com",
};

siswa.umur = 23;

// Tambahkan properti jurusan dan jadwalKuliah
siswa.jurusan = "Sistem Informasi";
siswa.jadwalKuliah = {
  hari: ["Senin", "Selasa", "Rabu"],
  mataKuliah: {
    Senin: ["Kalkulus", "AI", "Product Management"],
    Selasa: ["Network Engineering", "Algoritma Pemrograman"],
    Rabu: ["Kalkulus", "Product Design", "IOT"],
  },
};

console.log("Data Siswa:", siswa);
