
let maxSubarraySum = (arr, num) => {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length === 0) return null;
  
    for (let val = 0; val < num; val++) {
      maxSum += arr[val];
    }
  
    tempSum = maxSum; 
    for (let i = num; i < arr.length; i++) {
      tempSum = tempSum - arr[i - num] + arr[i];
      maxSum = Math.max(tempSum, maxSum);
    }
    return maxSum;
  
  }
  
  let mss = maxSubarraySum([2,6,9,2,1,8,5,6,3], 3);
  console.log(mss);