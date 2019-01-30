
function countUniqueValues(input){
    if (input.length === 0)  {
      return 0;
    }
  
    let i = 0;
    for (let j = 1; j < input.length; j++){
        if (input[i] !== input[j]) {
          i++;
          input[i] = input[j];
        }
    }
  
    return i + 1;
  }
  
  
  
  let r = countUniqueValues([1,1,1,2,2,3,4,5])
  console.log(r);
  