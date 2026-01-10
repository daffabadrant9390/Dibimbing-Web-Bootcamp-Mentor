let nilaiGabriel = [85, 95, 20, 67, 75, 78, 75];

function nilaiRataRataDanGrade(nilaiGabriel) {
  if (typeof nilaiGabriel !== "object") {
    console.log("Nilai harus berupa array");
  }

  let total = 0;
  let average = 0;
  let grade = "";

  for (let i = 0; i < nilaiGabriel.length; i++) {
    const element = nilaiGabriel[i];
    total += element;
  }

  average = total / nilaiGabriel.length;

  if (average >= 90 && average <= 100) {
    grade = "A";
  } else if (average >= 80 && average <= 89.99) {
    grade = "B";
  } else if (average >= 75 && average <= 79.99) {
    grade = "C";
  } else if (average >= 60 && average <= 74.99) {
    grade = "D";
  } else {
    grade = "E";
  }

  console.log(`Nilai rata-rata Siswa adalah ${average} dengan grade ${grade}`);
}

nilaiRataRataDanGrade(nilaiGabriel);
