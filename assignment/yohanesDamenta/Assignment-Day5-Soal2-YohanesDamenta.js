//Menggunakan Array dan Functions
console.log("====================");
console.log("Cara Pertama");
console.log("====================");
function avgGradeAndResults(arr) {
  let temp = 0;
  let tempResult = [];
  for (let i = 0; i < arr.length; i++) {
    temp += arr[i];
  }
  tempResult.push(temp / arr.length);
  if (tempResult[0] >= 90 && tempResult[0] <= 100) {
    tempResult.push("A");
  } else if (tempResult[0] >= 80 && tempResult[0] < 90) {
    tempResult.push("B");
  } else if (tempResult[0] >= 75 && tempResult[0] < 80) {
    tempResult.push("C");
  } else if (tempResult[0] >= 60 && tempResult[0] < 75) {
    tempResult.push("D");
  } else {
    tempResult.push("E");
  }
  return tempResult;
}

let nameOfStudent1 = "Gabriel";
let arrOfGrade = [85, 95.2, 67.75, 78, 75];
let studentResults = avgGradeAndResults(arrOfGrade);
console.log(
  `Student ${nameOfStudent1} memperoleh rata-rata nilai: ${studentResults[0]}\nOleh karena itu memperoleh grade: ${studentResults[1]}`
);

//Menggunakan Variables dan Perhitungan Biasa

console.log("====================");
console.log("Cara Kedua");
console.log("====================");
let nameOfStudent2 = "Gabriel";
let scoreSemester1 = 85;
let scoreSemester2 = 95.2;
let scoreSemester3 = 67.75;
let scoreSemester4 = 78;
let scoreSemester5 = 75;
let averageGrade =
  (scoreSemester1 +
    scoreSemester2 +
    scoreSemester3 +
    scoreSemester4 +
    scoreSemester5) /
  5;

if (averageGrade >= 90 && averageGrade <= 100) {
  console.log(
    `Student ${nameOfStudent2} memperoleh rata-rata nilai: ${averageGrade}\nOleh karena itu memperoleh grade: A`
  );
} else if (averageGrade >= 80 && averageGrade < 90) {
  console.log(
    `Student ${nameOfStudent2} memperoleh rata-rata nilai: ${averageGrade}\nOleh karena itu memperoleh grade: B`
  );
} else if (averageGrade >= 75 && averageGrade < 80) {
  console.log(
    `Student ${nameOfStudent2} memperoleh rata-rata nilai: ${averageGrade}\nOleh karena itu memperoleh grade: C`
  );
} else if (averageGrade >= 60 && averageGrade < 75) {
  console.log(
    `Student ${nameOfStudent2} memperoleh rata-rata nilai: ${averageGrade}\nOleh karena itu memperoleh grade: D`
  );
} else {
  console.log(
    `Student ${nameOfStudent2} memperoleh rata-rata nilai: ${averageGrade}\nOleh karena itu memperoleh grade: E`
  );
}
