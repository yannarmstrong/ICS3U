const prompt = require('prompt-sync')();

let user_name = prompt("Welcome, what is your name? ");
let age = parseInt(prompt("Hello " + user_name + " how old are you? "));

if (age>=16){
    console.log("You are old enough to drive!");
}
else if (age<16){
    console.log("You are not old enough to drive yet.");
}

// Show menu
console.log("Pick an option:\n1 - Play\n2 - Options\n3 - DLC\n4 - Check for Updates\n5 - Exit");

// Ask for selection
let selection = parseInt(prompt("Hi " + user_name + ". Please make a selection "));

if (selection==1){
    console.log("Let's play!");
} 
else if (selection==2){
    console.log("You selected Options.");
}
else if (selection==3){
    console.log("No new DLC at this time.");
}
else if (selection==4){
    console.log("Everything is up to date.");
}
else if (selection==5){
    console.log("Bye!");
}
else{
    console.log("Invalid selection.");
}

let time = parseInt(prompt("Enter an hour between 0-23. No minutes just the hour. "));
if (time>=0 && time<=11){
    console.log("Good morning!");
}
else if (time>=12 && time<=17){
    console.log("Good afternoon!");
}
else if (time>=18 && time<=23){
    console.log("Good evening!");
}
else {
    console.log("Invalid hour.");
}

let random_number = Math.random() * 10;     // Get a single-digit value (with decimals)
random_number = Math.floor(random_number);  // Chop off the decimals
if (random_number==0 || random_number%2 == 0 || (random_number%2 == 0 && random_number%3 == 0) || (random_number==1 || random_number==2 || random_number==3 || random_number==5 || random_number==7)){
    console.log("So.");
}
else {
    console.log("Notso.");
}
console.log(random_number);