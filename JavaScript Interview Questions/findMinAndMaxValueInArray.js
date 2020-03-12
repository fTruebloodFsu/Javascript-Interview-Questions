const _ = require('lodash');

/*
How do you find the largest and smallest number in an unsorted integer array?
*/


function createRandomArr(num){
 
  let result = []
  
  for(let i = 0; i < num; i++){
    let randNum = Math.floor(Math.random()*100)
    result.push(randNum);
  }
  
  return result;
}

console.log(createRandomArr(100))
console.log(Number.MIN_SAFE_INTEGER)
console.log(Number.MAX_SAFE_INTEGER)

function MinMaxArr(arr){
  
  let min = Number.MAX_SAFE_INTEGER
  let max = Number.MIN_SAFE_INTEGER
  
  for(let i = 0; i < arr.length; i++){
    if(arr[i] <= min) min = arr[i]
    if(arr[i] >= max) max = arr[i]
  }
  
  const result = "Max: " + max + " Min: " + min;
  return result
}

console.log(MinMaxArr(createRandomArr(100)))