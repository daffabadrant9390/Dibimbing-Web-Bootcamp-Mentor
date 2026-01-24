// PR hands on:

/**
 *! Shopping Cart management system in a clothing store
 ** - Buatlah sebuah function bernama "addToCart" yang menerima parameter berupa object product dan quantity
 * 
 * - Object product memiliki property berikut:
 *  - name
 *  - price
 *  - stocks
 *  - category
 * 
 * Discount rules (by kategori): -> ** DAPAT MENGGUNAKAN SWITCH CASE / IF ELSE
 *  - Kemeja, discount 20%
 *  - Kaos, discount 15%
 *  - Jeans, discount 12.75%
 *  - Sepatu, discount 12.5%
 *  - Jaket, discount 3.5%
 * 
 * - Scopes function
 *  - Check apakah stock product cukup untuk quantity yang dibeli
 *  - Jika stock cukup, maka check category product untuk mendapatkan discount
 *  - Jika discount ada, maka hitung total harga setelah discount
 *  - Jika discount tidak ada, maka hitung total harga tanpa discount
 *  - Return object berupa:
 *   - name
 *   - price
 *   - quantity
 *   - totalPrice
 *   - discount
 *   - totalPriceAfterDiscount
 *  - Tambahkan product ke dalam array currentProducts
 *  */

const currentProducts = [];

const product1 = {
    kodeProduct: 'KEM-001', // unique
    name: 'Kemeja Polos',
    price: 100000,
    stocks: 10,
    category: 'Kemeja',
};

const product2 = {
    kodeProduct: 'KAOS-001',
    name: 'Kaos Polos',
    price: 200000,
    stocks: 20,
    category: 'Kaos',
};