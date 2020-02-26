const _ = require('lodash');

/*
Return the lowest index at which a value (second argument) should be inserted 
into an array (first argument) once it has been sorted. The returned value should be a number.

For example, getIndexToIns([1, 2, 3, 4], 1.5) should return 1 because
it is greater than 1 (which has index 0), but less than 2 (which has index 1).

Likewise, getIndexToIns([20, 3, 5], 19) should return 2 because once the array
has been sorted it will look like [3, 5, 20] and 19 is less than 20 (index 2) and greater than 5 (index 1).
*/

const arrayOfInts_1 = [1, 2, 3, 4];
const arrayOfInts_2 = [20, 3, 5]

function sortArr(arr){
  return arr.sort((a,b) => a-b);
}

console.log(sortArr(arrayOfInts_2));

function getIndexToIns(arr, numToInsert){
  
  if(typeof(numToInsert) != 'number') return "not a number";
  
  const arrayOfInts = sortArr(arr);
  let index = 0;
  
  for(let i = 0; i < arrayOfInts.length; i++){
    
    index = i;
    if(numToInsert <= arrayOfInts[i]){
      break;
    }
  }
  
  
  
  return index;
}

console.log(getIndexToIns(arrayOfInts_1, 1.5));
console.log(getIndexToIns(arrayOfInts_2, 19));
console.log(getIndexToIns(arrayOfInts_2, "19"));