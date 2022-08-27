function add(first , second){
     const total=first + second;
     return total;
}

const result = add(10, 20);
// console.log(result);


// function expression
const add1 = function add1(first, second){
    const total = first + second;
    return total;
    
}
// or
const add2 = function (first, second){
    const total = first + second;
    return total;

}

// or
const add3 = function(first, second){
    return first + second;
}

const add4 = (first, second)=> first+ second;

const final = add4(30, 10);
console.log(final);

const multiplay = (num1, num2, num3=2)=> num1* num2/num3;
const input = multiplay(3, 5);
console.log(input);
function getSum(a, b=9){return a+b;} console.log(getSum(2, 7));
