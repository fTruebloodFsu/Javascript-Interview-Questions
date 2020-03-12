const _ = require('lodash');

/*
return a list of all pairs in an array that sum to a given num
*/

function createRandomArray(num){
  let result = [];
  
  for(let i = 0; i < num; i++){
    result.push(Math.floor(Math.random()*10));
  }
 
  return result;
}

const myArr = createRandomArray(100);
console.log(myArr);

function isGivenNum(num1, num2){
  return num1 === num2;
}

console.log(isGivenNum(7,7));
console.log(isGivenNum(7,6));

function findAllPairsSummedToNum(arr, num){
  let result = []
  
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length; j++){
        let sum = arr[i] + arr[j];
        if(isGivenNum(num, sum)){
          let pair2push = '('+arr[i]+','+arr[j]+')';
          let revPair2push = '('+arr[j]+','+arr[i]+')';
          if(result.filter(x=>x === pair2push).length === 0){
            if(result.filter(x=>x === revPair2push).length === 0){
              result.push(pair2push);
            }
          }
        }
      }
    }
  
  return result;
}
  
console.log(findAllPairsSummedToNum(myArr,11));