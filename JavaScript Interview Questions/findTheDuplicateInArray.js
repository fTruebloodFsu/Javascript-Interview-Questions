const _ = require('lodash');

//How do you find the duplicate number in a given integer array of 0 to 99? [1,2,3,4,5,6,4,...199]

function createArrayNoDups(num){
  let result = []
  
  for(let i = 0; i < num; i++){
    result.push(i);
  }
  return result;
}

const arrNoDups = createArrayNoDups(100);
console.log(arrNoDups);

function createAnArrayWithOneDup(num, dup){
  let result = []
  
  for(let i = 0; i < num; i++){
    result.push(i);
  }
  const randomNum1 = Math.floor(Math.random(0,1)*100);
  const randomNum2 = Math.floor(Math.random(0,1)*100);
  
  result[randomNum1] = randomNum2
  
  return result;
}

const arrDups = createAnArrayWithOneDup(100);
console.log(arrDups);

function isDup(arr, num){
 return arr.filter(x => x ===num).length < 1; 
}

function findTheDup(arr){
  
  for(let i = 0; i < arr.length; i++){
    if(isDup(arr,i)) return arr[i]
  }
  
  return "no Duplicates";
}

console.log(findTheDup(arrNoDups));
console.log(findTheDup(arrDups));