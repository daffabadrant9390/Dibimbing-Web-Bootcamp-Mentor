/**
 * Membuat object baru, dengan perubahan & penambahan property
 */

let siswa = {
  nama : "Arkan",
  umur : 22
}

// tulis kode di sini
const newSiswa = {...siswa, umur : 23, pekerjaan: 'Programmer'}
//newSiswa.umur = 23
//newSiswa.pekerjaan = 'Programmer'
// const pekerjaan = newSiswa.pekerjaan

// soal A : buat variabel newSiswa, ubah umur jadi 23 dan tambahkan pekerjaan programmer

console.log('==========Soal A==========-')

console.log(newSiswa); // output: { nama: 'Arkan', umur: 23, pekerjaan: 'programmer' }
console.log(siswa); // output: { nama: 'Arkan', umur: 22 } (note : tetap)


// soal B : extrak ke pekerjaan & sisanya (dari variable newSiswa)
const {pekerjaan, ...sisanya} = newSiswa


//Soal C mengekstrak berdasarkan variabel
const properyYangDiEkstrak = "umur"
let { [properyYangDiEkstrak]: extracted, ...rest} = newSiswa

console.log('==========Soal B==========-')
console.log(pekerjaan); // programmer
console.log(sisanya); // { nama: 'Arkan', umur: 23 }


console.log("===============Soal C ====================")
console.log('ini hasil yang di ekstrak: ', extracted)
console.log('Sisanya: ', rest)
