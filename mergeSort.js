
let merge = (arr1, arr2) => {
    let result = [];
    let i = 0;
    let j = 0; 

    while (i < arr1.length && j < arr2.length) {
        let iVal = arr1[i];
        let jVal = arr2[j];

        if (jVal > iVal) {
            result.push(iVal);
            i++
        }
        else {
            result.push(jVal);
            j++;
        }
    }

    while(i < arr1.length) {
        result.push(arr1[i]);
        i++;        
    }

    while(j < arr2.length) {
        result.push(arr2[j]);
        j++;        
    }

    return result;
}
//Big O(n log n)
// log n from the number of decompositions (dividing in half until down to array of 1)
// n is from the nubmer of comparisons per recomposition
let mergeSort = (arr) => {
    if (arr.length <= 1) return arr;

    let middle = Math.floor(arr.length / 2);

    let left = arr.slice(0, middle);
    let right = arr.slice(middle); // will go to end , arr.length);

    let ml = mergeSort(left);
    let mr = mergeSort(right);

    let merged = merge(ml, mr);

    return merged; 
}


let data1 = [1,35,72,300];
let data2 = [8,17,23,100,500];

//let output = merge(data1, data2);
//console.log(output);



//let data3 = [10, 24, 76, 73, 72, 1, 9]; //[4, 7, 3, 9, 2, 6, 10, 1, 9];
let data3 = [4, 7, 3, 9, 2, 6, 10, 1, 9];

let output2 = mergeSort(data3)
console.log(output2);
