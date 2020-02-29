const _ = require('lodash');

//How do you find the all the duplicate numbers in a given integer array of 0 to 99?

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
  const randomNum = Math.floor(Math.random(0,1)*10)+1;
  
  for(let j = 0; j <= randomNum; j++){
    let randomNum2 = Math.floor(Math.random(0,1)*100);
    let randomNum3 = Math.floor(Math.random(0,1)*100);
    
    result[randomNum2] = randomNum3;

  }
  return result;
}

const arrDups = createAnArrayWithOneDup(100);
console.log(arrDups);

function alreadyIn(arr, num){
  return arr.filter(x => x === num).length === 1;
}

function isDup(arr, num){
 return arr.filter(x => x === num).length > 1; 
}

function findTheDups(arr){
  
  let result = [];
  
  for(let i = 0; i < arr.length; i++){
    if(isDup(arr,arr[i])){
      if(!alreadyIn(result, arr[i])){
        result.push(arr[i]);
      }
    }
  }
  
  return result;
}

console.log(findTheDups(arrNoDups));
console.log(findTheDups(arrDups));
