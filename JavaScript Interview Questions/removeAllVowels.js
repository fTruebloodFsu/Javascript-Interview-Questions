const _ = require('lodash');

/*
remove all vowels from a string
*/

const vowels = ['a','e','i','o','u'];

function isStr(str){
 return typeof(str) === 'string'; 
}

console.log(isStr("hello"));
console.log(isStr(123));


const test_1 = "Hello World";
const test_2 = " hEllO worlD";
const test_3 = 123;

function prepareStr(str){
  return str.trim().toLowerCase();
}

console.log(prepareStr(test_1));
console.log(prepareStr(test_2));

function str2Arr(str){
  return str.split(''); 
}

console.log(str2Arr(test_1));
console.log(str2Arr(test_2));


function disenvowel(str){
  
  if(!isStr(str)) return undefined;
  
  let result = str2Arr(prepareStr(str));
  
  for(let i = 0; i < vowels.length; i++){
    result = result.filter(e => e != vowels[i]);
  }
  
  result = result.join('');
  return result;
}

console.log(disenvowel(test_1));
console.log(disenvowel(test_2));
console.log(disenvowel(test_3));