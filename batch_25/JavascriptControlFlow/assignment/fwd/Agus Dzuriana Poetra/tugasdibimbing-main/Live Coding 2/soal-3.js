/**
 * Filter Array
 * 
 * Diberikan data berupa array object, lalu lakukan filter untuk menampilkan data sesuai parameter grade
 * 
 * Hanya boleh menggunakan looping for (tidak boleh menggunakan method filter)
 */

students = [
    {name:"Andi",grade:7.5},
    {name:"Ardi",grade:9},
    {name:"Ahmad",grade:7},
    {name:"Anang",grade:6},
    {name:"Amir",grade:8}
];

const filterGrade = (dataStudent, minimumGrade) => {
    const result = [] 
    for (i=0; i < dataStudent.length; i++) {
        if (dataStudent[i].grade >= minimumGrade) 
            result.push({
                name: dataStudent[i].name,
                grade: dataStudent[i].grade
            })
        }
    return result
};


/*

expected output:

[
    { name: 'Andi', grade: 7.5 },
    { name: 'Ardi', grade: 9 },
    { name: 'Ahmad', grade: 7 },
    { name: 'Amir', grade: 8 }
]

*/

let filteredStudents_7 = filterGrade(students, 7); // >= 7
console.log(filteredStudents_7);

/*

expected output:

[
    { name: 'Ardi', grade: 9 },
    { name: 'Amir', grade: 8 }
]

*/

let filteredStudents_8 = filterGrade(students, 8); // >= 8
console.log(filteredStudents_8);
