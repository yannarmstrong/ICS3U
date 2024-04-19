const prompt = require('prompt-sync')();

let answer = prompt("Do you want to play a game? y/n: ");

if (answer == "" || answer == "y" || answer == "Y") {
    let number = parseInt(prompt("Enter a number: "));
    if (number > 10 && number < 50) {
        console.log("Your next number should be greater than 50. ");
    }
    let number_two = parseInt(prompt("Enter a second number: "));
    if (number_two % 2 == 0) {
        console.log("Your next number should be odd. ");
    } else {
        console.log("Your next number should be even. ");
    }
    let number_three = parseInt(prompt("Enter a third number: "));
    if ((number + number_two + number_three + 1) % 10 == 0) {
        console.log("Your numbers are Squirrelly. ");
    } else {
        console.log("Your numbers are not Squirrelly. ");
    }
    if ((number % 3 == 0 && number_two % 3 == 0) || (number % 3 == 0 && number_three % 3 == 0) || (number_two % 3 == 0 && number_three % 3 == 0) || (number % 3 == 0 && number_two % 3 == 0 && number_three % 3 == 0)) {
        console.log("Your numbers are Jazzy. ");
    } else {
        console.log("Your numbers are not Jazzy. ");
    }
} else {
    console.log("Sorry to hear that, have a good day! ");
}