const _ = require('lodash');

//Given a string, reverse each word in the sentence

//step 1 split the string by " "
//step 2 reverse each string in the created array
//step 3 join the array with " "

const testStr = "Welcome to this Javascript Guide!";

//step 1

function splitStr(str){
 return str.split(" ");
}

console.log(splitStr(testStr));

function reverseStr(str){
  return str.split('').reverse().join('');
}

console.log(reverseStr(testStr));

function joinArrOfStr(arr){
  return arr.join(" ");
}

console.log(joinArrOfStr(['Hello','World']));
console.log(typeof(joinArrOfStr(['Hello','World'])));

function reverseEachStr(arr){
  return arr.map(x=>reverseStr(x));
}

console.log(reverseEachStr(['Hello','World']));

function isString(str){
  return typeof(str) === 'string';
}

function reverseEachWordInStr(str){
  
  if(!isString(str)) return undefined;
  
  const splitString = splitStr(str);
  const reverseSplitString = reverseEachStr(splitString);
  const result = joinArrOfStr(reverseSplitString);
  
  return result;
}

console.log(reverseEachWordInStr(testStr));
console.log(reverseEachWordInStr('hello'));
console.log(reverseEachWordInStr(123654));