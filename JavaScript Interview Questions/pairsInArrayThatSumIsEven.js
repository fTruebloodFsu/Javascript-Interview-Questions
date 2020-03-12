const _ = require('lodash');

/*
How do you find all pairs of an integer array whose sum is equal to a given number?
*/

function createRandomArray(num){
  
  let result = [];
  
  for(let i = 0; i < num; i++){
    result.push(Math.floor(Math.random()*100))
  }
  
  return result;
}

console.log(createRandomArray(100));

function isEven(num){
 return num%2 == 0; 
}

console.log(isEven(6));
console.log(isEven(7));

function allEvenSummedPairs(arr){
  
  let result = [];
  
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length; j++){
      
      let sum = arr[i] + arr[j];
      if(isEven(sum)){
        let item2Push = '(' + arr[i] + ',' + arr[j] + ')';
        let secondTest = '(' + arr[j] + ',' + arr[i] + ')';
        
        if(result.filter(x => x === item2Push).length === 0){
          if(result.filter(x => x === secondTest).length === 0){
            result.push(item2Push);
          }
        }
      }
    }
  }
  
  return result;
}

console.log(allEvenSummedPairs(createRandomArray(100)));