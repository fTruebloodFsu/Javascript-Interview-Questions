const _ = require('lodash');

/*
remove all unique elements from a list

[1,2,3,3,4,5,5,6] -> [3,3,5,5]
*/

function isUnique(arr, num){
  
  return arr.filter(e => e === num).length === 1;
}

console.log(isUnique([1,2,3,3,4,5,5,6], 1));

function isArr(arr){
  return typeof(arr) === 'object';
}

function removeUniques(arr){
  
  if(!isArr(arr)) return undefined;
  
  let result = arr;
  
  for(let i = 0; i < arr.length; i++){
    if(isUnique(arr, arr[i])){
        result = result.filter(e => e != arr[i])
    }
  }
  
  return result;
}

console.log(removeUniques([1,2,3,3,4,5,5,6]));
console.log(removeUniques([1,2,3,4,5,6]));
console.log(removeUniques([1,1,1,2,3,3,4,5,5,6,6]));
console.log(removeUniques(123));



