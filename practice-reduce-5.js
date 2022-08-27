const people = [
    {name: 'meena', age : 20},
    {name: 'rina', age : 15},
    {name: 'Suchorita', age : 22},

];


let sum=0;
for (let i=0; i<people.length; i++){
    const age= people[i].age;
    sum= sum +age;
}

console.log(sum);
// or

const output = people.reduce((previous, current)=>previous + current.age, 0)
console.log(output);