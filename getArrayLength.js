let getLength = (arr, counter = 0) => {

    if (arr.values().next().done) return counter; 
  
    arr.pop();
    counter++;
    
    let output = getLength(arr, counter);
    return output;
  
  }
  