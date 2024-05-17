/**
* 3.1 - While Loops
* Author: YANN ARMSTRONG
*
* Lesson link:  https://github.com/ics-ASH/3-1-while-loops-yannarmstrong/blob/main/3U%203.1%20-%20While%20Loops.md
**/


const prompt = require('prompt-sync')();


 // Task 1 - Countdown function
// declare global variable that the function will use
let count = 0;
// Countdown functino that counts down from the start to the stop value by 1
function countdown(start, stop){
    // Check to ensure start is greater than stop so the math will work
    if (start>stop){
        count = start-stop+1;
        console.log("Counting down: ");
        console.log(start);
        //While the start value is not equal to (more than the stop value) keep looping
        while (start != stop){
            start--
            console.log(start);
        }
        // End functino
        return `Countdown complete! This function looped ${count} times.`;
    }
    // Scenario for if start is less than stop
    else if (start<stop){
        // Giver user a second chance
        console.log("Error, start less than stop" );
        start = parseInt(prompt("Enter a new start value: "));
        stop = parseInt(prompt("Enter a new stop value that is less than " + start + ": "));
        return countdown(start, stop);
    }
    // Final scenario for if use enters non numbers as input
    else{
        // Give second chance
        console.log("Please enter valid whole numbers. (No letters, special characters)");
        start = parseInt(prompt("Enter a new valid start value: "));
        stop = parseInt(prompt("Enter a new valid stop value: "));
        return countdown(start, stop);
    }
}


// Task 2 - Random number function
// Funcition that generates a random integer between a min and a max
function randInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
 
 
function random_until(min, max, stop2){
    //Set the value of the random number
    let randomNumber ="";
    if (min<max && stop2>=min && stop2<=max){
        // While true
        while (randomNumber != stop2){
            randomNumber = randInt(min, max);
            console.log(randomNumber);
        }
        //End function
    return `The computer guessed your number (${stop2})!`;
    }
    //scenario where min is greater than max
    else if (min>max){
        console.log("Error. Min is greater than Max")
        min = parseInt(prompt("Enter a new minimum value: "));
        max = parseInt(prompt("Enter a new max number (make sure you max is greater than " + min + "): "));
        stop2 = parseInt(prompt("Enter a new number in between your new min and max number: "));
        return random_until(min, max, stop2);
    }
    //Scenario if stop is out side of the boundaries
    else if (stop>max || stop<min){
        console.log("Error. Chosen is outside of min and max parameters")
        stop2 = parseInt(prompt("Enter a new number in between " + min + " and " + max + ": "));
        return random_until(min, max, stop2);
    }
    //Scenario if min = max
    else if (min == max){
        console.log("Error. Min cannot equal max. ");
        min = parseInt(prompt("Enter a new minimum value: "));
        max = parseInt(prompt("Enter a new max number (make sure you max is greater than " + min + "): "));
        stop2 = parseInt(prompt("Enter a new number in between your new min and max number: "));
        return random_until(min, max, stop2);
    }
    //Scenario if user inputs non numbers
    else{
        console.log("Error. Please enter valid numbers as inputs. ");
        min = parseInt(prompt("Enter a minimum value: "));
        max = parseInt(prompt("Enter a max number (make sure that this number is greater than you min number): "));
        stop2 = parseInt(prompt("Now enter a number in between that min and max number: "));
        return random_until(min, max, stop2);
    }

}

function average(n){
    //Declare variables
    let total = 0;
    const outOf = n;
    let valueNumber = 1;
    //While true loop
    while (n != 0){
        // Add up the sum of all inputs
        total = total + parseInt(prompt(`Please enter value ${valueNumber}/${outOf} --> `));
        n--
        valueNumber++
    }
    // End functino and average out the sum
    return `The average of these ${outOf} values is ${total/outOf}`;
}
 
 
// Testing countdown function
console.log("Lets start a countdown! ");
let start = parseInt(prompt("Enter the start value: "));
let stop = parseInt(prompt("Enter the stop value: "));
console.log(countdown(start, stop));

// Testing random number function
console.log("Lets play a guessing game! ");
let min = parseInt(prompt("Enter a minimum value: "));
let max = parseInt(prompt("Enter a max number (make sure that this number is greater than you min number): "));
let stop2 = parseInt(prompt("Now enter a number in between that min and max number: "));
console.log(random_until(min, max, stop2));

// Testing average function
console.log("Lets find the average of some numbers. ");
console.log(average(parseInt(prompt("How many values do you want to average out? \n"))));