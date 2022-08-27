const numbers = [11,45,23,65,89,75,12];
const bigNmaes= numbers.filter(number => number > 20);
console.log(bigNmaes);

const smallNumber = numbers.filter(n => n<15);
const even = numbers.filter(num => num % 2 ===0);

console.log(even);

const product = [
    {id:1 , name:'laptop', price:45000},
    {id:1 , name:'mobile', price:20000},
    {id:1 , name:'watch', price:60000},
    {id:1 , name:'tablet', price:46000},
];

const amount = product.filter(product => product.price>30000);
console.log(amount);
