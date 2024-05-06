/**
* 3.2 - Strings
* Author: YANN ARMSTRONG
*
* Lesson link:  https://github.com/ics-ASH/3-2-strings-yannarmstrong/blob/main/3U%203.2%20-%20Strings%20and%20Loops.md
**/

const prompt = require('prompt-sync')();

//Function that reverses an inputed string
function reverse(str){
    //Create output variable to build the reversed string
    let output = "";
    //Get last letter of string and total number of characters in string
    let characterNumber = str.length - 1;
    while (characterNumber >= 0){ // Loop until all characters have been read
        output += str[characterNumber];
        characterNumber--
    }
    return `The reverse of ${str} is ${output}`;
}

// Dragons and Goblis function
function dragons_and_goblins(str){
    let dragons = 0;
    let goblins = 0;
    let n = 0;
    while (n < str.length){
        if (str.charCodeAt(n) == 100 || str.charCodeAt(n) == 103){ // ASCII number for d is 100 and g is 103
            if (str.charCodeAt(n) == 100){
                dragons = dragons + 1;
            }
            else if (str.charCodeAt(n) == 103){
                goblins = goblins + 1;
            }
            n++;
        }
        else{
            n++
        }
    }
    return `Dragons: ${dragons} Goblins: ${goblins}`;
}

// Addition function
function add(str){
    let n = 0;
    let output = 0;
    str = str.toString();
    let length = str.length;
    while (n < length){
        output = output + parseInt(str[n]);
        n++
    }
    return `${str} added up is equal to ${output}.`;
}

// Testing functions
//console.log(reverse(prompt("Type something. ")));

//console.log(`Lets play a game of dragons and goblins. \nYou will enter a string and every "d" in the string will count as 1 dragon and every "g" in the string will count as 1 goblin. \nLets find out how many dragons and goblins are in your string!`);
//console.log(dragons_and_goblins(prompt("Type up a random mix of characters (Ex. agosdickwqpe21' po1fcpo jxgg)")));

console.log("This functino will add a string of numbers together.")
console.log(add(parseInt(prompt("Enter a string of numbers: "))));