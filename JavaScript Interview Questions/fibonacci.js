const _ = require('lodash');

/*
The Fibonacci challenge goes something like this: write a function that returns the nth entry in the Fibonacci sequence, where n is a number you pass in as argument to the function.

Example:

fibonacci(3)  // --> 2
*/
function isNum(num){
  return typeof(num) === 'number'; 
}

function fibonacci(num){
  
  if(!isNum(num)) return undefined
  
  if(num <= 1) return num;
  
  return fibonacci(num-1) + fibonacci(num-2);
}

console.log(fibonacci(-1));
console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(6));
console.log(fibonacci(7));
console.log(fibonacci(8));
console.log(fibonacci(9));
console.log(fibonacci(10));
console.log(fibonacci("hello"));