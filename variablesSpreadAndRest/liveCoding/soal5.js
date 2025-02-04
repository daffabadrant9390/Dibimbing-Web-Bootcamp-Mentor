/**
 * 5. Buatlah sebuah function yang menerima 2 parameter
 * - Parameter 1 yaitu object dengan property (nama, pekerjaan, gaji, email, usia)
 * - Parameter kedua yaitu nilai (rest parameter);
 *
 * TUGAS
 * - Kembalikan sebuah object dengan struktur baru, yaitu
 *  - nama
 *  - pekerjaan
 *  - gaji
 *
 * - Hitung rata-rata dari nilai dari rest parameter
 *  - Jika rest parameter length < 3,
 *    - Jika rata-rata >= 80, maka pekerjaan dan gaji dapat dari nilai asli
 *    - Jika rata-rata < 80, maka pekerjaan dan gaji diisi null (dipecat)
 *  - Jika rest parameter length > 3
 *    - Jika rata-rata >= 90, maka pekerjaan "Senior Software Engineer" dan gaji (gaji sekarang + 15000000)
 *    - Jika rata-rata < 90 && >= 80, maka pekerjaan dari nilai asli dan gaji (gaji sekarang + 5000000)
 *    - Jika rata-rata < 80, maka pekerjaan dan nilai asli dapat dari gaji
 *    - Jika rata-rata < 60, maka pekerjaan dan gaji diisi null (dipecat)
 */
