let getLength = (arr, counter = 0) => {

    //or arr[0] === undefined
    if (arr.values().next().done) return counter; 
  
    arr.pop();
    counter++;
    
    let output = getLength(arr, counter);
    return output;
  
  }
  