const _ = require('lodash');

/*
How do you check if a string contains only digits?
*/

function str2Arr(str){
 return str.split(''); 
}

console.log(str2Arr("1234"));

function isDigit(char){
  return char >= '0' && char <= '9';
}

console.log(isDigit('1'));
console.log(isDigit('a'));


function isAllDigits(str){
  
  const arr = str2Arr(str);
  
  for(let i = 0; i < arr.length; i++){
    if(!isDigit(arr[i])) return false;
  }
  
  return true;
}

console.log(isAllDigits("1234"));
console.log(isAllDigits("1234kl"));