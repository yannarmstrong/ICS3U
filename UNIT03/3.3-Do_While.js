/**
* 3.3 - Do While   
* Author: YANN ARMSTRONG
*
* Lesson link:  https://gist.github.com/mrjamieson29/d709febee74bd9c60da1cca395f1cb80#file-3-3-do-while-md
**/

const prompt = require('prompt-sync')();

// Negative numbers function
function negativeOnly(){
    //Declare variable
    let number = 0;
    // Do until user enters a negative number
    do {
        number = Number(prompt("Enter a negative number: "));
    } while (number >= 0);
    // Make restart do while loop if user enters a bad number
    if (isNaN(number)){
        return negativeOnly();
    }
    //End function
    else{
        return "Thanks for entering a negative number!";
    }
}

// Print odd numbers function
function printOdd(n){
    //Declare variables
    let odd = 1;
    let numberOfOddNumbers = 0;
    let count = 1;
    //Case if user enters 1
    if (n<1 || isNaN(1)){
        return "Complete!"
    }
    else{
        // Math for if user enters an even number
        if (n%2 == 0){
            numberOfOddNumbers = n/2;
            // Loop until all numbers are displayed
            do {
               console.log(2*odd-1);
               odd++;
               count++;
           } while (count <= numberOfOddNumbers);
        }
        // Math for if user enters an odd number
        else{
            numberOfOddNumbers = (n+1)/2;
            // Loop until all numbers are displayed
            do {
                console.log(2*odd-1);
                odd++;
                count++;
            } while (count <= numberOfOddNumbers);
        }
        return "Complete!"
    }
}

// Parrot function
function parrotUntilQuit(){
    // Variable to check what the user enters
    let output = prompt(`Enter some text or the word "quit".`);
    // Check what the user enters and loop until "quit" is typed
    do {
        console.log(output);
        output = prompt(`Enter some text or the word "quit".`);
    } while(output != "quit");
    return "Goodbye! ";
}

// Factorial function
function factorial(n){
    //Declare variables
    let output = 1;
    const input = n;
    //Scenario for if user enters 1
    if (n == 0){
        return `${input}! = ${1}`;
    }
    //Do math until the factorial of the users input is achieved
    else{
        do{
            output = output * n;
            n--
        }while (n >= 1);
        //End function and output total
    return `${input}! = ${output}`;
    }
}
// Testing functions
console.log(negativeOnly());

console.log(printOdd(Number(prompt("Enter a number: "))));

console.log(parrotUntilQuit());

console.log(factorial(parseInt(prompt("Enter a number: "))));