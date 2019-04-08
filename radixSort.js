
// let getDigit = (num, place) => {
//     let xStr = num.toString().split('').reverse();
//     let result = place > xStr.length ? 0 : xStr[-place];
//     return result; 
// }

let getDigit = (num, i) => {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

let x = getDigit(44, 3);
console.log(x);


// let digitCount = num => {
//     return num.toString.split('').length;
// }

let digitCount = num => {
    return num === 0 ? 1 : Math.floor(Math.log10(Math.abs(num))) + 1; 
}

// let mostDigits = input => {    
//     return input.reduce((max, current) => digitCount(current) > max ? digitCount(current) : max, digitCount(input[0]));
// }

let mostDigits = nums => {    
    let maxDigits = 0; 
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}

let data = [1,23,55555,666666,444];
let md = mostDigits(data);
console.log(md);

//O(nk) for best, average, and worst; space O(n + k)
let radixSort = nums => {
    let maxDigitCount = mostDigits(nums);
    
    for (let k = 0; k < maxDigitCount; k++) {
        let digitBuckets = Array.from({length: 10}, () => []);
        for (let i = 0; i < nums.length; i++) {
            let digit = getDigit(nums[i], k); 
            digitBuckets[digit].push(nums[i]);            
        }
        nums = [].concat(...digitBuckets);
    }
    return nums;
}


// let radixSort = input => {
//     let mostDigits = mostDigits(input);
//     let data = [];
    

//     for (let i = 0; i < mostDigits; i++) {
//         for (let i = 0; i <= 9; i++) {
//             let result = input.fitler(x => getDigit(x. i) === i) //input.filter(x => mostDigits())
//             data[i] = result;
//         }
//         //recrate list by going through buckets

//     }
// }


// use the math to determine the number of 
// let dict = 
// {
//     "3": "hundreds",
//     "4": "thousands"
// }


let rdta = [3,6,1,9,2,7]; //[2, 5, 66, 901929, 400, 920, 5, 4, 890, 8]
let rResult = radixSort(rdta)
console.log(rResult);