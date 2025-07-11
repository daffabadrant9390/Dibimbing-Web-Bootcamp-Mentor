/**
 * * Buat function untuk mencari object siswa dari parameter nama / id yang dimasukkan
 * ? 1. Terdapat array of objects berisi object-object data mahasiswa
 *    - Property nama
 *    - Property usia
 *    - Property array nilai siswa
 *    - Property email
 *    - Property gender
 *
 * ? 2. Buat function yang dapat menerima parameter
 *    - Parameter array siswa
 *    - Parameter nama siswa yang akan dicari
 *    - Parameter flag untuk menentukan array nilai siswa dihitung rata-rata atau tidak
 *      - Jika flag true, hitung rata-rata dengan HOF reduce. Lalu remove property array nilai dan
 *        tambahkan property baru "rataRataNilai" pada object siswa
 *
 * ? 3. Jika data ditemukan, kembalikan / return object siswa. Jika tidak ditemukan, kembalikan nilai
 * ?    null atau {} object kosong.
 *
 * * NOTE:
 *  - Gunakan 2 method (tanpa HOF (find) dan dengan HOF (find))
 *  - Set default value empty array pada array siswa, string kosong pada nama, dan false pada flag
 *    agar function tidak break jika data yang coba di provide pada argument tidak mencukupi.
 */
