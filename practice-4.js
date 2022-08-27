/*You have an array [1,9,17,22]. add the all elements of this array and give output. 
Do this using foor loop and array.reduce( method)
*/

const numbers = [1,9,17,22];
let sum = 0;

for (let i =0; i<numbers.length; i++){

    const number = numbers[i];
    sum = sum+ number;

}

console.log(sum);

const total = numbers.reduce((previous, current)=> previous + current, 0);
console.log(total);
