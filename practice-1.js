/* you have an odd array (array with odd numbers) . [1,3,5,7,9]. 
Now convert this array into an even array.[2,4,6,8,10]
use for loop and array.map() */

const odd =[1,3,5,7,9];
const even =[];

for (let i=0; i< odd.length; i++){
    
    const number= odd[i];
    const EvenNumber = number +1;
    even.push(EvenNumber); 
    ;
}

console.log(even);


const EvenOther = odd.map(odd=>odd+1);
console.log(EvenOther);