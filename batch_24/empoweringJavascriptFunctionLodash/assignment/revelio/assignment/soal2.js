// menggunakan spread operator untuk mengcopy semua property dari objek siswa

let angka = [1,2,3,4,5,6,7,8,9];
const pisahkanBilanganGenapGanjil = function(...angka) {
    const arrayBilanganGenap = angka.filter(num => num % 2 === 0);
    const arrayBilanganGanjil = angka.filter(num => num % 2 !== 0);
    
    // for (let i = 0; i < angka.length; i++) {
    //     if (typeof angka[i] !== 'number') {
    //         throw new Error("Semua input harus berupa angka");
    //     }
    // }
    // jika array kosong, kembalikan objek dengan array kosong
    if (angka.length === 0) {
        return {
            arrayBilanganGenap: [],
            arrayBilanganGanjil: []
        };
    }
    
    return {
        arrayBilanganGenap,
        arrayBilanganGanjil
    };
};

console.log('Hasilnya :',pisahkanBilanganGenapGanjil(...angka));