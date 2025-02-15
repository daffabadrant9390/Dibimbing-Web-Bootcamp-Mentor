// class Person {
//   constructor(nama, usia, gender) {
//     this.nama = nama;
//     this.usia = usia;
//     this.gender = gender;
//   }

//   introduceSelf() {
//     return `Hi guys, my name is ${this.nama}. I am ${this.usia} years old`;
//   }
// }

// // Child Class Student dari parent class Person
// class Student extends Person {
//   #nilaiNilai;
//   #jurusan;
//   constructor(nama, usia, nilaiNilai, jurusan) {
//     super(nama, usia); // Meng inherit property nama dan usia
//     this.#nilaiNilai = nilaiNilai;
//     this.#jurusan = jurusan;
//   }

//   belajar() {
//     return `Siap Belajar`;
//   }
// }

// Child class Professor dari parent class Person
// class Professor extends Person {
//   #gaji;
//   constructor(nama, usia, gaji) {
//     super(nama, usia);
//     this.#gaji = gaji;
//   }

//   mengajar() {
//     return `Halo selamat pagi siswa, hari ini kita akan belajar!`;
//   }
// }

// const student1 = new Student('Budi', 19, [90, 75, 88, 100], 'SI');
// const namaStudent1 = student1.nama;
// console.log(`\nNama student1: ${namaStudent1}`);
// console.log(`\nIntroduce: ${student1.introduceSelf()}`);

// console.log('\n========================');

// const professor1 = new Professor('Angel', 40, 12500000);
// const namaProfessor1 = professor1.nama;
// const usiaProfessor1 = professor1.usia;
// console.log(`\nUsia professor ${namaProfessor1}: ${usiaProfessor1}\n`);

// class Student {
//   #nilaiNilai;
//   #jurusan;

//   constructor(nama, jurusan, nilaiNilai) {
//     //* Encapsulation: Melimitasi akses private property
//     this.#jurusan = jurusan;
//     this.nama = nama;
//     this.#nilaiNilai = nilaiNilai;
//   }

//   introduceSelf() {
//     return `Halo semua, nama saya ${this.nama}`;
//   }

//   //* Encapsulation & Abstraction: Private Method dan menyembunyikan kompleksitas
//   #getTotalNilai() {
//     const totalNilai = this.#nilaiNilai.reduce((acc, nilai) => {
//       return acc + nilai;
//     }, 0);
//     return totalNilai;
//   }

//   #getRataRataNilai() {
//     return this.#getTotalNilai() / this.#nilaiNilai.length;
//   }

//   //* Abstraction
//   getGradeSiswa() {
//     // Mengakses private method dan private property
//     const rataRataNilai = this.#getRataRataNilai();
//     if (rataRataNilai >= 90) {
//       return `${this.nama} dari jurusan ${this.#jurusan} mendapat grade A`;
//     } else if (rataRataNilai >= 75) {
//       return `${this.nama} dari jurusan ${this.#jurusan} mendapat grade B`;
//     } else {
//       return `${this.nama} dari jurusan ${this.#jurusan} mendapat grade C`;
//     }
//   }

//   get getJurusan() {
//     return this.#jurusan;
//   }

//   set setJurusan(value) {
//     this.#jurusan = value;
//   }
// }

// const student1 = new Student('Budi', 'Sistem Komputer', [90, 100, 85, 70]);
// console.log(student1.introduceSelf()); //* Mengakses public method

// //* Mengakses private method dan property melalui getGradeSiswa method
// const rataRataStudent1 = student1.getGradeSiswa();
// console.log(rataRataStudent1);

// //* Mengakses private property
// const jurusanStudent1 = student1.getJurusan;
// console.log(`\n${student1.nama} berkuliah di jurusan ${jurusanStudent1}\n`);

// const linearSearch = (arrayData = [], nilaiTarget) => {
//   for (let i = 0; i < arrayData.length; i++) {
//     // Compare setiap elemen pada arrayData dengan nilaiTarget
//     if (arrayData[i] === nilaiTarget) {
//       return i;
//     }
//   }

