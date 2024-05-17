/**
* 3.4 - For Loops
* Author: YANN ARMSTRONG
*
* Lesson link:  https://gist.github.com/mrjamieson29/5c138c9e1de62b234899a28542ba00fd#file-3-4-for-loops-md
**/

const prompt = require('prompt-sync')();
// Global variables
let start, stop, begin, end, n, x= "";

// Counting up function
function countUp(start, stop){
    // Ask user for inputs
    console.log("Lets count up from your start value to the stop value! ");
    start = parseInt(prompt("Enter the start value: "));
    stop = parseInt(prompt("Enter the stop value: "));
    // Check to make sure start is less than stop
    if (start>stop){
        console.log("Error. Start is greater than stop.");
        return countUp(start, stop);
    }
    // Loop until countdown is complete
    else{
        for (let i = start; stop>=i; i++){
            console.log(i);
        }
    }
    return "Done";
}

// Counting down
function countDown(start, stop){
    //Ask user for inputs
    console.log("Lets count down from your start value to the stop value! ");
    start = parseInt(prompt("Enter the start value: "));
    stop = parseInt(prompt("Enter the stop value: "));
    //Check to make sure start is greater than stop
    if (start<stop){
        console.log("Error. Start is less than stop.");
        return countDown(start, stop);
    }
    //Loop until countdown is done
    for (let i = start; stop<=i; i--){
        console.log(i);
    }
    //End function
    return "Done";
}

// Sum function
function sum(n){
    //Declare variable
    let sum = 0;
    //Loop untli sum is added
    for (let i = 1; i<=n; i++){
        sum += i;
    }
    return `The sum of numbers between 1 and ${n} is ${sum}`;
}

// How many numbers are divisible by 4
function count4(begin, end){
    //Declare variable for loop
    let count = 0;
    //Ask for inputs
    begin = parseInt(prompt("What value would you like to begin at?\n"));
    end = parseInt(prompt("What value would you like to end at?\n"));
    //Loop until complete
    for (let i = begin; i<=end; i++){
        if (i%4==0){
            count ++;
        }
    }
    return count;
}

// Return the sum of the amount of numbers divisible by x between a start and stop value
function sum_divisible(n, x){
    //Declare variable
    let sum = 0;
    //Ask for input
    n = parseInt(prompt("What value would you like to check up to.\n"));
    x = parseInt(prompt("How would you like to divide the numbers.\n"));
    //Loop until done
    for (let i = 0; i<=n; i++){
        //Check to see if number is divisble by x
        if (i%x==0){
            sum +=i;
        }
    }
    //End function
    return `The sum of numbers divisible by ${x} between 0 and ${n} is ${sum}.`
}

// Test functions
console.log(countUp(start, stop));

console.log(countDown(start, stop));

console.log(sum(parseInt(prompt("Enter a number: "))));

console.log(count4(begin, end));

console.log(sum_divisible(n, x));