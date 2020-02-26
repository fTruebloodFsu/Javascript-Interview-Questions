const _ = require('lodash');

/*
A word is an anagram of another word if both use the same letters in the same quantity, but arranged differently.

isAnagram('finder', 'Friend')  --> true
isAnagram('hello', 'bye') --> false
*/

function prepareStr(str){
  return str.trim().replace(' ', '').toLowerCase();
}

console.log(prepareStr(" Frie nD"));

function lenFinder(arr, character){
  return arr.filter(e => e === character).length
}

function isStr(str){
  return typeof(str) === 'string' 
}

console.log(lenFinder(['h', 'e', 'l', 'l', 'o'], "l"));

function isAnagram(str1, str2){
  
  if(!isStr(str1)) return undefined;
  if(!isStr(str2)) return undefined;
  
  const string1 = prepareStr(str1).split('');
  const string2 = prepareStr(str2).split('');
  
  if(string1.length != string2.length) return false;
  
  for(let i = 0; i < string1.length; i++){
    
    let letter = string1[i];
    let len1 = lenFinder(string1, letter);
    let len2 = lenFinder(string2, letter);
    
    if(len1 != len2) return false;
    
  }
  
  return true;
}

console.log(isAnagram("friend", "finder"));
console.log(isAnagram("stop", "go"));
console.log(isAnagram("here", "near"));
console.log(isAnagram(123, 345));
console.log(isAnagram("friend!", "!finder"));
console.log(isAnagram("dad", "add"));