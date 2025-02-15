/**
 * 3. Buat sebuah class yang bernama PersonWallet yang menerima 3 parameter
 * - nama
 * - pin (PRIVATE PROPERTY)
 * - balance (PRIVATE PROPERTY)
 * - cash (PRIVATE PROPERTY)
 *
 * Buatlah methods
 * - loginUser(valuePin) -> PRIVATE METHOD untuk login user menggunakan pin yang benar
 *   jika user bisa login dengan benar, baru bisa melakukan transaksi
 * - checkBalanceCukup -> PRIVATE METHOD untuk check jumlah balance jika ingin widthraw
 * - checkCashCukup -> PRIVATE METHOD untuk check jumlah cash jika ingin deposit
 *
 * - deposit(valuePin, jumlahUang) ->
 *   method untuk menambahkan "balance" sesuai jumlahUang DAN mengurangi "cash"
 * - widthraw(valuePin, jumlahUang) ->
 *   method untuk mengurangi "balance" sesuai jumlahUang DAN menambah "cash"
 */
