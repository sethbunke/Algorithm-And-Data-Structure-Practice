var flatten = arr => {
    var output = []
   
    if (Array.isArray(arr)) {
      arr.forEach(element => {
        if (Array.isArray(element)) {
          var result = flatten(element);
          output = output.concat(result);
        }
        else {
            output.push(element);
        }
      })
    }
    else {
      output.push(arr);
    }
   
    return output;
  }

  var data = [1,2,[3,4],[5,[6,7]]];
 
  console.log(flatten(data));