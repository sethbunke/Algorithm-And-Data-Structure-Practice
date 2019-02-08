/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/



// function reverseString(text) {
//     // Code goes here
//     let s = text.split('').reverse().join('');
//     return s;
// }   

// let reverseString = text => {
//     let output = [];
//     text.split('').forEach(s => {
//         output.unshift(s);
//     })
//     let x = output.join('');
//     return x; 
// }

// let reverseString = text => {
    
//     let spl = text.split('');
//     if (spl.length === 1) {
//         return text;        
//     }

//     let output = spl[0];
//     let x = spl.splice(1).join('')
//     let result = reverseString(x);
//     let val = result.split('').concat(output).join('');
//     return val; 
// }


// let reverseString = text => {
//     let result = text.split('').reduce((acc, curr) => {
//         //console.log(curr);
//         return curr + acc;
//     })

//     return result; 
// }

// function reverseString(text){
//     let result = "";

//     for(let char of text){
//         result = char + result
//     }

//     return result;
// }


//let reverseString = text => [...text].reduce((acc, curr) => curr + acc);

let reverseString = text => text === "" ? "" : reverseString(text.substr(1)) + text[0];

//reverseString('hello');


// function reverseString(text) {
//     return [...text].reduce((acc, char) => char + acc, '')
// }