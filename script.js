//1)Takes a number from the input quantity
//let userInput = document.getElementById("quantity").value;
//console.log(userInput);
//SUCCESS!!! tested in console! retrieves inputed number

//2)return a list of values and start from 0 to users input number
//for ( i = 0; i <= userInput; i++) {
//    console.log(i)
//   }
//success!!!! tested: lists out value count from users input.
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//3 create a variable to list out a specific number

//~~~~~KEEP TO BE ABLE TO TEST~~~~~~~
//const prompt = require('prompt-sync')();

// const userInput = prompt('Enter a number: ');
//~~~~~KEEP TO BE ABLE TO TEST~~~~~~~
// userArray = []

// for ( i = 0; i <= userInput; i++){
//     userArray.push(i)
// }

// console.log(userArray);


// write a for loop that compares values in array to another number

// let listNum = [10,20,11,110,69,666,1]

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//Code to save for later

// let targetBeep = 1;
// let beepnumber = [];


// or ( i = 0; i <= userInput; i++){
//     userArray.push(i)
// }

// if(userArray(i) === targetBeep);
// beepNum.push(userArray[i]); 

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//Doesn't work - Errors to undefined value FindNumbers

//variable N with user number
// const n = 69;
//variable D with number to identify
// const d = 9;

// numbers = []

//creat fucntion to find numbers D in user number N
// function findNumbers(n,d) {
    //if a string that starts at O, compare is greater than user
    //input that we increment after the 0
    // for ( i = 0; i <= n; i++){
//need to convert to a string and use either .map() or .includes()?
//check if string includes numberD?
        // if (String(i).includes(String(d))) {
//need to push to variable numbers array?
//             numbers.push(i);
//         } 
//     }
// }
//how to print numbers?show number?

// console.log(findNumbers)
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const prompt = require('prompt-sync')();
const num = prompt('Enter a number: ');
// //console.log(Number(num));
// for(i=0; i <= num; i=i+1){
//      console.log(i)
// }
function isDigitPresent (x, d){
    while (x > 0)
    {
        if (x % 10 == d)
            break;
        
        x = x / 10;
    }
    return (x > 0);
}
listNum = []
function printNumbers(n, d){
    for (let i = 0; i <=n; i++)
        if (i==d || isDigitPresent(i, d))
            listNum.push(i);
            console.log(listNum);
}
let n = num, d = 1;
printNumbers(n, d);
//note: code works  to identify all numbers in list out that have
//number 1 in them. doesn't work with webpage, only able to excute 
//in terminal. does not exlude a 1 with it.