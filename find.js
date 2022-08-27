const numbers = [11,45,23,65,89,75,12];

const fives = numbers.find(num=> num%5==0);
const even = numbers.find(num=> num%2==0);
console.log(fives);
console.log(even);