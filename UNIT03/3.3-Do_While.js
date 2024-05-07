/**
* 3.2 - Strings
* Author: YANN ARMSTRONG
*
* Lesson link:  https://gist.github.com/mrjamieson29/d709febee74bd9c60da1cca395f1cb80#file-3-3-do-while-md
**/

const prompt = require('prompt-sync')();

// Negative numbers function
function negativeOnly(){
    let number = 0;
    do {
        number = Number(prompt("Enter a negative number: "));
    } while (number >= 0);
    if (isNaN(number)){
        return negativeOnly();
    }
    else{
        return "Thanks for entering a negative number!";
    }
}

// Print odd numbers function
function printOdd(n){
    let odd = 1;
    let numberOfOddNumbers = 0;
    let count = 1;
    //n = Number(prompt("Enter a number: "))
    if (n<1 || isNaN(1)){
        return "Complete!"
    }
    else{
        if (n%2 == 0){
            numberOfOddNumbers = n/2;
            do {
               console.log(2*odd-1);
               odd++;
               count++;
           } while (count <= numberOfOddNumbers);
        }       
        else{
            numberOfOddNumbers = (n+1)/2;
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
    let output = prompt(`Enter some text or the word "quit".`);
    do {
        console.log(output);
        output = prompt(`Enter some text or the word "quit".`);
    } while(output != "quit");
    return "Goodbye! ";
}

// Testing functions
//console.log(negativeOnly());

//console.log(printOdd(Number(prompt("Enter a number: "))));

//console.log(parrotUntilQuit());

