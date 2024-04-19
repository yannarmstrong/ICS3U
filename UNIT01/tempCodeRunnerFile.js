const prompt = require('prompt-sync')();

let answer = prompt("Do you want to play a game? (y/n): ");

if (answer==$y){
    let number = parseInt(prompt("Enter a number: "));
    if (number>10 && number<50){
        console.log("Your next number should be greater than 50. ");
    }
}