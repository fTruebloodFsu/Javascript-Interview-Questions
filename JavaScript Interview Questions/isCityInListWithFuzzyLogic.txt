const _ = require('lodash');

const array_of_cities = ["Portland", "Greenville", "Fresno", "Pixly", "Ashland"];

console.log(array_of_cities);

function findCity(str, cities){
  
  if(typeof(str) != "string") return str
  
  const length = cities.length;
  
  let result = [];
  
  for(let i = 0; i < length; i++){
    if(cities[i].includes(str)){
      result.push(cities[i]);
    }
  }
 
  if(result.length === 0){
    return fuzzyReturn(str, cities);
  }
  
  return result;
}


function fuzzyReturn(str, cities){
  
  let result = [];
  let isLetterInCity = true;
  
  const lettersOfStr = str.split('');
  
  for(let i = 0; i < cities.length; i++){
    for(let j = 0; j < lettersOfStr.length; j++){
      
      if(!cities[i].includes(lettersOfStr[j])){
          isLetterInCity = false;
         }
      
    }
    
    if(isLetterInCity){
      result.push(cities[i]);
    }else{
      isLetterInCity = true;
    }
    
  }
  
  return result;
}

console.log(findCity("ville", array_of_cities))
console.log(findCity("land", array_of_cities))
console.log(findCity(123, array_of_cities))
console.log(findCity("Px", array_of_cities))


console.log(fuzzyReturn("zz", array_of_cities));