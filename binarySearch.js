//execution time is log(N) - binary search
let search = (arr, value) => {
    let min = 0;
    let max = arr.length - 1;
    
    while(min <= max) {
      let middle = Math.floor((max + min)/2);
      let currentElement = arr[middle];
  
      if (currentElement < value) {
        min = middle + 1;
      }
      else if (currentElement > value) {
        max = middle - 1;
      }
      else {
        return middle;
      }
    }
  
    return -1;
  }
  
  let searchData = [1,3,5,7,9,11];
  let sr = search(searchData, 7);
  