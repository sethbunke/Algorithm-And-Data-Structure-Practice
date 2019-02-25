
let insertionSort = arr => {
    
    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i];
        for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            //if  arr[j] < val then insert after
            //else if index is 0 then insert at start
            arr[j + 1] = arr[j];            
        }
        arr[j+1] = currentVal;
    }

    return arr; 
}

// let data = [2,1,9,76,4];

// let result = insertionSort(data);

// console.log(result);



// function insertionSort(arr){
// 	var currentVal;
//     for(var i = 1; i < arr.length; i++){
//         currentVal = arr[i];
//         for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
//             arr[j+1] = arr[j]
//         }
//         arr[j+1] = currentVal;
//     }
//     return arr;
// }

// let insertionSort = (arr) => {
// 	//let currentVal;
//     for(let i = 1; i < arr.length; i++){
//         let currentVal = arr[i];
//         for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
//             arr[j+1] = arr[j]
//         }
//         arr[j+1] = currentVal;
//     }
//     return arr;
// }


let result = insertionSort([2,1,9,76,4]);
console.log(result);
