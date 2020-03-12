function str2Arr(str){
  return str.split('');
}

console.log("fletcher");
console.log(typeof("fletcher"));

console.log(str2Arr("fletcher"));
console.log(typeof(str2Arr("fletcher")));

function isDup(arr, char){
  return arr.filter(x => x === char).length >= 2;
}

console.log(isDup(str2Arr("fletcher"), 'e'));
console.log(isDup(str2Arr("fletcher"), 'f'));

function printDups(str){
  const arr = str2Arr(str);
  let result = "";
  
  for(let i = 0; i < arr.length; i++){
    if(isDup(arr, arr[i])){
      result = result + arr[i];
    }
  }
  
  return result;
}

console.log(printDups("fletcher"));
console.log(printDups("star"));