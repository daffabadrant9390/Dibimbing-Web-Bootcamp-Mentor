const objectStudent = {
    nama: 'Agus',
    usia: 27,
    email: 'agus@gmail.com',
    jurusan: 'Hubungan Internasional'
}

const memformatObjectStudent = (objectStudent, ...restParameter) => {
    const filteredRestParameter = restParameter.filter((nilaiItem) => {
        return typeof nilaiItem === 'number'
    })
    console.log("filteredRestParameter: ", filteredRestParameter)

    const rataRataNilai = filteredRestParameter.reduce((totalNilai, nilaiSaatIni) => {
        return totalNilai + nilaiSaatIni
    }, 0) / filteredRestParameter.length

    return {
        ...objectStudent,
        rataRataNilai: rataRataNilai,
        arrayNilai: filteredRestParameter
    }
} 

const hasilFormatObjectStudent1 = 
    memformatObjectStudent(objectStudent, 100,90, "coba acak", false, 90, 88, 72, [1,2,3], true)

console.log("Object awal: ", objectStudent)
console.log("Object setelah Berubah: ", hasilFormatObjectStudent1)