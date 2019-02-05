// let binarySearch = (arr, value) => {
//     let left = 0;
//     let right = arr.length - 1;

//     while(left <= right) {
//         let middle = Math.floor((left + right)/2);
//         let middleValue = arr[middle];

//         if (value === middleValue) {
//             return middle;
//         }

//         if (value < middleValue) {
//             right = middle - 1;
//         }
//         else {
//             left = middle + 1;
//         }
//     }
    
//     return -1;
// }

// let index = binarySearch([1,2,3,4,5], 2);
// console.log(index);


function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === elem ? middle : -1;
}

binarySearch([2,5,6,9,13,15,28,30], 103)