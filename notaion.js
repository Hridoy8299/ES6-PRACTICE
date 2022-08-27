const students = {
    name:'ayon',
    class: 10,
    class:'ten',
    marks: {
        math:80,
        physics:86,
        chemistry:56
    }
}

const marks = students.marks.math;

console.log(marks);

const chemistry = students['marks']['chemistry'];
console.log(chemistry);