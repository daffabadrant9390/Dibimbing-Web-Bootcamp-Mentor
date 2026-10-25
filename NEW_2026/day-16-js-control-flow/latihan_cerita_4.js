// Day 16 · Latihan 4 · ANSWER KEY
for (let day = 1; day <= 7; day += 1) {
  let message;
  switch (day) {
    case 1:
      message = 'Senin: diskon sayur 10%';
      break;
    case 3:
      message = 'Rabu: beli 2 buah gratis 1';
      break;
    case 5:
      message = 'Jumat: gratis ongkir';
      break;
    case 6:
    case 7:
      message = 'Weekend: poin dobel';
      break;
    default:
      message = 'Harga normal';
  }
  console.log('Hari ' + day + ' -> ' + message);
}

// Hari 1 -> Senin: diskon sayur 10%
// Hari 2 -> Harga normal
// Hari 3 -> Rabu: beli 2 buah gratis 1
// Hari 4 -> Harga normal
// Hari 5 -> Jumat: gratis ongkir
// Hari 6 -> Weekend: poin dobel
// Hari 7 -> Weekend: poin dobel
// 2 days say 'Harga normal' (day 2 and day 4).
// Forget the break after case 1? Day 1 falls into case 3 and stops at its break,
// so day 1 would print the Wednesday promo: 'Rabu: beli 2 buah gratis 1'.
