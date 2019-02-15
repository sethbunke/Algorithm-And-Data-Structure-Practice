const swap = (arr, idx1, idx2) => [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]

let data = [5,3,4,1,2];

//best case O(n) and worst case is O(n^2)
let noSwaps = false; 
for (let i = data.length; i > 0; i--) {
    noSwaps = true; 
    for (let j = 0; j < i - 1;  j++) {
        console.log(arr, arr[j], arr[i]);
        if (arr[j] > arr[j + 1]) {
            swap(arr, j, j + 1);
            noSwaps = false;
        }    
    }
    if (noSwaps) break; 
}