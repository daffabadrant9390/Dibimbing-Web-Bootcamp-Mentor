const data = [85, 95.20, 67.75, 78.75]

const grade = (data) => {
    let count = 0;
    let grade = [];
    let jumlahNilai = 0;

    for (let i = 0; i < data.length; i++) {
        if (data[i] > 89.99) {
            grade[i] = "A";
        } else if (data[i] > 79.99) {
            grade[i] = "B";
        } else if (data[i] > 74.99) {
            grade[i] = "C";
        } else if (data[i] > 60) {
            grade[i] = "D";
        } else {
            grade[i] = "E";
        }

        jumlahNilai += data[i];
        count++

    }

    const rataRata = jumlahNilai / count;

    return { "data": { grade: grade, nilai: data }, "Rata-Rata": rataRata};
};

console.log(grade(data))