//   return -1;
// };

// const arrayData = [90, 22, 17, 10, 23, 2, 11, 9, 7];
// // Case 1
// const nilaiTarget1 = 23;
// const indexNilaiTarget1 = linearSearch(arrayData, nilaiTarget1);
// console.log(
//   `\nIndex dari nilai ${nilaiTarget1} pada array adalah : ${indexNilaiTarget1}\n`
// );
// // Case 2
// const nilaiTarget2 = 93;
// const indexNilaiTarget2 = linearSearch(arrayData, nilaiTarget2);
// console.log(
//   `\nIndex dari nilai ${nilaiTarget2} pada array adalah : ${indexNilaiTarget2}\n`
// );

// const binarySearchAlgorithm = (arrayData, nilaiTarget) => {
//   //* 1. Define startIndex dan endIndex awal
//   let startIndex = 0;
//   let endIndex = arrayData.length - 1;

//   while (startIndex <= endIndex) {
//     //* 2. Tentukan index tengah dari arrayData
//     let middleIndex = Math.floor((startIndex + endIndex) / 2);

//     //* 3. Jika index tengah sama dengan nilaiTarget, maka return true
//     if (arrayData[middleIndex] === nilaiTarget) {
//       return true;
//     }

//     //* 4. Jika nilai middleIndex < nilaiTarget, ubah startIndex dan sebaliknya
//     if (arrayData[middleIndex] < nilaiTarget) {
//       startIndex = middleIndex + 1;
//     } else {
//       endIndex = middleIndex - 1;
//     }
//   }

//   return false;
// };

// const binarySearchAlgorithm = (arrayData, startIndex, endIndex, nilaiTarget) => {
//   //* 1. Set BASE CONDITION untuk mengakhiri recursive function
//   if (startIndex > endIndex) {
//     return false;
//   }

//   //* 2. Set nilai dari middle index
//   let middleIndex = Math.floor((startIndex + endIndex) / 2);

//   //* 3. Check jika nilai element pada middle index sama dengan nilai target
//   if (arrayData[middleIndex] === nilaiTarget) return true;

//   //* 4. Compare nilai middle index dengan nilai target, lalu run recursive func
//   if (arrayData[middleIndex] < nilaiTarget) {
//     const updatedStartIndex = middleIndex + 1;
//     return binarySearchAlgorithm(arrayData, updatedStartIndex, endIndex, nilaiTarget);
//   } else {
//     const updatedEndIndex = middleIndex - 1;
//     return binarySearchAlgorithm(arrayData, startIndex, updatedEndIndex, nilaiTarget);
//   }
// };

// const arrayData = [1, 9, 11, 12, 24, 37, 90];

// //* Case Ditemukan
// const nilaiTarget = 37;
// const isNilaiTargetExist =
//   binarySearchAlgorithm(arrayData, 0, arrayData.length - 1, nilaiTarget);
// console.log(
//   `\nApakah nilai ${nilaiTarget} terdapat pada array : ${isNilaiTargetExist}`
// );

// //* Case Tidak Ditemukan
// const nilaiTarget2 = 8;
// const isNilaiTarget2Exist =
//   binarySearchAlgorithm(arrayData, 0, arrayData.length - 1, nilaiTarget2);
// console.log(
//   `\nApakah nilai ${nilaiTarget2} terdapat pada array : ${isNilaiTarget2Exist}\n`
// );

// const bubbleSortAlgorithm = (arrayData) => {
//   //* Step 1. Inisialisasi variable awal
//   let swapped = false;
//   const n = arrayData.length;

//   //* Step 2. Lakukan looping terluar
//   for (let i = 0; i < n; i++) {
//     //* Step 3. Inisialisasi nilai swapped setiap looping
//     swapped = false;
//     for (let j = 0; j < n - i; j++) {
//       // * Step 4. Lakukan pengecekan antara j dan j+1
//       if (arrayData[j] > arrayData[j + 1]) {
//         let tempData = arrayData[j + 1];
//         arrayData[j + 1] = arrayData[j];
//         arrayData[j] = tempData;
//         swapped = true;
//       }
//     }
//     //* Step 5. Break looping jika tidak ada yang di swap lagi
//     if (swapped === false) break;
//   }

