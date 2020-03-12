const _ = require('lodash');

/*
write a function that takes a number in string form, "1234", and add one to it.

addOne('1234') -> '1235'
addOne('1239') -> '1240'
addOne('3900234') -> '3900235'
addOne('123467832999') -> '123467833000'
*/

function str2Arr(str){
 return str.split(''); 
}

console.log("Testing str2Arr: ", str2Arr('1234'));

function turnArr2Ints(arr){
  return arr.map(x => parseInt(x));
}

console.log("Testing turnArr2Ints: ", turnArr2Ints([1,2,3,4]));

function incLastEleByOne(arr){
  
  let lastEle = arr[arr.length-1];
  
  if(lastEle < 9){
    arr[arr.length-1] += 1
    return arr;
  }
  
  for(let i = arr.length-1; i >= 0; i--){
    if(arr[i] === 9){
      arr[i] = 0;
    }else{
     arr[i] += 1; 
     break; 
    }
  }
  
  if(testAllZero(arr)){
    const fixedArr = fixAllZero(arr)
    return fixedArr;
  }
  
  return arr;
}

console.log("Testing incLastEleByOne: ", incLastEleByOne([1,2,9,9]));

function arr2Str(arr){
  return arr.join('');
}

console.log("Testing arr2Str: ", arr2Str([1,2,3,4]));

function testAllZero(arr){
  return arr.filter(e => e === 0).length === arr.length;
}

console.log("Testing testAllZero:", testAllZero([0,0,0,0]));
console.log("Testing testAllZero:", testAllZero([1,0,0,0]));

function fixAllZero(arr){
  let str = arr.join('');
  str = '1' + str;
  const strToArr = str.split('');
  const arrOfInts = turnArr2Ints(strToArr);
  return arrOfInts;
}


function isString(str){
  return typeof(str) === 'string';
}

function addOne(str){
  
  if(!isString(str)) return undefined;
  
  const arr = str2Arr(str);
  const arrInts = turnArr2Ints(arr);
  const incArrInts = incLastEleByOne(arrInts);
  const result = arr2Str(incArrInts);
  
  return result;
}

console.log("Testing addOne: ", addOne('1234'));
console.log("Testing addOne: ", addOne('4567'));
console.log("Testing addOne: ", addOne('4099'));
console.log("Testing addOne: ", addOne('3222444555'));
console.log("Testing addOne: ", addOne('10456789123999'));
console.log("Testing addOne: ", addOne('999999'));
console.log("Testing addOne: ", addOne('9'));
console.log("Testing addOne: ", addOne(456));