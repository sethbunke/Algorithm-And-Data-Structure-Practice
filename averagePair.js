
//determine if there is a pair of values in the sorted array that whose average matches the passed in avg
function averagePair(arr, avg){
    let start = 0;
    let end = arr.length - 1;
  
    while(start < end) {
      let value = (arr[start] + arr[end]) / 2;
      if (value === avg) return true;
  
      if (value < avg) {
        start++;
      }
      else {
        end--;
      }
    }
    return false; 
  
  }