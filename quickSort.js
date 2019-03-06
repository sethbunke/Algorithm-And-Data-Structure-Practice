// let quickSort = (arr) => {

//     for (let i = 0; i < arr.length; i++) {
//         let val = arr[i];
//         let count = 0;
//         let j = i + 1;
//         let nextPos = j + 1; 
//         for (; j < arr.length; j++) {
//             let innerVal = arr[j];
//             if(innerVal < val) {
//                 count++;
//                 let newPos = i + count;
//                 let temp = arr[newPos];
//                 arr[newPos] = innerVal;
//                 arr[j] = temp;
//             }
//         }
//         //then swap
//     }
// }

let swap = (array, i, j) => {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp; 
}



let pivot = (arr, start = 0, end = arr.length+1) => {
    let pivot = arr[start];
    var swapIdx = start;
    for (let i = start + 1; i < arr.length; i++) {
        if(pivot > arr[i]) {
            swapIdx++;
            swap(arr, swapIdx, i);
        }
    }
    swap(arr, start, swapIdx);
    return swapIdx;
}
//O(log n) decompositions (breaking down to smaller arrays); O(n) comparisons per decomposition; O(n) * O(log n)
//Best: O(n log n)
//Average: O(n log n)
//Worst: O(n^2) (if it is already sorted or learly sorted, only correctly placing one item per round through array)
//Space complexity: O(log n)
let quickSort = (arr, left = 0, right = arr.length - 1) => {
    
    if (left < right) {
        let pivotIndx = pivot(arr, left, right);
        //left
        quickSort(arr, left, pivotIndx - 1);
        //right
        quickSort(arr, pivotIndx + 1, right);
    }
    
    return arr;
}


let data = [3,1,-1,4,8,-32,2,9,11,6];

let result = quickSort(data);

console.lot(result);