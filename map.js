const numbers= [2,4,8,9,12,6];
const output = [ ];
for( const number of numbers){
    const double= number *2;
    output.push(double);
}
console.log(output);

// or

const doubleIt = num => num*2;
const MakeDouble = numbers.map(doubleIt);
// or

const MakeDoubleUpdate = numbers.map(num=>num*2);
console.log(MakeDouble);
console.log(MakeDoubleUpdate);

const frineds = ['tom cruise', 'tom hanks', 'tom bready', 'prince'];
const firstLetter = frineds.map(fist => fist[0]);
console.log(firstLetter);

const nameLengt = frineds.map(frined=> frined.length);
console.log(nameLengt);

// prottek ta kaj er result array te pawa jay ei map use kore

const product = [
    {id:1 , name:'laptop', price:2000},
    {id:1 , name:'mobile', price:2000},
    {id:1 , name:'watch', price:2000},
    {id:1 , name:'tablet', price:2000},
];

const items = product.map(product =>product.name);
console.log(items);