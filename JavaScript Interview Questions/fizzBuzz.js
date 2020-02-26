const _ = require('lodash');

/*
The FizzBuzz challenge goes something like this. Write a function that does the following:

console logs the numbers from 1 to n, where n is the integer the function takes as its parameter
logs fizz instead of the number for multiples of 3
logs buzz instead of the number for multiples of 5
logs fizzbuzz for numbers that are multiples of both 3 and 5
*/


function fizzBuzz(num){
  
  if(typeof(num) != 'number') return undefined
  
  let result = '';
  
  if(num%3 === 0 && num%5 === 0){
    result = result + "fizzbuzz";
  }else if(num%3 === 0){
    result = result + "fizz";
  }else if(num%5 === 0){
    result = result + "buzz";
  }
  
  return result;
}

console.log(fizzBuzz(1));
console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(15));

console.log(fizzBuzz("hello world"));

/*
how can I make it better?
*/

function isNum(num){
 return typeof(num) === 'number'; 
}

function div3(num){
  return num%3 === 0; 
}

function div5(num){
  return num%5 === 0; 
}

function div3and5(num){
  return num%3 === 0 && num%5 === 0; 
}

console.log(div3(1));
console.log(div3(3));
console.log(div3(6));

console.log(div5(1));
console.log(div5(5));
console.log(div5(10));

console.log(div3and5(1));
console.log(div3and5(15));

function newFizzBuzz(num){
  
  if(!isNum(num)) return undefined;
  if(div3(num)) return "Fizz";
  if(div5(num)) return "Buzz";
  if(div3and5(num)) return "FizzBuzz";
  
  return "no fizz or buzz here";
}

console.log(newFizzBuzz(1));
console.log(newFizzBuzz(3));
console.log(newFizzBuzz(5));
console.log(newFizzBuzz(15));
console.log(newFizzBuzz("hello"));