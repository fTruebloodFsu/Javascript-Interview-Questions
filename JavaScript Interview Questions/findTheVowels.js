const _ = require('lodash');

/*
You can state the vowels challenge as follows: write a function that takes a string as argument and returns the number of vowels contained in that string.

The vowels are “a”, “e”, “i”, “o”, “u”.

findVowels('hello') // --> 2
findVowels('why') // --> 0
*/

const vowels = ['a', 'e', 'i', 'o', 'u'];

function prepareStr(str){
  return str.toLowerCase().replace(' ','').trim(); 
}

console.log(prepareStr(" Hello world"));

function numOf1Vowel(str, letter){
  const arr = str.split('');
  return arr.filter(e => e === letter).length;
}

console.log(numOf1Vowel("hello", 'e'));

function isStr(str){
  return typeof(str) === 'string';
}

function findVowels(str){
  
  if(!isStr(str)) return undefined
  
  const str1 = prepareStr(str);
  let result = 0;
  
  for(let i = 0; i < vowels.length; i++){
    let num = numOf1Vowel(str1, vowels[i]);
    result += num;
  }
  
  return result;
}

console.log(findVowels("hello"));
console.log(findVowels("why"));
console.log(findVowels("aeiou"));
console.log(findVowels("hello Aeiou"));
console.log(findVowels(123));
console.log(findVowels("hello123"));