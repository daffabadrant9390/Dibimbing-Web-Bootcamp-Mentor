//* Penggunaan Rest Parameter pada function
/**
 * 1. Membuat sebuah function untuk menghitung rata-rata nilai. Menggunakan method array reduce
 * 2. Membuat sebuah function untuk memfilter array rest parameter dimana hanya value < 50 yang akan stay
  

  Method pada array
    - forEach -> melooping tapi tidak mengembalikan array baru forEach(function(arrayElement){...})
    - map -> melooping tapi mengembalikan array baru map(function(arrayElement){...})
    - filter -> melooping dan memfilter array berdasarkan kondisi (mengembalikan array) -> filter((arrayElement){...})
    - reduce -> melooping dan mengupdate nilai (number, array, object)
    - find -> melooping array (kondisi memenuhi akan mengembalikan nilai yang dicari)
    - findIndex -> melooping array (kondisi memenui akan mengembalikan index dari nilai yang dicari)
    - includes -> akan mencari apakah didalam array ada nilai yang kita inginkan
*/

const menghitungRataRataNilai = (...restParameter) => {
  //* 1 Cara lama
  // let totalNilai = 0;
  // restParameter.forEach((restParameterElement => {
  //   totalNilai += restParameterElement;
  // }))

  //* 2 Cara baru
  const totalNilai = restParameter.reduce(function (
    nilaiSaatIni,
    restParameterElement
  ) {
    return (nilaiSaatIni += restParameterElement);
  },
  0);

  const rataRataNilai = totalNilai / restParameter.length;
  return rataRataNilai;
};

const rataRataNilai1 = menghitungRataRataNilai(70, 80, 100, 90, 90);
console.log(`\nRata Rata Nilai 1 : ${rataRataNilai1}`);
