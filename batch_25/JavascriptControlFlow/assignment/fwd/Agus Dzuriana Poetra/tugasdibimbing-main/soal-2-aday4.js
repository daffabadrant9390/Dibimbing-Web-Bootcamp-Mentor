let nilai = [85, 95.20, 67.75, 78, 75]
let total = 0
let grade = ""

for (let i = 0; i < nilai.length; i++) 
        {total = total + nilai[i] }

const rata2 = total / nilai.length

if (rata2 >= 90 && rata2 <= 100)
    grade = "A"
else if (rata2 >= 80 && rata2 < 90)
    grade = "B"
else if (rata2 >= 75 && rata2 < 80)
    grade = "C"
else if (rata2 >= 60 && rata2 < 75)
    grade = "D"
else 
    grade = "E"


console.log(`nilai rata-rata Gabriel adalah: ${rata2} dengan grade ${grade}`)

