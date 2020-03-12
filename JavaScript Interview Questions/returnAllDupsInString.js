const _ = require('lodash');

/*
How do you print duplicate characters from a string?
*/

const testStr1 = 'Cheese';
const testStr2 = 'Robin';
const testStr3 = 'Mississippi';
const testStr4 = 1122335566;


function str2Arr(str){
  return str.split('');
}

console.log(str2Arr(testStr1));

function isDup(arr, val){
  return arr.filter(x => x === val).length >= 2;
}

console.log(isDup(str2Arr(testStr1), 'h'));
console.log(isDup(str2Arr(testStr1), 'e'));

function isStr(str){
  return typeof(str) === 'string';
}

function returnTheDups(str){
  
  if(!isStr(str)) return undefined
  
  let result = []
  
  const myArr = str2Arr(str);
  
  for(let i = 0; i < myArr.length; i++){
    if(isDup(myArr, myArr[i])){
       result.push(myArr[i]);
       }
  }
  
  return result;
}

console.log(returnTheDups(testStr1));
console.log(returnTheDups(testStr2));
console.log(returnTheDups(testStr3));
console.log(returnTheDups(testStr4));

