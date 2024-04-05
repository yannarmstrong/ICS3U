
const prompt = require('prompt-sync')();

let age = parseInt(prompt("How old are you? "));
if (age >= 50){
    console.log("You qualify for the senior discount! Nice.");
}
else if (age < 16){
    console.log("You're not old enough to drive yet. Grow up...");
}
else{
    console.log("You are a strange age.");
}

let user_name = prompt("What is your name? ");
let x = user_name.length;

if (user_name == "Mr. J"){
    console.log("🐠");
}
else if (7<x){
    console.log("You have a very long name");
}

let name_length = parseInt(prompt("How many characters are in your name? "));

if (name_length == x){
    console.log("That's correct! ✔️");
}
else if (name_length > x){
    console.log("Too high ✖️");
}
else if (name_length < x){
    console.log("Too low ✖️");
}