/**
 * 5. Terdapat class Person yang memiliki property
 * - nama
 * - usia
 * - gender
 * Terdapat satu method yaitu introduceSelf untuk memperkenalkan diri
 *
 * Buatlah child class dari Person berupa
 *  1. Pekerja class
 *    - property
 *      - pekerjaan
 *      - nama kantor
 *      - penghasilan array penghasilan (jika ada lebih dari 1 kantor) -> (private property)
 *      - lama waktu bekerja (private property)
 *    - method
 *      - pergiKerja -> return string bekerja
 *      - getRataRataPenghasilan -> return rata-rata dari array penghasilan
 *      - getTotalPenghasilan -> PRIVATE METHOD (mengambil total dari penghasilan)
 *      - setter dan getter -> mengambil private property (lama waktu bekerja dan penghasilan array)
 * 2. Student class
 *  - property
 *    - jurusan
 *    - semester
 *    - IPK (private property)
 *    - array nilai (private property)
 *  - method
 *    - pergiKuliah -> return string kuliah
 *    - setter dan getter -> mengambil private property
 *    - menghitungTotalNilai -> (private method)
 *    - menghitungRataRataNilai -> (private method)
 *    - getGradeMahasiswa -> menggunakan method menghitungTotalNilai dan menghitungRataRataNilai
 *    - getIsBisaLulus -> function jika semester > 7, rata-rata nilai >= 3.00
 */
