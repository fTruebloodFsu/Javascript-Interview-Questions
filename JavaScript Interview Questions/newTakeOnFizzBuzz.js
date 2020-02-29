const _ = require('lodash');

function MdivN(n){
 return m => m%n === 0; 
}

const Mdiv3 = MdivN(3);
const Mdiv5 = MdivN(5);

console.log(Mdiv3(9));
console.log(Mdiv3(10));

console.log(Mdiv5(10));
console.log(Mdiv5(11));

function fizzBuzz(num){
  
  for(let i = 0; i < num; i++){
    if(Mdiv3(i) && Mdiv5(i)) console.log(i,"Fizz Buzz");
    else if(Mdiv3(i)) console.log(i,"Fizz");
    else if(Mdiv5(i)) console.log(i,"Buzz");
    else console.log(i,"No fizz of buzz here");
  }
  
  
  return "Fizz Buzz Done";
}

fizzBuzz(100);