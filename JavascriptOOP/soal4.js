/**
 * 4. Buatlah sebuah class Person yang menerima 3 parameter property
 * - nama
 * - gender
 * - usia (PRIVATE PROPERTY)
 *
 * Pada constructor function, buat sebuah property "energy" dengan mengacu pada usia dan gender
 * - Jika usia <= 15 :
 *  - gender laki-laki -> 15
 *  - gender perempuan -> 10
 * - Jika usia >= 40 :
 *  - gender laki-laki -> 20
 *  - gender perempuan -> 15
 * - Jika usia 16-39 :
 *  - gender laki-laki -> 30
 *  - gender perempuan - 25
 *
 * Buatlah method
 * - makan -> menambah energy + 5
 * - minum -> menambah energy + 2
 * - tidur -> menambah energy + 10
 * - berjalan -> mengurangi energy - 8
 * - berlari -> mengurangi energy - 10
 *
 * Buat sebuah method private yang berfungsi untuk check ketika energy === 0 atau < 0, maka
 * return 'Istirahat dulu'
 *
 * B. Buatlah 2 child class yaitu Student dan Pekerja
 * class student
 *  - OVERRIDE method makan -> menambah energy + 8
 *  - OVERRIDE method minum -> menambah energy + 5
 *  - OVERRIDE method tidur -> menambah energy + 15
 *  - method belajar -> mengurangi energy - 10
 *  - method bermain -> mengurangi energy - 15
 *
 * class pekerja
 *  - OVERRIDE method berlari -> mengurangi energy - 8
 *  - OVERRIDE method berjalan -> mengurangi energy - 4
 *  - method bekerja -> mengurangi energy - 14
 *  - method meeting -> mengurangi energy - 12
 *
 * C. Buatlah sebuah function setter dan getter untuk mengubah property "usia"
 */
