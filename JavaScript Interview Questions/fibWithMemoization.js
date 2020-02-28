const _ = require('lodash');

/*
The Fibonacci challenge goes something like this: write a function that returns the nth entry in the Fibonacci sequence, where n is a number you pass in as argument to the function.

Example:

fibonacci(3)  // --> 2
*/

function isNum(num){
  return typeof(num) === 'number'; 
}

let FibMemo = {};

function memoizedFib(num){
  
  let result = FibMemo[num];
  if(result) return result
  
  result = fibonacci(num);
  FibMemo[num] = result;
  
  return result;
  
}

function fibonacci(num){
  
  if(!isNum(num)) return undefined
  
  if(num <= 1) return num;
  
  return fibonacci(num-1) + fibonacci(num-2);
}


const withTiming = f => {
  return num => {
  
  const start = Date.now();
  const result = f(num);
  const duration = start - Date.now();
    
  console.log("duration was" + duration + "ms");
    
  return result;
  }
}

// console.log(withTiming(fibonacci)(33));
// console.log(withTiming(fibonacci)(34));


// console.log(withTiming(memoizedFib)(33));
// console.log(withTiming(memoizedFib)(33));



























const withTiming_2 = f => {
  return num => {
    
    const begin = Date.now();
    const result = f(num);
    const duration = Date.now() - begin;
    
    console.log("duration: " + duration + "ms");
  
    return result;
  }
}

//const timedFib = withTiming_2(fibonacci);

//onsole.log(timedFib(15));

const genMemoizer = f => {
  let storageObj = {};
  return(...args) => {
    const key = args.join(':');
    
    const possibleResult = storageObj[key];
    
    if(possibleResult) return possibleResult;
    
    const result = f(...args);
    storageObj[key] = result;
    
    return result;
  }
  
}

const timedMemoFib = withTiming_2(genMemoizer(fibonacci));

console.log(timedMemoFib(15));
console.log(timedMemoFib(15));