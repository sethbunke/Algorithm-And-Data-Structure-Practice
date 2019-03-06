
// let getDigit = (num, place) => {
//     let xStr = num.toString().split('').reverse();
//     let result = place > xStr.length ? 0 : xStr[-place];
//     return result; 
// }

let getDigit = (num, i) => {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

let x = getDigit(12345, 0);
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