//   return arrayData;
// };

// const arrayData = [9, 17, 1, 8, 4];
// console.log('\nArray1 sebelum sorting: ', arrayData);
// const sortedArrayData = bubbleSortAlgorithm(arrayData);
// console.log('\nArray1 setelah sorting: ', sortedArrayData);

// const arrayData2 = [90, 22, 17, 10, 23, 2, 11, 9, 7];
// console.log('\nArray2 sebelum sorting: ', arrayData2);
// const sortedArrayData2 = bubbleSortAlgorithm(arrayData);
// console.log('\nArray2 setelah sorting: ', sortedArrayData2, '\n');

// const selectionSortAlgorithm = (arrayData) => {
//   const n = arrayData.length;

//   for (let i = 0; i < n - 1; i++) {
//     //* Step 1. Set nilai dari index elemen dengan nilai paling kecil
//     let minIndex = i;
//     //* Step 2. Lakukan inner looping untuk mencari nilai minIndex pada array
//     for (let j = i + 1; j < n; j++) {
//       //* Step 3. Compare nilai minIndex dan j, jika j < minIndex, set j sebagai minIndex
//       if (arrayData[j] < arrayData[minIndex]) {
//         minIndex = j;
//       }
//     }

//     //* Step 4. Swap nilai array ke - i dan minIndex
//     if (minIndex !== i) {
//       let tempData = arrayData[i];
//       arrayData[i] = arrayData[minIndex];
//       arrayData[minIndex] = tempData;
//     }
//   }

//   return arrayData;
// };

// const insertionSortAlgorithm = (arrayData) => {
//   const n = arrayData.length;

//   for (let i = 1; i < n; i++) {
//     //* Step 1. Set nilai dari keyTarget dan j
//     let keyTarget = arrayData[i];
//     let j = i - 1;

//     //* Step 2. Lakukan looping ke belakang untuk compare j dan keyTarget
//     while (j >= 0 && arrayData[j] > keyTarget) {
//       //* Step 3. Jika memenuhi kondisi, swap nilai [j + 1] dengan j
//       arrayData[j + 1] = arrayData[j];
//       j--;
//     }

//     //* Step 4. Ubah nilai j + 1 dengan keyTarget
//     arrayData[j + 1] = keyTarget;
//   }

//   return arrayData;
// };

// const arrayData = [9, 17, 1, 8, 4];
// console.log('\nArray1 sebelum sorting: ', arrayData);
// const sortedArrayData = bubbleSortAlgorithm(arrayData);
// console.log('\nArray1 setelah sorting: ', sortedArrayData);

// const arrayData2 = [90, 22, 17, 10, 23, 2, 11, 9, 7];
// console.log('\nArray2 sebelum sorting: ', arrayData2);
// const sortedArrayData2 = bubbleSortAlgorithm(arrayData2);
// console.log('\nArray2 setelah sorting: ', sortedArrayData2, '\n');

// const menghitungTotalArray = (arrayData) => {
//   let totalArray = 0;

//   for(let i = 0; i < arrayData.length; i++) {
//     totalArray += arrayData[i];
//   }

//   return totalArray;
// }

const bubbleSortAlgorithm = (arrayData) => {
  const arrayLength = arrayData.length;
  let isSwapped = false;

  for (let i = 0; i < arrayLength; i++) {
    isSwapped = false;

    for (let j = 0; j < arrayLength - 1; j++) {
      if (arrayData[j] > arrayData[j + 1]) {
        let tempData = arrayData[j];
        arrayData[j] = arrayData[j + 1];
        arrayData[j + 1] = tempData;
        isSwapped = true;
      }
    }

    if (isSwapped === false) break;
  }
};

const arrayDummy = [19, 2, 7, 1, 6, 5];
console.log(binarySearchAlgorithm(arrayDummy, 19));
