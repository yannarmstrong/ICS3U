const prompt = require('prompt-sync')();

let birthyear = prompt("What year were you born? ");
console.log("You entered " + birthyear);
console.log("You are likely " + (2024-birthyear) + " years old.");

let name = prompt("What is your name? ");
console.log("Hi, " + name + ". You were born in " + birthyear + " and you are likely " + (2024-birthyear) +" years old.");

let x = name.length;
console.log("Your name is " + x + " letters long.");

let fahrenheit = prompt("Enter a temperature in degrees fahrenheit. ");
console.log(fahrenheit + " degrees fahrenheit is " + ((fahrenheit-32)*5/9) + " degrees celcius.");