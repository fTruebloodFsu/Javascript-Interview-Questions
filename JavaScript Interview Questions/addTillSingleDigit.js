const _ = require('lodash');

/*
take a number, 129, sum the individual digits, 12. repeat until there is only 1 didgit left.

129 -> 1+2+9 = 12
12 -> 1+2 = 3
Done!

step 1: turn number into string so it can be split
step 2: split string into individual INTS
step 3: sum the array
step 4: check length
step 5: repeat unitl 1 digit
*/

//step 1
function num2Str(num){
  return ''+num;
}

console.log(typeof(num2Str(129)));

//step 2
function splitString(str){
  let arr = str.split('')
  arr = arr.map(x => parseInt(x));
  
  return arr;
}

console.log(splitString("123"));


//step 3
function sumArr(arr){
  return arr.reduce(function(a,b){return a+b; },0);
}

console.log(sumArr([1,2,3]));
console.log(typeof(sumArr([1,2,3])));

//step 4
function lenOfNum(num){
  return(''+num).length;
}

console.log(lenOfNum(12));


function isNum(num){
  return typeof(num) === 'number';
}

function reduceToSingleDigit(num){
  
  if(!isNum(num)) return undefined;
  
  const str = num2Str(num);
  const arr = splitString(str);
  const sum = sumArr(arr);
  
  if(lenOfNum(sum) > 1) return reduceToSingleDigit(sum);//step 5
  else return sum
}

console.log(reduceToSingleDigit(129));
console.log(reduceToSingleDigit(1299));
console.log(reduceToSingleDigit("123"));
console.log(reduceToSingleDigit(0));


