let quickSort = (arr) => {

    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];
        let count = 0;
        let j = i + 1;
        let nextPos = j + 1; 
        for (; j < arr.length; j++) {
            let innerVal = arr[j];
            if(innerVal < val) {
                count++;
                let newPos = i + count;
                let temp = arr[newPos];
                arr[newPos] = innerVal;
                arr[j] = temp;
            }
        }
        //then swap
    }
}

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
    swap(arr, star, swapIdx);
    return swapIdx;
}


let data = [3,1,4,8,2,9,6];