// Soal 2: Function Return Array Bilangan Genap dan Ganji
// • Buat function yang menerima parameter restParameter.
// • Function tersebut harus dapat melakukan return object 
//     ◦ arrayBilanganGenap
//     ◦ arrayBilanganGanjil
//     ◦ Gunakan method push / map / filter untuk membuat array baru.
// • Jumlah elemen array input minimal 10.

    function pisahkanBilangan(...bilangan) {
        if (bilangan.length < 10) {
            console.log("Jumlah input minimal 10")
            return {
                arrayBilanganGanjil: [],
                arrayBilanganGenap: []
            }
        }
        const ganjil = bilangan.filter(bil => bil % 2 !== 0)
        const genap = bilangan.filter(bil => bil % 2 === 0)

        return {
            arrayBilanganGanjil: ganjil,
            arrayBilanganGenap: genap
        }
    }

    const hasilPisah = pisahkanBilangan(5, 3, 27, 12, 7, 15, 9, 20, 4, 6)
    console.log("Output:", hasilPisah)