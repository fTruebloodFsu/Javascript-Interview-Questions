const _ = require('lodash');

//How do you find the one missing number in a given integer array of 1 to 100? [1,2,3,4,6,...,100] missing 5

function createArraySizeNmissing(num, missingNum){
  
  let result = [];
  
  for(let i = 0; i < num; i++){
    result.push(i)
  }
  result[missingNum]=0;
  return result;
}

function createArraySizeN(num){
  
  let result = [];
  
  for(let i = 0; i < num; i++){
    result.push(i)
  }
  
  return result;
}

console.log(createArraySizeNmissing(100,25));
console.log(createArraySizeN(100));


function isMissing(arr, num){
  return arr.filter( x => x === num).length === 0;
}

function findMissingNum(arr){
  
  for(let i = 0; i < arr.length; i++){
    if(isMissing(arr, i)) return i
  }
  return "Nothing Missing";
}

const theArrayMissing = createArraySizeNmissing(100,35);
const theArray = createArraySizeN(100);


console.log(findMissingNum(theArrayMissing));
console.log(findMissingNum(theArray));