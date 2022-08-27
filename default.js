function add(first, second){
    console.log(first, second);
/*if(second== undefined){
    second=0;
}
*/
// or

// second=second || 0;

    const total = first+ second;
    return total;


}

// const result = add(10);
// console.log(result);

// ES6 ekhane function er parameter value funtion a default a save kore dewa jay

function sum( first,  second=0){
    const total = first + second;
    return total;
}

const output  = sum(10);
console.log(output);