//Big O(n^2)
let selectionSort = arr => {

    for(let i = 0; i < arr.length - 1; i++) {

        let currVal = arr[i];
        let minVal = currVal; 
        let minValIndex = -1;

        for(let j = i + 1; j < arr.length; j++) {
            let val = arr[j];
            if (val < minVal) {
                minValIndex = j;
                minVal = val;
            }

        }

        if (i !== minValIndex) {
            let temp = arr[i]; 
            arr[i]= arr[minValIndex];
            arr[minValIndex] = temp; 
        }
        
    }

    return arr;
}


let data = [5, 4, 7, 3, 2, 1];

let result = selectionSort(data);
console.log(result);