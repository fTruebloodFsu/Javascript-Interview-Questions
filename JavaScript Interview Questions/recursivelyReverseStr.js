const _ = require('lodash');

/*
How can a given string be reversed using recursion?
*/

//1. convert string to array
//2. get last ele of array and shirnk arr by one
//3. use the prev step to do recursion and build new arr

function str2Arr(str){
  return str.split('');
}


console.log(str2Arr("fletcher"));


function popLastChar(arr){
  return arr.pop();
}

let arr = str2Arr("fletcher");

console.log(arr.length);
console.log(popLastChar(arr));
console.log(arr.length);


function reverseStrRec(str){
  
  let arr = str2Arr(str);
  if(arr.length === 1) return arr[0];
  
  let newChar = popLastChar(arr)
  let newStr = arr.join('');
  
  return newChar + reverseStrRec(newStr); 
}

console.log(reverseStrRec("fletcher"));
console.log(reverseStrRec("banana"));