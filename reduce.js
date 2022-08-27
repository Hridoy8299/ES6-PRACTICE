const numbers =[1,2,3,4,5];


// .reduce (accumulatorFunction, initial Value)
// accumulator function has two parameters

const total = numbers.reduce((previous, current) => previous + current ,0);
console.log(total);