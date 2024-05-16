/**
* 3.5 - Nested Loops
* Author: YANN ARMSTRONG
*
* Lesson link:  https://gist.github.com/mrjamieson29/532d390d9ae11dde5f419cf8b661d7c3#file-3-5-nested-loops-md
**/

const prompt = require('prompt-sync')();

// Print line function
function print_line(){
    let output = "";
    let emoji = "";
    let option = parseInt(prompt("Which emoji would you like to print?\n1. 💩\n2. 💥\n3. ⚽\n4. 🐿️\n5. 🐠"));
    if (option == 1){
        emoji = "💩";
    }
    else if (option == 2){
        emoji = "💥";
    }
    else if (option == 3){
        emoji = "⚽";
    }
    else if (option == 4){
        emoji = "🐿️";   
    }
    else{
        emoji = "🐠";
    }
    let length = parseInt(prompt(`How many "${emoji}" should I print? `));
    if (length >= 0){
        for (let line = 1; line <= length; line++){
            output += emoji;
        }
        return output;
    }
    else{
        return "Invalid number. ";
    }
}

// Square of emojis
function print_square(){
    let output = "";
    let length = "";
    let emoji = "";
    let option = parseInt(prompt("Which emoji would you like to print?\n1. 💩 \n2. 💥 \n3. ⚽ \n4. 🐿️ \n5. 🐠 "));
    if (option == 1){
        emoji = "💩";
    }
    else if (option == 2){
        emoji = "💥";
    }
    else if (option == 3){
        emoji = "⚽";
    }
    else if (option == 4){
        emoji = "🐿️";   
    }
    else{
        emoji = "🐠";
    }
    let width = parseInt(prompt(`How wide should the square of "${emoji}" be? `));
    if (width >= 0){
        for (let height = 1; height <= width; height++){
            for (let line = 1; line < width; line++){
                output += emoji;
            }
            output += `${emoji}\n`;
        }
        return output;
    }
    else{
        return "Invalid number. ";
    }
}

// Print outline
function print_outline(){
    let output = "";
    let swap = 1;
    let n = "";
    let width = parseInt(prompt(`How wide should the square be? `));
    if (width >= 0){
        let top_bottom = "";
        for (let edge = 1; edge <= width; edge++){
            top_bottom += "⚽";
        }
        console.log(`${top_bottom}`);
        let middle_chunk = width - 3;
        while (middle_chunk>=n){
            let middle = "⚽";
            for (let x = 0; x <=middle_chunk; x++){
                middle += "🏈";
            }
            middle += "⚽";
            console.log(`${middle}`);
            n++
        }
        return top_bottom;
    }
    else{
        return "Invalid number. ";
    }
}
// Print diamond
function print_diamond(){
    let output = "";
    let space, shape = "";
    let emoji = "";
    let option = parseInt(prompt("Which emoji would you like to print?\n1. 💩 \n2. 💥 \n3. ⚽ \n4. 🐿️ \n5. 🐠 "));
    if (option == 1){
        emoji = "💩";
    }
    else if (option == 2){
        emoji = "💥";
    }
    else if (option == 3){
        emoji = "⚽";
    }
    else if (option == 4){
        emoji = "🐿️";   
    }
    else{
        emoji = "🐠";
    }
    let width = parseInt(prompt("How wide would you like your diamond to be? "));
    let row = (width * 2) - 1;
    let counter = width
    for (let t = 0; t < width; t++){
      space = "";
      shape = "";
      for (let l = 0; l < counter; l++){
        space += " ";
      }
      for (let s = counter; s <= width; s++){
        shape += emoji;
      }
      output += space + shape + "\n";
      counter--
    }
    counter = width-1;
    for (let b = 0; b < (width - 1); b++){
      space = "";
      shape = "";
      for (let x = counter; x <= width; x++){
        space += " ";
      }
      for (let y = 0; y < counter; y++){
        shape += emoji;
    }
    output += space + shape + "\n";
    counter--
    }
    return output;
}

// Test functions
//console.log(print_line());

//console.log(print_square());

//console.log(print_outline());

console.log(print_diamond());