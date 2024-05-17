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
    // End function and display reverse
    return `The reverse of ${str} is ${output}`;
}

// Dragons and Goblis function
function dragons_and_goblins(str){
    // Declare variables
    let dragons = 0;
    let goblins = 0;
    let n = 0;
    //Loop until all characters of the string has been checked
    while (n < str.length){
        if (str.charCodeAt(n) == 100 || str.charCodeAt(n) == 103){ // ASCII number for d is 100 and g is 103
            // Check for dragons
            if (str.charCodeAt(n) == 100){
                dragons = dragons + 1;
            }
            // Check for goblins
            else if (str.charCodeAt(n) == 103){
                goblins = goblins + 1;
            }
            n++;
        }
        else{
            n++
        }
    }
    //Output the final tally of goblins and dragons
    return `Dragons: ${dragons} Goblins: ${goblins}`;
}

// Addition function
function add(str){
    // Declare variables
    let n = 0;
    let output = 0;
    //Turn numbers into a string
    str = str.toString();
    // Find length of string and save
    let length = str.length;
    // Loop until all characters of the string have been read
    while (n < length){
        // Turn string back into number so it can be added to total
        output += parseInt(str[n]);
        n++
    }
    // Return the final sum
    return `${str} added up is equal to ${output}.`;
}

// Addition subtraction function
function add_subract(str){
    //Declare variables
    let n = 0;
    let output = 0;
    //Turn numbers into a string
    str = str.toString();
    let length = str.length;
    //Loop until all characters have been checked
    while (n < length){
        //Check for subtraction sign and subtract if its found
        if (str.charCodeAt(n) == 45){
            output = output - parseInt(str[n+1]);
            n = n + 2
        }
        // Add number to total
        else{
        output = output + parseInt(str[n]);
        n++
        }
    }
    //End function and output total
    return `${str} added up is equal to ${output}.`;
}

// Testing functions
console.log(reverse(prompt("Type something. ")));

console.log(`Lets play a game of dragons and goblins. \nYou will enter a string and every "d" in the string will count as 1 dragon and every "g" in the string will count as 1 goblin. \nLets find out how many dragons and goblins are in your string!`);
console.log(dragons_and_goblins(prompt("Type up a random mix of characters (Ex. agosdickwqpe21' po1fcpo jxgg)")));

console.log("This function will add a string of numbers together.");
console.log(add(parseInt(prompt("Enter a string of numbers: "))));

console.log("This function will add and subtract a string of numbers together.");
console.log(add_subract(prompt("Enter a string of numbers (Ex. 12352-42-532-13-53-1-23-5-1242): ")));