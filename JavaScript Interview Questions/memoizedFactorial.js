const _ = require('lodash');

/*
create a recursive factorial fucntion using Memoization and test it by by timing it
*/


//step 1 create the factorial function
//step 2 create a higher order function to wrap a timer around the factorial function
//step 3 creat a memoizer function

//step 1

function factorial(num){
  
  if(num <= 1) return 1;
  
  return num * factorial(num - 1);
}

console.log(factorial(5));
console.log(factorial(16));
console.log(factorial(0));
console.log(factorial(1));

//step 2 

const withTime = f => {
  return num => {
    
    const begin = Date.now();
    const result = f(num);
    const duration = Date.now() - begin;
    console.log("Duration of Factorial of", num, ":", duration, "ms");
    
    return result;
  }
}

const FactorialWithTimer = withTime(factorial);

console.log(FactorialWithTimer(5));
console.log(FactorialWithTimer(100));

//step 3

const genMemoizer = f => {
  let storage = {}//storage for memoization
  return(...args) => {
    const key = args.join(':');//create a unique key
    
    const possibleResult = storage[key]; //look up a result by key
    if(possibleResult) return possibleResult; //return if key exists
    
    const result = f(...args); //run the function if key doesn't exist
    storage[key] = result; //store the result
    
    return result;
  }
}

const timedFactMemo = withTime(genMemoizer(factorial));

console.log(timedFactMemo(5000));
console.log(timedFactMemo(5000));