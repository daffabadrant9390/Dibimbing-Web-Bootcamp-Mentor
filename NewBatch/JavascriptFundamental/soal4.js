/**
 * DISCOUNT BELANJA
 * Sebuah toko baju akan memberikan discount sebesar 35% dari total pembelian jika:
 * - Pembeli membeli 3 item dengan total belanja lebih dari 750.000 DAN
 * - salah satu dari item tersebut merupakan kategori kemeja ATAU Jaket ATAU jika keduanya ada juga tidak masalah.
 *
 * Hitunglah total belanja sebelum dan setelah discount. Tentukan apakah pembeli mendapat discount atau tidak
 * berdasarkan yang dibelanjakan.
 *
 * item 1 -> kaos Pull & Bear dengan harga Rp. 250.000
 * item 2 -> jeans Carrot dengan harga Rp. 450.000
 * item 3 -> jaket Bomber Black Edition dengan harga Rp. 1.000.000
 */
//* ITEM 1
const namaItem1 = 'Kaos Pull & Bear';
const kategoriItem1 = 'Kaos';
const hargaItem1 = 250000;

//* ITEM 2
const namaItem2 = 'Jeans Carrot';
const kategoriItem2 = 'Jeans';
const hargaItem2 = 450000;

//* ITEM 3
const namaItem3 = 'Jaket Bomber Black Edition';
const kategoriItem3 = 'Jaket';
const hargaItem3 = 1000000;

//? Menentukan apakah mendapat discount atau tidak
const isTotalBelanjaDiAtasStandard =
  hargaItem1 + hargaItem2 + hargaItem3 > 750000;
const isBarangTermasukKategoriDiscount =
  kategoriItem1 === 'Kemeja' ||
  kategoriItem1 === 'Jaket' ||
  kategoriItem2 === 'Kemeja' ||
  kategoriItem2 === 'Jaket' ||
  kategoriItem3 === 'Kemeja' ||
  kategoriItem3 === 'Jaket';
const isDapatDiscount =
  isTotalBelanjaDiAtasStandard && isBarangTermasukKategoriDiscount;
console.log('Apakah mendapat discount : ', isDapatDiscount);
