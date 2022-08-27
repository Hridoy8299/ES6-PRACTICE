/* You are given an array say: [ 33,50,79,78,90,101,30]
now return/get all the elements which are divisilbe by 10 using array.find() Method
*/


const numbers = [ 33,50,79,78,90,101,30];

const output = numbers.find(num => num%10 ==0);
console.log(output);