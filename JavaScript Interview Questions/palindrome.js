const _ = require('lodash');

/*
A palindrome is a word, sentence or other type of character sequence which reads the same backward as forward. For example, “racecar” and “Anna” are palindromes. “Table” and “John” aren’t palindromes, because they don’t read the same from left to right and from right to left.
*/

const Pal_1 = "Anna";
const Pal_2 = "racecar";

const notPal_1 = "hello";
const notPal_2 = "world";

function revereseStr(str){
  return str.toLowerCase().split('').reverse().join(''); 
}

//console.log(revereseStr(notPal_1));

function palindrome(str){
  
  if(typeof(str) != 'string') return undefined;
  
  let strToTest = revereseStr(str)
  
 return str === strToTest;  
}


console.log(palindrome(Pal_1));
console.log(palindrome(Pal_2));

console.log(palindrome(notPal_1));
console.log(palindrome(notPal_2));

console.log(palindrome("123jk%"));
console.log(palindrome(undefined));


