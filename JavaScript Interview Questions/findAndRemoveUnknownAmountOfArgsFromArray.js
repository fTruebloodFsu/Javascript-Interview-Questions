const _ = require('lodash');

/*
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
*/

const arrayOfNums_1 = [1,2,3,4,5,6,7];
const arrayOfNums_2 = [1,1,2,2,3,4,5,5,6,8,9];

function eleInArr(arr, val){
  
  return arr.includes(val);
}


function removeElements(arr, ...args){
  
  const lengthArgs = args.length;
  const lengthArr = arr.length;
  
  let result = arr;
  
  for(let i = 0; i < lengthArgs; i++){
   if(eleInArr(result, args[i])){
     result = result.filter(val => val != args[i]);
   }
  }
  
  
  return result;
}

console.log(arrayOfNums_1);
console.log(removeElements(arrayOfNums_1, 1, 2, 4));
console.log(arrayOfNums_2);
console.log(removeElements(arrayOfNums_2, 1, 2, 4, 5));
console.log(removeElements(arrayOfNums_2, 1, 2, 4, 'a'));