const _ = require('lodash');

/*
You are in charge of the cake for your niece's birthday and have decided the cake will have one candle for each year of her total age. When she blows out the candles, she’ll only be able to blow out the tallest ones. Your task is to find out how many candles she can successfully blow out.

For example, if your niece is turning 4 years old, and the cake will have 4 candles of height 3, 3, 1, 2, she will be able to blow out 2 candles successfully, since the tallest candles are of height 3 and there are such candles.

Create a function: birthdayCakeCandles. It must return an integer representing the number of candles she can blow out.

birthdayCakeCandles has the following parameter: arr - an array of integers representing candle heights.
*/


const test_1 = [3,3,2,1];
const test_2 = [3,3,2,3,1];
const test_3 = [1,3,7,5];

function sortArr(arr){
  return arr.sort((a,b) => b-a);
}

console.log(sortArr(test_1));

function getMaxInArray(arr){
  return sortArr(arr)[0];
}

console.log(getMaxInArray(test_1));

function birthdayCakeCandles(arr){
  
  const maxHeight = getMaxInArray(arr);
  
  return arr.filter(e => e === maxHeight).length;
  
}

console.log("Candles blown out: ", birthdayCakeCandles(test_1));
console.log("Candles blown out: ", birthdayCakeCandles(test_2));
console.log("Candles blown out: ", birthdayCakeCandles(test_3));
