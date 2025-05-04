// Nilai akhir masing-masing semester  
const semester1 = 85;  
const semester2 = 95.20;  
const semester3 = 67.75;  
const semester4 = 78;  
const semester5 = 75;  

// Menghitung rata-rata  
const average = (semester1 + semester2 + semester3 + semester4 + semester5) / 5;  

// Menentukan grade  
let grade;  
if (average >= 90 && average <= 100) {  
    grade = "A";  
} else if (average >= 80 && average < 90) {  
    grade = "B";  
} else if (average >= 75 && average < 80) {  
    grade = "C";  
} else if (average >= 60 && average < 75) {  
    grade = "D";  
} else {  
    grade = "E";  
}  

// Menampilkan hasil  
console.log(`Rata-rata nilai Gabriel: ${average.toFixed(2)}`);  
console.log(`Grade Gabriel: ${grade}`);