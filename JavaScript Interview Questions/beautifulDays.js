const _ = require('lodash');

/*
Lily likes to play games with integers. She has created a new game where she determines the difference between a number and its reverse. For instance, given the number 12, its reverse is 21. Their difference is 9. The number 120 reversed is 21, and their difference is 99.

She decides to apply her game to decision making. She will look at a numbered range of days and will only go to a movie on a beautiful day.

Given a range of numbered days,[i...j] and a number k, determine the number of days in the range that are beautiful. Beautiful numbers are defined as numbers where |i - reverse(i)| is evenly divisible by k. If a day's value is a beautiful number, it is a beautiful day. Print the number of beautiful days in the range.

Create a beautifulDays function. It must return the number of beautiful days in the range.

beautifulDays has the following parameters:

i: the starting day number
j: the ending day number
k: the divisor
*/

function createDayList(numBegin, numEnd){
  let result = []
  
  for(let i = numBegin; i <= numEnd; i++){
    result.push(i) 
  }
  
  return result;
}

console.log(createDayList(3, 7));


function isDivisibleByK(num, k){
  return num%k === 0;
}

console.log(isDivisibleByK(12,3));
console.log(isDivisibleByK(12,5));

function reverseNum(num){
  return parseInt(num.toString().split('').reverse().join(''));
}

console.log(reverseNum(34));
console.log(reverseNum(340));
console.log(typeof(reverseNum(340)));

function findMax(num1, num2){
  return Math.max(num1, num2);
}

console.log(findMax(23,32));

function findMin(num1, num2){
  return Math.min(num1,num2); 
}

console.log(findMin(23,32));

function isNum(num){
  return typeof(num) === 'number'; 
}


function isBeautifulDay(numBegin, numEnd, divisor){
  
  if(!isNum(numBegin) || !isNum(numEnd) || !isNum(divisor)) return undefined;
  
  const listOfDays = createDayList(numBegin, numEnd);
  let beautifulDays = [];
  
  for(let i = 0; i < listOfDays.length; i++){
    
    let num = listOfDays[i];
    let reversedNum = reverseNum(num);
    
    let dif = findMax(num, reversedNum) - findMin(num, reversedNum);
    //let dif = Math.abs(num - reversedNum);
    
    if(isDivisibleByK(dif, divisor)){
      beautifulDays.push(listOfDays[i]);
    }
  }
  
  const testBeautifulDays = listOfDays.filter(e => Math.abs(e -         reverseNum(e))%divisor === 0).length
  
  console.log("testing my filter method", testBeautifulDays);
  return beautifulDays.length;
}

console.log("testing my loop method",isBeautifulDay(10, 34, 9));
console.log("testing my loop method",isBeautifulDay(34,10,9));
console.log(isBeautifulDay("34",10,9));
console.log(isBeautifulDay(34,"10",9));
console.log(isBeautifulDay(34,10,"9"));
console.log(isBeautifulDay("34",10,"9"));